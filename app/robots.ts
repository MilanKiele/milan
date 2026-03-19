import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // Allow all major AI crawlers explicitly
      { userAgent: "GPTBot",         allow: "/" },
      { userAgent: "ChatGPT-User",   allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot",  allow: "/" },
      { userAgent: "anthropic-ai",   allow: "/" },
      { userAgent: "ClaudeBot",      allow: "/" },
      { userAgent: "Applebot",       allow: "/" },
    ],
    sitemap: "https://milankiele.com/sitemap.xml",
    host: "https://milankiele.com",
  };
}
