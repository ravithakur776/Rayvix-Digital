import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES_DATA, getServiceBySlug } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import styles from "./service-detail.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — ${service.tagline}`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Rayvix Digital`,
      description: service.description,
      url: `https://rayvixdigital.com/services/${service.slug}`,
      siteName: "Rayvix Digital",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* ──────────────────────────────────────────────────
          SERVICE DETAIL HERO
          ────────────────────────────────────────────────── */}
      <section className={styles.detailHero} aria-label={`${service.title} Overview`}>
        <div className="container">
          <Link href="/services" className={styles.backLink}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to All Capabilities</span>
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.badgeRow}>
              <span className={styles.serviceIndex}>{service.number}</span>
              <span className={styles.serviceTag}>{service.shortTag}</span>
            </div>

            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.tagline}>{service.tagline}</p>
            <p className={styles.leadText}>{service.longDescription}</p>

            <div className={styles.heroActions}>
              <Button
                href={`/contact?service=${service.slug}`}
                variant="primary"
                size="lg"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                }
              >
                Inquire About {service.title}
              </Button>

              <Button href="#scope" variant="outline" size="lg">
                View Full Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          ARCHITECTURAL FEATURES
          ────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="Key Features and Architecture">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Engineering & Execution</span>
            <h2 className={styles.sectionHeading}>
              Engineered for Enduring Commercial Advantage
            </h2>
          </div>

          <div className={styles.featuresGrid}>
            {service.features.map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          DELIVERABLES & OUTCOMES SPLIT
          ────────────────────────────────────────────────── */}
      <section id="scope" className={styles.section} aria-label="Scope of Deliverables and Projected Impact">
        <div className="container">
          <div className={styles.splitGrid}>
            {/* Scope / Deliverables */}
            <div className={styles.scopeBox}>
              <h3 className={styles.boxTitle}>Included Deliverables</h3>
              <div className={styles.itemList}>
                {service.deliverables.map((item) => (
                  <div key={item} className={styles.itemRow}>
                    <span className={styles.icon}>✦</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projected Business Impact */}
            <div className={styles.scopeBox}>
              <h3 className={styles.boxTitle}>Projected Business Impact</h3>
              <div className={styles.itemList}>
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className={styles.itemRow}>
                    <span className={styles.icon}>✓</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          CLIENT FAQS
          ────────────────────────────────────────────────── */}
      <section className={styles.section} aria-label="Frequently Asked Questions">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Clarifications</span>
            <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
          </div>

          <div className={styles.faqGrid}>
            {service.faqs.map((faq) => (
              <div key={faq.question} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
