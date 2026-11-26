"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative z-10 bg-transparent py-10 sm:py-16">
      <div className="mx-auto max-w-[3000px] px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 min-[2200px]:px-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#0A2540] py-16 sm:py-20 2xl:py-28 px-8 text-center shadow-[0_24px_60px_-15px_rgba(10,37,64,0.3)]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(3,66,221,0.45) 0%, transparent 65%)",
          }}
        >
          {/* Decorative */}
          <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0342DD]/20 blur-2xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-[#0342DD]/20 blur-2xl" />

          <div className="relative z-10">
            <h2 className="mb-5 text-3xl font-semibold leading-tight text-white lg:text-4xl 2xl:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="text-[#60A5FA]">Amazing</span> Together
            </h2>
            <p className="mx-auto mb-10 max-w-md 2xl:max-w-xl text-sm sm:text-base 2xl:text-lg leading-relaxed text-slate-300">
              From the first sketch to the final deploy, we are with you at every
              step.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0342DD] px-7 py-3.5 2xl:px-9 2xl:py-4 text-sm 2xl:text-base font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-white hover:text-[#0A2540] cursor-pointer"
            >
              Get Started <Send className="h-4 w-4 2xl:h-5 2xl:w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
