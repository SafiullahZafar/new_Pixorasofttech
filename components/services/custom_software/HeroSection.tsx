"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bannerRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setMousePos({ x, y });
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleWords = ["Custom", "Software", "Development"];
  const servicesLeft = ["Web Applications", "SaaS Platforms", "API Development"];
  const servicesRight = ["CMS Solutions", "Automation Tools"];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-transparent pt-18 md:pt-16 lg:pt-40 pb-12 px-6 md:px-12 lg:px-10 text-[#131927] overflow-hidden"
    >
      <div className="max-w-[2440px] mx-auto">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tight leading-[0.98] text-[#131927] flex flex-wrap gap-x-[0.28em] gap-y-2">
              {titleWords.map((word, idx) => (
                <span key={word} className="inline-block overflow-hidden py-1">
                  <motion.span
                    initial={{ opacity: 0, y: "100%" }}
                    animate={isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
                    transition={{
                      duration: 0.75,
                      delay: idx * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-10 lg:pt-3"
          >
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              We build tailor-made software solutions that solve real problems from MVPs to enterprise-grade platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="space-y-3">
                {servicesLeft.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.08, ease: "easeOut" }}
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#131927]"
                  >
                    <Plus className="w-4 h-4 text-[#131927] stroke-[2.5]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                {servicesRight.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.08, ease: "easeOut" }}
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#131927]"
                  >
                    <Plus className="w-4 h-4 text-[#131927] stroke-[2.5]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large Banner Image with Custom Rotating Follow Cursor */}
        <div
          ref={bannerRef}
          className="w-full h-[320px] sm:h-[420px] md:h-[540px] lg:h-[620px] overflow-hidden relative shadow-sm rounded-2xl md:cursor-none select-none bg-slate-200"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/driven_adminPanal.png"
              alt="Service Banner"
              fill
              sizes="100vw"
              priority
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Interactive Floating Circular Cursor with Spinning Text */}
          {isHovered && (
            <div
              className="pointer-events-none absolute left-0 top-0 z-20 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-white/55 backdrop-blur-md shadow-2xl border border-white/10 transition-transform duration-75 ease-out"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="absolute z-10 text-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
              </div>
              <div className="relative flex h-full w-full items-center justify-center animate-spin" style={{ animationDuration: "12s" }}>
                <svg className="h-full w-full p-2" viewBox="0 0 100 100">
                  <path id="serviceHeroCircle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                  <text className="text-[9.5px] font-semibold uppercase tracking-[0.27em] fill-black">
                    <textPath href="#serviceHeroCircle" startOffset="0%">
                      VIEW LIVE DEMO • VIEW LIVE • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          )}

          {/* Bottom Glass Overlay Bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
            transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            className="absolute inset-x-4 bottom-4 z-20"
          >
            <div className="flex items-center justify-between gap-4 bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:px-5 sm:py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white drop-shadow-sm">
                  CloudKhata &amp; Enterprise Systems
                </p>
                <p className="hidden sm:block text-[11px] text-white/90">
                  Custom software for inventory, POS, billing &amp; HR.
                </p>
              </div>

              <Link
                href="/projects"
                className="flex-shrink-0 flex items-center gap-1.5 bg-black hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
              >
                <span>Live demo ↗</span>
              </Link>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
