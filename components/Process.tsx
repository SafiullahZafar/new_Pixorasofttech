"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "blue" | "dark";
  className?: string;
  rotate?: string;
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "blue",
  className = "",
  rotate = "",
}: CardProps) => {
  const isBlue = colorTheme === "blue";

  // Palette: Clean White, Neutral 900, Gray, and Dark Blue (#0342DD)
  const bgColor = isBlue
    ? "bg-blue-50/70 dark:bg-[#0342DD]/15"
    : "bg-neutral-50/90 dark:bg-white/5";
  const borderColor = isBlue
    ? "border-blue-100 dark:border-[#0342DD]/30"
    : "border-neutral-200/80 dark:border-white/10";
  const textColor = isBlue
    ? "text-[#0342DD] dark:text-[#3B7BFF]"
    : "text-neutral-900 dark:text-neutral-100";

  return (
    <div
      className={`relative w-full md:w-[310px] lg:w-[325px] transition-transform duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-2.5 rounded-[25px] shadow-[0px_10px_25px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-5 mx-auto`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[16px] p-5 h-full flex flex-col relative overflow-hidden`}
        >
          <span
            className={`${textColor} text-4xl sm:text-5xl font-handwriting mb-4 block`}
            style={{
              fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif',
            }}
          >
            {number}
          </span>
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug mb-2.5">
            {title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-300 text-[15.5px] sm:text-[16px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "blue" | "dark";
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

// Balanced side-to-side positions bringing cards slightly closer together with comfortable breathing room
const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[8%]", rotate: "rotate-6" },
  {
    className: "md:absolute md:top-[120px] md:right-[8%]",
    rotate: "-rotate-6",
  },
  { className: "md:absolute md:top-[450px] md:left-[8%]", rotate: "rotate-6" },
  {
    className: "md:absolute md:top-[570px] md:right-[8%]",
    rotate: "-rotate-6",
  },
  { className: "md:absolute md:top-[850px] md:left-[8%]", rotate: "rotate-6" },
];

export const defaultFlowSteps: Step[] = [
  {
    title: "Discovery & Strategy",
    description:
      "We unpack your business objectives, target audience, and system requirements to formulate a comprehensive technical blueprint and roadmap.",
    colorTheme: "blue",
  },
  {
    title: "UI/UX & Prototyping",
    description:
      "Interactive Figma wireframes and clickable prototypes crafted for conversion-focused user journeys and intuitive digital interactions.",
    colorTheme: "dark",
  },
  {
    title: "Full-Stack Development",
    description:
      "Engineered with clean Next.js architectures, high-throughput APIs, and scalable databases built to enterprise specifications.",
    colorTheme: "blue",
  },
  {
    title: "QA & Speed Optimization",
    description:
      "Cross-device testing, security review, performance optimization, and accessibility checks.",
    colorTheme: "dark",
  },
  {
    title: "Zero-Downtime Launch & Scale",
    description:
      "Seamless cloud release with automated CI/CD pipelines and a clear documentation handoff.",
    colorTheme: "blue",
  },
];

export default function Process({
  features = defaultFlowSteps,
  className = "",
  stepPositions = DEFAULT_CARD_POSITIONS,
}: {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}) {
  const data = features && features.length > 0 ? features : defaultFlowSteps;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  const height = 1180;

  return (
    <section
      id="process"
      className={`relative w-full bg-transparent text-black py-20 sm:py-28 overflow-hidden font-sans border-t border-zinc-200 ${className}`}
    >
      <div className="mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-12 sm:pb-16 border-b border-zinc-200 mb-14 sm:mb-18">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0342DD]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-black">
                HOW WE WORK
              </span>
              <span className="text-xs font-bold text-slate-400 ml-2">
                • 05 PHASES
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-black uppercase">
              FLOW
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base font-medium text-zinc-700 leading-relaxed mt-4 sm:mt-8">
            How we turn a brief into an enterprise product that scales, performs, and converts.
          </p>
        </div>

        {/* 5 Pinned Cards Container with Original Connecting Flowing Track Line */}
        <div className="max-w-6xl mx-auto relative">
          <div
            className="relative w-full max-w-[1020px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                <defs>
                  <style>{`
                    @keyframes trackFlowAnim {
                      from { stroke-dashoffset: 0; }
                      to { stroke-dashoffset: -140px; }
                    }
                    .animate-track-flow {
                      animation: trackFlowAnim 3s linear infinite;
                    }
                  `}</style>
                </defs>
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 280 150 C 480 150, 540 270, 720 270"; // 1 -> 2
                    if (index === 1)
                      return acc + " C 900 270, 520 370, 280 470"; // 2 -> 3
                    if (index === 2)
                      return acc + " C 200 610, 520 710, 720 710"; // 3 -> 4
                    if (index === 3)
                      return acc + " C 900 710, 520 810, 280 870"; // 4 -> 5
                    return acc;
                  }, "");
                  return (
                    <motion.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-neutral-400 dark:text-neutral-600 animate-track-flow"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || (index % 2 === 0 ? "blue" : "dark")}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
