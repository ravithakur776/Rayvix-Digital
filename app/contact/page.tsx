import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { Accordion } from "@/components/ui/Accordion";
import {
  STUDIO_TOUCHPOINTS,
  STUDIO_LOCATIONS,
  CONTACT_FAQS
} from "@/lib/contact-data";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Initiate Strategic Consultation | Rayvix Digital — Direct Studio Intake",
  description:
    "Direct senior architectural review for businesses requiring bespoke Next.js web systems, editorial brand identity, and high-intent organic search authority.",
  keywords: [
    "Contact Rayvix Digital",
    "Digital Studio Consultation",
    "Next.js Development Agency Contact",
    "Luxury Web Development Intake",
    "Hire Rayvix Digital",
    "Direct Senior Engineering Review"
  ],
  openGraph: {
    title: "Initiate Strategic Consultation | Rayvix Digital — Direct Studio Intake",
    description:
      "Direct senior architectural review for businesses requiring bespoke Next.js web systems, editorial brand identity, and high-intent organic search authority.",
    url: "https://rayvixdigital.com/contact",
    siteName: "Rayvix Digital",
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Initiate Strategic Consultation with Rayvix Digital",
    description:
      "Direct senior architectural review for businesses requiring bespoke Next.js web systems, editorial brand identity, and high-intent organic search authority.",
    url: "https://rayvixdigital.com/contact",
    publisher: {
      "@type": "Organization",
      name: "Rayvix Digital",
      url: "https://rayvixdigital.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales & Strategic Inquiries",
        url: "https://rayvixdigital.com/contact"
      }
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
      <section className={styles.heroSection} aria-label="Consultation Introduction">
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
              Strategic Consultation
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>Direct Studio Intake</span>
            </div>

            <h1 className={styles.heroTitle}>
              Initiate An Executive{" "}
              <span className={styles.heroHighlight}>Consultation.</span>
            </h1>

            <p className={styles.heroLead}>
              Direct senior architectural review for businesses requiring
              high-performance web systems, defensible brand authority, and
              compounding commercial leverage.
            </p>

            <div className={styles.slaStrip}>
              <div className={styles.slaItem}>
                <span className={styles.slaDot} aria-hidden="true" />
                <span>Response SLA: Within 24 Business Hours</span>
              </div>
              <div className={styles.slaItem}>
                <span className={styles.slaDot} aria-hidden="true" />
                <span>Senior Principal Review Only</span>
              </div>
              <div className={styles.slaItem}>
                <span className={styles.slaDot} aria-hidden="true" />
                <span>Mutual NDA Available Upon Request</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. MAIN INTAKE GRID (FORM + TOUCHPOINTS)
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.intakeSection} aria-label="Consultation Intake and Touchpoints">
        <div className={styles.container}>
          <div className={styles.intakeGrid}>
            {/* Left Column: Interactive Intake Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right Column: Direct Touchpoints & Studio Hubs */}
            <aside className={styles.sidebarCol} aria-label="Direct Studio Touchpoints">
              {/* Direct Studio Channels */}
              <div className={styles.touchpointCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardEyebrow}>Direct Channels</span>
                  <h3 className={styles.cardTitle}>Immediate Touchpoints</h3>
                </div>

                <div className={styles.touchpointList}>
                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>Direct Studio Email</span>
                    <a
                      href={`mailto:${STUDIO_TOUCHPOINTS.email}`}
                      className={styles.touchpointLink}
                    >
                      {STUDIO_TOUCHPOINTS.email}
                    </a>
                  </div>

                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>Direct Telephone</span>
                    <a
                      href={`tel:${STUDIO_TOUCHPOINTS.phoneRaw}`}
                      className={styles.touchpointLink}
                    >
                      {STUDIO_TOUCHPOINTS.phone}
                    </a>
                  </div>

                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>WhatsApp Consultation</span>
                    <a
                      href={STUDIO_TOUCHPOINTS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.touchpointLink}
                    >
                      {STUDIO_TOUCHPOINTS.phone} (Direct WhatsApp) ↗
                    </a>
                  </div>

                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>Scheduled Video Briefing</span>
                    <span className={styles.touchpointText}>
                      Google Meet / Zoom Briefings Scheduled Following Brief Review
                    </span>
                  </div>

                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>Operating Hours</span>
                    <span className={styles.touchpointText}>
                      {STUDIO_TOUCHPOINTS.hours}
                    </span>
                    <span className={styles.touchpointText} style={{ opacity: 0.75, fontSize: "0.8rem" }}>
                      {STUDIO_TOUCHPOINTS.weekendHours}
                    </span>
                  </div>

                  <div className={styles.touchpointItem}>
                    <span className={styles.touchpointLabel}>Response Time</span>
                    <span className={styles.touchpointText}>
                      {STUDIO_TOUCHPOINTS.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional & Global Studio Hubs */}
              <div className={styles.locationsCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardEyebrow}>Studio Presence</span>
                  <h3 className={styles.cardTitle}>Regional & Global Nodes</h3>
                </div>

                <div className={styles.locationsList}>
                  {STUDIO_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className={styles.locationItem}>
                      <div className={styles.locationHeader}>
                        <span className={styles.locationCity}>{loc.city}</span>
                        <span className={styles.locationRole}>{loc.role}</span>
                      </div>
                      <div className={styles.locationAddress}>{loc.address}</div>
                      <div className={styles.locationNote}>{loc.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safeguards & Governance */}
              <div className={styles.safeguardsCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardEyebrow}>Governance</span>
                  <h3 className={styles.cardTitle}>Client Safeguards</h3>
                </div>

                <ul className={styles.safeguardsList}>
                  <li className={styles.safeguardItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>100% intellectual property & source code transfer</span>
                  </li>
                  <li className={styles.safeguardItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
                  </li>
                  <li className={styles.safeguardItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Zero third-party vendor lock-in or recurring software licensing</span>
                  </li>
                  <li className={styles.safeguardItem}>
                    <span className={styles.checkIcon} aria-hidden="true">✓</span>
                    <span>Direct collaboration with senior architects only</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          3. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION)
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Clarity & Protocols</span>
            <h2 className={styles.sectionTitle}>
              Everything You Need To Know Before Initiating An Engagement
            </h2>
            <p className={styles.sectionLead}>
              We believe in complete transparency regarding capacity, code ownership,
              timelines, and our senior-led execution philosophy.
            </p>
          </div>

          <div className={styles.faqWrapper}>
            <Accordion
              items={CONTACT_FAQS}
              allowMultiple={false}
              defaultOpenIndex={0}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
