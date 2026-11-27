"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "@/components/case-study/WordReveal";
import type { SupplierSectionProps } from "./types";
export default function EditorialSection({ title, challengeText, solutionText, resultsText, heroImage, liveUrl, cardHovered, setCardHovered }: Pick<SupplierSectionProps, "title" | "challengeText" | "solutionText" | "resultsText" | "heroImage" | "liveUrl" | "cardHovered" | "setCardHovered">) {
  return (
      <section className="w-full bg-[#010510] text-white py-16 sm:py-24 2xl:py-36 relative select-none">
        <div className="max-w-[1600px] 2xl:max-w-[2400px] mx-auto px-6 sm:px-12 2xl:px-20 relative z-10 flex flex-col gap-20 sm:gap-32 2xl:gap-48">
          {/* Part A: Main Title & The Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <h1 className="text-5xl sm:text-7xl md:text-8xl 2xl:text-[10rem] font-semibold tracking-tight text-white leading-none">
                {title}
              </h1>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4 lg:pl-12 pt-12 lg:pt-34 2xl:pt-42">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 1 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  The Challenge
                </span>
              </motion.div>

              <p className="text-base sm:text-xl 2xl:text-2xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
                <WordReveal text={challengeText} delay={0.2} />
              </p>
            </div>
          </div>

          {/* Part B: Our Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 2 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  Our Solution
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-semibold text-white leading-tight max-w-2xl 2xl:max-w-4xl">
                <WordReveal text={solutionText} delay={0.2} />
              </h2>
            </div>
          </div>

          {/* Part C: Full-Width Showcase Card with Spring Pop-Up Glassmorphism Bar on Hover */}
          <div
            className="relative w-full h-[320px] sm:h-[500px] md:h-[620px] 2xl:h-[850px] rounded-2xl bg-zinc-900 border border-zinc-800/60 overflow-hidden group cursor-pointer shadow-2xl"
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
          >
            <motion.img
              src={heroImage}
              alt="Supplier Wholesale B2B ordering platform showcase"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

            {/* Spring Animated Glassmorphism Floating Pill */}
            <motion.div
              initial={false}
              animate={cardHovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="absolute inset-x-4 bottom-4 z-20"
            >
              <div className="flex items-center justify-between gap-4 bg-white/20 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:px-5 sm:py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Supplier Wholesale Foods
                    </p>
                    <p className="text-xs text-white/80 leading-tight mt-0.5">
                      Food Distribution &bull; B2B Ordering Portal
                    </p>
                  </div>
                </div>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 flex items-center gap-1.5 bg-black hover:bg-white/25 text-white border border-white/20 backdrop-blur-md text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
                  >
                    Live Website <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Part D: Delivered Capabilities */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {/* 3-Dot Progress Badge (Dot 3 Active) */}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                  Delivered Capabilities
                </span>
              </motion.div>

              <p className="text-base sm:text-xl 2xl:text-3xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
                <WordReveal text={resultsText} delay={0.2} />
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
