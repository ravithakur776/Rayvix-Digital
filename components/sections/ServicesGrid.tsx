import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={styles.servicesSection} aria-label="Studio Capabilities and Service Offerings">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <span className={styles.sectionLabel}>Capabilities & Disciplines</span>
          <h2 className={styles.sectionHeading}>
            End-to-End Digital Mastery. Zero Compromises.
          </h2>
          <p className={styles.sectionLead}>
            We combine strategic vision, creative artistry, and robust engineering
            to deliver bespoke digital platforms and automated systems that accelerate market growth.
          </p>
        </div>

        {/* 9-Cards Interactive Grid */}
        <div className={styles.grid}>
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.card}
              aria-label={`Explore ${service.title} services`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{service.number}</span>
                <span className={styles.tag}>{service.shortTag}</span>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              {/* Top Deliverables */}
              <div className={styles.deliverables}>
                {service.deliverables.slice(0, 3).map((item) => (
                  <span key={item} className={styles.deliverablePill}>
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Link Footer */}
              <div className={styles.cardFooter}>
                <span>Explore Capability</span>
                <svg
                  className={styles.arrowIcon}
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section Action Bar */}
        <div className={styles.bottomBar}>
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.25rem", color: "var(--color-burgundy)", marginBottom: "4px" }}>
              Require a Custom Multi-Disciplinary Partnership?
            </h4>
            <p className={styles.bottomText}>
              We craft tailored engagement models combining web architecture, brand identity, and automated systems for scaling enterprises.
            </p>
          </div>

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
            Full Capabilities & Methodology
          </Button>
        </div>
      </div>
    </section>
  );
}
