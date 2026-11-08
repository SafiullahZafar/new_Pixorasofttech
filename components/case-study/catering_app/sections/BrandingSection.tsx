"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
        "category": "Typography",
        "title": "Mobile Display",
        "subtitle": "Plus Jakarta Sans Mobile",
        "displayElement": "Aa",
        "displayClassName": "font-serif italic font-bold",
        "colors": [
            "#451A03",
            "#92400E",
            "#D97706",
            "#FCD34D",
            "#FEF3C7"
        ],
        "colorNames": [
            "Dark Ochre",
            "Amber 800",
            "Spice Amber",
            "Gold 300",
            "Ivory"
        ]
    },
    {
        "category": "Typography",
        "title": "App Interface & Quotes",
        "subtitle": "Inter Mobile System",
        "displayElement": "Ag",
        "displayClassName": "font-sans font-bold tracking-normal",
        "colors": [
            "#111827",
            "#374151",
            "#6B7280",
            "#E5E7EB",
            "#F9FAFB"
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
        "title": "Marketplace Palette",
        "subtitle": "Traditional Feast & Spice Tones",
        "displayElement": "CA",
        "displayClassName": "font-serif font-black tracking-tighter",
        "colors": [
            "#D97706",
            "#C2410C",
            "#10B981",
            "#111827",
            "#FEF3C7"
        ],
        "colorNames": [
            "Amber Spice",
            "Paprika Red",
            "Mint Herb",
            "Onyx Night",
            "Warm Cream"
        ]
    },
    {
        "category": "Color System",
        "title": "Quote Progression",
        "subtitle": "4-Step Quote Funnel Signals",
        "displayElement": "PKR",
        "displayClassName": "font-mono font-bold tracking-tight text-3xl pt-1",
        "colors": [
            "#10B981",
            "#F59E0B",
            "#3B82F6",
            "#64748B",
            "#F3F4F6"
        ],
        "colorNames": [
            "Booked",
            "Awaiting Quote",
            "Menu Picked",
            "In Review",
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-3">
              Brand Identity &amp; Design System
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory digital language of Catering & Event Food App
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
