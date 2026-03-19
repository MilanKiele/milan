"use client";

import { TICKER_ITEMS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

export function Ticker() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`overflow-hidden border-y border-zinc-300 bg-[#0055FF] py-3 transition-opacity duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}
      aria-hidden="true"
    >
      <div className="marquee-track animate-marquee">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6 shrink-0">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">
              {item}
            </span>
            <div className="w-1 h-1 bg-white/50 rounded-full shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
