import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { HeroContent } from "@/components/sections/HeroContent";
import { Stats } from "@/components/sections/Stats";
import { Portfolio } from "@/components/sections/Portfolio";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Philosophy } from "@/components/sections/Philosophy";
import { SocialConnect } from "@/components/sections/SocialConnect";
import { Footer } from "@/components/sections/Footer";
import { Spacer } from "@/components/ui/Spacer";

// JSON-LD structured data — rendered server-side for crawlers
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://milankiele.com/#person",
      name: "Milan Kiele",
      url: "https://milankiele.com",
      image: "https://milankiele.com/og-image.png",
      sameAs: [
        "https://github.com/MilanKiele",
        "https://www.linkedin.com/in/milankiele",
        "https://x.com/milankiele",
      ],
      jobTitle: "AI Engineer & Founder",
      worksFor: {
        "@type": "Organization",
        name: "Storsko",
        url: "https://3d.storsko.com",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Multi-Agent Systems",
        "Edge AI",
        "LangGraph",
        "FastAPI",
        "NVIDIA TensorRT",
        "Machine Learning",
        "Production Engineering",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "DE",
        addressRegion: "Germany",
      },
      email: "mail@milankiele.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://milankiele.com/#website",
      url: "https://milankiele.com",
      name: "Milan Kiele — Intelligence Labs",
      description:
        "Portfolio of Milan Kiele — AI Engineer, Founder, and Edge Systems Specialist building production-ready multi-agent systems and edge AI infrastructure.",
      publisher: { "@id": "https://milankiele.com/#person" },
      inLanguage: "en",
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD — injected into <head> by Next.js when placed in RSC */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#EBEBEB] text-zinc-900 font-sans selection:bg-[#0055FF] selection:text-white">
        <div className="max-w-[1600px] mx-auto border-l border-r border-zinc-300 min-h-screen flex flex-col">
          <Navbar />
          <main>
            <Hero />
            <Ticker />
            <HeroContent />
            <Stats />
            <Portfolio />
            <Spacer />
            <Experience />
            <Skills />
            <Spacer />
            <Philosophy />
            <SocialConnect />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
