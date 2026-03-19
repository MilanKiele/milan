"use client";

import { Check } from "lucide-react";
import { BracketBox } from "./BracketBox";

export function CheckListItem({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <div
      className="px-8 py-6 border-b border-zinc-300 last:border-0 relative group flex items-center animate-fade-up overflow-hidden"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <div className="relative z-10 flex items-center gap-4 text-zinc-900 font-mono text-[10px] lg:text-[11px] uppercase tracking-wider font-bold transition-colors duration-300 group-hover:text-[#0055FF]">
        <Check className="w-5 h-5 text-[#0055FF] stroke-[3]" />
        <span className="truncate">{text}</span>
      </div>
    </div>
  );
}
