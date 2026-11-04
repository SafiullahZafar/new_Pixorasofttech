"use client";

import { motion } from "framer-motion";
import type { BrewHavenSectionProps } from "./types";
export default function HeroSection({ heroRef, heroScale, mobileHeroImage, heroImage, title }: Pick<BrewHavenSectionProps, "heroRef" | "heroScale" | "mobileHeroImage" | "heroImage" | "title">) {
  return (
      <section
        ref={heroRef}
        className="relative z-0 w-full h-[45vh] sm:h-[70vh] lg:h-screen overflow-hidden bg-black select-none"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {/* Mobile Hero Image */}
            <motion.img
              style={{ scale: heroScale }}
              src={mobileHeroImage}
              alt={title}
              className="block md:hidden w-full h-full object-cover object-center"
            />
            {/* Desktop Hero Image */}
            <motion.img
              style={{ scale: heroScale }}
              src={heroImage}
              alt={title}
              className="hidden md:block w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Hero Overlay Gradient for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Hero Bottom Floating Label */}
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 2xl:left-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="rounded-full border border-white/25 bg-black/60 px-3.5 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              E-Commerce &bull; Brand Experience
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3 py-1 text-[11px] sm:text-xs font-medium text-emerald-300 backdrop-blur-md">
              Live &amp; Deployed
            </span>
          </motion.div>
        </div>
      </section>
  );
}
