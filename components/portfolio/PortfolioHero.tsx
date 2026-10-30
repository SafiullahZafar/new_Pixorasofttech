"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Macbook from "./ProjectHeroShowcase";

export default function PortfolioHero() {
  const scrollToProjects = () => {
    document.getElementById("portfolio-projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex min-h-[85svh] w-full flex-col items-center justify-center bg-transparent px-5 pb-16 pt-28 text-[#111] sm:px-10 sm:pt-32 lg:min-h-screen lg:px-16 2xl:px-24">
      <div className="mx-auto flex w-full max-w-[2200px] flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50 sm:text-sm"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="max-w-[1700px] text-[clamp(2.5rem,5vw,6.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-black"
        >
          Work that <span className="text-black/45">speaks for itself</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="max-w-3xl text-base leading-relaxed text-black/55 sm:text-lg lg:text-xl"
        >
          Explore live websites, in-progress mobile apps, and business software built to solve real client problems.
        </motion.p>

        {/* 3D Animated MacBook Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="relative my-4 flex h-[220px] w-full items-center justify-center sm:my-6 sm:h-[260px] lg:my-8 lg:h-[300px]"
        >
          <div className="relative scale-[1.5] sm:scale-[1.85] lg:scale-[2.2]">
            <Macbook />
          </div>
        </motion.div>

        <motion.button
          type="button"
          aria-label="Scroll to projects"
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-2 inline-flex size-12 items-center justify-center rounded-full bg-[#0A2540] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#143960] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A2540] sm:mt-4 sm:size-14"
        >
          <ArrowDown aria-hidden="true" className="size-5 sm:size-6" />
        </motion.button>
      </div>
    </section>
  );
}
