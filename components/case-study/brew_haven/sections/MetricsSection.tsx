"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MetricsSection() {
  return (
    <section className="w-full bg-transparent text-black py-16 sm:py-20 2xl:py-24 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        {/* Section Heading matching upper case study sections */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#7B511A] mb-3">
              Key Takeaways
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Measurable impact for Brew Haven
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm sm:text-base text-zinc-600 leading-relaxed"
          >
            The redesigned platform unites authentic roastery storytelling with an intuitive subscription engine, turning casual visitors into repeating retail customers.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {/* Primary Stat */}
          <div className="md:col-span-3 md:row-span-2 bg-[#1A120B] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative border border-[#2C1810]/60 shadow-sm min-h-[300px] sm:min-h-[340px]">
            <div
              className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#808080_0px_1px,transparent_1px_10px)] opacity-25 pointer-events-none"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 50% at 100% 0%, #000 70%, transparent 110%)",
                maskImage:
                  "radial-gradient(ellipse 80% 50% at 100% 0%, #000 70%, transparent 110%)",
              }}
            />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/10 text-amber-300 border border-white/10 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-6">
                Online Growth
              </span>
              <h3 className="text-5xl sm:text-6xl 2xl:text-7xl font-bold tracking-tighter text-white">
                +40%
              </h3>
            </div>
            <p className="relative z-10 text-zinc-300 text-sm sm:text-base max-w-sm mt-6 leading-relaxed">
              Surge in online bean subscription orders within 60 days of official launch.
            </p>
          </div>

          {/* Secondary Stat A */}
          <div className="md:col-span-3 bg-white text-zinc-950 rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                Average Session Duration
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
                3.2 min
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Deep engagement on bean selectors
              </p>
            </div>
            <div className="flex gap-1.5 items-end h-10 shrink-0">
              {[15, 25, 45, 35, 65, 55, 85, 75, 92, 100, 110].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 sm:w-2 bg-[#7B511A] rounded-full transition-all duration-300 hover:bg-[#B8832E]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Tertiary Stat B */}
          <div className="md:col-span-1 bg-white text-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-center text-center">
            <p className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              95/100
            </p>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-400 mt-1">
              PageSpeed
            </p>
          </div>

          {/* Tertiary Stat C */}
          <div className="md:col-span-2 bg-white text-zinc-950 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-sm flex items-center gap-4">
            <div className="size-11 sm:size-12 text-xl sm:text-2xl rounded-full bg-[#FDF6EC] text-[#7B511A] border border-[#DFC07F]/40 flex items-center justify-center shrink-0 shadow-sm font-semibold">
              ★
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-zinc-950 leading-none">
                4.7 / 5.0
              </p>
              <p className="text-xs font-semibold text-zinc-500 mt-1.5">
                Customer Rating &amp; Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
