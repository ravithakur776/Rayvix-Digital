import React from "react";
import type { Metadata } from "next";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { PortfolioFilter } from "@/components/sections/PortfolioFilter";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Case Studies & Selected Works",
  description:
    "Explore proven client outcomes and digital architecture case studies from Rayvix Digital spanning luxury real estate, healthcare, e-commerce, and financial systems.",
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
            <span className={styles.pageLabel}>Selected Works & Case Studies</span>
            <h1 className={styles.pageTitle}>
              Case Studies in Digital Distinction & Scale.
            </h1>
            <p className={styles.pageLead}>
              We partner with ambitious enterprises to deliver transformative web
              applications, category-defining visual identities, and autonomous systems
              that establish defensible market authority and digital distinction.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          INTERACTIVE CASE STUDIES GALLERY
          ────────────────────────────────────────────────── */}
      <section className={styles.gallerySection} aria-label="Case Studies Gallery">
        <div className="container">
          <PortfolioFilter initialProjects={PORTFOLIO_DATA} />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          IMPACT STATS STRIP
          ────────────────────────────────────────────────── */}
      <section className={styles.statsSection} aria-label="Cumulative Client Impact">
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
