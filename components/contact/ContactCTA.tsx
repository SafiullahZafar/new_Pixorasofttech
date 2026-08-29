"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactCTA() {
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
          {/* decorative */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/20 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5">
              Let&apos;s Build Something{" "}
              <span className="text-blue-400">Amazing</span>{" "}
              Together
            </h2>
            <p className="text-slate-400 text-base max-w-md mx-auto mb-10 leading-relaxed">
              From the first sketch to the final deploy, we are with you at every step.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-900/40"
            >
              Get Started <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
