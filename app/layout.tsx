import type { Metadata, Viewport } from "next";
import { playfairDisplay, inter } from "@/lib/fonts";
import { SITE_CONFIG } from "@/lib/constants";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4A0E17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="visually-hidden">
          Skip to main content
        </a>

        {/* Header will be added in Step 3 */}

        <main id="main-content">{children}</main>

        {/* Footer will be added in Step 3 */}
      </body>
    </html>
  );
}
