import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/Button";
import styles from "./FeaturedWork.module.css";

export function FeaturedWork() {
  return (
    <section className={styles.featuredSection} aria-label="Selected Case Studies and Client Work">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className={styles.sectionLabel}>Selected Architectural Work</span>
          <h2 className={styles.sectionHeading}>
            Architectural Systems & Design Demonstrations.
          </h2>
          <p className={styles.sectionLead}>
            Explore our flagship digital platforms, headless architectures, and
            brand systems engineered to international standards.
          </p>
        </div>

        {/* Projects List */}
        <div className={styles.projectsList}>
          {PORTFOLIO_DATA.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={project.slug}
                className={`${styles.projectItem} ${
                  isReversed ? styles.projectItemReversed : ""
                }`}
              >
                {/* Visual Card */}
                <div className={styles.visualWrapper}>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} — ${project.tagline}`}
                      width={900}
                      height={1150}
                      className={styles.visualImage}
                      sizes="(max-width: 900px) 100vw, 550px"
                    />
                  </Link>

                  <div className={styles.metricBadge}>
                    <span>{project.metricHighlight}</span>
                  </div>
                </div>

                {/* Info Card */}
                <div className={styles.infoWrapper}>
                  <div className={styles.metaRow}>
                    <span className={styles.categoryTag}>{project.category}</span>
                    <span className={styles.clientName}>• {project.client}</span>
                  </div>

                  <h3 className={styles.projectTitle}>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className={styles.projectTagline}>{project.tagline}</p>
                  <p className={styles.projectOverview}>{project.overview}</p>

                  {/* Highlights Grid */}
                  <div className={styles.metricsGrid}>
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className={styles.metricVal}>{m.value}</div>
                        <div className={styles.metricLbl}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className={styles.tagsRow}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.tagPill}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div>
                    <Button
                      href={`/portfolio/${project.slug}`}
                      variant="primary"
                      size="md"
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
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomAction}>
          <Button
            href="/portfolio"
            variant="outline"
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
            Explore All Case Studies & Results
          </Button>
        </div>
      </div>
    </section>
  );
}
