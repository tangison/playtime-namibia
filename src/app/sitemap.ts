import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages =
    process.env.DEMO_MODE === "true"
      ? [{ path: "/", priority: 1 }, { path: "/coaches", priority: 0.7 }]
      : [
          { path: "/", priority: 1 },
          { path: "/about", priority: 0.9 },
          { path: "/programmes", priority: 0.9 },
          { path: "/programmes/school-partnerships", priority: 0.8 },
          { path: "/facilities", priority: 0.8 },
          { path: "/gallery", priority: 0.7 },
          { path: "/coaches", priority: 0.7 },
          { path: "/coaches-corner", priority: 0.6 },
          { path: "/partners", priority: 0.7 },
          { path: "/events", priority: 0.8 },
          { path: "/get-involved", priority: 0.9 },
          { path: "/contact", priority: 0.8 },
        ];
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));
}
