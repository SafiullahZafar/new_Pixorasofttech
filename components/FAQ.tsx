"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BlurredStagger from "@/components/BlurredStagger";

const faqs = [
  {
    num: "01",
    q: "How does a typical software project start?",
    a: "We start by discussing your goals, users, scope, and constraints. From there, we outline the proposed work, milestones, and next steps for your review before development begins.",
  },
  {
    num: "02",
    q: "What technologies and frameworks do you specialize in?",
    a: "Our project work includes Laravel and PHP business systems, Flutter mobile apps, Go services, and web products built with React and Next.js. We choose tools to fit each product and list confirmed technologies in its case study.",
  },
  {
    num: "03",
    q: "How long does development typically take?",
    a: "Timing depends on the product scope, integrations, and review process. After understanding the requirements, we break the work into milestones and share a schedule for your project.",
  },
  {
    num: "04",
    q: "How is project pricing and payment structured?",
    a: "We provide flexible engagement models tailored to your requirements, including fixed-price milestone packages for well-defined scopes and dedicated sprint retainers for continuous agile development.",
  },
  {
    num: "05",
    q: "Do you work with international clients across different time zones?",
    a: "Yes. We work remotely with teams in different regions and agree on communication channels, review points, and overlapping hours at the start of an engagement.",
  },
  {
    num: "06",
    q: "Do you provide post-launch support and maintenance?",
    a: "Post-launch support can be scoped around your product, from a handover and issue-fixing period to ongoing maintenance and feature work. We agree on the support scope before launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-transparent text-black py-16 sm:py-24 font-sans border-t border-dashed border-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-[2200px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-900 inline-block"></span>
                <span className="font-bold text-black">FAQ</span>
                <span className="text-zinc-400">• QUESTIONS & ANSWERS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black uppercase leading-[1.08] mb-6">
                FREQUENTLY ASKED
                <br />
                QUESTIONS.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md mb-8">
                Everything you need to know about our engineering process, pricing models, technology stack, and delivery timelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-300/80 bg-zinc-100/40 backdrop-blur-xs max-w-md">
              <h3 className="text-base font-bold text-black mb-1.5">
                Have a custom inquiry?
              </h3>
              <p className="text-black text-xs sm:text-sm mb-4 leading-relaxed font-normal">
                Can’t find the answer you’re looking for? Reach out to our technical consulting team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-black px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-zinc-800 shadow-sm hover:shadow-md"
              >
                <span>GET IN TOUCH</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column Accordion with BlurredStagger reveal */}
          <div className="lg:col-span-7 divide-y divide-zinc-200 border-t border-b border-zinc-200 lg:border-t-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.num} className="transition-colors group">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between py-5 sm:py-6 text-left transition-all duration-200 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className="text-xs sm:text-sm font-mono text-zinc-400 font-bold group-hover:text-zinc-700 transition-colors">
                        {faq.num}
                      </span>
                      <span className="text-base sm:text-xl font-medium tracking-tight text-black group-hover:text-zinc-600 transition-colors">
                        {faq.q}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-zinc-700 group-hover:bg-zinc-200/60">
                      <span className="text-lg font-light text-zinc-900 select-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`content-${faq.num}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden pb-6"
                      >
                        <div className="pl-8 sm:pl-12 pr-4">
                          <BlurredStagger text={faq.a} />
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

