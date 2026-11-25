"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import HeadingAnimationService from "@/components/HeadingAnimationService";
import AnimationServiceDescription from "@/components/AnimationServiceDescription";

export interface ServiceItem {
  id: number;
  slug: string;
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
    title: "Website Development",
    eyebrow: "High-Performance Next.js Websites Engineered to Convert",
    description:
      "We design and build responsive, SEO-ready web applications with modern frameworks and conversion-focused architectures that fit your brand.",
    imageUrl: "/home_page/our_expertise/ourexpertise1.png?v=2",
    tags: ["Next.js & React", "Responsive UI", "Core Web Vitals", "SEO Ready"],
  },
  {
    id: 2,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Cross-Platform iOS & Android Apps Built for Scale",
    description:
      "Intuitive, native-feel mobile applications crafted with React Native and Flutter, with offline support, secure sign-in, and polished interactions.",
    imageUrl: "/home_page/our_expertise/ourexpertise2.png?v=2",
    tags: ["iOS & Android", "React Native", "Offline First", "Store Launch"],
  },
  {
    id: 3,
    slug: "custom-software-development",
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
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    eyebrow: "Human-Centered Digital Interfaces That Drive Action",
    description:
      "Research-backed interface design and comprehensive design systems that turn complex software into clear, intuitive experiences.",
    imageUrl: "/home_page/our_expertise/ourexpertise4.png?v=2",
    tags: ["User Research", "Wireframes", "Design Systems", "Interactive Prototypes"],
  },
  {
    id: 5,
    slug: "cloud-solutions",
    title: "Cloud & AI Solutions",
    eyebrow: "Secure Cloud Systems, APIs & Practical AI Integrations",
    description:
      "Secure cloud infrastructure, reliable APIs, automated deployments, and practical AI integrations that help your products connect, scale, and run smoothly.",
    imageUrl: "/home_page/our_expertise/ourexpertise5.png?v=2",
    tags: ["AWS & Azure", "CI/CD Pipelines", "Auto Scaling", "Zero Downtime"],
  },
  {
    id: 6,
    slug: "saas-development",
    title: "SaaS Development",
    eyebrow: "Scalable SaaS Products Built Around Your Users",
    description:
      "We design and build SaaS platforms with clear customer workflows, secure workspaces, and room to grow.",
    imageUrl: "/about_page/saas_cus/nexora-crm-laptop-showcase.png",
    tags: ["SaaS Products", "Customer Workspaces", "Subscriptions", "Product Growth"],
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
    <Link
      href={`/services/${item.slug}`}
      aria-label={`View ${item.title} service`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
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

      {/* Expanded Title View (when active) */}
      <div
        className={`absolute inset-0 p-5 sm:p-7 lg:p-8 flex flex-col justify-end transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-[26px] xl:text-3xl font-bold text-white tracking-tight leading-tight">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Collapsed Pill View (vertical title when inactive) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center py-5 sm:py-6 transition-opacity duration-300 ${
          !isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="whitespace-nowrap text-xs sm:text-sm lg:text-[13px] xl:text-sm font-semibold tracking-wide text-white [writing-mode:vertical-rl] rotate-180">
          {item.title}
        </span>
      </div>
    </Link>
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

          {/* Right Column: Expandable service cards */}
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
              Select a service card to open its page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
