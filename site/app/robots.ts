import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://continuity-of-care.smilingtimes.chatgpt.site/sitemap.xml",
    host: "https://continuity-of-care.smilingtimes.chatgpt.site",
  };
}
