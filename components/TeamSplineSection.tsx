"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Cpu, ShieldCheck } from "lucide-react";
import { SplineScene } from "@/components/SplineScene";

export default function TeamSplineSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 sm:py-20 max-w-[1540px] mx-auto z-20">
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 bg-zinc-950 text-white shadow-2xl">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[450px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 size-[450px] rounded-full bg-indigo-600/15 blur-[120px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[620px]">
          {/* Left Column: Pixora Team & Tech Narrative */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-300 backdrop-blur-md">
                  <Sparkles className="size-3.5 text-blue-400" />
                  Interactive Engineering
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-md">
                  Next-Gen 3D Systems
                </span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Engineering Intelligence into Every Interface.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Our cross-functional pods fuse spatial computing, low-latency 3D rendering, and resilient cloud architectures. We don&apos;t just build interfaces—we build immersive digital products engineered for velocity, scale, and high engagement.
              </p>

              {/* Core Feature Badges */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <div className="size-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Layers className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Spatial &amp; 3D Web</div>
                    <div className="text-[11px] text-zinc-400">Interactive WebGL &amp; Canvas</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <div className="size-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Sub-16ms Edge APIs</div>
                    <div className="text-[11px] text-zinc-400">60fps Ultra-smooth Motion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-[#0A2540] transition hover:bg-zinc-100 hover:-translate-y-0.5 shadow-md"
              >
                Build with our team <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="#who-we-are"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Explore Methodology
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 3D Spline Scene */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] lg:h-full min-h-[420px] bg-gradient-to-br from-zinc-900/60 to-black/80 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
            {/* Interactive hint tag */}
            <div className="pointer-events-none absolute top-4 right-4 z-20 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
              Hover &amp; interact with 3D model
            </div>

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
