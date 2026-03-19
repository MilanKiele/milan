"use client";

import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SquareBullet } from "@/components/ui/SquareBullet";
import { TIMELINE } from "@/lib/data";

function TimelineItem({
  year, org, title, desc, tags, index,
}: {
  year: string; org: string; title: string; desc: string; tags: string[]; index: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-12 border-b border-zinc-300 last:border-0 group ${inView ? (index % 2 === 0 ? "animate-slide-left" : "animate-slide-right") : "opacity-0"}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="col-span-12 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-zinc-300 p-8 flex items-start pt-10">
        <time className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">{year}</time>
      </div>
      <div className="col-span-12 lg:col-span-7 border-b lg:border-b-0 lg:border-r border-zinc-300 p-8 group-hover:bg-white transition-colors duration-300">
        <p className="font-mono text-[10px] text-[#0055FF] uppercase font-bold tracking-widest mb-2">{org}</p>
        <h3 className="font-sans font-black text-xl uppercase tracking-tight mb-4 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="font-mono text-xs text-zinc-600 uppercase tracking-wider leading-relaxed">{desc}</p>
      </div>
      <ul className="col-span-12 lg:col-span-3 p-8 flex flex-col gap-3 justify-center list-none">
        {tags.map((tag) => (
          <li key={tag} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#0055FF] shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-zinc-600">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-zinc-300 bg-white">
      <div className="grid grid-cols-12 border-b border-zinc-300 p-8 lg:p-12">
        <div className="col-span-12">
          <div className="flex items-center gap-4 mb-4">
            <SquareBullet />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">Career Track</span>
          </div>
          <h2
            id="experience-heading"
            className="text-5xl lg:text-[5rem] font-black uppercase tracking-[-0.05em] leading-[0.85] text-zinc-900 animate-slide-left"
            style={{ transform: "scaleX(1.1)", transformOrigin: "left" }}
          >
            EXPERIENCE<br /><span className="text-zinc-300">TIMELINE</span>
          </h2>
        </div>
      </div>
      <ol className="list-none">
        {TIMELINE.map((item, i) => (
          <TimelineItem key={item.title} {...item} index={i} />
        ))}
      </ol>
    </section>
  );
}
