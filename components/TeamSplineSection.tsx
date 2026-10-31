"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Cpu } from "lucide-react";
import { SplineScene } from "@/components/SplineScene";

export default function TeamSplineSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 max-w-[1540px] mx-auto z-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Pixora Team & Tech Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111] leading-tight">
            Engineering Intelligence into Every Interface.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-black/65 leading-relaxed max-w-xl">
            Our cross-functional pods fuse spatial computing, low-latency 3D rendering, and resilient cloud architectures. We don&apos;t just build interfaces—we build immersive digital products engineered for velocity, scale, and high engagement.
          </p>

          {/* Core Feature Blocks - Transparent with backdrop blur & very dark blue icons */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg">
            <div className="flex items-center gap-3 rounded-lg border border-black/15 bg-transparent backdrop-blur-md p-3.5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="size-8 rounded-md bg-[#0A2540]/10 text-[#0A2540] flex items-center justify-center shrink-0 border border-[#0A2540]/15">
                <Layers className="size-4 text-[#0A2540]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Spatial &amp; 3D Web</div>
                <div className="text-[11px] text-black/60">Interactive WebGL &amp; Canvas</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-black/15 bg-transparent backdrop-blur-md p-3.5 shadow-xs transition-transform hover:-translate-y-0.5">
              <div className="size-8 rounded-md bg-[#0A2540]/10 text-[#0A2540] flex items-center justify-center shrink-0 border border-[#0A2540]/15">
                <Cpu className="size-4 text-[#0A2540]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-900">Sub-16ms Edge APIs</div>
                <div className="text-[11px] text-black/60">60fps Ultra-smooth Motion</div>
              </div>
            </div>
          </div>

          {/* CTA actions - Less rounded buttons */}
          <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#0A2540] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#143960] hover:shadow-lg hover:-translate-y-0.5"
            >
              Build with our team <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="#who-we-are"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/15 bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#111] backdrop-blur-md transition hover:bg-white hover:border-black/30 hover:-translate-y-0.5 shadow-xs"
            >
              Explore Methodology
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive 3D Spline Bot - Sits directly on screen bg without box feel, slightly bigger */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[500px] lg:max-w-[560px] h-[400px] sm:h-[460px] lg:h-[520px] flex items-center justify-center">
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
