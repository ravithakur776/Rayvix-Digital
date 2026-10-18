import React from "react";
import type { Metadata } from "next";
import { SERVICES_DATA } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Capabilities & Services",
  description:
    "Explore Rayvix Digital's 9 core disciplines spanning bespoke web development, creative direction, brand identity, digital marketing, AI automation, and cloud systems.",
  openGraph: {
    title: "Capabilities & Services | Rayvix Digital",
    description:
      "Explore Rayvix Digital's 9 core disciplines spanning bespoke web development, creative direction, brand identity, digital marketing, AI automation, and cloud systems.",
    url: "https://rayvixdigital.com/services",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "Phase 1: Discovery",
    title: "Strategic Positioning",
    desc: "We dissect your business model, target audience, and competitive landscape to establish a defensible market advantage.",
  },
  {
    step: "02",
    phase: "Phase 2: Architecture",
    title: "Sensory & UX Design",
    desc: "Drafting bespoke wireframes, design token systems, editorial typography pairings, and responsive layout hierarchies.",
  },
  {
    step: "03",
    phase: "Phase 3: Execution",
    title: "Performance Engineering",
    desc: "Handcrafted Next.js frontend, database schemas, custom CMS integrations, and sub-second speed optimization.",
  },
  {
    step: "04",
    phase: "Phase 4: Momentum",
    title: "Launch & Automation",
    desc: "Zero-downtime deployment, SEO indexation, automated lead triage workflows, and compounding growth campaigns.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ──────────────────────────────────────────────────
          PAGE HERO
          ────────────────────────────────────────────────── */}
      <section className={styles.pageHeader} aria-label="Services Header">
        <div className="container">
          <div className={styles.headerContent}>
            <span className={styles.pageLabel}>Our Capabilities</span>
            <h1 className={styles.pageTitle}>
              Holistic Digital Solutions Architected for Exponential Scale.
            </h1>
            <p className={styles.pageLead}>
              We partner with visionary enterprises to build custom web applications,
              distinctive brand identities, and autonomous digital systems that turn
              market attention into defensible commercial revenue.
            </p>
            <div className={styles.headerActions}>
              <Button href="/contact" variant="primary" size="lg">
                Request a Consultation
              </Button>
              <Button href="#catalog" variant="outline" size="lg">
                Browse All Disciplines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          4-STAGE METHODOLOGY
          ────────────────────────────────────────────────── */}
      <section className={styles.methodologySection} aria-label="The Rayvix Execution Framework">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.pageLabel}>Execution Framework</span>
            <h2 className={styles.sectionHeading}>
              Precision at Every Stage of Development.
            </h2>
            <p style={{ color: "var(--color-warm-gray)", fontSize: "var(--text-base)" }}>
              A disciplined, transparent delivery framework engineered to eliminate guesswork and ensure exceptional outcomes.
            </p>
          </div>

          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className={styles.processCard}>
                <span className={styles.stepNumber}>{item.step}</span>
                <span className={styles.stepPhase}>{item.phase}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          DETAILED SERVICES CATALOG
          ────────────────────────────────────────────────── */}
      <section id="catalog" className={styles.catalogSection} aria-label="Services Catalog">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.pageLabel}>Disciplines Catalog</span>
            <h2 className={styles.sectionHeading}>
              Explore Our Core Capabilities
            </h2>
            <p style={{ color: "var(--color-warm-gray)", fontSize: "var(--text-base)" }}>
              Nine specialized disciplines available as standalone engagements or synchronized into an all-inclusive growth ecosystem.
            </p>
          </div>

          <div className={styles.servicesList}>
            {SERVICES_DATA.map((service) => (
              <article key={service.slug} className={styles.serviceRow}>
                <div className={styles.serviceMain}>
                  <div className={styles.serviceRowHeader}>
                    <span className={styles.serviceIndex}>{service.number}</span>
                    <span className={styles.serviceTagline}>{service.tagline}</span>
                  </div>

                  <h3 className={styles.serviceHeading}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.longDescription}</p>

                  <div>
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      size="md"
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      }
                    >
                      Deep Dive & Deliverables
                    </Button>
                  </div>
                </div>

                <div className={styles.serviceSidebar}>
                  <h4 className={styles.sidebarTitle}>Key Deliverables</h4>
                  <ul className={styles.deliverablesList}>
                    {service.deliverables.map((item) => (
                      <li key={item} className={styles.deliverableItem}>
                        <span className={styles.checkMark}>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`/contact?service=${service.slug}`}
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    Inquire for {service.title}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
