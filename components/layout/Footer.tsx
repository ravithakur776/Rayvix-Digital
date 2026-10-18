"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, SERVICE_CATEGORIES, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      {/* ──────────────────────────────────────────────────
          TOP CTA SECTION
          ────────────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Studio Call to Action">
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaLabel}>Next-Level Partnership</span>
            <h2 className={styles.ctaHeading}>
              Ready to elevate your digital presence?
            </h2>
            <p className={styles.ctaText}>
              We partner with ambitious founders, established brands, and innovators
              to architect web platforms, brand identities, and automated systems
              that outperform the market.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="secondary" size="lg">
                Book a Strategy Call
              </Button>
              <Button href="/services" variant="outlineLight" size="lg">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          MAIN FOOTER COLUMNS
          ────────────────────────────────────────────────── */}
      <div className={styles.mainFooter}>
        <div className={cn("container", styles.grid)}>
          {/* Brand & Studio Info */}
          <div className={styles.brandCol}>
            <Logo variant="dark" size="md" layout="horizontal" />
            <p className={styles.brandDescription}>
              A bespoke creative, web development, marketing and digital systems
              studio. Crafting brands that command attention and drive exponential growth.
            </p>

            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>Accepting select client partnerships for Q4</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className={styles.colHeading}>Explore</h3>
            <ul className={styles.linkList}>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className={styles.colHeading}>Capabilities</h3>
            <ul className={styles.linkList}>
              {SERVICE_CATEGORIES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={styles.footerLink}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Inquiries */}
          <div className={styles.connectCol}>
            <h3 className={styles.colHeading}>Connect</h3>
            <p className={styles.brandDescription}>
              Have a project in mind or seeking strategic advice?
            </p>
            <a
              href="mailto:inquiry@rayvixdigital.com"
              className={styles.connectEmail}
            >
              inquiry@rayvixdigital.com
            </a>

            <div className={styles.socialRow}>
              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                className={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href={SOCIAL_LINKS.twitter}
                className={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                className={styles.socialButton}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────
          BOTTOM COPYRIGHT & LEGAL BAR
          ────────────────────────────────────────────────── */}
      <div className={styles.bottomBar}>
        <div className={cn("container", styles.bottomInner)}>
          <p className={styles.copyright}>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopButton}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
