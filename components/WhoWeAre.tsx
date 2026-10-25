"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import InfiniteGallery, { ImageItem } from "@/components/InfiniteGallery";

const GALLERY_IMAGES: ImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "High-Performance Analytics Platforms",
  },
  {
    src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital Product Architecture & UI",
  },
  {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Mobile App Ecosystems & UX",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    alt: "Full-Stack Web & Software Engineering",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Cloud Infrastructure & Edge APIs",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Product Strategy & Agile Sprints",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Scalable Enterprise Software Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital Brand Identity & Design Systems",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    alt: "Next-Gen AI & Modern Intelligence",
  },
];

export default function WhoWeAre() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Pinned scroll track driving the full-screen 3D tunnel gallery
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="who-we-are" className="relative w-full bg-transparent text-black font-sans border-t border-dashed border-zinc-300">
      {/* 1. Header Section - Clean, proper responsive width, no overlap with 3D cards */}
      <div className="w-full max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-8 sm:pb-12 border-b border-zinc-200">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0342DD] inline-block"></span>
              <span className="font-bold text-black">WHO WE ARE</span>
              <span className="text-zinc-400">• YOUR VISION, OUR CRAFT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-black uppercase leading-[1.08]">
              YOUR VISION.
              <br />
              OUR ENGINEERING.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-normal text-[#555555] leading-relaxed mt-2 sm:mt-6">
            You bring the bold vision, user insights, and business ambition. We bring deep technical architecture, modern full-stack development, and rapid execution to turn your vision into production-grade software.
          </p>
        </div>
      </div>

      {/* 2. Full-Screen 3D Animation Stage (Dedicated 100vh Sticky Viewport with Pinned Scroll Track) */}
      <div
        ref={trackRef}
        className="relative w-full h-[280vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-transparent select-none">
          <InfiniteGallery
            images={GALLERY_IMAGES}
            className="w-full h-full"
            speed={1.0}
            centerTitle="Who We Are"
            scrollProgress={scrollYProgress}
          />
        </div>
      </div>

      {/* 3. Partnership Collaboration Pillars */}
      <div className="w-full max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 border-t border-zinc-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">You Dream It</span>
            <span className="text-xs text-zinc-500 font-medium mt-2">Vision, Strategy & Roadmap</span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">We Build It</span>
            <span className="text-xs text-zinc-500 font-medium mt-2">Full-Stack & Cloud Architecture</span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-[#0342DD] tracking-tight">We Ship Fast</span>
            <span className="text-xs text-zinc-500 font-medium mt-2">Weekly Sprints & Continuous CI/CD</span>
          </div>
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">Shared Scale</span>
            <span className="text-xs text-zinc-500 font-medium mt-2">Production Reliability & Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
