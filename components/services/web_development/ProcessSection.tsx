"use client";

import React from "react";
import type { ServiceDetail } from "@/lib/service-details";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Content",
    description: "We learn about your business, customers, and goals, then map the pages and content your website needs.",
    pills: [],
  },
  {
    number: "02",
    title: "Structure & Design",
    description: "We plan the site structure and shape a responsive visual design around your brand and customer journeys.",
    pills: ["Site Structure", "Responsive Design", "Prototyping"],
  },
  {
    number: "03",
    title: "Build & Refine",
    description: "We develop the site, share working previews, and refine each page with your feedback.",
    pills: ["Responsive Build", "Live Previews", "Content Setup"],
  },
  {
    number: "04",
    title: "Launch & Improve",
    description: "We test across devices, launch your website, and help keep it secure, fast, and up to date.",
    pills: ["QA & Accessibility", "SEO Setup", "Ongoing Support"],
  },
];

const CARD_POSITIONS = [
  "md:left-[5%] md:top-0",
  "md:right-[5%] md:top-[180px]",
  "md:left-[5%] md:top-[450px]",
  "md:right-[5%] md:top-[630px]",
];

function Pin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 3a1 1 0 0 1 .12 1.99L16 5v4.76l1.89 3.79a1 1 0 0 1 .11.33V16a1 1 0 0 1-.88.99L17 17h-4v4a1 1 0 0 1-1.99.12L11 21v-4H7a1 1 0 0 1-.99-.88L6 16v-2a1 1 0 0 1 .06-.34l.05-.11L8 9.76V5a1 1 0 0 1-.12-1.99L8 3h8Z" />
    </svg>
  );
}

export default function ProcessSection({ process: _process }: { process?: ServiceDetail["process"] }) {
  return (
    <section className="relative w-full overflow-hidden border-t border-zinc-200 bg-transparent py-20 text-black sm:py-28 2xl:py-32">
      <div className="relative z-10 mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-12">
        <header className="mb-14 flex flex-col justify-between border-b border-zinc-200 pb-12 sm:mb-16 sm:flex-row sm:items-start sm:pb-16">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#0342DD]" />
              <span className="text-xs font-bold uppercase tracking-widest">HOW WE WORK</span>
              <span className="ml-2 text-xs font-bold text-slate-400">• 04 PHASES</span>
            </div>
            <h2 className="text-5xl font-normal tracking-tight sm:text-6xl lg:text-7xl">Design Process</h2>
          </div>
          <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-zinc-700 sm:mt-8 sm:text-base">
            From the first conversation to launch, each phase makes your website clearer, faster, and ready to grow.
          </p>
        </header>

        <div className="relative mx-auto max-w-6xl">
          <div className="relative flex flex-col gap-8 pb-2 md:block md:h-[1020px]">
            <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block" viewBox="0 0 1000 1020" preserveAspectRatio="none">
              <path
                d="M 280 150 C 470 150 540 280 720 300 C 900 320 520 420 280 550 C 180 610 520 700 720 750"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2.5"
                strokeDasharray="8 7"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {PROCESS_STEPS.map((step, index) => {
              const isBlue = index % 2 === 0;
              return (
                <article
                  key={step.number}
                  className={`group relative z-10 w-full transition-transform duration-300 hover:z-20 hover:scale-[1.02] md:absolute md:w-[min(38vw,350px)] ${CARD_POSITIONS[index]} ${index % 2 === 0 ? "md:rotate-2" : "md:-rotate-2"}`}
                >
                  <div className="rounded-[25px] border border-neutral-100 bg-white p-2.5 shadow-[0_10px_25px_0_#D3D3D3]">
                    <Pin className={`mx-auto mb-4 size-8 ${isBlue ? "text-[#0342DD]" : "text-zinc-900"}`} />
                    <div className={`relative min-h-[220px] overflow-hidden rounded-2xl border p-5 sm:p-6 ${isBlue ? "border-blue-100 bg-blue-50/70" : "border-neutral-200 bg-neutral-50/90"}`}>
                      <span className={`mb-3 block font-mono text-4xl font-light sm:text-5xl ${isBlue ? "text-[#0342DD]" : "text-zinc-400"}`}>{step.number}</span>
                      <h3 className="mb-2.5 text-xl font-semibold leading-snug text-zinc-900 sm:text-2xl">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-600 sm:text-[15px]">{step.description}</p>
                      {step.pills.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {step.pills.map((pill) => <span key={pill} className="rounded-full border border-zinc-200 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-zinc-600 sm:text-xs">{pill}</span>)}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
