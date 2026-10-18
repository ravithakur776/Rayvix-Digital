import { Playfair_Display, Inter } from "next/font/google";

/**
 * Playfair Display — Editorial serif for headings.
 * Loaded with display: swap for performance.
 */
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
});

/**
 * Inter — Modern sans-serif for body text.
 * Loaded with display: swap for performance.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});
