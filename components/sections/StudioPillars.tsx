import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import styles from "./StudioPillars.module.css";

const PILLARS = [
  {
    number: "01",
    tag: "Craftsmanship",
    title: "Bespoke Digital Design & Performance Engineering",
    description:
      "No generic templates or cookie-cutter builders. We architect tailored, responsive web applications built with Next.js and pure CSS precision, delivering sub-second load times and fluid micro-interactions that captivate high-intent clientele.",
    chips: [
      "Custom Architecture",
      "Sub-Second Load",
      "Editorial Motion",
      "Zero Bloat",
    ],
  },
  {
    number: "02",
    tag: "Leverage",
    title: "Intelligent Systems & AI Automation",
    description:
      "Modern growth demands operational velocity. We engineer automated client acquisition funnels, intelligent CRM sync, AI-driven content pipelines, and dynamic lead routing that turn your website into an autonomous growth engine.",
    chips: [
      "AI Workflows",
      "Lead Routing Pipelines",
      "Automated CRM Sync",
      "Operational Scale",
    ],
  },
  {
    number: "03",
    tag: "Outcomes",
    title: "Authority Branding & Measurable Market Impact",
    description:
      "Visual identity that commands respect in your industry. From luxury typography to dominant local & technical search positioning, we position your business to command premium pricing and establish defensible market leadership.",
    chips: [
      "Category Leadership",
      "High-Converting Funnels",
      "Technical SEO",
      "Authority Branding",
    ],
  },
];

export function StudioPillars() {
  return (
    <section className={styles.pillarsSection} aria-label="Why Rayvix Digital — The Studio Standard">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className={styles.sectionLabel}>The Rayvix Standard</span>
          <h2 className={styles.sectionHeading}>
            We don’t just build websites. We engineer digital authority.
          </h2>
          <p className={styles.sectionLead}>
            In a digital landscape crowded with generic templates, we create
            bespoke platforms that elevate your brand, automate workflows, and drive
            unrivaled commercial performance.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <article key={pillar.number} className={styles.pillarCard}>
              <div className={styles.pillarCardTop}>
                <span className={styles.pillarNumber}>{pillar.number}</span>
                <span className={styles.pillarTag}>{pillar.tag}</span>
              </div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
              <div className={styles.featureChips}>
                {pillar.chips.map((chip) => (
                  <span key={chip} className={styles.featureChip}>
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Device Showcase Feature Block */}
        <div className={styles.showcaseFeature}>
          <div className={styles.showcaseVisualWrap}>
            <Image
              src="/images/showcase-devices.webp"
              alt="Rayvix Digital — Multi-Device Showcase & Strategic Presence"
              width={1000}
              height={1000}
              className={styles.showcaseVisual}
              sizes="(max-width: 900px) 100vw, 550px"
            />
          </div>

          <div className={styles.showcaseContent}>
            <span className={styles.sectionLabel}>Strategic Execution</span>
            <h3 className={styles.quoteTitle}>
              Your brand deserves a bigger stage.
            </h3>
            <p className={styles.quoteText}>
              Every digital asset we produce is crafted to function cohesively across
              smartphones, tablets, and wide-format desktop displays. We eliminate friction,
              clarify your value, and compel prospective clients to take decisive action.
            </p>

            <ul className={styles.showcaseList}>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Optimized for Local SEO & Google Maps Dominance</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Seamless High-Ticket Inquiry & Booking Systems</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>✓</span>
                <span>Full Cross-Platform & Device Fluidity</span>
              </li>
            </ul>

            <div>
              <Button
                href="/services"
                variant="primary"
                size="md"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                }
              >
                Explore Full Capabilities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
