"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "./WordReveal";
import type { SupplierWholesaleAppSectionProps } from "./types";

export default function EditorialSection({
  title,
  challengeText,
  solutionText,
  resultsText,
  heroImage,
  liveUrl,
  cardHovered,
  setCardHovered,
}: Pick<
  SupplierWholesaleAppSectionProps,
  | "title"
  | "challengeText"
  | "solutionText"
  | "resultsText"
  | "heroImage"
  | "liveUrl"
  | "cardHovered"
  | "setCardHovered"
>) {
  return (
    <section className="w-full bg-[#010510] text-white py-16 sm:py-24 2xl:py-36 relative select-none">
      <div className="max-w-[1600px] 2xl:max-w-[2400px] mx-auto px-6 sm:px-12 2xl:px-20 relative z-10 flex flex-col gap-20 sm:gap-32 2xl:gap-48">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </span>
              <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                Our Solution
              </span>
            </motion.div>

            <p className="text-base sm:text-xl 2xl:text-2xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
              <WordReveal text={solutionText} delay={0.2} />
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              onMouseEnter={() => setCardHovered(true)}
              onMouseLeave={() => setCardHovered(false)}
              className="w-full max-w-md 2xl:max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-48 sm:h-56 2xl:h-64 rounded-xl overflow-hidden bg-zinc-800 relative">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-white backdrop-blur-xs"
                  >
                    View Project <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="text-lg 2xl:text-xl font-medium text-white">{title}</h4>
                  <p className="text-xs 2xl:text-sm text-zinc-400">Design System &amp; Web Platform</p>
                </div>
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Live Demo <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <span className="text-xs text-zinc-500 font-medium">Internal Case Study</span>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              <span className="text-xs sm:text-sm 2xl:text-base text-zinc-400 font-medium tracking-wide">
                The Results
              </span>
            </motion.div>

            <p className="text-base sm:text-xl 2xl:text-2xl text-zinc-300 font-normal leading-relaxed max-w-xl 2xl:max-w-3xl">
              <WordReveal text={resultsText} delay={0.2} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
