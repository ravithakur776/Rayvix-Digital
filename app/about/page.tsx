import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  STUDIO_MANIFESTO,
  STUDIO_PRINCIPLES,
  MULTIDISCIPLINARY_GUILDS,
  STUDIO_METRICS,
  STUDIO_REGIONAL_HERITAGE
} from "@/lib/about-data";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Our Studio | Rayvix Digital — Philosophy, Craftsmanship & Systems Architecture",
  description:
    "Rayvix Digital is an elite creative, web development, marketing, and digital systems studio. Grounded in regional heritage and engineered for global enterprise leverage.",
  keywords: [
    "Rayvix Digital Philosophy",
    "Digital Systems Studio",
    "Next.js Web Studio",
    "Bespoke Web Development",
    "Luxury Digital Agency",
    "Craftsmanship and Performance",
    "High Leverage Digital Assets"
  ],
  openGraph: {
    title: "About Our Studio | Rayvix Digital — Philosophy, Craftsmanship & Systems Architecture",
    description:
      "Rayvix Digital is an elite creative, web development, marketing, and digital systems studio. Grounded in regional heritage and engineered for global enterprise leverage.",
    url: "https://rayvixdigital.com/about",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website"
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Rayvix Digital Studio",
    description:
      "Rayvix Digital is an elite creative, web development, marketing, and digital systems studio combining bespoke craftsmanship with enterprise software architecture.",
    publisher: {
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
      <section className={styles.heroSection} aria-label="Studio Introduction">
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
              About Studio
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>Studio Philosophy & Architecture</span>
            </div>

            <h1 className={styles.heroTitle}>
              Where Uncompromising Artistry Meets{" "}
              <span className={styles.heroHighlight}>
                Operational Leverage.
              </span>
            </h1>

            <p className={styles.heroLead}>
              Rayvix Digital was founded on a singular conviction: ambitious
              enterprises do not fail from a lack of digital effort—they fail from
              commoditized, fragile execution. We build enduring digital assets
              designed to lead and compound.
            </p>
          </div>

          {/* Quick Studio Metrics Strip */}
          <div className={styles.heroStatsStrip}>
            {STUDIO_METRICS.map((metric, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statValue}>{metric.value}</span>
                <span className={styles.statLabel}>{metric.label}</span>
                <span className={styles.statDetail}>{metric.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. GENESIS & EXECUTIVE MANIFESTO
          ──────────────────────────────────────────────────────────── */}
      <section
        className={styles.manifestoSection}
        aria-label="The Genesis & Executive Manifesto"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>The Genesis</span>
            <h2 className={styles.sectionTitle}>
              Why The Standard Agency Model Is Broken
            </h2>
          </div>

          <div className={styles.genesisGrid}>
            <div className={styles.genesisNarrative}>
              <p className={styles.genesisLead}>
                {STUDIO_MANIFESTO.subheadline}
              </p>

              {STUDIO_MANIFESTO.paragraphs.map((p, idx) => (
                <p key={idx} className={styles.genesisText}>
                  {p}
                </p>
              ))}
            </div>

            {/* Comparison Box */}
            <aside
              className={styles.comparisonCard}
              aria-label="Agency Status Quo vs Rayvix Standard"
            >
              <h3 className={styles.comparisonTitle}>The Architectural Difference</h3>

              <div className={styles.comparisonBlock}>
                <span
                  className={`${styles.comparisonLabel} ${styles.labelStatusQuo}`}
                >
                  Conventional Agencies
                </span>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonItem}>
                    <span className={styles.crossIcon} aria-hidden="true">✕</span>
                    <span>Third-party bloated templates and plugins</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.crossIcon} aria-hidden="true">✕</span>
                    <span>Sluggish load times causing customer bounce</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.crossIcon} aria-hidden="true">✕</span>
                    <span>High maintenance fragility and recurring technical debt</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.crossIcon} aria-hidden="true">✕</span>
                    <span>Junior hand-offs and account manager telephone games</span>
                  </li>
                </ul>
              </div>

              <div className={styles.comparisonBlock}>
                <span
                  className={`${styles.comparisonLabel} ${styles.labelRayvix}`}
                >
                  The Rayvix Standard
                </span>
                <ul className={styles.comparisonList}>
                  <li className={styles.comparisonItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>100% custom-written Next.js 16 + pure CSS Modules</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Sub-second static compilation and optimized Core Web Vitals</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Zero plugin dependencies, zero security vulnerabilities</span>
                  </li>
                  <li className={styles.comparisonItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Direct senior engineering and creative direction</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. STUDIO GUIDING PRINCIPLES
          ──────────────────────────────────────────────────────────── */}
      <section
        className={styles.principlesSection}
        aria-label="Core Studio Principles"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Our Guiding Tenets</span>
            <h2 className={styles.sectionTitle}>
              Principles That Govern Every Line Of Code & Design
            </h2>
          </div>

          <div className={styles.principlesGrid}>
            {STUDIO_PRINCIPLES.map((principle) => (
              <article key={principle.number} className={styles.principleCard}>
                <div className={styles.principleHeader}>
                  <span className={styles.principleNumber}>
                    {principle.number}
                  </span>
                  <span className={styles.principleSubtitle}>
                    {principle.subtitle}
                  </span>
                </div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>
                  {principle.description}
                </p>
                <blockquote className={styles.principleQuote}>
                  “{principle.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. MULTIDISCIPLINARY GUILDS
          ──────────────────────────────────────────────────────────── */}
      <section
        className={styles.guildsSection}
        aria-label="Multidisciplinary Capabilities"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How We Execute</span>
            <h2 className={styles.sectionTitle}>
              Four Specialized Guilds. One Unified Studio.
            </h2>
          </div>

          <div className={styles.guildsGrid}>
            {MULTIDISCIPLINARY_GUILDS.map((guild, idx) => (
              <article key={idx} className={styles.guildCard}>
                <div className={styles.guildHeader}>
                  <span className={styles.guildLeadFocus}>
                    {guild.leadFocus}
                  </span>
                  <h3 className={styles.guildDiscipline}>
                    {guild.discipline}
                  </h3>
                </div>

                <p className={styles.guildDescription}>
                  {guild.description}
                </p>

                <div className={styles.guildTechBlock}>
                  <span className={styles.guildBlockLabel}>
                    Core Technologies & Frameworks
                  </span>
                  <div className={styles.tagGroup}>
                    {guild.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className={styles.guildBlockLabel}>
                    Tangible Deliverables
                  </span>
                  <ul className={styles.deliverablesList}>
                    {guild.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className={styles.deliverableItem}>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          5. REGIONAL HERITAGE & GLOBAL REACH
          ──────────────────────────────────────────────────────────── */}
      <section
        className={styles.heritageSection}
        aria-label="Regional Heritage & Global Ambition"
      >
        <div className={styles.container}>
          <div className={styles.heritageGrid}>
            <div>
              <div className={styles.heritageBadge}>
                <span>{STUDIO_REGIONAL_HERITAGE.badge}</span>
              </div>

              <h2 className={styles.heritageTitle}>
                {STUDIO_REGIONAL_HERITAGE.title}
              </h2>

              <p className={styles.heritageLead}>
                {STUDIO_REGIONAL_HERITAGE.lead}
              </p>

              <div className={styles.heritageParagraphs}>
                {STUDIO_REGIONAL_HERITAGE.paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.heritageText}>
                    {p}
                  </p>
                ))}
              </div>

              <div className={styles.locationNodes}>
                {STUDIO_REGIONAL_HERITAGE.locations.map((loc, lIdx) => (
                  <div key={lIdx} className={styles.locationBadge}>
                    <span className={styles.locationPin} aria-hidden="true" />
                    <span>{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heritageMediaWrapper}>
              <Image
                src="/images/showcase-poster.webp"
                alt="Rayvix Digital — Heritage and High Growth Visual"
                width={700}
                height={875}
                className={styles.heritageImage}
                priority
              />
              <div className={styles.heritageOverlayBadge}>
                <div className={styles.heritageOverlayTitle}>
                  Permanent Craftsmanship
                </div>
                <div className={styles.heritageOverlaySubtitle}>
                  From Mathura, Vrindavan, & Agra to Global Enterprise Scale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          6. STUDIO QUALITY COMPACT (GUARANTEES)
          ──────────────────────────────────────────────────────────── */}
      <section
        className={styles.compactSection}
        aria-label="Studio Quality Compact"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Our Commitments</span>
            <h2 className={styles.sectionTitle}>
              The Rayvix Studio Compact
            </h2>
          </div>

          <div className={styles.compactGrid}>
            <div className={styles.compactCard}>
              <h3 className={styles.compactCardTitle}>100% Code Ownership</h3>
              <p className={styles.compactCardText}>
                You retain complete, unencumbered ownership of all custom source code,
                repositories, assets, and design files upon completion. Zero lock-in.
              </p>
            </div>

            <div className={styles.compactCard}>
              <h3 className={styles.compactCardTitle}>Direct Principal Leadership</h3>
              <p className={styles.compactCardText}>
                You collaborate directly with senior architects and creative leads.
                No outsourced sub-contractors or revolving account managers.
              </p>
            </div>

            <div className={styles.compactCard}>
              <h3 className={styles.compactCardTitle}>Sub-Second Performance</h3>
              <p className={styles.compactCardText}>
                We architect your platform to pass Core Web Vitals with optimal
                scores, ensuring frictionless organic search crawlability and conversion efficiency.
              </p>
            </div>

            <div className={styles.compactCard}>
              <h3 className={styles.compactCardTitle}>Architectural Longevity</h3>
              <p className={styles.compactCardText}>
                Every platform is engineered using modern standards (Next.js 16,
                TypeScript, CSS Modules) to ensure zero architectural degradation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          7. CALL TO ACTION SECTION
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.ctaSection} aria-label="Studio Consultation CTA">
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>
                <span className={styles.badgeDot} aria-hidden="true" />
                <span>Next Engagements: Q2 / Q3</span>
              </div>

              <h2 className={styles.ctaTitle}>
                Ready To Build An Enduring Digital Asset?
              </h2>

              <p className={styles.ctaLead}>
                We accept a strictly limited number of client engagements each
                quarter to ensure obsessive execution. Schedule a direct strategic
                consultation with our studio principals.
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
                  Explore Flagship Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
