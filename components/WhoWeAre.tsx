"use client";

import React from "react";
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
  return (
    <section
      id="who-we-are"
      className="bg-transparent font-sans text-black py-16 sm:py-24 border-t border-dashed border-zinc-300 select-none overflow-hidden"
    >
      <div className="mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between pb-8 sm:pb-12 border-b border-zinc-200 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#0342DD] inline-block"></span>
              <span className="font-bold text-black">WHO WE ARE</span>
              <span className="text-zinc-400">• YOUR VISION, OUR CRAFT</span>
            </div>
            {/* Clean Two-Line Heading matching other sections */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-black uppercase leading-[1.08]">
              YOUR VISION.
              <br />
              OUR ENGINEERING.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-normal text-[#555555] leading-relaxed mt-4 sm:mt-6">
            You bring the bold vision, user insights, and business ambition. We bring deep technical architecture, modern full-stack development, and rapid execution to turn your vision into production-grade software.
          </p>
        </div>

        {/* Tall Grand 3D Infinite Tunnel Gallery on Transparent Background */}
        <div className="w-full relative">
          <InfiniteGallery
            images={GALLERY_IMAGES}
            className="h-[92vh] sm:h-[98vh] lg:h-[105vh] min-h-[750px] w-full bg-transparent"
            speed={1.0}
            centerTitle="Who We Are"
          />
        </div>

        {/* Partnership Collaboration Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">You Dream It</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Vision, Strategy & Roadmap</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">We Build It</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Full-Stack & Cloud Architecture</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-[#0342DD] tracking-tight">We Ship Fast</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Weekly Sprints & Continuous CI/CD</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between">
            <span className="text-xl sm:text-2xl font-bold text-black tracking-tight">Shared Scale</span>
            <span className="text-xs text-zinc-500 font-medium mt-1">Production Reliability & Global Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
