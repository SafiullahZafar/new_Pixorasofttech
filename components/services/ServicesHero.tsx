"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50/60 to-white pt-[68px] pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6"
        >
          Our Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
        >
          Everything you need to{" "}
          <span className="text-blue-600">build &amp; brand</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-slate-500 text-base lg:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Fifteen specialised services spanning software engineering and creative production — choose a single service or combine them into a complete launch.
        </motion.p>
      </div>
    </section>
  );
}
