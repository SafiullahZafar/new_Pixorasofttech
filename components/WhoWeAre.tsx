"use client";

import React, { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import InfiniteGallery, { ImageItem } from "@/components/InfiniteGallery";

const GALLERY_IMAGES: ImageItem[] = [
  {
    src: "/home_page/who_we_are/whoweare1.webp",
    alt: "High-Performance Analytics Platforms",
  },
  {
    src: "/home_page/who_we_are/whoweare2.webp",
    alt: "Digital Product Architecture & UI",
  },
  {
    src: "/home_page/who_we_are/whoweare3-optimized.webp",
    alt: "Mobile App Ecosystems & UX",
  },
  {
    src: "/home_page/who_we_are/whoweare4.webp",
    alt: "Full-Stack Web & Software Engineering",
  },
  {
    src: "/home_page/who_we_are/whoweare5.webp",
    alt: "Cloud Infrastructure & Edge APIs",
  },
  {
    src: "/home_page/who_we_are/whoweare6.webp",
    alt: "Product Strategy & Agile Sprints",
  },
  {
    src: "/home_page/who_we_are/whoweare7.webp",
    alt: "Scalable Enterprise Software Systems",
  },
  {
    src: "/home_page/who_we_are/whoweare8.webp",
    alt: "Digital Brand Identity & Design Systems",
  },
  {
    src: "/home_page/who_we_are/whoweare9.webp",
    alt: "Next-Gen AI & Modern Intelligence",
  },
  {
    src: "/home_page/who_we_are/whoweare10.webp",
    alt: "AI-Powered Product Innovation",
  },
  {
    src: "/home_page/who_we_are/whoweare11.webp",
    alt: "Modern Developer Experience & Tooling",
  },
  {
    src: "/home_page/who_we_are/whoweare12.webp",
    alt: "Real-Time Data & Live Systems",
  },
  {
    src: "/home_page/who_we_are/whoweare13.webp",
    alt: "Creative Digital Experiences",
  },
  {
    src: "/home_page/who_we_are/whoweare14.webp",
    alt: "Enterprise Platform Engineering",
  },
  {
    src: "/home_page/who_we_are/whoweare15.webp",
    alt: "Security & Compliance Architecture",
  },
  {
    src: "/home_page/who_we_are/whoweare16.webp",
    alt: "Global Deployment & Edge Networks",
  },
  {
    src: "/home_page/who_we_are/whoweare17.webp",
    alt: "Design Systems & Component Libraries",
  },
  {
    src: "/home_page/who_we_are/whoweare18.webp",
    alt: "API-First & Microservices Architecture",
  },
  {
    src: "/home_page/who_we_are/whoweare19.webp",
    alt: "Performance Optimization & Core Web Vitals",
  },
  {
    src: "/home_page/who_we_are/whoweare20.webp",
    alt: "End-to-End Product Partnership",
  },
];

const PILLARS = [
  {
    tag: "PHASE 01",
    label: "STRATEGY",
    title: "You Dream It",
    subtitle: "Vision & Architecture Roadmap",
    accent: "#0342DD",
    gradient: "from-[#0342DD] to-[#6366F1]",
    iconBg: "bg-blue-50 text-[#0342DD] border-blue-200/90",
    description: [
      "Vision, Market & Product Strategy",
      "User Insights & System Architecture",
      "Rapid Feasibility & Technical Planning",
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    tag: "PHASE 02",
    label: "CRAFT",
    title: "We Build It",
    subtitle: "Full-Stack & Cloud Architecture",
    accent: "#0284C7",
    gradient: "from-[#0284C7] to-[#0342DD]",
    iconBg: "bg-sky-50 text-[#0284C7] border-sky-200/90",
    description: [
      "Full-Stack Web & Next.js Platforms",
      "Modern Edge APIs & Cloud Infrastructure",
      "Cloud & Service Architecture",
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    tag: "PHASE 03",
    label: "VELOCITY",
    title: "We Ship Fast",
    subtitle: "Continuous CI/CD Delivery",
    accent: "#2563EB",
    gradient: "from-[#0342DD] to-[#2563EB]",
    iconBg: "bg-indigo-50 text-[#0342DD] border-indigo-200/90",
    description: [
      "Weekly Sprints & Continuous CI/CD",
      "Automated Testing & Instant Delivery",
      "Rapid Prototyping & Agile Iterations",
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    tag: "PHASE 04",
    label: "SCALE",
    title: "Shared Scale",
    subtitle: "Production Readiness & Growth",
    accent: "#0A2540",
    gradient: "from-[#0A2540] to-[#0342DD]",
    iconBg: "bg-slate-50 text-[#0A2540] border-slate-200/90",
    description: [
      "Production Reliability & Global Scale",
      "Security, Monitoring & Support Planning",
      "Long-Term Engineering Partnership",
    ],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function WhoWeAre() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            {/* Refined font-medium weight as requested */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black uppercase leading-[1.08]">
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
            visibleCount={12}
            centerTitle="Who We Are"
            scrollProgress={scrollYProgress}
          />
        </div>
      </div>

      {/* 3. Partnership Collaboration Interactive Flip Cards */}
      <div className="w-full max-w-[2200px] mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-20 border-t border-zinc-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PILLARS.map((pillar, index) => (
            <div
              key={index}
              onClick={() => toggleCard(index)}
              className="group h-[255px] sm:h-[270px] [perspective:1000px] cursor-pointer relative"
            >
              {/* Ambient colorful backlight glow on hover */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl pointer-events-none -z-10"
                style={{ background: `linear-gradient(135deg, ${pillar.accent}, transparent)` }}
              />

              <div
                className={`relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] ${
                  flippedCards[index] ? "[transform:rotateY(180deg)]" : ""
                } group-hover:[transform:rotateY(180deg)]`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[index] ? "rotateY(180deg)" : undefined,
                }}
              >
                {/* FRONT FACE: Clean white surface with colorful top gradient, glowing icon badge, and rich typography */}
                <div
                  className="absolute inset-0 h-full w-full rounded-3xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 p-5 sm:p-6 flex flex-col justify-between text-left transition-all duration-300 group-hover:border-[#0342DD]/40 overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Top Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient}`} />

                  {/* Top Row: Tag badge + 3D Flip Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#0342DD] bg-[#0342DD]/10 px-2.5 py-1 rounded-full border border-[#0342DD]/15">
                        {pillar.tag}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider font-semibold text-zinc-400">
                        • {pillar.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover:text-[#0342DD] transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0342DD] animate-pulse" />
                      <span>FLIP</span>
                    </div>
                  </div>

                  {/* Center: Icon Badge & Titles */}
                  <div className="my-auto py-1">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-2.5`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Interactive prompt with arrow */}
                  <div className="pt-2.5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-medium group-hover:text-[#0342DD] transition-colors">
                    <span>Click to view deliverables</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* BACK FACE: Grayish web background (#F4F4F7) with black text, checkmark list, and SLA badge */}
                <div
                  className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-b from-[#FAFAFC] via-[#F4F4F7] to-[#EEEEF2] text-black border-2 border-zinc-300 p-5 sm:p-6 flex flex-col justify-between text-left shadow-lg [transform:rotateY(180deg)] overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Top Row: Phase tag + Back prompt */}
                  <div className="flex items-center justify-between border-b border-zinc-200/80 pb-2">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#0342DD] bg-[#0342DD]/10 px-2.5 py-0.5 rounded-full">
                      {pillar.tag}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1 font-semibold">
                      <span>↺</span> FLIP BACK
                    </span>
                  </div>

                  {/* Title & Checkmark Deliverables */}
                  <div className="py-1">
                    <h4 className="text-sm sm:text-base font-bold text-black tracking-tight mb-2">
                      {pillar.title} Deliverables
                    </h4>
                    <div className="space-y-1.5">
                      {pillar.description.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg className="w-3.5 h-3.5 text-[#0342DD] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className="text-xs text-black font-semibold leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Status Tag */}
                  <div className="pt-2 border-t border-zinc-200/80 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                    <span className="flex items-center gap-1.5 font-bold text-black">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      ACTIVE DELIVERABLE
                    </span>
                    <span className="text-zinc-400">0{index + 1} / 04</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
