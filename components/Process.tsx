"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="bg-transparent text-black py-16 sm:py-24 border-t border-zinc-200 relative z-20 font-sans">
      <div className="mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-16 sm:pb-20 border-b border-zinc-200 mb-8">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-black uppercase">
            FLOW
          </h2>
          <p className="max-w-xs text-sm sm:text-base font-medium text-zinc-800 leading-snug mt-4 sm:mt-0">
            How we turn a brief into a brand and a site that performs.
          </p>
        </div>

        {/* 4-Step Progressive Staircase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px]">
          {/* Step 1: DISCOVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col py-6 md:py-8 pr-4 sm:pr-6 md:pr-8"
          >
            <div className="flex flex-col mt-0">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black uppercase mb-3">
                DISCOVER
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xs mb-10">
                We learn your business, your buyer, and what the brand and product need to achieve.
              </p>
              <div className="w-full">
                <span className="block text-xs font-bold font-mono mb-2 text-black">25%</span>
                <div className="w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-black h-full rounded-full w-1/4"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col py-6 md:py-8 pr-4 sm:pr-6 md:pr-8 md:border-l md:border-zinc-200 md:pl-6 lg:pl-8"
          >
            <div className="flex flex-col mt-0 md:mt-20">
              {/* Gradient Box graphic */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mb-6 bg-gradient-to-b from-[#0A2540] via-blue-900 to-sky-500 shadow-md"></div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black uppercase mb-3">
                DESIGN
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xs mb-10">
                We shape the interface, prototypes, and user flows, testing directions until it is right.
              </p>
              <div className="w-full">
                <span className="block text-xs font-bold font-mono mb-2 text-black">50%</span>
                <div className="w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-black h-full rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3: BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col py-6 md:py-8 pr-4 sm:pr-6 md:pr-8 md:border-l md:border-zinc-200 md:pl-6 lg:pl-8"
          >
            <div className="flex flex-col mt-0 md:mt-48 lg:mt-56">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black uppercase mb-3">
                BUILD
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xs mb-10">
                We engineer it in modern Next.js and clean code, fast, secure, and ready for your team.
              </p>
              <div className="w-full">
                <span className="block text-xs font-bold font-mono mb-2 text-black">75%</span>
                <div className="w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-black h-full rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 4: LAUNCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col py-6 md:py-8 pr-4 sm:pr-6 md:pr-8 md:border-l md:border-zinc-200 md:pl-6 lg:pl-8"
          >
            <div className="flex flex-col mt-0 md:mt-72 lg:mt-80">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-black uppercase mb-3">
                LAUNCH
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xs mb-10">
                We deploy with zero-downtime, complete handoff, and stay on to help it scale.
              </p>
              <div className="w-full">
                <span className="block text-xs font-bold font-mono mb-2 text-black">100%</span>
                <div className="w-full bg-zinc-200 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#0A2540] h-full rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
