"use client";

import { ArrowRight } from "lucide-react";
import { PHILOSOPHY_PRINCIPLES } from "@/lib/data";

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="border-b border-zinc-300 bg-zinc-900 text-white overflow-hidden relative"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5 w-full h-full" aria-hidden="true">
        {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white h-full" />)}
      </div>

      <div className="grid grid-cols-12 relative z-10">
        {/* Manifesto */}
        <div className="col-span-12 lg:col-span-8 border-b lg:border-b-0 lg:border-r border-zinc-700 p-12 lg:p-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-[#0055FF]" aria-hidden="true" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">Philosophy</span>
          </div>
          <blockquote>
            <p
              id="philosophy-heading"
              className="text-3xl lg:text-5xl font-black uppercase leading-[1.1] tracking-tight animate-slide-left"
            >
              EVERY SYSTEM IS<br />A PRODUCT OF<br />
              <span className="text-[#0055FF]">DELIBERATE</span><br />CHOICES.
            </p>
          </blockquote>
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider leading-relaxed mt-8 max-w-lg animate-fade-up delay-300">
            I don&apos;t build demos. I architect systems that survive contact with reality — with users, load, edge
            cases, and organization entropy. Production is where design is truly tested.
          </p>
        </div>

        {/* Principles */}
        <nav aria-label="Engineering principles" className="col-span-12 lg:col-span-4 p-12 flex flex-col justify-between gap-8">
          {PHILOSOPHY_PRINCIPLES.map(({ n, t }, i) => (
            <div
              key={n}
              className="flex items-center gap-4 py-4 border-b border-zinc-700 last:border-0 group animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className="font-mono text-[10px] text-zinc-500 font-bold">{n}</span>
              <span className="font-mono text-sm uppercase tracking-widest font-bold text-white group-hover:text-[#0055FF] transition-colors duration-300">{t}</span>
              <ArrowRight className="w-3 h-3 text-zinc-700 ml-auto group-hover:text-[#0055FF] group-hover:translate-x-1 transition-all duration-300" />
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
