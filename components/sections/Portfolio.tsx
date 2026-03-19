"use client";

import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { BracketBox } from "@/components/ui/BracketBox";
import { SquareBullet } from "@/components/ui/SquareBullet";
import { PORTFOLIO_CARDS } from "@/lib/data";

function PortfolioCard({
  title, role, href, description, stats, isLast, index,
}: {
  title: string; role: string; href: string | null;
  description: string; stats: { label: string; value: string }[];
  isLast: boolean; index: number;
}) {
  const { ref, inView } = useInView();
  return (
    <article
      ref={ref}
      className={`p-8 flex flex-col relative group transition-all duration-500 ${!isLast ? "border-b lg:border-b-0 lg:border-r border-zinc-300" : ""} ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <BracketBox className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <header className="flex justify-between items-start mb-10">
        <div>
          <h3 className="font-sans font-black text-2xl uppercase tracking-tighter mb-1 group-hover:text-[#0055FF] transition-colors duration-300">{title}</h3>
          <p className="font-mono text-[10px] text-[#0055FF] uppercase font-bold tracking-widest">{role}</p>
        </div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Visit ${title}`}
            className="w-8 h-8 border border-zinc-300 flex items-center justify-center hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF] transition-all duration-300 shrink-0 hover:rotate-12"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </header>

      <p className="font-mono text-xs uppercase text-zinc-600 leading-relaxed mb-10 flex-grow">{description}</p>

      <dl className="grid grid-cols-2 gap-4 border-t border-zinc-300 pt-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</dt>
            <dd className="font-mono text-sm font-bold uppercase">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      {/* Heading */}
      <div className="grid grid-cols-12 border-b border-zinc-300 bg-[#EBEBEB]">
        <div className="col-span-12 p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-4 animate-fade-in">
            <SquareBullet />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">End-to-End Capabilities</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2
              id="portfolio-heading"
              className="text-4xl md:text-5xl lg:text-[5rem] font-black uppercase tracking-[-0.05em] leading-[0.85] text-zinc-900 animate-slide-left"
              style={{ transform: "scaleX(1.1)", transformOrigin: "left" }}
            >
              INTELLIGENCE<br />PORTFOLIO
            </h2>
            <BracketBox className="bg-zinc-900 text-white p-6 inline-flex flex-col items-center self-start lg:self-auto animate-scale-in delay-300">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Featured Projects</span>
              <span className="text-4xl font-mono font-bold">02</span>
            </BracketBox>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-zinc-300">
        {PORTFOLIO_CARDS.map((card, idx) => (
          <PortfolioCard
            key={card.title}
            {...card}
            isLast={idx === PORTFOLIO_CARDS.length - 1}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
