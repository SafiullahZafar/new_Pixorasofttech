"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
        "category": "Typography",
        "title": "Travel Bold",
        "subtitle": "Syne High-Energy Sans",
        "displayElement": "Aa",
        "displayClassName": "font-serif italic font-bold",
        "colors": [
            "#431407",
            "#9A3412",
            "#EA580C",
            "#FDBA74",
            "#FFF7ED"
        ],
        "colorNames": [
            "Espresso 950",
            "Burnt Terracotta",
            "Tangerine",
            "Warm Sunset",
            "Cream Tint"
        ]
    },
    {
        "category": "Typography",
        "title": "Booking & Room Matrix",
        "subtitle": "DM Sans Interface",
        "displayElement": "Ag",
        "displayClassName": "font-sans font-bold tracking-normal",
        "colors": [
            "#18181B",
            "#3F3F46",
            "#71717A",
            "#E4E4E7",
            "#FAFAFA"
        ],
        "colorNames": [
            "Zinc 900",
            "Zinc 700",
            "Zinc 500",
            "Zinc 200",
            "Zinc 50"
        ]
    },
    {
        "category": "Brand Palette",
        "title": "Nomad Energy",
        "subtitle": "Backpacker Spirit Spectrum",
        "displayElement": "ZT",
        "displayClassName": "font-serif font-black tracking-tighter",
        "colors": [
            "#EA580C",
            "#0D9488",
            "#F59E0B",
            "#1E293B",
            "#FFFBEB"
        ],
        "colorNames": [
            "Zostel Orange",
            "Tropical Teal",
            "Sunset Yellow",
            "Camp Charcoal",
            "Warm Sand"
        ]
    },
    {
        "category": "Color System",
        "title": "Bed Availability",
        "subtitle": "Live Dorm & Private Room Status",
        "displayElement": "LIVE",
        "displayClassName": "font-mono font-bold tracking-tight text-3xl pt-1",
        "colors": [
            "#16A34A",
            "#E11D48",
            "#EA580C",
            "#0D9488",
            "#F4F4F5"
        ],
        "colorNames": [
            "Bunk Free",
            "Sold Out",
            "Fast Filling",
            "Event Day",
            "Muted"
        ]
    }
];

  return (
    <section className="w-full bg-transparent text-black pt-16 sm:pt-20 2xl:pt-24 pb-16 sm:pb-20 2xl:pb-24 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-24 sm:mb-28 lg:mb-32 2xl:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#EA580C] mb-3">
              Brand Identity &amp; Design System
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory digital language of Zostel Backpacker Travel
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm sm:text-base text-zinc-600 leading-relaxed"
          >
            A tailored visual identity uniting purposeful typography, balanced interface neutrals, and high-converting touchpoints.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brandingData.map((card, index) => (
            <BrandingCard
              key={index}
              category={card.category}
              title={card.title}
              subtitle={card.subtitle}
              displayElement={
                <span className={card.displayClassName}>{card.displayElement}</span>
              }
              colors={card.colors}
              colorNames={card.colorNames}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
