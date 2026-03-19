"use client";

import { ArrowUpRight, Zap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact">
      {/* Links grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-zinc-300 text-xs font-mono font-bold uppercase tracking-widest text-zinc-600 bg-[#EBEBEB]">
        <nav aria-label="Ecosystem" className="border-b lg:border-b-0 md:border-r border-zinc-300 p-8 flex flex-col gap-4">
          <span className="text-[10px] text-zinc-400 mb-2">Ecosystem</span>
          <a href="#mission"    className="hover:text-zinc-900 hover:translate-x-1 transition-all duration-200">Intelligence API</a>
          <a href="#portfolio"  className="hover:text-zinc-900 hover:translate-x-1 transition-all duration-200">Edge Systems</a>
        </nav>

        <nav aria-label="Quick links" className="border-b lg:border-b-0 md:border-r border-zinc-300 p-8 flex flex-col gap-4">
          <span className="text-[10px] text-zinc-400 mb-2">Quick Links</span>
          <a href="#" className="hover:text-zinc-900 hover:translate-x-1 transition-all duration-200">Home</a>
          <a href="https://3d.storsko.com" target="_blank" rel="noreferrer noopener" className="hover:text-zinc-900 hover:translate-x-1 transition-all duration-200">Storsko</a>
          <a href="https://milankiele.com" target="_blank" rel="noreferrer noopener" className="hover:text-zinc-900 hover:translate-x-1 transition-all duration-200">Legacy Site</a>
        </nav>

        <nav aria-label="Status" className="border-b md:border-b-0 lg:border-r border-zinc-300 p-8 flex flex-col gap-4">
          <span className="text-[10px] text-zinc-400 mb-2">Status</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" aria-hidden="true" />
            Available
          </span>
          <span>Based in Germany</span>
          <span>English C2</span>
        </nav>

        <nav aria-label="Social" className="p-8 flex flex-col gap-4 md:items-end justify-between">
          <div className="flex flex-col gap-4 md:items-end">
            <a href="https://github.com/MilanKiele"             target="_blank" rel="noreferrer noopener" className="hover:text-zinc-900 flex items-center gap-2 group">GITHUB     <ArrowUpRight className="w-3 h-3 group-hover:rotate-12 transition-transform" /></a>
            <a href="https://www.linkedin.com/in/milankiele"    target="_blank" rel="noreferrer noopener" className="hover:text-zinc-900 flex items-center gap-2 group">LINKEDIN   <ArrowUpRight className="w-3 h-3 group-hover:rotate-12 transition-transform" /></a>
          </div>
          <a
            href="mailto:mail@milankiele.com"
            className="mt-6 bg-[#0055FF] hover:bg-zinc-900 text-white font-mono text-[10px] lg:text-xs font-bold uppercase tracking-widest px-4 py-4 transition-all duration-300 text-center w-full max-w-full md:max-w-[250px]"
          >
            mail@milankiele.com
          </a>
        </nav>
      </div>

      {/* Copyright bar */}
      <div className="p-8 font-mono text-[10px] text-zinc-500 uppercase tracking-widest bg-[#EBEBEB] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span>© {year} ALL RIGHTS RESERVED BY <span translate="no">MILAN KIELE</span>.</span>
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-[#0055FF]" aria-hidden="true" />
          <span>Intelligence Labs</span>
        </div>
      </div>

      {/* Massive brand wordmark */}
      <div
        className="border-t border-zinc-300 bg-[#EBEBEB] overflow-hidden flex items-center justify-center py-4 relative group"
        aria-hidden="true"
      >
        <div className="absolute top-2 left-2 w-3 h-3 bg-[#0055FF] animate-pulse-slow" />
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#0055FF] animate-pulse-slow delay-200" />
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#0055FF] animate-pulse-slow delay-400" />
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#0055FF] animate-pulse-slow delay-600" />
        <span
          className="font-sans font-black uppercase text-zinc-900 leading-none tracking-tighter m-0 p-0 group-hover:text-[#0055FF] transition-colors duration-700 select-none w-full text-center"
          style={{ fontSize: "clamp(4rem, 20vw, 22rem)", transform: "scaleX(1.2)" }}
          translate="no"
        >
          MILAN
        </span>
      </div>
    </footer>
  );
}
