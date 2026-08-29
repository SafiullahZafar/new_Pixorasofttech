"use client";

import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-[68px] pb-14">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(circle at 50% -20%, #bfdbfe 0%, transparent 42%)" }} />
      <div className="max-w-7xl mx-auto px-6 pt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-white text-blue-600 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="relative text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
        >
          Work that{" "}
          <span className="text-blue-600">speaks for itself</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13 }}
          className="relative text-slate-500 text-base lg:text-lg max-w-lg mx-auto leading-relaxed"
        >
          Explore live websites, in-progress mobile apps, and business software built to solve real client problems.
        </motion.p>
      </div>
    </section>
  );
}
