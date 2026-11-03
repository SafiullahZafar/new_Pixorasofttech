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
    question: "What types of websites do you build?",
    answer:
      "We build responsive business websites, e-commerce stores, booking experiences, content-managed sites, and custom web applications tailored to your goals.",
  },
  {
    question: "How does the development process work?",
    answer:
      "We start with your goals and content, plan the site structure and design, build and refine the pages with your feedback, then test and launch the finished website.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites take a few weeks. Larger sites, e-commerce stores, and projects with custom integrations can take longer depending on their scope and content.",
  },
  {
    question: "Will my website work well on phones and tablets?",
    answer:
      "Yes. We design and test pages across mobile, tablet, and desktop sizes so the layout, navigation, and features work smoothly on each device.",
  },
  {
    question: "Can I update the website after it launches?",
    answer:
      "Yes. We can connect a content management system and provide a simple handover so your team can update pages, images, and other content.",
  },
  {
    question: "Do you include SEO and website performance work?",
    answer:
      "We build with search-friendly page structure, accessible markup, and optimized assets. We can also help improve existing site content and performance.",
  },
];

export default function FAQSection({ faqs = DEFAULT_FAQS }: { faqs?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const list = faqs && faqs.length > 0 ? faqs : DEFAULT_FAQS;

  return (
    <section className="relative isolate overflow-hidden bg-transparent py-16 font-sans text-black sm:py-20 2xl:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(71,85,105,0.55)_1.5px,transparent_2px),linear-gradient(to_right,rgba(100,116,139,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.22)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,black,transparent_90%)]" />
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
                Can’t find the answer you’re looking for? Reach out to our web development team.
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
