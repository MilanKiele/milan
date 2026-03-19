"use client";

import { useInView } from "@/hooks/useInView";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";

function StatBlock({ value, suffix, label, index }: { value: number; suffix?: string; label: string; index: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`border-b lg:border-b-0 lg:border-r last:border-r-0 border-zinc-300 p-8 lg:p-12 flex flex-col gap-2 group hover:bg-white transition-colors duration-300 ${inView ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="font-mono text-5xl font-bold text-zinc-900 group-hover:text-[#0055FF] transition-colors duration-300">
        {inView ? <AnimatedCounter target={value} suffix={suffix ?? ""} /> : `0${suffix ?? ""}`}
      </div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Key metrics" className="grid grid-cols-2 lg:grid-cols-4 border-b border-zinc-300 bg-white">
      {STATS.map((stat, i) => (
        <StatBlock key={stat.label} {...stat} index={i} />
      ))}
    </section>
  );
}
