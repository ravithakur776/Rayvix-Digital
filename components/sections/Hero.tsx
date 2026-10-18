import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} aria-label="Introduction & Studio Overview">
      <div className={`container ${styles.inner}`}>
        {/* Prestige Pill Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeStar} aria-hidden="true">✦</span>
          <span>Strategy • Design • Content • Growth</span>
          <span className={styles.badgeStar} aria-hidden="true">✦</span>
        </div>

        {/* Primary Headline */}
        <h1 className={styles.title}>
          Elevated Growth <span className={styles.accent}>Experiences</span> for Visionary Brands.
        </h1>

        {/* Studio Subheading */}
        <p className={styles.description}>
          We architect high-performance websites, distinctive brand identities, and
          intelligent digital systems engineered to convert attention into exponential market authority.
        </p>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <Button
            href="/services"
            variant="primary"
            size="lg"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            Explore Capabilities
          </Button>

          <Button
            href="/contact"
            variant="outline"
            size="lg"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            }
          >
            Book a Strategy Call
          </Button>
        </div>

        {/* Visual Showcase Card with Mockups */}
        <div className={styles.showcaseWrapper}>
          <div className={styles.showcaseCard}>
            <Image
              src="/images/hero-banner.webp"
              alt="Rayvix Digital — Bespoke Workstation Mockup & Growth Architecture"
              width={1800}
              height={670}
              priority
              className={styles.showcaseImage}
              sizes="(max-width: 1200px) 100vw, 1120px"
            />

            {/* Floating Trust Chips */}
            <div className={`${styles.floatingChip} ${styles.chipTopRight}`}>
              <span className={styles.chipIcon}>⚡</span>
              <span>Sub-Second Performance & Clean Architecture</span>
            </div>

            <div className={`${styles.floatingChip} ${styles.chipBottomLeft}`}>
              <span className={styles.chipIcon}>★</span>
              <span>100% Bespoke Craftsmanship — Zero Generic Templates</span>
            </div>
          </div>
        </div>

        {/* Trust & Impact Metrics Bar */}
        <div className={styles.metricsBar}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>$50M+</span>
              <span className={styles.metricLabel}>Client Revenue Influenced</span>
            </div>

            <div className={styles.metricItem}>
              <span className={styles.metricValue}>120+</span>
              <span className={styles.metricLabel}>Digital Platforms Built</span>
            </div>

            <div className={styles.metricItem}>
              <span className={styles.metricValue}>99.8%</span>
              <span className={styles.metricLabel}>Uptime & Speed Rating</span>
            </div>

            <div className={styles.metricItem}>
              <span className={styles.metricValue}>14+</span>
              <span className={styles.metricLabel}>Global Markets Reached</span>
            </div>
          </div>

          <div className={styles.locationBar}>
            <span className={styles.locationPin} aria-hidden="true">📍</span>
            <span>Studio Hubs: Mathura • Vrindavan • Agra • Serving High-Growth Brands Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
