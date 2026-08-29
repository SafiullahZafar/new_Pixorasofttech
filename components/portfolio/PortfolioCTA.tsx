"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#0a0f1e] py-20 px-8 text-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.35) 0%, transparent 65%)",
          }}
        >
          {/* decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/20 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-7">
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l1.5 4.5H14l-3.7 2.7 1.4 4.3L8 10.1l-3.7 2.4 1.4-4.3L2 5.5h4.5z" />
              </svg>
              Let&apos;s Talk
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              Have a project in mind?
            </h2>

            <p className="text-slate-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
              Whether it is a full product or a single creative asset, we would love to hear about it.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition"
              >
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
