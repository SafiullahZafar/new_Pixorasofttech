"use client";

import React, { useState } from "react";
import type { ServiceDetail } from "@/lib/service-details";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start by deeply understanding your business, users, and goals. We map out requirements, define technical scope, and align on timelines and budget before a single line of code is written.",
    pills: ["Requirements Workshop", "Technical Scoping", "Timeline Planning"],
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "We design the system architecture and UI/UX before development. This includes database schema, API contracts, component hierarchy, and interactive Figma prototypes for your approval.",
    pills: ["System Architecture", "UI/UX Prototyping", "API Design"],
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Development happens in two-week sprints with live previews. You see progress continuously, give feedback, and we iterate fast—no surprises at the end.",
    pills: ["Agile Sprints", "Live Previews", "Continuous Feedback"],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle deployment, CI/CD pipeline setup, monitoring, and post-launch bug fixes. After launch, we offer retainer support for ongoing features and maintenance.",
    pills: ["Deployment", "CI/CD Setup", "Post-launch Support"],
  },
];

export default function ProcessSection({
  process,
}: {
  process?: ServiceDetail["process"];
}) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F5F5F5] text-zinc-900 py-20 2xl:py-28 px-6 sm:px-12 lg:px-14 2xl:px-24 overflow-hidden">
      <div className="max-w-[2440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-start">
          {/* Left Title: Design Process */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl tracking-tight leading-[0.95] text-zinc-900">
              Design <br /> Process
            </h2>
          </div>

          {/* Right Steps Accordion */}
          <div className="lg:col-span-8 divide-y divide-zinc-300/70 border-t border-b border-zinc-300/70">
            {PROCESS_STEPS.map((step, idx) => {
              const isHovered = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="py-10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="grid grid-cols-12 gap-4 items-start">
                    {/* Big Mono Number */}
                    <div className="col-span-3 sm:col-span-2">
                      <span className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light text-zinc-400 font-mono transition-colors duration-300 group-hover:text-zinc-950">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Title, Description & Pills */}
                    <div className="col-span-9 sm:col-span-10 space-y-2.5 pr-2">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-medium tracking-tight text-zinc-900 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-zinc-600 text-xs sm:text-sm 2xl:text-base leading-relaxed max-w-2xl transition-colors duration-300 group-hover:text-zinc-800">
                        {step.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {step.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-full border border-zinc-300/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
