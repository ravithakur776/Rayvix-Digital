import React from "react";
import Link from "next/link";
import styles from "./StudioManifesto.module.css";

export function StudioManifesto() {
  return (
    <section className={styles.manifestoSection} aria-label="Studio Manifesto">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>The Rayvix Manifesto</span>
          </div>

          <h2 className={styles.quoteTitle}>
            “We believe digital presence is not an expense—it is the{" "}
            <span className={styles.quoteHighlight}>
              highest-leverage asset
            </span>{" "}
            a modern business can build.”
          </h2>

          <p className={styles.leadText}>
            Ambitious enterprises do not fail from a lack of digital effort—they
            fail from commoditized execution. We engineer bespoke digital platforms
            where luxury aesthetics meet uncompromising software architecture.
          </p>
        </div>

        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.pillarNumber}>01</div>
            <h3 className={styles.pillarTitle}>Bespoke Architecture</h3>
            <p className={styles.pillarDescription}>
              100% hand-crafted Next.js and pure CSS. Zero bloated site builders,
              zero fragile third-party themes, zero technical debt.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarNumber}>02</div>
            <h3 className={styles.pillarTitle}>Compounding Equity</h3>
            <p className={styles.pillarDescription}>
              Every digital system is calibrated to compound search authority,
              lower customer acquisition costs, and elevate pricing power.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.pillarNumber}>03</div>
            <h3 className={styles.pillarTitle}>Constrained Volume</h3>
            <p className={styles.pillarDescription}>
              We cap client engagements at 4 per quarter to ensure obsessive
              attention to detail and direct principal leadership on every project.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/about" className={styles.primaryLink}>
            Explore Our Studio Philosophy
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
          <Link href="/contact" className={styles.secondaryLink}>
            Initiate Strategic Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
