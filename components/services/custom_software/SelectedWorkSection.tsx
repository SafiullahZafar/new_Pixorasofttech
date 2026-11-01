"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WorkProject {
  id: string;
  title: string;
  year: string;
  tags: string[];
  image: string;
  bgColor: string;
  href: string;
}

const WORKS_DATA: WorkProject[] = [
  {
    id: "1",
    title: "Crimper Salon System",
    year: "2026",
    tags: ["Backend & Database Design", "POS Software"],
    image: "/salon_system.png",
    bgColor: "bg-[#dce6e6]",
    href: "/projects",
  },
  {
    id: "2",
    title: "Driven Fleet & Logistics",
    year: "2026",
    tags: ["Web Apps & Architecture", "Fleet Telemetry"],
    image: "/driven_adminPanal.png",
    bgColor: "bg-[#f4f4f6]",
    href: "/projects",
  },
  {
    id: "3",
    title: "CloudKhata Business ERP",
    year: "2026",
    tags: ["Fullstack", "SaaS Platform"],
    image: "/rms_system.png",
    bgColor: "bg-[#8ca8ee]/30",
    href: "/projects",
  },
  {
    id: "4",
    title: "Textile Inventory Distribution",
    year: "2026",
    tags: ["Enterprise Supply Chain", "FBR Integrated"],
    image: "/textile_system.png",
    bgColor: "bg-[#e8ebf4]",
    href: "/projects",
  },
];

export default function SelectedWorkSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-transparent py-12 md:py-20 2xl:py-28 select-none overflow-hidden px-0">
      {/* Heading */}
      <div className="w-full px-6 sm:px-12 lg:px-14 2xl:px-24 mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-medium tracking-tight text-slate-900">
          Works
        </h2>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-5 2xl:gap-8 overflow-x-auto pb-6 pl-6 sm:pl-12 lg:pl-14 2xl:pl-24 pr-6 sm:pr-12 lg:pr-14 2xl:pr-24 no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {WORKS_DATA.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex-shrink-0 w-[82vw] sm:w-[480px] lg:w-[600px] 2xl:w-[740px] group cursor-pointer"
          >
            <div
              className={`relative w-full rounded-2xl aspect-[16/10] overflow-hidden ${item.bgColor} border border-black/5 transition-transform duration-300 group-hover:scale-[0.99]`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <span className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-slate-400">
                  - {item.year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 bg-white/60 backdrop-blur-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Progress Bar + Prev/Next Controls */}
      <div className="w-full px-6 sm:px-12 lg:px-14 2xl:px-24 mt-6 flex items-center justify-between gap-6">
        <div className="flex-1 max-w-xl 2xl:max-w-2xl h-[3px] bg-slate-200 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-slate-900 transition-all duration-150 ease-out rounded-full"
            style={{
              width: "35%",
              transform: `translateX(${scrollProgress * 1.8}%)`,
            }}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Previous Project"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Next Project"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
