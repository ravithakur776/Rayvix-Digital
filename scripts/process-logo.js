const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const inputPath = path.join(__dirname, '../public/images/rayvix-logo.png');
  const img = sharp(inputPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  const width = info.width;
  const height = info.height;
  const channels = info.channels;
  
  // Background ivory color
  const bgR = 250, bgG = 247, bgB = 242;
  
  // Create RGBA buffers
  // 1. Full transparent
  const fullRgba = Buffer.alloc(width * height * 4);
  // 2. Dark mode (burgundy becomes ivory/champagne-light)
  const darkRgba = Buffer.alloc(width * height * 4);
  
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;
    
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    
    // Distance from ivory background
    // Calculate difference using Euclidean or max component diff
    const dr = r - bgR;
    const dg = g - bgG;
    const db = b - bgB;
    const dist = Math.sqrt(dr * dr + dg * dg + db * db);
    
    // Smooth alpha threshold
    let alpha = 0;
    if (dist < 12) {
      alpha = 0;
    } else if (dist < 32) {
      alpha = Math.round(((dist - 12) / 20) * 255);
    } else {
      alpha = 255;
    }
    
    fullRgba[dstIdx] = r;
    fullRgba[dstIdx + 1] = g;
    fullRgba[dstIdx + 2] = b;
    fullRgba[dstIdx + 3] = alpha;
    
    // For dark mode:
    // If it's burgundy (r: ~74, g: ~14, b: ~23), transform to ivory (#FAF7F2) or warm white
    // If it's champagne (r: ~200, g: ~173, b: ~141), keep champagne
    // Detect hue / lightness
    if (alpha > 0) {
      const isBurgundy = (r < 110 && g < 40 && b < 50);
      if (isBurgundy) {
        darkRgba[dstIdx] = 250;     // Ivory R
        darkRgba[dstIdx + 1] = 247; // Ivory G
        darkRgba[dstIdx + 2] = 242; // Ivory B
      } else {
        // Champagne or accent - keep bright
        darkRgba[dstIdx] = Math.min(255, Math.round(r * 1.1));
        darkRgba[dstIdx + 1] = Math.min(255, Math.round(g * 1.1));
        darkRgba[dstIdx + 2] = Math.min(255, Math.round(b * 1.1));
      }
      darkRgba[dstIdx + 3] = alpha;
    } else {
      darkRgba[dstIdx + 3] = 0;
    }
  }
  
  console.log('Converted pixels to RGBA.');
  
  // Crop areas:
  // Full logo bbox: minX: 689, minY: 571, maxX: 3185, maxY: 3263 (padding 40px)
  const fullCrop = {
    left: Math.max(0, 689 - 40),
    top: Math.max(0, 571 - 40),
    width: Math.min(width, 3185 - 689 + 80),
    height: Math.min(height, 3263 - 571 + 80)
  };
  
  // Monogram bbox: top to 2160 (gap is at 2180-2380)
  // Let's find monogram width:
  const monoCrop = {
    left: Math.max(0, 1000),
    top: Math.max(0, 571 - 30),
    width: 1950,
    height: 2170 - 571 + 60
  };
  
  // Wordmark bbox: 2380 to 3263
  const wordmarkCrop = {
    left: Math.max(0, 689 - 40),
    top: 2350,
    width: Math.min(width, 3185 - 689 + 80),
    height: 3263 - 2350 + 40
  };
  
  // Save full transparent logo (light background)
  await sharp(fullRgba, { raw: { width, height, channels: 4 } })
    .extract(fullCrop)
    .resize(800) // high-res crisp web display
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/logo-light.png'));
  console.log('Created logo-light.png');
  
  // Save full transparent logo (dark background)
  await sharp(darkRgba, { raw: { width, height, channels: 4 } })
    .extract(fullCrop)
    .resize(800)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/logo-dark.png'));
  console.log('Created logo-dark.png');
  
  // Save monogram (light background)
  await sharp(fullRgba, { raw: { width, height, channels: 4 } })
    .extract(monoCrop)
    .resize(400)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/monogram-light.png'));
  console.log('Created monogram-light.png');
  
  // Save monogram (dark background)
  await sharp(darkRgba, { raw: { width, height, channels: 4 } })
    .extract(monoCrop)
    .resize(400)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/monogram-dark.png'));
  console.log('Created monogram-dark.png');

  // Save wordmark (light background)
  await sharp(fullRgba, { raw: { width, height, channels: 4 } })
    .extract(wordmarkCrop)
    .resize(600)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/wordmark-light.png'));
  console.log('Created wordmark-light.png');

  // Save wordmark (dark background)
  await sharp(darkRgba, { raw: { width, height, channels: 4 } })
    .extract(wordmarkCrop)
    .resize(600)
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(path.join(__dirname, '../public/images/wordmark-dark.png'));
  console.log('Created wordmark-dark.png');
  
  console.log('All brand logo assets successfully processed!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
