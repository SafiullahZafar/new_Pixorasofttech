"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { StateCollegeSectionProps } from "./types";

export default function SummarySection({
  liveUrl,
  project,
}: Pick<StateCollegeSectionProps, "liveUrl" | "project">) {
  if (!project) return null;
  return (
    <section className="w-full bg-transparent text-black py-16 sm:py-24 2xl:py-32 px-6 sm:px-12 lg:px-16 2xl:px-24 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold tracking-tight text-zinc-950 leading-none break-words mb-12 sm:mb-16 2xl:mb-20">
          Summary
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-start">
          <div className="lg:col-span-6 flex flex-col gap-10 sm:gap-14 w-full">
            <div>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                Industry
              </span>
              <p className="text-base sm:text-lg 2xl:text-xl font-semibold text-zinc-950 mt-1">
                {project.industry}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-12 items-start">
              <div>
                <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Duration
                </span>
                <div className="flex items-baseline mt-1.5">
                  <span className="text-5xl sm:text-6xl 2xl:text-7xl font-bold text-zinc-950 tracking-tight leading-none">
                    {project.timeline.match(/\d+/)?.[0] ?? project.timeline}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-normal ml-2 pb-0.5">
                    {project.timeline.toLowerCase().includes("week") ? "weeks" : ""}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Services
                </span>
                <div className="flex flex-col gap-1.5 mt-1.5">
                  {project.deliverables.slice(0, 3).map((svc, i) => (
                    <span
                      key={i}
                      className="text-base sm:text-lg 2xl:text-xl font-semibold text-zinc-950 leading-snug"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-10 sm:gap-14 w-full">
            <div className="max-w-xl">
              <p className="text-lg sm:text-xl 2xl:text-2xl text-zinc-900 leading-relaxed font-normal">
                "{project.testimonial.text}"
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
              <div className="flex items-center gap-4">
                <div
                  className={`size-12 2xl:size-14 rounded-full flex items-center justify-center text-white font-bold text-lg 2xl:text-xl shrink-0 shadow-sm ${
                    project.testimonial.avatarBg ?? "bg-zinc-800"
                  }`}
                >
                  {project.testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base 2xl:text-lg font-semibold text-zinc-950 leading-tight">
                    {project.testimonial.name}
                  </h4>
                  <p className="text-xs 2xl:text-sm text-zinc-400 mt-0.5">
                    {project.testimonial.role}, {project.testimonial.company}
                  </p>
                </div>
              </div>

              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-transform hover:-translate-y-0.5 shadow-md shrink-0"
                >
                  Visit Site <ArrowUpRight className="size-4" />
                </a>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#111] hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-transform hover:-translate-y-0.5 shadow-md shrink-0"
                >
                  Start a Project <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
