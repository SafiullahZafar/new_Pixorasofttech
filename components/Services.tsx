"use client";

import React from "react";
import Link from "next/link";

const serviceCards = [
  {
    number: "S/ 001",
    titleLine1: "Custom Software",
    titleLine2: "Development",
    href: "/services/custom-software-development",
    tags: ["Architecture", "Enterprise", "Cloud Native", "API Integration", "Scalability"],
    desc: "We build custom software that solves real problems, not just checks boxes. Tailored architecture built for high performance, reliability, and enterprise scale.",
  },
  {
    number: "S/ 002",
    titleLine1: "Web",
    titleLine2: "Development",
    href: "/services/website-development",
    tags: ["Next.js", "React", "Performance", "SEO Optimized", "Tailwind CSS"],
    desc: "We design and build websites that represent your brand and convert visitors into customers. Fast, responsive, accessible, and engineered to outperform competitors.",
  },
  {
    number: "S/ 003",
    titleLine1: "SaaS",
    titleLine2: "Products",
    href: "/services/custom-software-development",
    tags: ["MVP", "Subscription", "Multi-tenant", "Payment Gateway", "Analytics"],
    desc: "From MVP to full scale enterprise platform, we build subscription-ready digital products designed to scale with your user base and accelerate recurring revenue.",
  },
  {
    number: "S/ 004",
    titleLine1: "Mobile",
    titleLine2: "Apps",
    href: "/services/mobile-app-development",
    tags: ["React Native", "iOS", "Android", "Cross-Platform", "UX Animation"],
    desc: "Your app is often the first touchpoint customers experience. We build fluid, performant mobile experiences for iOS and Android engineered to drive engagement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-transparent font-sans text-black py-12 sm:py-20 lg:py-28 relative z-10">
      <div className="mx-auto max-w-[2200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between pb-6 sm:pb-8 border-b border-dashed border-zinc-300 mb-8 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2">
              <span className="h-2 w-2 rounded-full bg-[#0A2540] inline-block"></span>
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-zinc-950">Services</h2>
          </div>
          <div className="font-mono text-zinc-600 text-lg sm:text-3xl">
            02<span className="text-xs align-top text-[#0A2540] font-bold">+</span>
          </div>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="relative space-y-6 sm:space-y-8 pb-20 sm:pb-28">
          {serviceCards.map((card, idx) => (
            <div
              key={card.number}
              style={{ top: `calc(75px + ${idx} * 14px)` }}
              className="sticky group rounded-2xl sm:rounded-[2rem] bg-white text-zinc-900 p-6 sm:p-10 lg:p-12 shadow-xl shadow-zinc-200/50 transition-all duration-300 border border-zinc-200 hover:border-[#0A2540]/30 hover:shadow-2xl"
            >
              <Link className="block relative z-10" href={card.href}>
                <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-4 mb-8 sm:mb-14 lg:mb-16">
                  <h3 className="text-3xl sm:text-5xl lg:text-7xl font-normal tracking-tight leading-[1.08] text-zinc-900 group-hover:text-[#0A2540] transition-colors duration-300">
                    <span className="block">{card.titleLine1}</span>
                    <span className="block text-zinc-400 group-hover:text-zinc-600 transition-colors duration-300">
                      {card.titleLine2}
                    </span>
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-500 self-end sm:self-auto">
                    <span>{card.number}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 py-3 sm:py-4 border-t border-zinc-100 mb-4 sm:mb-6 text-xs sm:text-sm text-zinc-500 font-light">
                  {card.tags.map((tag) => (
                    <span key={tag} className="hover:text-black transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Asterisk + Description */}
                <div className="flex items-start gap-2 sm:gap-3 max-w-3xl pt-1">
                  <span className="text-[#0A2540] text-sm sm:text-base mt-0.5 select-none font-bold">✹</span>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-normal group-hover:text-zinc-900 transition-colors">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
