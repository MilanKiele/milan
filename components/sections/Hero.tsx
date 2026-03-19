"use client";

export function Hero() {
  return (
    <section
      id="mission"
      aria-labelledby="hero-heading"
      className="border-b border-zinc-300 relative overflow-hidden bg-white"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 p-8 lg:p-16 flex items-center relative">
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase tracking-[-0.05em] leading-[0.85] text-zinc-900 opacity-0 animate-[slideInLeft_0.7s_0.2s_both]"
            style={{ transform: "scaleX(1.2)", transformOrigin: "left" }}
          >
            PORTFOLIO
          </h1>
          {/* Decorative stacked lines */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 animate-fade-in delay-600">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-zinc-300 animate-fade-in"
                style={{ width: `${(5 - i) * 20}px`, animationDelay: `${800 + i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sub-headline */}
      <div className="border-t border-zinc-300 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8 border-b lg:border-b-0 lg:border-r border-zinc-300 p-8 flex items-center">
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest leading-relaxed animate-fade-up delay-500 cursor-blink">
            AI Engineer · Founder · Edge Systems Specialist · Based in Germany
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 p-8 flex items-center gap-4">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-zinc-600 animate-fade-up delay-700">
            Available for Collaboration
          </span>
        </div>
      </div>

      {/* Spinning corner dot */}
      <div
        className="absolute top-4 right-4 border border-zinc-300 w-8 h-8 rounded-full flex items-center justify-center animate-spin-slow"
        aria-hidden="true"
      >
        <div className="w-2 h-2 bg-zinc-900 rounded-full" />
      </div>
    </section>
  );
}
