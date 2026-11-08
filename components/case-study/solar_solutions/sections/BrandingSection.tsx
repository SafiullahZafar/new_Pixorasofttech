"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
        "category": "Typography",
        "title": "Clean Energy Display",
        "subtitle": "Archivo High-Contrast Bold",
        "displayElement": "Aa",
        "displayClassName": "font-serif italic font-bold",
        "colors": [
            "#064E3B",
            "#047857",
            "#EAB308",
            "#FDE047",
            "#FEF9C3"
        ],
        "colorNames": [
            "Forest 900",
            "Emerald 700",
            "Sun Yellow",
            "Solar Amber",
            "Warm Tint"
        ]
    },
    {
        "category": "Typography",
        "title": "Interface & Calculator",
        "subtitle": "Inter Sans",
        "displayElement": "Ag",
        "displayClassName": "font-sans font-bold tracking-normal",
        "colors": [
            "#0F172A",
            "#334155",
            "#64748B",
            "#E2E8F0",
            "#F8FAFC"
        ],
        "colorNames": [
            "Ink 900",
            "Slate 700",
            "Muted 500",
            "Border 200",
            "Surface 50"
        ]
    },
    {
        "category": "Brand Palette",
        "title": "Photovoltaic Grid",
        "subtitle": "Renewable Power Spectrum",
        "displayElement": "SS",
        "displayClassName": "font-serif font-black tracking-tighter",
        "colors": [
            "#0B132B",
            "#1C2541",
            "#3A506B",
            "#EAB308",
            "#5BC0BE"
        ],
        "colorNames": [
            "Midnight",
            "Navy Blue",
            "Slate Cyan",
            "Solar Flare",
            "Aqua Clean"
        ]
    },
    {
        "category": "Color System",
        "title": "Power Output",
        "subtitle": "Live Energy Generation",
        "displayElement": "kW/h",
        "displayClassName": "font-mono font-bold tracking-tight text-3xl pt-1",
        "colors": [
            "#10B981",
            "#F59E0B",
            "#3B82F6",
            "#64748B",
            "#F3F4F6"
        ],
        "colorNames": [
            "Peak Output",
            "Grid Feed",
            "Battery Full",
            "Standby",
            "Background"
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#EAB308] mb-3">
              Brand Identity &amp; Design System
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory digital language of Solar Solutions Energy
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
