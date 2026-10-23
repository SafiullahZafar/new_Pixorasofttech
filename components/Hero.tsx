"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovering: false });
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If start animation is not on page, reveal immediately
    const hasIntro = typeof document !== "undefined" && document.querySelector(".start-animation");
    if (!hasIntro) {
      setIsRevealed(true);
      return;
    }

    // Trigger right as the monogram flips at 2.8s - 3.1s, or on custom reveal event
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 2800);

    const onReveal = () => setIsRevealed(true);
    window.addEventListener("start-animation-reveal", onReveal);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("start-animation-reveal", onReveal);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovering: false }));
  };

  return (
    <section className="relative z-0 overflow-hidden bg-transparent text-black pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[2250px] px-5 py-8 sm:px-8 sm:py-12 lg:px-8 lg:py-16 xl:py-20">
        {/* Top Split: Huge Headline & Subtext + CTA */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.6fr_0.8fr] lg:gap-16">
          <div
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          >
            <h1 className="max-w-[1000px] text-[40px] font-medium leading-[1.12] tracking-[-0.05em] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[76px] 2xl:text-[90px]">
              <span className="block" style={{ perspective: 1000 }}>
                <motion.span
                  className="block transform-gpu"
                  initial={{ opacity: 0, rotateX: -75 }}
                  animate={isRevealed ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -75 }}
                  transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformOrigin: "top center",
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  Software Development
                </motion.span>
              </span>
              <span className="block text-black" style={{ perspective: 1000 }}>
                <motion.span
                  className="block transform-gpu"
                  initial={{ opacity: 0, rotateX: -75 }}
                  animate={isRevealed ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -75 }}
                  transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformOrigin: "top center",
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <span className="text-[#000000]">&amp;</span> Digital Product
                </motion.span>
              </span>
              <span className="block text-black" style={{ perspective: 1000 }}>
                <motion.span
                  className="block transform-gpu"
                  initial={{ opacity: 0, rotateX: -75 }}
                  animate={isRevealed ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -75 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transformOrigin: "top center",
                    transformPerspective: 1000,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  Design Company.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, rotateX: -40 }}
            animate={isRevealed ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -40 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transformOrigin: "top center",
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="max-w-[470px] lg:pb-2"
          >
            <p className="text-[15px] leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]">
              You bring the &quot;what if.&quot; We bring the code, the systems, and the launch. Somewhere between your brainstorm and your customers, there&apos;s us.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-block">
                <button className="group inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-[#0A2540] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#143960] sm:w-auto cursor-pointer shadow-sm">
                  Start a Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 19L19 5"></path>
                      <path d="M8 5h11v11"></path>
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/portfolio" className="inline-block">
                <button className="w-full rounded-2xl border border-black/15 bg-transparent px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:w-auto cursor-pointer">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Media Showcase Banner with Interactive SHOW CASES Cursor Badge & 3D In-Place Flip */}
        <motion.div
          initial={{ opacity: 0, rotateX: -18, scale: 0.97 }}
          animate={isRevealed ? { opacity: 1, rotateX: 0, scale: 1 } : { opacity: 0, rotateX: -18, scale: 0.97 }}
          transition={{ duration: 1.0, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: "top center",
            transformPerspective: 1400,
            transformStyle: "preserve-3d",
          }}
          className="relative mt-10 sm:mt-16 lg:mt-20 w-full aspect-video sm:aspect-auto sm:h-[480px] lg:h-[600px] xl:h-[620px]"
        >
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative block h-full w-full overflow-hidden rounded-2xl group cursor-pointer"
          >
            <Link href="/portfolio" aria-label="View our projects" className="block h-full w-full">
              <div className="absolute inset-0 overflow-hidden bg-[#0A2540]">
                <img
                  src="/suppliers.png"
                  alt="PixoraSoftTech Showcase"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              </div>

              {/* Floating SHOW CASES Badge (Fixed position on mobile, Interactive follower on desktop) */}
              <div
                className={`pointer-events-none absolute z-20 hidden md:flex h-32 w-32 items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-2xl border border-white/20 transition-opacity duration-300 ${
                  mousePos.isHovering ? "opacity-100" : "opacity-90"
                }`}
                style={{
                  left: mousePos.isHovering ? `${mousePos.x}px` : "calc(100% - 140px)",
                  top: mousePos.isHovering ? `${mousePos.y}px` : "calc(100% - 140px)",
                  transform: "translate(-50%, -50%)",
                  transition: mousePos.isHovering ? "transform 0.1s ease-out, opacity 0.2s" : "all 0.4s ease-out",
                }}
              >
                <div className="absolute z-10 text-black">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                  </svg>
                </div>
                <div className="relative flex h-full w-full items-center justify-center animate-[spin_12s_linear_infinite]">
                  <svg className="h-full w-full p-2" viewBox="0 0 100 100">
                    <path
                      id="circlePathHero"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    ></path>
                    <text className="text-[9.5px] font-semibold uppercase tracking-[0.27em] fill-black">
                      <textPath href="#circlePathHero" startOffset="0%">
                        SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Mobile version of badge */}
              <div className="md:hidden absolute right-4 bottom-4 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow-xl border border-white/20">
                <div className="absolute z-10 text-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
                  </svg>
                </div>
                <div className="relative flex h-full w-full items-center justify-center animate-[spin_12s_linear_infinite]">
                  <svg className="h-full w-full p-1.5" viewBox="0 0 100 100">
                    <path
                      id="circlePathHeroMobile"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    ></path>
                    <text className="text-[9.5px] font-semibold uppercase tracking-[0.27em] fill-black">
                      <textPath href="#circlePathHeroMobile" startOffset="0%">
                        SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
