"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
        "category": "Typography",
        "title": "Academic Display",
        "subtitle": "Cormorant Garamond Serif",
        "displayElement": "Aa",
        "displayClassName": "font-serif italic font-bold",
        "colors": [
            "#0F294A",
            "#1D4ED8",
            "#3B82F6",
            "#93C5FD",
            "#EFF6FF"
        ],
        "colorNames": [
            "Navy 950",
            "Royal Blue",
            "Blue 500",
            "Sky 300",
            "Ice 50"
        ]
    },
    {
        "category": "Typography",
        "title": "Interface & Portal",
        "subtitle": "Inter UI System",
        "displayElement": "Ag",
        "displayClassName": "font-sans font-bold tracking-normal",
        "colors": [
            "#0F172A",
            "#334155",
            "#64748B",
            "#CBD5E1",
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
        "title": "University Identity",
        "subtitle": "Heritage & Accreditation",
        "displayElement": "EC",
        "displayClassName": "font-serif font-black tracking-tighter",
        "colors": [
            "#0F294A",
            "#1E3A8A",
            "#2563EB",
            "#F59E0B",
            "#FEF3C7"
        ],
        "colorNames": [
            "Oxford Navy",
            "Deep Blue",
            "Active Blue",
            "Gold Accent",
            "Cream"
        ]
    },
    {
        "category": "Color System",
        "title": "Admission Status",
        "subtitle": "Student Workflow Indicators",
        "displayElement": "EDU",
        "displayClassName": "font-mono font-bold tracking-tight text-3xl pt-1",
        "colors": [
            "#16A34A",
            "#F59E0B",
            "#2563EB",
            "#64748B",
            "#F1F5F9"
        ],
        "colorNames": [
            "Enrolled",
            "Under Review",
            "Submitted",
            "Pending",
            "Surface"
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8] mb-3">
              Brand Identity &amp; Design System
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory digital language of Eduka College Portal
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
