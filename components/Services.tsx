"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeadingAnimationService from "@/components/HeadingAnimationService";
import AnimationServiceDescription from "@/components/AnimationServiceDescription";

export interface ServiceItem {
  id: number;
  slug: string;
  badge: string;
  title: string;
  eyebrow: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    slug: "website-development",
    badge: "SERVICE 01",
    title: "Website Development",
    eyebrow: "High-Performance Next.js Websites Engineered to Convert",
    description:
      "We design and build fast, responsive, SEO-optimized web applications with sub-second loading speeds, modern frameworks, and conversion-focused architectures that elevate your brand.",
    imageUrl: "/home_page/our_expertise/ourexpertise1.png?v=2",
    tags: ["Next.js & React", "Responsive UI", "Core Web Vitals", "SEO Ready"],
  },
  {
    id: 2,
    slug: "mobile-app-development",
    badge: "SERVICE 02",
    title: "Mobile App Development",
    eyebrow: "Cross-Platform iOS & Android Apps Built for Scale",
    description:
      "Intuitive, native-feel mobile applications crafted with React Native and Flutter. We engineer low-latency, offline-first apps with delightful interactions and App Store launch readiness.",
    imageUrl: "/home_page/our_expertise/ourexpertise2.png?v=2",
    tags: ["iOS & Android", "React Native", "Offline First", "Store Launch"],
  },
  {
    id: 3,
    slug: "custom-software-development",
    badge: "SERVICE 03",
    title: "Custom Software Development",
    eyebrow: "Enterprise Dashboards, Internal Systems & Portals",
    description:
      "Tailor-made SaaS platforms, admin dashboards, and operations software built around your exact business logic to streamline manual workflows and unify data.",
    imageUrl: "/home_page/our_expertise/ourexpertise3.png?v=2",
    tags: ["Custom Portals", "API Integrations", "Automation", "Role-Based Access"],
  },
  /*
  {
    id: 4,
    slug: "ui-ux-design",
    badge: "SERVICE 04",
    title: "UI/UX & Product Design",
    eyebrow: "Human-Centered Digital Interfaces That Drive Action",
    description:
      "Research-backed interface design and comprehensive design systems that transform complex software into intuitive, visually breathtaking experiences users love.",
    imageUrl: "/home_page/our_expertise/ourexpertise5.png?v=2",
    tags: ["User Research", "Wireframes", "Design Systems", "Interactive Prototypes"],
  },
  */
  {
    id: 4,
    slug: "UI?UX-design",
    badge: "SERVICE 04",
    title: "UI/UX & Product Design",
    eyebrow: "Secure Cloud Systems, APIs & Practical AI Integrations",
    description:
      "Secure cloud infrastructure, reliable APIs, automated deployments, and practical AI integrations that help your products connect, scale, and run smoothly.",
    imageUrl: "/home_page/our_expertise/ourexpertise4.png?v=2",
    tags: ["AWS & Azure", "CI/CD Pipelines", "Auto Scaling", "Zero Downtime"],
  },
  {
    id: 5,
    slug: "cloud-solutions",
    badge: "SERVICE 05",
    title: "Cloud & AI Solutions",
    eyebrow: "Smart Workflows, Custom AI Integrations & Agents",
    description:
      "Practical AI integrations, automated data pipelines, and intelligent assistant workflows designed to eliminate repetitive operational tasks and multiply productivity.",
    imageUrl: "/home_page/our_expertise/ourexpertise5.png?v=2",
    tags: ["AI Integrations", "Smart Workflows", "API Bridges", "Analytics"],
  },
];

function AccordionCard({
  item,
  isActive,
  onActivate,
}: {
  item: ServiceItem;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group relative h-[420px] sm:h-[480px] lg:h-[510px] xl:h-[540px] shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl text-left border border-black/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
        isActive
          ? "w-[min(82vw,340px)] sm:w-[360px] lg:w-[330px] xl:w-[400px] 2xl:w-[450px] shadow-[0_24px_60px_-15px_rgba(10,37,64,0.25)]"
          : "w-[44px] sm:w-[52px] lg:w-[48px] xl:w-[58px] 2xl:w-[68px] hover:w-[50px] sm:hover:w-[58px] lg:hover:w-[54px] xl:hover:w-[64px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]"
      }`}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = "/hero-visual.png";
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isActive
            ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
            : "bg-black/60 group-hover:bg-black/45"
        }`}
      />

      {/* Expanded Content View (when active) */}
      <div
        className={`absolute inset-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-between transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-white/20 text-white backdrop-blur-md border border-white/20">
            {item.badge}
          </span>
          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-3xl font-bold text-white tracking-tight leading-tight mb-2">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
          <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-semibold text-white/95">
            <span>Explore Service Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Collapsed Pill View (vertical title when inactive) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-between py-5 sm:py-6 transition-opacity duration-300 ${
          !isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white/70">
          0{item.id}
        </span>
        <span className="whitespace-nowrap text-xs sm:text-sm lg:text-[13px] xl:text-sm font-semibold tracking-wide text-white [writing-mode:vertical-rl] rotate-180">
          {item.title}
        </span>
        <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
      </div>
    </button>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex] || servicesData[0];

  return (
    <section id="services" className="relative w-full bg-transparent font-sans text-black py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-[2000px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-14">
          {/* Left Column: Dynamic service description updating on hover */}
          <div className="w-full lg:w-[42%] xl:w-[40%] flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-black">OUR EXPERTISE</span>
              <span className="text-xs font-bold text-slate-400 ml-2">
                • 0{activeIndex + 1} / 0{servicesData.length}
              </span>
            </div>

            {/* Heading: Pure Particle Animation (retained as requested) */}
            <div className="w-full min-h-[100px] sm:min-h-[115px] lg:min-h-[130px] flex items-center mb-2">
              <HeadingAnimationService title={activeService.title} />
            </div>

            {/* Description & Button: Rolling Text Shift Animation on card change */}
            <AnimationServiceDescription
              activeService={activeService}
              activeIndex={activeIndex}
            />
          </div>

          {/* Right Column: 5 Expandable Accordion Cards */}
          <div className="w-full lg:w-[58%] xl:w-[60%] min-w-0">
            <div className="w-full flex justify-center lg:justify-end">
              <div className="flex flex-row items-center gap-2 sm:gap-2.5 lg:gap-2.5 xl:gap-3 max-w-full overflow-x-auto lg:overflow-visible pb-4 pt-2 px-1 scrollbar-none">
                {servicesData.map((item, index) => (
                  <AccordionCard
                    key={item.id}
                    item={item}
                    isActive={index === activeIndex}
                    onActivate={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center lg:text-right mt-2 pr-2 hidden sm:block">
              Hover over any service card to expand details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
