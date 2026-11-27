"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "@/components/case-study/WordReveal";
import type { EdukaCollegeSectionProps } from "./types";

export default function EditorialSection({
  title,
  challengeText,
  solutionText,
  resultsText,
  heroImage,
  liveUrl,
  cardHovered,
  setCardHovered,
}: Pick<
  EdukaCollegeSectionProps,
  | "title"
  | "challengeText"
  | "solutionText"
  | "resultsText"
  | "heroImage"
  | "liveUrl"
  | "cardHovered"
  | "setCardHovered"
>) {
  return (
    <section className="relative w-full select-none bg-[#010510] py-16 text-white sm:py-24 2xl:py-36">
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col gap-20 px-6 sm:gap-32 sm:px-12 2xl:max-w-[2400px] 2xl:gap-48 2xl:px-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h1 className="text-5xl font-semibold leading-none tracking-tight text-white sm:text-7xl md:text-8xl 2xl:text-[10rem]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col gap-4 pt-12 lg:col-span-6 lg:pl-12 lg:pt-34 2xl:pt-42">
            <SectionLabel active={1}>The Challenge</SectionLabel>
            <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-300 sm:text-xl 2xl:max-w-3xl 2xl:text-2xl">
              <WordReveal text={challengeText} delay={0.2} />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-6">
            <SectionLabel active={2}>Our Solution</SectionLabel>
            <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl 2xl:max-w-4xl 2xl:text-4xl">
              <WordReveal text={solutionText} delay={0.2} />
            </h2>
          </div>
        </div>

        <div
          className="group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900 shadow-2xl sm:h-[500px] md:h-[620px] 2xl:h-[850px]"
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
        >
          <img
            src={heroImage}
            alt={`${title} live platform showcase`}
            className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <motion.div
            initial={false}
            animate={cardHovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="absolute inset-x-4 bottom-4 z-20"
          >
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/20 p-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-md sm:px-5 sm:py-4">
              <div>
                <p className="text-sm font-semibold leading-tight text-white">{title}</p>
                <p className="mt-0.5 text-xs leading-tight text-white/80">
                  Education &bull; College Management Platform
                </p>
              </div>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/20 bg-black px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/25 active:scale-95"
                >
                  Live Website <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7 lg:pl-12">
            <SectionLabel active={3}>Delivered Capabilities</SectionLabel>
            <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-300 sm:text-xl 2xl:max-w-3xl 2xl:text-3xl">
              <WordReveal text={resultsText} delay={0.2} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({
  active,
  children,
}: {
  active: 1 | 2 | 3;
  children: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <span className="flex gap-1" aria-hidden="true">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`h-1.5 w-1.5 rounded-full ${dot === active ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </span>
      <span className="text-xs font-medium tracking-wide text-zinc-400 sm:text-sm 2xl:text-base">
        {children}
      </span>
    </motion.div>
  );
}
