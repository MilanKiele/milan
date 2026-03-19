import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://milankiele.com";
  const now = new Date().toISOString();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "en-US": base,
          "de-DE": base,
        },
      },
    },
    // Deep anchor sections — useful for AI crawlers to surface specific content
    {
      url: `${base}/#portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#experience`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/#skills`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
