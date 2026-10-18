"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyDetail } from "@/lib/portfolio-data";
import styles from "./PortfolioFilter.module.css";

interface PortfolioFilterProps {
  initialProjects: CaseStudyDetail[];
}

const CATEGORIES = [
  "All",
  "Web Development",
  "Brand Identity",
  "Digital Systems",
  "Creative Direction",
  "SEO & Marketing",
];

export function PortfolioFilter({ initialProjects }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div className={styles.filterContainer}>
      {/* Category Tabs */}
      <div className={styles.filterTabs} role="tablist" aria-label="Filter case studies by discipline">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            className={`${styles.tabButton} ${
              activeCategory === cat ? styles.tabButtonActive : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className={styles.card}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={styles.imageWrap}>
              <Image
                src={project.heroImage}
                alt={`${project.title} — ${project.tagline}`}
                width={900}
                height={600}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className={styles.badge}>{project.metricHighlight}</div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.metaRow}>
                <span className={styles.categoryTag}>{project.category}</span>
                <span className={styles.year}>{project.year}</span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.tagline}>{project.tagline}</p>
              <p className={styles.overview}>{project.overview}</p>

              <div className={styles.metricsStrip}>
                {project.metrics.slice(0, 2).map((m) => (
                  <div key={m.label}>
                    <div className={styles.metricValue}>{m.value}</div>
                    <div className={styles.metricLabel}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div className={styles.linkRow}>
                <span>Explore Case Study</span>
                <svg
                  className={styles.arrow}
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
