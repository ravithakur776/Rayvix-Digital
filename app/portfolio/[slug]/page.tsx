import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA, getCaseStudyBySlug } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/Button";
import styles from "./case-study.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PORTFOLIO_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Rayvix Digital Case Study`,
      description: project.overview,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* ──────────────────────────────────────────────────
          CASE STUDY HERO
          ────────────────────────────────────────────────── */}
      <section className={styles.heroSection} aria-label="Case Study Overview">
        <div className="container">
          <Link href="/portfolio" className={styles.backLink}>
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
            <span>Back to All Case Studies</span>
          </Link>

          <div className={styles.metaRow}>
            <span className={styles.categoryTag}>{project.category}</span>
            <span className={styles.clientText}>Client: {project.client}</span>
            <span className={styles.clientText}>• Year: {project.year}</span>
            <span className={styles.clientText}>• Timeline: {project.duration}</span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <p className={styles.overview}>{project.overview}</p>

          {/* Key Metrics Banner */}
          <div className={styles.metricsBanner}>
            <div className={styles.metricsGrid}>
              {project.metrics.map((m) => (
                <div key={m.label} className={styles.metricItem}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          HERO SHOWCASE IMAGE
          ────────────────────────────────────────────────── */}
      <section className={styles.showcaseSection} aria-label="Project Visual Showcase">
        <div className="container">
          <div className={styles.imageFrame}>
            <Image
              src={project.heroImage}
              alt={`${project.title} — Full Case Study Visual`}
              width={1400}
              height={1800}
              priority
              className={styles.showcaseImg}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          NARRATIVE: CHALLENGE & SOLUTION
          ────────────────────────────────────────────────── */}
      <section className={styles.narrativeSection} aria-label="Challenge and Strategic Solution">
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeBlock}>
              <span className={styles.blockLabel}>The Context & Friction</span>
              <h2 className={styles.blockHeading}>The Strategic Challenge</h2>
              <p className={styles.blockText}>{project.challenge}</p>
            </div>

            <div className={styles.narrativeBlock}>
              <span className={styles.blockLabel}>The Architectural Execution</span>
              <h2 className={styles.blockHeading}>The Bespoke Solution</h2>
              <p className={styles.blockText}>{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          DELIVERABLES & TECH STACK
          ────────────────────────────────────────────────── */}
      <section className={styles.specsSection} aria-label="Deliverables and Technical Stack">
        <div className="container">
          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <h3 className={styles.specTitle}>Deliverables & Assets</h3>
              <div className={styles.chipsList}>
                {project.deliverables.map((d) => (
                  <span key={d} className={styles.chip}>
                    ✦ {d}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.specCard}>
              <h3 className={styles.specTitle}>Technologies & Frameworks</h3>
              <div className={styles.chipsList}>
                {project.technologies.map((t) => (
                  <span key={t} className={styles.chip}>
                    ⚡ {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          EXECUTIVE TESTIMONIAL
          ────────────────────────────────────────────────── */}
      <section className={styles.testimonialSection} aria-label="Client Testimonial">
        <div className="container">
          <div className={styles.testimonialCard}>
            <div className={styles.quoteMark} aria-hidden="true">“</div>
            <blockquote className={styles.quoteText}>
              {project.testimonial.quote}
            </blockquote>
            <div className={styles.quoteAuthor}>{project.testimonial.author}</div>
            <div className={styles.quoteRole}>
              {project.testimonial.role}, {project.testimonial.company}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────
          BOTTOM INQUIRY BAR
          ────────────────────────────────────────────────── */}
      <div className={styles.inquiryBar}>
        <div className={`container ${styles.inquiryInner}`}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", color: "var(--color-burgundy)", marginBottom: "4px" }}>
              Ready to engineer similar growth for your brand?
            </h3>
            <p style={{ color: "var(--color-warm-gray)", fontSize: "var(--text-sm)" }}>
              We partner with select visionary enterprises each quarter.
            </p>
          </div>

          <Button
            href={`/contact?project=${project.slug}`}
            variant="primary"
            size="md"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </>
  );
}
