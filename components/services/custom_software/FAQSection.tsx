"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

function TypewriterAnswer({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let index = 0;
    const timeout = window.setInterval(() => {
      index += 1;
      setDisplayText(text.slice(0, index));

      if (index >= text.length) window.clearInterval(timeout);
    }, 24);

    return () => window.clearInterval(timeout);
  }, [text]);

  return (
    <p
      aria-label={text}
      className="text-xs sm:text-sm 2xl:text-base leading-relaxed text-zinc-600 max-w-xl 2xl:max-w-2xl"
    >
      <span aria-hidden="true">{displayText}</span>
      {displayText.length < text.length && (
        <span aria-hidden="true" className="animate-pulse">
          |
        </span>
      )}
    </p>
  );
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    question: "What does PixoraSoftTech develop?",
    answer:
      "PixoraSoftTech specializes in custom web applications, SaaS platforms, mobile apps, and scalable digital solutions tailored to modern business requirements.",
  },
  {
    question: "How does the development process work?",
    answer:
      "Our process follows a clear 4-step workflow: Discovery & Scoping, UI/UX Design, Build & Iterative Sprints, followed by quality assurance testing and full production Launch.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Timelines depend on project scope. Typical MVPs take 2 to 4 weeks, while complex full-stack enterprise platforms usually take around 1 to 3 months.",
  },
  {
    question: "How much does custom software cost?",
    answer:
      "Pricing depends on features, integrations, and architectural complexity. We offer fixed-scope milestones as well as dedicated ongoing agile development contracts.",
  },
  {
    question: "Does PixoraSoftTech work with international clients?",
    answer:
      "Yes, we partner with tech startups, scale-ups, and established enterprises globally across North America, Europe, the Middle East, and Asia.",
  },
  {
    question: "Can PixoraSoftTech design and develop the entire product?",
    answer:
      "Absolutely. We handle end-to-end production including research, Figma UI/UX design, cloud architecture, full-stack development, and post-launch maintenance.",
  },
];

export default function FAQSection({ faqs = DEFAULT_FAQS }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const list = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  return (
     <section className="bg-transparent text-black py-16 sm:py-20 2xl:py-28 font-sans">
      <div className="mx-auto max-w-[2400px] px-6 sm:px-8 lg:px-14 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 2xl:gap-20 items-start">
          {/* Left Column: FAQ header and contact card */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-8">
            <div>
              <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-zinc-700 font-mono font-medium mb-3">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-zinc-950 uppercase leading-tight mb-10 sm:mb-16">
                HAVE SOME QUESTIONS?
              </h2>
            </div>

            <div className="rounded-[20px] border border-slate-300/55 bg-transparent p-5 shadow-[0_18px_55px_rgba(15,23,42,0.04)] backdrop-blur-[2px] sm:p-7 2xl:p-9">
              <h3 className="mb-2 text-base font-bold tracking-tight text-zinc-950 sm:text-lg 2xl:text-xl">
                Have a custom inquiry?
              </h3>
              <p className="mb-5 max-w-lg text-sm leading-relaxed text-zinc-800 sm:text-base 2xl:text-lg">
                Can’t find the answer you’re looking for? Reach out to our technical consulting team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg sm:text-sm"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Numbered Accordion List */}
          <div className="lg:col-span-7 border-t border-zinc-200 lg:border-t-0">
            {list.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const numStr = String(idx + 1).padStart(2, "0");

              return (
                <div key={faq.question} className="border-b border-zinc-200 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between py-5 text-left transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className="text-xs sm:text-sm font-mono text-zinc-500 font-semibold transition-colors duration-300 group-hover:text-zinc-950">
                        {numStr}
                      </span>
                      <span className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium tracking-tight text-zinc-950">
                        {faq.question}
                      </span>
                    </div>

                    <span className="text-xl sm:text-2xl font-light text-zinc-900 shrink-0 select-none transition-transform duration-200">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pl-8 sm:pl-12 transition-all duration-300">
                      <TypewriterAnswer text={faq.answer} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
