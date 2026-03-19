"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Mission",    href: "#mission" },
  { label: "Portfolio",  href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // Wait for fade-out animation to complete
  };

  // Close menu on click link
  const handleLinkClick = () => closeMenu();

  return (
    <>
      <nav
        className="grid grid-cols-12 border-b border-zinc-300 sticky top-0 bg-[#EBEBEB] z-50 animate-fade-in relative"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <div className="col-span-9 lg:col-span-3 border-r border-zinc-300 flex items-center p-6">
          <Link href="/" aria-label="Milan Kiele — Home" className="flex items-center gap-4">
            <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-[#0055FF] relative shrink-0 group hover:bg-[#0055FF] transition-colors duration-300">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#EBEBEB] group-hover:bg-zinc-900 transition-colors duration-300" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-[#EBEBEB] group-hover:bg-zinc-900 transition-colors duration-300" />
              <span className="font-bold text-xl font-mono text-[#0055FF] group-hover:text-white transition-colors duration-300">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold uppercase tracking-widest text-sm leading-none" translate="no">Milan Kiele</span>
              <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mt-1">Intelligence Labs</span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex lg:col-span-6 lg:border-r border-zinc-300 items-center justify-center gap-8 font-mono text-xs uppercase font-bold tracking-widest">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative hover:text-[#0055FF] transition-colors duration-200 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#0055FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Universal Menu Toggle (Desktop & Mobile) */}
        <div className="col-span-3 lg:col-span-3 flex items-center justify-end p-6">
          <button 
            className="p-2 text-zinc-900 hover:text-[#0055FF] focus:outline-none transition-colors duration-300"
            onClick={() => (!isOpen || isClosing) ? openMenu() : closeMenu()}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Universal Overlay Menu */}
      {isOpen && (
        <div className={`fixed inset-x-0 bottom-0 top-[89px] z-40 bg-[#EBEBEB] flex justify-center overflow-y-auto w-full ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}>
          <div className="w-full max-w-[1600px] min-h-full bg-[#EBEBEB] flex flex-col xl:flex-row relative border-l border-r border-zinc-300">
            
            {/* Left Side: Directory Nav */}
            <div className="flex-[0.6] border-b xl:border-b-0 xl:border-r border-zinc-300 p-6 lg:p-16 xl:p-24 flex flex-col justify-center">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 lg:mb-12 block mt-2 lg:mt-0">
                Directory
              </span>
              
              <div className="flex flex-col gap-4 lg:gap-12 ml-4 lg:ml-8 border-l border-zinc-300 pl-6 lg:pl-16 flex-grow justify-center pb-4 lg:pb-12">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <a
                    key={label}
                    href={href}
                    onClick={handleLinkClick}
                    className="flex items-start gap-4 lg:gap-12 group w-fit animate-slide-left"
                    style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                  >
                    <span className="font-mono text-[10px] lg:text-xs text-zinc-400 mt-2 lg:mt-3 xl:mt-4">
                      0{i + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-sans font-black uppercase tracking-tighter text-zinc-900 group-hover:text-[#0055FF] transition-colors leading-[0.85]">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side: Connectivity & Status */}
            <div className="flex-[0.4] p-6 lg:p-16 xl:p-24 flex flex-col bg-[#EBEBEB] justify-center">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 lg:mb-12 block mt-4 xl:mt-0">Connectivity</span>
              
              <div className="flex flex-col border-t border-zinc-300 animate-fade-up justify-center flex-grow">
                {/* Connectivity Links */}
                {[
                  { name: "LinkedIn / Milan-Kiele", href: "https://www.linkedin.com/in/milankiele" },
                  { name: "GitHub / MK-Intel", href: "https://github.com/MilanKiele" },
                  { name: "mail@milankiele.com", href: "mailto:mail@milankiele.com" }
                ].map((link, i) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-4 lg:py-8 border-b border-zinc-300 group hover:pl-4 transition-all"
                    style={{ animationDelay: `${(i+4) * 100}ms`, animationFillMode: "both" }}
                  >
                    <span className="font-mono text-[10px] lg:text-sm font-bold uppercase tracking-wider text-zinc-900 group-hover:text-[#0055FF]">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#0055FF] transition-colors" />
                  </a>
                ))}
              </div>

              {/* Current Status Box */}
              <div className="mt-8 lg:mt-16 xl:mt-auto border border-zinc-300 p-6 lg:p-12 bg-white group hover:border-[#0055FF] transition-colors animate-fade-up delay-700 w-full mb-4 lg:mb-0">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 block">Current Status</span>
                <p className="font-mono text-xs lg:text-sm text-zinc-900 uppercase tracking-wider leading-relaxed">
                  Available for high-stakes intelligence architecture<br className="hidden xl:block" /> and systems engineering consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
