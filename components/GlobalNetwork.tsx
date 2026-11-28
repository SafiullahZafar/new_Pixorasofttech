"use client";

import React from "react";
import WorldMap from "@/components/WorldMap";

export default function GlobalNetwork() {
  return (
    <section
      id="global-network"
      className="bg-transparent py-16 md:py-24 px-6 md:px-12 lg:px-12 select-none overflow-hidden border-t border-dashed border-zinc-300 font-sans"
    >
      <div className="max-w-[2200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-10 sm:pb-14 border-b border-zinc-200 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0342DD]"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-black">
                FAISALABAD, PAKISTAN
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black uppercase">
              BASED IN FAISALABAD
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-normal text-[#555555] leading-relaxed mt-4 sm:mt-8">
            We design and build websites, mobile apps, and business software for teams and organizations.
          </p>
        </div>

        {/* World Map Container */}
        <div className="w-full">
          <WorldMap
            dots={[]}
            lineColor="#0342DD"
            showLabels={false}
            animationDuration={2.5}
            loop={true}
          />
        </div>

        {/* Global Delivery Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <span className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">Faisalabad</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Based in Pakistan</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <span className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">Websites</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Design and development</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <span className="text-2xl sm:text-3xl font-semibold text-black tracking-tight">Mobile apps</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">iOS and Android</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <span className="text-2xl sm:text-3xl font-semibold text-[#0342DD] tracking-tight">Software</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Custom business systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
