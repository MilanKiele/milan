"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const pathname = usePathname();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (e.g. mice)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    
    setIsDesktop(true);
    document.documentElement.classList.add("custom-cursor-active");

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    // Hide cursor when leaving the window
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [pathname]);

  if (!isDesktop || !isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <div className="absolute w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[#0055FF] rounded-full" />
      </div>
      
      {/* Static Tracking Ring */}
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        <div className="absolute w-10 h-10 -ml-5 -mt-5 border border-zinc-400/50 rounded-full flex items-center justify-center transition-all duration-300 ease-out" />
      </div>
    </>
  );
}
