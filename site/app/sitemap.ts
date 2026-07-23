import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: "https://continuity-of-care.smilingtimes.chatgpt.site/",
    lastModified: new Date("2026-07-22"),
    changeFrequency: "monthly",
    priority: 1,
  }];
}
