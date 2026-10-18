import type { MetadataRoute } from "next";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import { PORTFOLIO_DATA } from "@/lib/portfolio-data";
import { INSIGHT_ARTICLES } from "@/lib/insights-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rayvixdigital.com";
  const currentDate = new Date("2026-10-18T00:00:00.000Z");

  // Core static pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    }
  ];

  // Dynamic Service pages (9)
  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((serv) => ({
    url: `${baseUrl}/services/${serv.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // Dynamic Case Studies (4)
  const portfolioRoutes: MetadataRoute.Sitemap = PORTFOLIO_DATA.map((study) => ({
    url: `${baseUrl}/portfolio/${study.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  // Dynamic Insights Articles (4)
  const insightRoutes: MetadataRoute.Sitemap = INSIGHT_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...coreRoutes, ...serviceRoutes, ...portfolioRoutes, ...insightRoutes];
}
