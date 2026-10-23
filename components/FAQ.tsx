"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    num: "01",
    q: "How does a typical project start?",
    a: "Every project begins with a discovery call where we learn about your business, goals, and requirements. From there, we put together a proposal outlining scope, timeline, and cost before any work begins.",
  },
  {
    num: "02",
    q: "How does the development process work?",
    a: "Our process follows a clear 4-step workflow: Discovery, UI/UX Design, Build & Development, followed by testing and full product Launch.",
  },
  {
    num: "03",
    q: "How long does software development take?",
    a: "Timelines depend on project scope. Typical MVPs take 2-4 weeks, while complex full-stack web and mobile platforms take around 1 to 3 months.",
  },
  {
    num: "04",
    q: "How is pricing structured?",
    a: "We offer both fixed price packages for well defined projects and hourly/retainer arrangements for ongoing work. Pricing depends on scope, complexity, and timeline — we provide a detailed quote after the discovery call.",
  },
  {
    num: "05",
    q: "Does PixoraSoftTech work with international clients?",
    a: "Yes, we work with B2B tech companies, startups, and enterprises globally across North America, Europe, UAE, and Asia.",
  },
  {
    num: "06",
    q: "Can PixoraSoftTech design and develop the entire product?",
    a: "Absolutely. We handle end-to-end production including research, brand strategy, UI/UX design, full-stack development, and post-launch maintenance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-transparent text-black py-16 sm:py-20 font-sans border-t border-dashed border-zinc-300">
      <div className="mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-8">
            <div>
              <span className="block text-[11px] uppercase tracking-widest text-zinc-700 font-mono font-medium mb-3">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 uppercase leading-tight mb-10 sm:mb-16">
                HAVE SOME QUESTIONS?
              </h2>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold tracking-tight text-zinc-950 mb-1.5">
                NOT FINDING ANSWERS?
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mb-5">
                Reach out anytime, we are happy to help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#0A2540] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#143960] shadow-sm"
              >
                <span>CONTACT US</span>
              </Link>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-7 border-t border-zinc-200 lg:border-t-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.num} className="border-b border-zinc-200 transition-colors">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between py-4 text-left transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className="text-xs sm:text-sm font-mono text-zinc-600 font-semibold transition-colors duration-300 group-hover:text-zinc-950">
                        {faq.num}
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-medium tracking-tight text-zinc-950">
                        {faq.q}
                      </span>
                    </div>
                    <span className="text-lg sm:text-xl font-light text-zinc-900 shrink-0 select-none">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pb-4"
                      >
                        <div className="pl-8 sm:pl-12">
                          <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 max-w-xl">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
