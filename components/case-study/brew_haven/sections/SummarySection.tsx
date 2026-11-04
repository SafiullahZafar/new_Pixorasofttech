"use client";

import { ArrowUpRight } from "lucide-react";
import type { BrewHavenSectionProps } from "./types";
export default function SummarySection({ liveUrl }: Pick<BrewHavenSectionProps, "liveUrl">) {
  return (
      <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-22 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
        <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-stretch relative w-full">
            {/* Left: Summary Heading */}
            <div className="lg:col-span-5 2xl:col-span-4 h-full">
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-8xl font-semibold tracking-tight text-zinc-950 uppercase leading-none break-words">
                  Summary
                </h2>
              </div>
            </div>

            {/* Right: Metadata Matrix & Narrative */}
            <div className="lg:col-span-7 2xl:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 2xl:gap-14 min-w-0 w-full items-start">
              {/* Metadata Column */}
              <div className="md:col-span-5 flex flex-col gap-6 2xl:gap-8 w-full">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Industry
                  </span>
                  <span className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950">
                    Hospitality &amp; Specialty Coffee
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Duration
                  </span>
                  <span className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950">
                    4 Weeks
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs sm:text-sm 2xl:text-base font-normal text-zinc-400">
                    Services
                  </span>
                  <div className="flex flex-col gap-1">
                    {[
                      "Web Design",
                      "UI/UX Design",
                      "E-Commerce Engineering",
                      "Next.js Development",
                    ].map((svc, i) => (
                      <span
                        key={i}
                        className="text-sm sm:text-base 2xl:text-xl font-medium text-zinc-950"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Narrative Column */}
              <div className="md:col-span-7 w-full">
                <p className="text-base sm:text-lg 2xl:text-2xl leading-relaxed text-zinc-700 font-normal break-words pt-1">
                  PixoraSofttech took our physical roastery experience and captured it flawlessly online. Our online bean subscriptions doubled within two months, and the custom roast selector has received immense praise from our regular customers.
                </p>

                {liveUrl && (
                  <div className="mt-8 pt-6 border-t border-zinc-200">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Visit Live Website <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
