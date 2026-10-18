"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRICING_TIERS, RETAINER_TIERS } from "@/lib/pricing-data";
import styles from "./PricingSection.module.css";

export function PricingSection() {
  const [billingMode, setBillingMode] = useState<"onetime" | "retainer">("onetime");

  return (
    <div className={styles.sectionRoot}>
      {/* Interactive Mode Toggle */}
      <div className={styles.toggleContainer} role="tablist" aria-label="Investment Model Selector">
        <div className={styles.toggleTrack}>
          <button
            type="button"
            role="tab"
            aria-selected={billingMode === "onetime"}
            className={`${styles.toggleButton} ${
              billingMode === "onetime" ? styles.toggleButtonActive : ""
            }`}
            onClick={() => setBillingMode("onetime")}
          >
            <span>One-Time Platform Builds</span>
            <span className={styles.toggleBadge}>3 Flagship Tiers</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={billingMode === "retainer"}
            className={`${styles.toggleButton} ${
              billingMode === "retainer" ? styles.toggleButtonActive : ""
            }`}
            onClick={() => setBillingMode("retainer")}
          >
            <span>Monthly Growth Retainers</span>
            <span className={styles.toggleBadge}>Continuous Sprints</span>
          </button>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────
          MODE 1: ONE-TIME PLATFORM BUILDS
          ──────────────────────────────────────────────────────────── */}
      {billingMode === "onetime" ? (
        <div className={styles.tiersGrid} role="tabpanel" aria-label="One-Time Platform Tiers">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.id}
              className={`${styles.tierCard} ${
                tier.isPopular ? styles.tierCardPopular : ""
              }`}
            >
              {tier.badge && (
                <div className={styles.popularBadge} aria-label="Featured Tier">
                  {tier.badge}
                </div>
              )}

              <div className={styles.tierHeader}>
                <h3 className={styles.tierName}>{tier.name}</h3>
                <p className={styles.tierSubtitle}>{tier.subtitle}</p>
              </div>

              <div className={styles.priceBox}>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceAmount}>{tier.price}</span>
                  <span className={styles.pricePeriod}>• {tier.period}</span>
                </div>
                <span className={styles.priceSubtext}>
                  Fixed milestone-based scope • 0% hidden fees
                </span>
              </div>

              <div className={styles.metaBox}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Target Timeline:</span>
                  <span className={styles.metaValue}>{tier.duration}</span>
                </div>
                <div className={styles.metaRow} style={{ marginTop: "4px" }}>
                  <span className={styles.metaLabel}>Best Suited For:</span>
                  <span className={styles.metaValue} style={{ textAlign: "right", maxWidth: "60%" }}>
                    {tier.idealFor.split(",")[0]}
                  </span>
                </div>
              </div>

              <ul className={styles.deliverablesList}>
                {tier.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.deliverableItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`${styles.tierCta} ${
                  tier.isPopular ? styles.ctaPrimary : styles.ctaSecondary
                }`}
              >
                <span>{tier.ctaLabel}</span>
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
            </article>
          ))}
        </div>
      ) : (
        /* ────────────────────────────────────────────────────────────
           MODE 2: MONTHLY GROWTH RETAINERS
           ──────────────────────────────────────────────────────────── */
        <div className={styles.retainersGrid} role="tabpanel" aria-label="Monthly Retainer Tiers">
          {RETAINER_TIERS.map((ret) => (
            <article key={ret.id} className={styles.retainerCard}>
              <div className={styles.tierHeader}>
                <h3 className={styles.tierName}>{ret.name}</h3>
                <p className={styles.tierSubtitle}>{ret.subtitle}</p>
              </div>

              <div className={styles.priceBox}>
                <div className={styles.priceWrapper}>
                  <span className={styles.priceAmount}>{ret.price}</span>
                  <span className={styles.pricePeriod}>• {ret.period}</span>
                </div>
                <span className={styles.priceSubtext}>
                  Cancel or adjust with 30 days notice • Dedicated principal time
                </span>
              </div>

              <div className={styles.metaBox}>
                <div className={styles.metaRow}>
                  <span className={styles.metaLabel}>Recommended For:</span>
                  <span className={styles.metaValue}>{ret.idealFor}</span>
                </div>
              </div>

              <ul className={styles.deliverablesList}>
                {ret.features.map((feat, idx) => (
                  <li key={idx} className={styles.deliverableItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link href={ret.ctaHref} className={`${styles.tierCta} ${styles.ctaPrimary}`}>
                <span>{ret.ctaLabel}</span>
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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
