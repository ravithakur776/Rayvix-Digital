import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PricingSection } from "@/components/sections/PricingSection";
import { PricingComparison } from "@/components/sections/PricingComparison";
import { Accordion } from "@/components/ui/Accordion";
import { PRICING_FAQS } from "@/lib/pricing-data";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Investment Architecture & Pricing | Rayvix Digital — Transparent Studio Tiers",
  description:
    "Fixed-scope milestone investment tiers for bespoke Next.js web applications, editorial brand architecture, and ongoing growth retainers. Zero hourly billing, 100% IP ownership.",
  keywords: [
    "Rayvix Digital Pricing",
    "Next.js Development Cost",
    "Bespoke Website Pricing",
    "Luxury Web Design Packages",
    "Digital Studio Pricing",
    "Fixed Scope Web Development"
  ],
  openGraph: {
    title: "Investment Architecture & Pricing | Rayvix Digital — Transparent Studio Tiers",
    description:
      "Fixed-scope milestone investment tiers for bespoke Next.js web applications, editorial brand architecture, and ongoing growth retainers. Zero hourly billing, 100% IP ownership.",
    url: "https://rayvixdigital.com/pricing",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website"
  }
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Rayvix Digital Studio Investment Architecture",
    description:
      "Fixed-scope milestone investment tiers for bespoke Next.js web applications and digital systems.",
    url: "https://rayvixdigital.com/pricing",
    provider: {
      "@type": "Organization",
      name: "Rayvix Digital",
      url: "https://rayvixdigital.com"
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ────────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Investment Introduction">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">
              /
            </span>
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Investment Architecture
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>Transparent Investment Architecture</span>
            </div>

            <h1 className={styles.heroTitle}>
              Predictable Scope.{" "}
              <span className={styles.heroHighlight}>Zero Hourly Games.</span>
            </h1>

            <p className={styles.heroLead}>
              We reject hourly billing because it creates misaligned incentives.
              We quote fixed-scope milestone agreements where you know exactly what is
              being built, when it will deploy, and the commercial leverage it will generate.
            </p>

            <div className={styles.safeguardsStrip}>
              <div className={styles.safeguardItem}>
                <span className={styles.safeguardDot} aria-hidden="true" />
                <span>100% Source Code & Asset Ownership</span>
              </div>
              <div className={styles.safeguardItem}>
                <span className={styles.safeguardDot} aria-hidden="true" />
                <span>Fixed Milestone Guarantees</span>
              </div>
              <div className={styles.safeguardItem}>
                <span className={styles.safeguardDot} aria-hidden="true" />
                <span>Zero Recurring Platform Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. PRICING TIERS & RETAINERS (INTERACTIVE)
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.pricingSection} aria-label="Studio Packages and Retainers">
        <div className={styles.container}>
          <PricingSection />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. COMPARISON MATRIX SECTION
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.comparisonSection} aria-label="Comprehensive Deliverables Matrix">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Granular Transparency</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive Deliverables Comparison Matrix
            </h2>
            <p className={styles.sectionLead}>
              Every tier is engineered with zero compromise on code quality. Compare
              deliverables across design, performance, search, and client governance.
            </p>
          </div>

          <PricingComparison />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. INVESTMENT PHILOSOPHY NARRATIVE
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.philosophySection} aria-label="Our Pricing Philosophy">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Studio Standard</span>
            <h2 className={styles.sectionTitle}>
              Why We Reject The Agency Hourly Model
            </h2>
          </div>

          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <span className={styles.philosophyNumber}>01</span>
              <h3 className={styles.philosophyTitle}>Outcome Over Input</h3>
              <p className={styles.philosophyText}>
                Billing by the hour incentivizes agencies to work slowly and drag
                timelines. At Rayvix Digital, our value is measured in architectural
                speed, aesthetic distinction, and commercial conversion lift—not billable hours.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.philosophyNumber}>02</span>
              <h3 className={styles.philosophyTitle}>Total Budget Certainty</h3>
              <p className={styles.philosophyText}>
                No surprise invoices or disputed scope creep. Our milestone
                agreements clearly define requirements, deliverables, and exact timelines
                before a single line of code is committed.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.philosophyNumber}>03</span>
              <h3 className={styles.philosophyTitle}>100% Asset Ownership</h3>
              <p className={styles.philosophyText}>
                Many agencies build on locked proprietary systems requiring recurring
                hostage fees. We build on open enterprise standards (Next.js 16).
                Upon launch, 100% of repositories and design assets are yours forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          5. PRICING FAQ SECTION
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-label="Pricing Frequently Asked Questions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Common Inquiries</span>
            <h2 className={styles.sectionTitle}>
              Frequently Asked Questions About Investment
            </h2>
            <p className={styles.sectionLead}>
              Clear answers regarding payment structures, customization, post-launch warranties,
              and ongoing engineering retainers.
            </p>
          </div>

          <div className={styles.faqWrapper}>
            <Accordion
              items={PRICING_FAQS}
              allowMultiple={false}
              defaultOpenIndex={0}
            />
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          6. CALL TO ACTION SECTION
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Pricing Consultation CTA">
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <span>Next Engagements: Q2 / Q3</span>
              </div>

              <h2 className={styles.ctaTitle}>
                Ready For An Uncompromising Digital Asset?
              </h2>

              <p className={styles.ctaLead}>
                Schedule a direct consultation with our studio principals to discuss
                your timeline, architecture requirements, and milestone scope.
              </p>

              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.ctaPrimaryLink}>
                  Initiate Strategic Consultation
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/portfolio" className={styles.ctaSecondaryLink}>
                  Review Flagship Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
