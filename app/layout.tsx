import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/ui/Cursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ─── METADATA ─────────────────────────────────────────────────────────────────
// Comprehensive SEO + Open Graph + Twitter Card + GEO targeting

const BASE_URL = "https://milankiele.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "Milan Kiele — AI Engineer, Founder & Edge Systems Specialist",
    template: "%s | Milan Kiele",
  },
  description:
    "Milan Kiele is a full-stack AI engineer and founder based in Germany. He builds production-ready multi-agent systems (LangGraph, LangChain), edge AI infrastructure (NVIDIA TensorRT AGX Orin), and scalable backends (FastAPI, RabbitMQ, PostgreSQL).",
  keywords: [
    // Role / identity
    "Milan Kiele",
    "AI Engineer Germany",
    "AI Engineer Portfolio",
    "Full Stack AI Developer",
    // Technologies
    "LangGraph",
    "LangChain",
    "Multi-Agent Systems",
    "Edge AI",
    "NVIDIA TensorRT",
    "AGX Orin",
    "FastAPI",
    "MLOps",
    "RAG Pipeline",
    "LLM Fine-Tuning",
    // Products
    "Storsko AI Platform",
    "Hensoldt AI",
    // Long-tail / GEO
    "AI engineer Munich",
    "AI engineer Berlin",
    "AI startup founder Germany",
    "production backend engineer Germany",
    "freelance AI engineer Europe",
  ],
  authors: [{ name: "Milan Kiele", url: BASE_URL }],
  creator: "Milan Kiele",
  publisher: "Milan Kiele — Intelligence Labs",
  category: "Technology",

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
    languages: { "en-US": BASE_URL, "en-GB": BASE_URL, "de-DE": BASE_URL },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    url: BASE_URL,
    siteName: "Milan Kiele — Intelligence Labs",
    title: "Milan Kiele — AI Engineer, Founder & Edge Systems Specialist",
    description:
      "Building production-ready multi-agent AI systems, edge AI infrastructure, and scalable backends. Founder of Storsko (3,000+ users). Based in Germany.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Milan Kiele — AI Engineer & Founder",
        type: "image/png",
      },
    ],
    locale: "en_US",
    firstName: "Milan",
    lastName: "Kiele",
    username: "MilanKiele",
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@milankiele",
    creator: "@milankiele",
    title: "Milan Kiele — AI Engineer & Founder",
    description:
      "Building multi-agent AI, edge AI infrastructure, and production backends. Founder of Storsko.",
    images: [`${BASE_URL}/og-image.png`],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // ── Verification (add site IDs when available) ────────────────────────────
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_ID",
    // yandex: "YOUR_YANDEX_ID",
  },

  // ── GEO / geographic targeting ────────────────────────────────────────────
  // Used by some crawlers and local search engines
  other: {
    "geo.region": "DE",                // ISO 3166-2 Germany
    "geo.placename": "Germany",
    "geo.position": "51.1657;10.4515", // Approx. Germany center
    "ICBM": "51.1657, 10.4515",
    "DC.language": "en",
    "DC.creator": "Milan Kiele",
    "DC.subject": "AI Engineering, Multi-Agent Systems, Edge AI, Production Backends",
    "DC.description":
      "Portfolio of Milan Kiele — AI Engineer, Founder, and Edge Systems Specialist.",
    // AI crawler friendly tags (GEO — Generative Engine Optimization)
    "og:locale:alternate": "de_DE",
    "article:author": "Milan Kiele",
    "profile:first_name": "Milan",
    "profile:last_name": "Kiele",
    "profile:username": "MilanKiele",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* GEO meta — rendered directly for legacy support */}
        <meta name="geo.region"    content="DE" />
        <meta name="geo.placename" content="Germany" />
        <meta name="ICBM"          content="51.1657, 10.4515" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
