import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHT_ARTICLES, type InsightArticle } from "@/lib/insights-data";
import styles from "./article.module.css";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Rayvix Digital Journal"
    };
  }

  return {
    title: `${article.title} | Rayvix Digital Journal`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: `${article.title} | Rayvix Digital Journal`,
      description: article.excerpt,
      url: `https://rayvixdigital.com/insights/${article.slug}`,
      siteName: "Rayvix Digital",
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name]
    },
    alternates: {
      canonical: `/insights/${article.slug}`,
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (up to 2 articles excluding current)
  const relatedArticles = INSIGHT_ARTICLES.filter(
    (a) => a.slug !== article.slug
  ).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "Rayvix Digital",
      url: "https://rayvixdigital.com"
    },
    datePublished: article.publishedDate,
    articleSection: article.category,
    keywords: article.tags.join(", ")
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Schema.org TechArticle JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ────────────────────────────────────────────────────────────
          1. ARTICLE HEADER
          ──────────────────────────────────────────────────────────── */}
      <header className={styles.articleHeader} aria-label="Essay Overview">
        <div className={styles.headerGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.readingContainer}>
            {/* Breadcrumb Navigation */}
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
              <Link href="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </span>
              <Link href="/insights" className={styles.breadcrumbLink}>
                Insights
              </Link>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </span>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {article.title}
              </span>
            </nav>

            <div className={styles.headerMeta}>
              <span className={styles.categoryBadge}>{article.category}</span>
              <span className={styles.readTime}>{article.readTime}</span>
              <span style={{ color: "rgba(200, 173, 141, 0.4)" }}>•</span>
              <span className={styles.readTime}>{article.publishedDate}</span>
            </div>

            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.subtitle}>{article.subtitle}</p>

            <div className={styles.authorStrip}>
              <div className={styles.authorAvatar} aria-hidden="true">
                {article.author.avatarInitials}
              </div>
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>{article.author.name}</span>
                <span className={styles.authorRole}>{article.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ────────────────────────────────────────────────────────────
          2. ARTICLE BODY CONTENT
          ──────────────────────────────────────────────────────────── */}
      <main className={styles.contentSection} aria-label="Essay Body">
        <div className={styles.container}>
          <div className={styles.readingContainer}>
            {/* Key Takeaways Box */}
            <aside className={styles.takeawaysBox} aria-label="Executive Takeaways">
              <h2 className={styles.takeawaysHeading}>Executive Takeaways</h2>
              <ul className={styles.takeawaysList}>
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className={styles.takeawayItem}>
                    <span className={styles.takeawayCheck} aria-hidden="true">
                      ✓
                    </span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Structured Sections */}
            <article className={styles.articleBody}>
              {article.sections.map((section, sIdx) => (
                <section key={sIdx} className={styles.sectionBlock}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className={styles.paragraph}>
                      {p}
                    </p>
                  ))}

                  {/* Optional Pull Quote */}
                  {section.pullQuote && (
                    <aside className={styles.pullQuote}>
                      <blockquote className={styles.pullQuoteText}>
                        “{section.pullQuote}”
                      </blockquote>
                    </aside>
                  )}

                  {/* Optional Code Snippet */}
                  {section.codeSnippet && (
                    <div className={styles.codeBlockWrap}>
                      <div className={styles.codeHeader}>
                        <span>{section.codeSnippet.language}</span>
                        <span>Architectural Snippet</span>
                      </div>
                      <pre className={styles.codeContent}>
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                      <div className={styles.codeCaption}>
                        {section.codeSnippet.caption}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </article>

            {/* Tags Strip */}
            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>Filed Under:</span>
              {article.tags.map((tag, tIdx) => (
                <span key={tIdx} className={styles.tagPill}>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Bio Card */}
            <aside className={styles.authorBioCard} aria-label="Author Profile">
              <div className={styles.bioAvatar} aria-hidden="true">
                {article.author.avatarInitials}
              </div>
              <div>
                <h3 className={styles.bioName}>{article.author.name}</h3>
                <div className={styles.bioRole}>{article.author.role} • Rayvix Digital</div>
                <p className={styles.bioDesc}>
                  Directing software systems architecture and brand engineering at Rayvix Digital.
                  Obsessed with zero-bloat Next.js platforms, typographic harmony, and compounding
                  commercial leverage.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ────────────────────────────────────────────────────────────
          3. RELATED ESSAYS & STUDIO CTA
          ──────────────────────────────────────────────────────────── */}
      <section className={styles.relatedSection} aria-label="Related Architectural Essays">
        <div className={styles.container}>
          <div className={styles.readingContainer}>
            <div className={styles.relatedHeader}>
              <h2 className={styles.relatedTitle}>Further Reading</h2>
              <Link href="/insights" className={styles.relatedAllLink}>
                View All Publications →
              </Link>
            </div>

            <div className={styles.relatedGrid}>
              {relatedArticles.map((rel: InsightArticle) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-xl)",
                    padding: "var(--space-6)",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      letterSpacing: "var(--tracking-wider)",
                      textTransform: "uppercase",
                      color: "var(--color-champagne-dark)",
                      fontWeight: "var(--font-semibold)",
                      marginBottom: "var(--space-2)"
                    }}
                  >
                    {rel.category}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-lg)",
                      color: "var(--color-burgundy)",
                      lineHeight: "var(--leading-snug)",
                      marginBottom: "var(--space-3)"
                    }}
                  >
                    {rel.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-burgundy)",
                      fontWeight: "var(--font-medium)",
                      marginTop: "auto"
                    }}
                  >
                    Read Essay →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
