import React from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          <span>Error 404 • Missing Resource</span>
        </div>

        <div className={styles.errorNumber}>404</div>

        <h1 className={styles.title}>The Requested Architecture Does Not Exist.</h1>

        <p className={styles.lead}>
          The pathway you navigated to may have been re-architected, migrated, or
          retired. Use the primary architectural corridors below to navigate back into
          the studio.
        </p>

        {/* 4 Primary Corridors */}
        <div className={styles.pathwaysGrid}>
          <Link href="/" className={styles.pathwayCard}>
            <span className={styles.pathwayNumber}>01</span>
            <span className={styles.pathwayTitle}>Studio Home</span>
            <span className={styles.pathwayDesc}>
              Return to primary showcase, metrics, and manifesto.
            </span>
          </Link>

          <Link href="/services" className={styles.pathwayCard}>
            <span className={styles.pathwayNumber}>02</span>
            <span className={styles.pathwayTitle}>Capabilities</span>
            <span className={styles.pathwayDesc}>
              Explore our 9 full-stack studio disciplines.
            </span>
          </Link>

          <Link href="/portfolio" className={styles.pathwayCard}>
            <span className={styles.pathwayNumber}>03</span>
            <span className={styles.pathwayTitle}>Case Studies</span>
            <span className={styles.pathwayDesc}>
              Review our 4 flagship client transformation records.
            </span>
          </Link>

          <Link href="/contact" className={styles.pathwayCard}>
            <span className={styles.pathwayNumber}>04</span>
            <span className={styles.pathwayTitle}>Consultation</span>
            <span className={styles.pathwayDesc}>
              Initiate direct senior review with our principals.
            </span>
          </Link>
        </div>

        <div>
          <Link href="/" className={styles.ctaHomeLink}>
            <span>Return To Primary Homepage</span>
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
    </div>
  );
}
