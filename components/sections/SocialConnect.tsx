"use client";

import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { SOCIAL_ICON_MAP } from "@/components/icons";

export function SocialConnect() {
  return (
    <section aria-labelledby="connect-heading" className="grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-300 bg-[#EBEBEB]">
      {/* Brand blurb */}
      <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-zinc-300 p-8 flex flex-col justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-[#0055FF]">
            <span className="font-bold text-xl font-mono">M</span>
          </div>
          <span className="font-bold uppercase tracking-widest text-sm">
            Milan Kiele<br />
            <span className="text-zinc-500 text-xs">Intelligence Labs</span>
          </span>
        </div>
        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
          Building the systems that power tomorrow&apos;s AI — one deliberate commit at a time.
        </p>
      </div>

      {/* Social cards */}
      <address className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 not-italic">
        {SOCIAL_LINKS.map(({ label, href, handle }, i) => {
          const Icon = SOCIAL_ICON_MAP[label];
          const isEmail = href.startsWith("mailto");
          return (
            <a
              key={label}
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer noopener"}
              aria-label={`${label} — ${handle}`}
              className="flex flex-col justify-between p-8 border-b sm:border-b-0 border-r-0 sm:border-r last:border-r-0 border-zinc-300 group hover:bg-[#0055FF] transition-colors duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                {Icon && <Icon className="w-7 h-7 text-zinc-700 group-hover:text-white transition-colors duration-300" />}
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-900 group-hover:text-white transition-colors duration-300 mb-1">
                  {label}
                </p>
                <p className="font-mono text-[10px] text-zinc-400 group-hover:text-blue-200 transition-colors duration-300 uppercase tracking-wide">
                  {handle}
                </p>
              </div>
            </a>
          );
        })}
      </address>
    </section>
  );
}
