"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const projectItems = [
  // Col 1 items
  {
    col: 1,
    id: "custom-softwares",
    title: "Custom Softwares",
    subtitle: "Enterprise Solutions",
    year: "2026",
    badge: "Development",
    img: "/portfolio/crm-dashboard.png",
    fallbackImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    href: "/projects/crm",
  },
  {
    col: 1,
    id: "apps",
    title: "Apps",
    subtitle: "Flutter & React native",
    year: "2026",
    badge: "Development",
    img: "/portfolio/fitpulse-app.png",
    fallbackImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
    href: "/projects/rider-app",
  },
  // Col 2 items (with offset pt-20)
  {
    col: 2,
    id: "web-development",
    title: "Web Development",
    subtitle: "React, Next.js & MERN Stack",
    year: "2025",
    badge: "Design & Dev",
    img: "/portfolio/brew-haven.png",
    fallbackImg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000&q=80",
    href: "/case-study/brew-haven",
  },
  {
    col: 2,
    id: "systems",
    title: "Systems",
    subtitle: "Management Systems",
    year: "2025",
    badge: "Systems",
    img: "/portfolio/inventory-dashboard.png",
    fallbackImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
    href: "/projects/inventory",
  },
];

function ProjectCard({ item, index }: { item: (typeof projectItems)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group w-full"
    >
      <Link
        href={item.href}
        className="relative block w-full aspect-[4/3] bg-black/5 mb-3 overflow-hidden rounded-2xl cursor-pointer"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = item.fallbackImg;
          }}
        />

        {/* Category Badge */}
        <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-2xl tracking-wide z-10">
          {item.badge}
        </span>

        {/* Rotating SHOW CASES Badge on Hover */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex h-28 w-28 items-center justify-center rounded-full bg-white/60 backdrop-blur-md shadow-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <div className="absolute z-10 text-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
            </svg>
          </div>
          <div className="relative flex h-full w-full items-center justify-center animate-[spin_10s_linear_infinite]">
            <svg className="h-full w-full p-2" viewBox="0 0 100 100">
              <path
                id={`circlePath-${item.id}`}
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              ></path>
              <text className="text-[9.5px] font-semibold uppercase tracking-[0.27em] fill-black">
                <textPath href={`#circlePath-${item.id}`} startOffset="0%">
                  SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;SHOW CASES&nbsp;&nbsp;•&nbsp;&nbsp;
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </Link>

      {/* Info Row */}
      <div className="flex items-baseline justify-between pt-1 px-1">
        <div>
          <Link href={item.href}>
            <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tight group-hover:underline underline-offset-4">
              {item.title}
            </h3>
          </Link>
          <p className="text-black/60 text-xs sm:text-sm font-normal mt-0.5">{item.subtitle}</p>
        </div>
        <span className="text-xs font-mono font-medium text-black/60">{item.year}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const col1 = projectItems.filter((p) => p.col === 1);
  const col2 = projectItems.filter((p) => p.col === 2);

  return (
    <section id="projects" className="bg-transparent text-black py-16 px-5 sm:px-8 lg:px-8 w-full font-sans overflow-hidden">
      <div className="w-full max-w-[2200px] mx-auto">
        {/* Section Heading */}
        <div className="flex items-start justify-between mb-12 sm:mb-16 px-1">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-black">OUR PROJECTS</span>
            </div>
            <h2 className="max-w-[950px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] 2xl:text-[96px] text-black">
              <span className="block overflow-hidden py-1">
                <span className="block transform-gpu">Selected Works &amp;</span>
              </span>
              <span className="block overflow-hidden py-1">
                <span className="block transform-gpu text-black">Digital Experiences.</span>
              </span>
            </h2>
          </div>
        </div>

        {/* 2-Column Asymmetric Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-12 md:gap-16">
            {col1.map((item, idx) => (
              <ProjectCard key={item.id} item={item} index={idx} />
            ))}
          </div>

          {/* Column 2 (Offset by pt-20 on desktop) */}
          <div className="flex flex-col gap-12 md:gap-16 md:pt-20">
            {col2.map((item, idx) => (
              <ProjectCard key={item.id} item={item} index={idx + 2} />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16 sm:mt-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-[#0A2540] text-white text-xs sm:text-sm font-medium px-8 py-3.5 rounded-2xl hover:bg-[#143960] transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
