import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { INSIGHT_ARTICLES } from "@/lib/insights-data";
import { InsightsFeed } from "@/components/sections/InsightsFeed";
import { DispatchForm } from "@/components/ui/DispatchForm";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights & Architecture Journal | Rayvix Digital — Thought Leadership",
  description:
    "Architectural essays on Next.js 16 software engineering, editorial luxury typography, entity search graphs, and enterprise AI automation systems.",
  keywords: [
    "Rayvix Digital Insights",
    "Software Architecture Blog",
    "Next.js Engineering Journal",
    "Luxury Web Design Essays",
    "Entity SEO Guide",
    "Enterprise AI Automation Systems"
  ],
  openGraph: {
    title: "Insights & Architecture Journal | Rayvix Digital — Thought Leadership",
    description:
      "Architectural essays on Next.js 16 software engineering, editorial luxury typography, entity search graphs, and enterprise AI automation systems.",
    url: "https://rayvixdigital.com/insights",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/insights",
  }
};

export default function InsightsPage() {
  const featuredArticle = INSIGHT_ARTICLES[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Rayvix Digital Insights & Architecture Journal",
    description:
      "Rigorous investigations into high-performance software engineering, timeless typography, entity search architecture, and operational artificial intelligence.",
    url: "https://rayvixdigital.com/insights",
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
      <section className={styles.heroSection} aria-label="Journal Introduction">
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
              Insights & Journal
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>The Rayvix Journal</span>
            </div>

            <h1 className={styles.heroTitle}>
              Architectural Essays On{" "}
              <span className={styles.heroHighlight}>Digital Leverage.</span>
            </h1>

            <p className={styles.heroLead}>
              Rigorous investigations into high-performance software engineering,
              timeless typography, entity search architecture, and operational
              artificial intelligence.
            </p>

            <div className={styles.ethosStrip}>
              <div className={styles.ethosItem}>
                <span className={styles.ethosDot} aria-hidden="true" />
                <span>Peer-Reviewed In-House</span>
              </div>
              <div className={styles.ethosItem}>
                <span className={styles.ethosDot} aria-hidden="true" />
                <span>Zero Sponsored Content</span>
              </div>
              <div className={styles.ethosItem}>
                <span className={styles.ethosDot} aria-hidden="true" />
                <span>Grounded In Production Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. FEATURED ESSAY SHOWCASE
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.featuredSection} aria-label="Featured Lead Essay">
        <div className={styles.container}>
          <article className={styles.featuredCard}>
            <div>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredBadge}>
                  Featured Architectural Essay
                </span>
                <span className={styles.featuredReadTime}>
                  {featuredArticle.readTime}
                </span>
                <span style={{ color: "var(--color-warm-gray)" }}>•</span>
                <span style={{ color: "var(--color-warm-gray)" }}>
                  {featuredArticle.publishedDate}
                </span>
              </div>

              <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>

              <div className={styles.featuredActions}>
                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className={styles.readEssayBtn}
                >
                  <span>Read Complete Essay</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <aside className={styles.takeawaysBox} aria-label="Executive Takeaways">
              <h3 className={styles.takeawaysTitle}>Core Insights</h3>
              <ul className={styles.takeawaysList}>
                {featuredArticle.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className={styles.takeawayItem}>
                    <span className={styles.takeawayCheck} aria-hidden="true">
                      ✓
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </article>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. PUBLICATIONS FEED & DISCIPLINE FILTER
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.feedSection} aria-label="Publications Archive">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Editorial Index</span>
            <h2 className={styles.sectionTitle}>
              Explore By Studio Discipline
            </h2>
          </div>

          <InsightsFeed />
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          4. THE RAYVIX DISPATCH (NEWSLETTER)
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.dispatchSection} aria-label="The Rayvix Dispatch">
        <div className={styles.container}>
          <div className={styles.dispatchCard}>
            <div>
              <div className={styles.dispatchBadge}>
                <span>Executive Briefing</span>
              </div>

              <h2 className={styles.dispatchTitle}>The Rayvix Dispatch</h2>

              <p className={styles.dispatchLead}>
                Quarterly architectural essays on software craftsmanship, luxury
                digital systems, and compounding enterprise leverage. Delivered
                strictly without marketing noise.
              </p>
            </div>

            <DispatchForm />
          </div>
        </div>
      </section>
    </div>
  );
}
