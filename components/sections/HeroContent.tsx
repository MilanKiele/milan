"use client";

import { ArrowRight, Database, Cpu } from "lucide-react";
import { BracketBox } from "@/components/ui/BracketBox";
import { SquareBullet } from "@/components/ui/SquareBullet";
import { CheckListItem } from "@/components/ui/CheckListItem";
import { useInView } from "@/hooks/useInView";

export function HeroContent() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} aria-label="About Milan Kiele" className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-300">

      {/* ── Left column ─────────────────── */}
      <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-zinc-300 flex flex-col">
        <div className="p-8 pb-12 flex-grow">
          <div className={`flex items-center gap-4 mb-6 ${inView ? "animate-slide-left" : "opacity-0"}`}>
            <SquareBullet />
            <h2 className="font-mono text-lg uppercase tracking-widest font-bold text-zinc-900 leading-tight">
              Supercharging<br />Human + AI
            </h2>
          </div>
          <p className={`font-mono text-xs text-zinc-600 uppercase tracking-wider leading-relaxed mb-8 ${inView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            Driven by radical optimism. I build systems that leverage artificial intelligence for good,
            helping shape a better world through robust, production-ready technology.
          </p>
        </div>
        <div className="border-t border-zinc-300 flex flex-col">
          <CheckListItem text="Multi-Agent Systems" delay={100} />
          <CheckListItem text="Edge AI & ML Ops"   delay={200} />
          <CheckListItem text="Production Backends" delay={300} />
          <CheckListItem text="Data Orchestration"  delay={400} />
        </div>
        <div className={`p-6 border-t border-zinc-300 ${inView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
          <a
            href="#portfolio"
            className="flex items-center justify-center gap-2 w-full bg-[#0055FF] hover:bg-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 group"
          >
            VIEW ARCHITECTURE
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* ── Centre capsule visual ────────── */}
      <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-zinc-300 relative bg-zinc-50 min-h-[600px] flex items-center justify-center p-12 overflow-hidden">
        <div className={`relative w-full max-w-sm aspect-[1/1.5] border-2 border-zinc-300 rounded-t-full rounded-b-3xl bg-white shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden group ${inView ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <div className="scan-line" aria-hidden="true" />
          <div className="absolute top-20 w-full border-t border-zinc-200" />
          <div className="absolute bottom-20 w-full border-t border-zinc-200" />

          {/* Core element */}
          <button 
            type="button"
            className="relative z-10 w-48 h-48 border-4 border-[#0055FF] bg-white rounded-3xl shadow-[0_0_40px_rgba(0,85,255,0.2)] flex items-center justify-center transition-all duration-500 hover:scale-[1.15] hover:border-zinc-900 hover:shadow-[0_0_80px_rgba(0,85,255,0.4)] active:scale-95 group/robot focus:outline-none cursor-none animate-float hover:animate-none"
            data-visor="true"
            aria-label="Interact with Core System"
          >
            <div className="grid grid-cols-2 gap-4 group-hover/robot:gap-6 transition-all duration-500">
              <div className="w-8 h-8 bg-zinc-900 rounded-full group-hover/robot:bg-[#0055FF] transition-colors duration-500" />
              <div className="w-8 h-8 bg-zinc-900 rounded-full group-hover/robot:bg-[#0055FF] transition-colors duration-500" />
            </div>
            
            <div className="absolute -bottom-6 flex gap-2 group-hover/robot:-bottom-8 transition-all duration-500">
              <div className="w-2 h-2 bg-[#0055FF] animate-pulse-slow group-hover/robot:bg-zinc-900" />
              <div className="w-2 h-2 bg-[#0055FF] animate-pulse-slow delay-200 group-hover/robot:bg-zinc-900" />
              <div className="w-2 h-2 bg-zinc-300 animate-pulse-slow delay-400 group-hover/robot:bg-zinc-900" />
            </div>

            {/* Glowing inner core that scans on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 opacity-0 group-hover/robot:opacity-100 group-hover/robot:animate-[scan_1s_linear_infinite]" />
          </button>

          {/* Checkerboard */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex" aria-hidden="true">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-6 h-6 ${i % 2 === 0 ? "bg-zinc-200" : "bg-transparent"}`} />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 left-0 w-4 border-t border-zinc-400"  aria-hidden="true" />
        <div className="absolute top-1/2 right-0 w-4 border-t border-zinc-400" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 h-4 border-l border-zinc-400" aria-hidden="true" />
        <div className="absolute w-[120%] h-[120%] border border-zinc-200 rounded-full animate-spin-slow pointer-events-none opacity-30" aria-hidden="true" />
      </div>

      {/* ── Right column ─────────────────── */}
      <div className="lg:col-span-3 flex flex-col bg-[#EBEBEB]">
        <div className="p-8 border-b border-zinc-300 flex-grow">
          <div className={`flex items-center gap-4 mb-6 ${inView ? "animate-slide-right" : "opacity-0"}`}>
            <SquareBullet />
            <h2 className="font-mono text-lg uppercase tracking-widest font-bold text-zinc-900 leading-tight">
              Engineering<br />Execution
            </h2>
          </div>
          <p className={`font-mono text-xs text-zinc-500 uppercase tracking-wider leading-relaxed ${inView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            Building systems that survive real load, real users, and the full entropy of production environments.
          </p>
        </div>

        <div className="grid grid-cols-2 flex-grow min-h-[250px]">
          {[
            { n: "01", Icon: Database, label: "Robust Backend Architecture" },
            { n: "02", Icon: Cpu,      label: "Edge AI & HW Optimization" },
          ].map(({ n, Icon, label }, i) => (
            <div
              key={n}
              className={`p-6 flex flex-col justify-between relative hover:bg-white transition-colors duration-300 cursor-default group ${inView ? "animate-fade-up" : "opacity-0"} ${i === 0 ? "border-r border-zinc-300" : ""}`}
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <div className="flex justify-between items-start font-mono text-[10px] font-bold">
                <SquareBullet /> <span>{n}</span>
              </div>
              <BracketBox className="w-16 h-16 bg-zinc-100 flex items-center justify-center my-6 group-hover:border-[#0055FF] transition-colors duration-300">
                <Icon className="w-8 h-8 text-zinc-400 stroke-1 group-hover:text-[#0055FF] transition-colors duration-300" />
              </BracketBox>
              <p className="font-mono text-xs uppercase font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
