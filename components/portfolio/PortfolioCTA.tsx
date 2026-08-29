"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="bg-[#f7faf8] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#07110b] py-20 px-8 text-center"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(57,255,136,0.28) 0%, transparent 65%)",
          }}
        >
          {/* decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#39ff88]/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#39ff88]/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#39ff88]/30 bg-[#39ff88]/10 text-[#72ffad] text-xs font-semibold uppercase tracking-widest mb-7">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#39ff88] text-[#07110b] font-bold text-sm hover:bg-[#72ffad] transition shadow-lg shadow-emerald-950/40"
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
