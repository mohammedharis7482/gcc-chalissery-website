import type { MetadataRoute } from "next";

import { primaryNav, siteConfig } from "@/data/site";
import { newsItems } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set([
    "/",
    ...primaryNav.map((item) => item.href),
    "/admissions",
    ...newsItems.map((item) => `/news/${item.slug}`),
  ]));

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
