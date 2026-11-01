"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Cpu } from "lucide-react";
import { SplineScene } from "@/components/SplineScene";

export default function TeamSplineSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-12 2xl:px-16 min-[2200px]:px-24 py-14 sm:py-20 lg:py-28 2xl:py-36 min-[2200px]:py-44 max-w-[1540px] 2xl:max-w-[2000px] min-[2200px]:max-w-[2600px] min-[2600px]:max-w-[2850px] mx-auto z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-20 min-[2200px]:gap-28 items-center">
        {/* Left Column: Pixora Team & Tech Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl min-[2200px]:text-7xl min-[2600px]:text-8xl font-semibold tracking-tight text-[#111] leading-tight">
            Engineering Intelligence into Every Interface.
          </h2>

          <p className="mt-4 2xl:mt-6 text-sm sm:text-base 2xl:text-xl min-[2200px]:text-2xl text-black/65 leading-relaxed max-w-xl 2xl:max-w-3xl min-[2200px]:max-w-4xl">
            Our cross-functional pods fuse spatial computing, low-latency 3D rendering, and resilient cloud architectures. We don&apos;t just build interfaces—we build immersive digital products engineered for velocity, scale, and high engagement.
          </p>

          {/* Core Feature Blocks - Responsive scale up to 3000px */}
          <div className="mt-7 2xl:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 2xl:gap-5 max-w-lg 2xl:max-w-2xl min-[2200px]:max-w-3xl">
            <div className="flex items-center gap-3.5 2xl:gap-4 rounded-lg 2xl:rounded-xl border border-black/15 bg-transparent backdrop-blur-md p-3.5 2xl:p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="size-8 2xl:size-12 rounded-md 2xl:rounded-lg bg-[#0A2540]/10 text-[#0A2540] flex items-center justify-center shrink-0 border border-[#0A2540]/15">
                <Layers className="size-4 2xl:size-6 text-[#0A2540]" />
              </div>
              <div>
                <div className="text-xs 2xl:text-base min-[2200px]:text-lg font-semibold text-slate-900">Spatial &amp; 3D Web</div>
                <div className="text-[11px] 2xl:text-sm min-[2200px]:text-base text-black/60">Interactive WebGL &amp; Canvas</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 2xl:gap-4 rounded-lg 2xl:rounded-xl border border-black/15 bg-transparent backdrop-blur-md p-3.5 2xl:p-5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="size-8 2xl:size-12 rounded-md 2xl:rounded-lg bg-[#0A2540]/10 text-[#0A2540] flex items-center justify-center shrink-0 border border-[#0A2540]/15">
                <Cpu className="size-4 2xl:size-6 text-[#0A2540]" />
              </div>
              <div>
                <div className="text-xs 2xl:text-base min-[2200px]:text-lg font-semibold text-slate-900">Sub-16ms Edge APIs</div>
                <div className="text-[11px] 2xl:text-sm min-[2200px]:text-base text-black/60">60fps Ultra-smooth Motion</div>
              </div>
            </div>
          </div>

          {/* CTA actions - Responsive scale */}
          <div className="mt-8 2xl:mt-12 pt-6 2xl:pt-8 border-t border-black/10 flex flex-wrap items-center gap-3.5 2xl:gap-5">
            <Link
              href="/contact"
              className="inline-flex min-h-11 2xl:min-h-14 items-center justify-center gap-2 rounded-lg 2xl:rounded-xl bg-[#0A2540] px-6 2xl:px-8 py-2.5 2xl:py-3.5 text-sm 2xl:text-lg font-semibold text-white shadow-md transition hover:bg-[#143960] hover:shadow-lg hover:-translate-y-0.5"
            >
              Build with our team <ArrowUpRight className="size-4 2xl:size-5" />
            </Link>
            <Link
              href="#who-we-are"
              className="inline-flex min-h-11 2xl:min-h-14 items-center justify-center gap-2 rounded-lg 2xl:rounded-xl border border-black/15 bg-white/80 px-5 2xl:px-7 py-2.5 2xl:py-3.5 text-sm 2xl:text-lg font-semibold text-[#111] backdrop-blur-md transition hover:bg-white hover:border-black/30 hover:-translate-y-0.5 shadow-xs"
            >
              Explore Methodology
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive 3D Spline Bot - Scales up to 3000px seamlessly */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[500px] lg:max-w-[620px] 2xl:max-w-[800px] min-[2200px]:max-w-[950px] min-[2600px]:max-w-[1100px] h-[400px] sm:h-[480px] lg:h-[540px] 2xl:h-[680px] min-[2200px]:h-[800px] min-[2600px]:h-[900px] flex items-center justify-center">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
