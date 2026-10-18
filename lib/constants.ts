/* ============================================================
   RAYVIX DIGITAL — Site Constants & Configuration
   Single source of truth for brand copy, navigation, metadata.
   ============================================================ */

export const SITE_CONFIG = {
  name: "Rayvix Digital",
  tagline: "Elevated Growth Experiences",
  description:
    "Rayvix Digital is a premium creative, web development, marketing and digital systems studio. We craft elevated digital experiences that drive growth.",
  url: "https://rayvixdigital.com",
  locale: "en-US",
  creator: "Rayvix Digital",
} as const;

export const BRAND_COLORS = {
  burgundy: "#4A0E17",
  champagne: "#C8AD8D",
  ivory: "#FAF7F2",
  charcoal: "#1A1A1A",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_CATEGORIES = [
  { slug: "web-development", label: "Web Development" },
  { slug: "creative-direction", label: "Creative Direction" },
  { slug: "brand-identity", label: "Brand Identity" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "social-media", label: "Social Media" },
  { slug: "seo", label: "SEO & Search" },
  { slug: "content-strategy", label: "Content Strategy" },
  { slug: "ai-automation", label: "AI Automation" },
  { slug: "digital-systems", label: "Digital Systems" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "#",
  linkedin: "#",
  twitter: "#",
} as const;
