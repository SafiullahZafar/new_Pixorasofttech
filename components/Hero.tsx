"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PREVIEW_VIDEOS = ["/videos/video-01.mp4", "/videos/video-03.mp4"];
const FULL_HERO_VIDEO = "/videos/video-full.mp4";

export default function Hero() {
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const fullVideoRef = useRef<HTMLVideoElement>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<"preview" | "full">("preview");
  const [videoVisible, setVideoVisible] = useState(false);

  const handlePreviewCanPlay = () => {
    if (activeVideo !== "preview") return;
    const video = previewVideoRef.current;
    if (!video) return;

    void video.play().then(() => setVideoVisible(true)).catch(() => {});
  };

  const handleFullVideoCanPlay = () => {
    const video = fullVideoRef.current;
    if (!video || activeVideo === "full") return;

    void video.play().then(() => {
      setActiveVideo("full");
      setVideoVisible(true);
      previewVideoRef.current?.pause();
    }).catch(() => {});
  };

  const handlePreviewEnded = () => {
    if (activeVideo === "preview") {
      setVideoVisible(false);
      setPreviewIndex((currentIndex) => (currentIndex + 1) % PREVIEW_VIDEOS.length);
    }
  };

  return (
    <section className="relative z-0 overflow-hidden bg-transparent text-black pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[2250px] px-5 py-8 sm:px-8 sm:py-12 lg:px-8 lg:py-16 xl:py-20">
        {/* Top Split: Huge Headline & Subtext + CTA */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.6fr_0.8fr] lg:gap-16">
          <div
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          >
            <h1 className="max-w-[1000px] text-[40px] font-medium leading-[1.12] tracking-[-0.05em] sm:text-[56px] md:text-[64px] lg:text-[68px] xl:text-[76px] 2xl:text-[90px]">
              <span className="block" style={{ perspective: 1000 }}>
                <span className="block">
                  Software Development
                </span>
              </span>
              <span className="block text-black" style={{ perspective: 1000 }}>
                <span className="block">
                  <span className="text-[#000000]">&amp;</span> Digital Product
                </span>
              </span>
              <span className="block text-black" style={{ perspective: 1000 }}>
                <span className="block">
                  Design Company.
                </span>
              </span>
            </h1>
          </div>

          <div className="max-w-[470px] lg:pb-2">
            <p className="text-[15px] leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-[17px]">
              You bring the &quot;what if.&quot; We bring the code, the systems, and the launch. Somewhere between your brainstorm and your customers, there&apos;s us.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-block">
                <button className="group inline-flex w-full items-center justify-center gap-4 rounded-2xl bg-[#0A2540] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#143960] sm:w-auto cursor-pointer shadow-sm">
                  Start a Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 19L19 5"></path>
                      <path d="M8 5h11v11"></path>
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/projects" className="inline-block">
                <button className="w-full rounded-2xl border border-black/15 bg-transparent px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:w-auto cursor-pointer">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero video showcase */}
        <div className="relative left-1/2 mt-10 h-[calc(100svh-5px)] max-h-[70rem] min-h-[24rem] w-[calc(100vw-10px)] -translate-x-1/2 sm:mt-16 lg:mt-20">
          <div
            className="group relative block h-full w-full overflow-hidden rounded-md"
          >
            <div className="block h-full w-full">
              <div className="absolute inset-0 overflow-hidden bg-transparent">
                <img
                  src="/home_page/hero/hero1.png"
                  alt="PixoraSoftTech Showcase"
                  fetchPriority="high"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoVisible ? "opacity-0" : "opacity-100"}`}
                />
                {activeVideo === "preview" && (
                  <video
                    ref={previewVideoRef}
                    src={PREVIEW_VIDEOS[previewIndex]}
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={handlePreviewCanPlay}
                    onEnded={handlePreviewEnded}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${videoVisible ? "opacity-100" : "opacity-0"}`}
                  />
                )}
                <video
                  ref={fullVideoRef}
                  src={FULL_HERO_VIDEO}
                  muted
                  playsInline
                  preload="auto"
                  loop
                  onCanPlay={handleFullVideoCanPlay}
                  aria-label="PixoraSoftTech full showcase video"
                  className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${activeVideo === "full" ? "opacity-100" : "opacity-0"}`}
                />
                <img
                  src="/logos/logo_hero_video.png"
                  alt="Pixora Social Automation"
                  className={`pointer-events-none absolute bottom-0 right-4 z-20 w-44 object-contain transition-opacity duration-300 sm:bottom-0 sm:right-6 sm:w-52 lg:w-60 ${videoVisible ? "opacity-100" : "opacity-0"}`}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
