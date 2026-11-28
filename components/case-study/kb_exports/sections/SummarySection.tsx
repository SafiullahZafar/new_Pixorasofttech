"use client";
import { getProjectTechnologyStack } from "@/lib/project-stack";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { KBExportsSectionProps } from "./types";

export default function SummarySection({ liveUrl, project }: Pick<KBExportsSectionProps, "liveUrl" | "project">) {
  if (!project) return null;
  return (
    <section className="w-full bg-transparent text-black py-16 sm:py-24 2xl:py-32 px-6 sm:px-12 lg:px-16 2xl:px-24 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        {/* Title matching upper sections */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold tracking-tight text-zinc-950 leading-none break-words mb-12 sm:mb-16 2xl:mb-20">
          Summary
        </h2>

        {/* 2-Column Layout from Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-start">
          {/* Left Column: Metadata */}
          <div className="lg:col-span-6 flex flex-col gap-10 sm:gap-14 w-full">
            {/* Industry */}
            <div>
              <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                Industry
              </span>
              <p className="text-base sm:text-lg 2xl:text-xl font-semibold text-zinc-950 mt-1">
                {project.industry}
              </p>
            </div>

            {/* Bottom Row: Duration & Services Side-by-Side */}
            <div className={`grid ${project.timeline ? "grid-cols-2" : "grid-cols-1"} gap-8 sm:gap-12 items-start`}>
              {/* Duration */}
              {project.timeline && (
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
              )}

              {/* Services */}
              <div>
                <span className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Services
                </span>
                <div className="flex flex-col gap-1.5 mt-1.5">
                  {[
                    ...project.deliverables.slice(0, 3),
                  ].map((svc, i) => (
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

          {/* Right Column: Narrative + Action Button */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full w-full">
            {/* <p className="text-base sm:text-xl md:text-2xl 2xl:text-3xl text-zinc-800 leading-relaxed font-normal max-w-2xl 2xl:max-w-3xl"> */}
                        <p className="text-base sm:text-lg 2xl:text-xl text-zinc-800 font-normal leading-relaxed max-w-xl">

              {`${project.overview}${getProjectTechnologyStack(project.tags).length ? ` Technology stack: ${getProjectTechnologyStack(project.tags).join(", ")}.` : ""}`}
            </p>

            {liveUrl && (
              <div className="mt-8 pt-6">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 hover:bg-black text-white px-6 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  Visit Live Website <ArrowUpRight className="size-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
