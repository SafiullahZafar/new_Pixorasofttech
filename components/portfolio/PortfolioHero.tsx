"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#070b09] pt-[68px] pb-14">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% -20%, #39ff88 0%, transparent 42%)" }} />
      <div className="max-w-7xl mx-auto px-6 pt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center px-4 py-1.5 rounded-full border border-[#39ff88]/30 bg-[#39ff88]/10 text-[#72ffad] text-xs font-semibold uppercase tracking-widest mb-6"
        >
          Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="relative text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
        >
          Work that{" "}
          <span className="text-[#39ff88]">speaks for itself</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13 }}
          className="relative text-slate-300 text-base lg:text-lg max-w-lg mx-auto leading-relaxed"
        >
          Explore live websites, in-progress mobile apps, and business software built to solve real client problems.
        </motion.p>
      </div>
    </section>
  );
}
