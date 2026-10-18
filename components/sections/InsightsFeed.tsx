"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  INSIGHT_CATEGORIES,
  INSIGHT_ARTICLES,
  type InsightArticle
} from "@/lib/insights-data";
import styles from "./InsightsFeed.module.css";

export function InsightsFeed() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Publications");

  const filteredArticles =
    selectedCategory === "All Publications"
      ? INSIGHT_ARTICLES
      : INSIGHT_ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <div className={styles.feedRoot}>
      {/* Category Filter Pills */}
      <div
        className={styles.filterWrap}
        role="tablist"
        aria-label="Filter insights by discipline"
      >
        <div className={styles.pillsList}>
          {INSIGHT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterBtn} ${
                  isActive ? styles.filterBtnActive : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className={styles.articlesGrid}>
          {filteredArticles.map((article: InsightArticle) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className={styles.articleCard}
            >
              <div className={styles.articleMeta}>
                <span className={styles.categoryBadge}>{article.category}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>

              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              <div className={styles.articleFooter}>
                <div className={styles.authorBlock}>
                  <div className={styles.authorAvatar} aria-hidden="true">
                    {article.author.avatarInitials}
                  </div>
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{article.author.name}</span>
                    <span className={styles.publishDate}>{article.publishedDate}</span>
                  </div>
                </div>

                <span className={styles.readLink}>
                  Read Essay
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>No essays published in this category yet.</p>
        </div>
      )}
    </div>
  );
}
