"use client";

import { Terminal, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SquareBullet } from "@/components/ui/SquareBullet";
import { SKILLS } from "@/lib/data";

function SkillCard({
  icon: Icon,
  label,
  items,
  index,
  inView,
}: {
  icon: React.ElementType;
  label: string;
  items: string[];
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`border border-zinc-300 p-8 flex flex-col gap-6 bg-[#EBEBEB] group transition-colors hover:border-[#0055FF] ${
        inView ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center group-hover:bg-[#0055FF] transition-colors duration-300">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest font-bold text-zinc-500">
          {label}
        </span>
      </div>
      <ul className="list-none flex flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <ChevronRight className="w-4 h-4 text-[#0055FF] shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-[#EBEBEB]">
      <div className="grid grid-cols-12 border-b border-t border-zinc-300 p-8 lg:p-12 bg-[#EBEBEB]">
        <div className="col-span-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <SquareBullet />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">
                Technical Depth
              </span>
            </div>
            <h2
              id="skills-heading"
              className="text-4xl md:text-5xl lg:text-[5rem] font-black uppercase tracking-[-0.05em] leading-[0.85] text-zinc-900 animate-slide-left"
              style={{ transform: "scaleX(1.1)", transformOrigin: "left" }}
            >
              SKILL<br />
              <span className="text-zinc-400">MATRIX</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 animate-fade-in delay-300">
            <Terminal className="w-5 h-5 text-zinc-400" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Full-Stack AI Engineering
            </span>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-300 border-b border-zinc-300 relative z-10"
      >
        {SKILLS.map((skill, i) => (
          <div key={skill.label} className="bg-[#EBEBEB]">
            <SkillCard {...skill} index={i} inView={inView} />
          </div>
        ))}
      </div>

    </section>
  );
}
