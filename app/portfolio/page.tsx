import React from "react";
import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Studio Concept Architecture & Systems Demonstrations | Rayvix Digital",
  description:
    "Explore studio concept prototypes and architectural demonstrations from Rayvix Digital spanning bespoke Next.js systems, healthcare search architecture, luxury e-commerce, and client portal engineering.",
  openGraph: {
    title: "Studio Concept Architecture & Systems Demonstrations | Rayvix Digital",
    description:
      "Explore studio concept prototypes and architectural demonstrations from Rayvix Digital spanning bespoke Next.js systems, healthcare search architecture, luxury e-commerce, and client portal engineering.",
    url: "https://rayvixdigital.com/portfolio",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────
          PAGE HEADER
          ────────────────────────────────────────────────── */}
      <section className={styles.pageHeader} aria-label="Portfolio Header">
        <div className="container">
          <div className={styles.headerContent}>
            <span className={styles.pageLabel}>Studio Concept Architecture & Prototypes</span>
            <h1 className={styles.pageTitle}>
              Architectural Prototypes & Systems Demonstrations.
            </h1>
            <p className={styles.pageLead}>
              A curated collection of studio concept architectures demonstrating our
              engineering standards, editorial design systems, and headless technology
              integrations. Each project represents an end-to-end prototype designed to
              solve real-world industry challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          INTERACTIVE CASE STUDIES GALLERY
          ────────────────────────────────────────────────── */}
      <section className={styles.gallerySection} aria-label="Concept Architecture Gallery">
        <div className="container">
          <PortfolioFilter initialProjects={PORTFOLIO_DATA} />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          IMPACT STATS STRIP
          ────────────────────────────────────────────────── */}
      <section className={styles.statsSection} aria-label="Studio Engineering Standards">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Bespoke</span>
              <span className={styles.statLabel}>Custom-Engineered Architecture</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Static Edge</span>
              <span className={styles.statLabel}>Sub-Second Next.js Delivery</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Zero Bloat</span>
              <span className={styles.statLabel}>Pure CSS & Clean Components</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Full IP</span>
              <span className={styles.statLabel}>Complete Client Code Ownership</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
