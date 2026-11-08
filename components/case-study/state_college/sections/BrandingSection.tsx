"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
        "category": "Typography",
        "title": "Collegiate Display",
        "subtitle": "Playfair Academic Display",
        "displayElement": "Aa",
        "displayClassName": "font-serif italic font-bold",
        "colors": [
            "#1E1B4B",
            "#312E81",
            "#4338CA",
            "#A5B4FC",
            "#EEF2FF"
        ],
        "colorNames": [
            "Night Indigo",
            "Collegiate Navy",
            "Indigo 600",
            "Indigo 200",
            "Ice White"
        ]
    },
    {
        "category": "Typography",
        "title": "Campus & Syllabus",
        "subtitle": "Inter Accessible Sans",
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
        "title": "Institutional Pride",
        "subtitle": "University Heritage Tones",
        "displayElement": "SC",
        "displayClassName": "font-serif font-black tracking-tighter",
        "colors": [
            "#312E81",
            "#991B1B",
            "#D97706",
            "#1E293B",
            "#F8FAFC"
        ],
        "colorNames": [
            "Indigo",
            "Crimson Pride",
            "Academic Gold",
            "Slate Dark",
            "White"
        ]
    },
    {
        "category": "Color System",
        "title": "Term Signals",
        "subtitle": "Semester Deadlines & Status",
        "displayElement": "TERM",
        "displayClassName": "font-mono font-bold tracking-tight text-3xl pt-1",
        "colors": [
            "#16A34A",
            "#2563EB",
            "#D97706",
            "#991B1B",
            "#F1F5F9"
        ],
        "colorNames": [
            "Open Reg",
            "Classes Active",
            "Late Fee",
            "Closed",
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
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#312E81] mb-3">
              Brand Identity &amp; Design System
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory digital language of State College Digital Campus
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
