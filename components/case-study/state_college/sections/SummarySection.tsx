"use client";
import { getProjectTechnologyStack } from "@/lib/project-stack";

import { ArrowUpRight } from "lucide-react";
import type { StateCollegeSectionProps } from "./types";

export default function SummarySection({
  liveUrl,
  project,
}: Pick<StateCollegeSectionProps, "liveUrl" | "project">) {
  if (!project) return null;

  const duration = project.timeline.match(/\d+/)?.[0] ?? project.timeline;
  const durationUnit = project.timeline.toLowerCase().includes("week") ? "weeks" : "";

  return (
    <section className="w-full select-none bg-transparent px-6 py-16 text-black sm:px-12 sm:py-24 lg:px-16 2xl:px-24 2xl:py-32">
      <div className="mx-auto w-full max-w-[1600px] 2xl:max-w-[1920px]">
        <h2 className="mb-12 break-words text-4xl font-bold leading-none tracking-tight text-zinc-950 sm:mb-16 sm:text-6xl md:text-7xl 2xl:mb-20 2xl:text-8xl">
          Summary
        </h2>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 2xl:gap-24">
          <div className="flex w-full flex-col gap-10 sm:gap-14 lg:col-span-6">
            <div>
              <span className="text-xs font-normal text-zinc-400 sm:text-sm">
                Industry
              </span>
              <p className="mt-1 text-base font-semibold text-zinc-950 sm:text-lg 2xl:text-xl">
                {project.industry}
              </p>
            </div>

            <div className="grid grid-cols-2 items-start gap-8 sm:gap-12">
              <div>
                <span className="text-xs font-normal text-zinc-400 sm:text-sm">
                  Duration
                </span>
                <div className="mt-1.5 flex items-baseline">
                  <span className="text-5xl font-bold leading-none tracking-tight text-zinc-950 sm:text-6xl 2xl:text-7xl">
                    {duration}
                  </span>
                  <span className="ml-2 pb-0.5 text-xs font-normal text-zinc-400 sm:text-sm">
                    {durationUnit}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-normal text-zinc-400 sm:text-sm">
                  Services
                </span>
                <div className="mt-1.5 flex flex-col gap-1.5">
                  {project.deliverables.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="text-base font-semibold leading-snug text-zinc-950 sm:text-lg 2xl:text-xl"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full w-full flex-col justify-between lg:col-span-6">
            <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-800 sm:text-lg 2xl:text-xl">
              {`${project.overview}${getProjectTechnologyStack(project.tags).length ? ` Technology stack: ${getProjectTechnologyStack(project.tags).join(", ")}.` : ""}`}
            </p>

            {liveUrl && (
              <div className="mt-8 pt-6">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-black"
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
