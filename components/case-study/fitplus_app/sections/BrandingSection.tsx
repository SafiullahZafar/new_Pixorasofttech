"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
      category: "Typography",
      title: "Fitness Display",
      subtitle: "Confident Editorial Sans",
      displayElement: "Aa",
      displayClassName: "font-serif italic font-bold",
      colors: ["#101827", "#1E293B", "#2563EB", "#60A5FA", "#EFF6FF"],
      colorNames: ["Midnight", "Slate 800", "Blue 600", "Blue 400", "Blue 50"],
    },
    {
      category: "Typography",
      title: "Interface & Body",
      subtitle: "Inter UI System",
      displayElement: "Ag",
      displayClassName: "font-sans font-bold tracking-normal",
      colors: ["#111827", "#374151", "#6B7280", "#E5E7EB", "#F9FAFB"],
      colorNames: ["Ink 900", "Slate 700", "Muted 500", "Border 200", "Surface 50"],
    },
    {
      category: "Brand Palette",
      title: "Active Living",
      subtitle: "Energy & Focus",
      displayElement: "FP",
      displayClassName: "font-serif font-black tracking-tighter",
      colors: ["#0F172A", "#1E293B", "#2563EB", "#16A34A", "#22C55E"],
      colorNames: ["Navy 950", "Slate 800", "Blue 600", "Green 600", "Green 500"],
    },
    {
      category: "Color System",
      title: "Progress Signals",
      subtitle: "Goals & Activity",
      displayElement: "GO",
      displayClassName: "font-mono font-bold tracking-tight text-4xl pt-1",
      colors: ["#16A34A", "#2563EB", "#F59E0B", "#CBD5E1", "#F8FAFC"],
      colorNames: ["Activity", "Focus", "Milestone", "Border", "Surface"],
    },
  ];

  return (
    <section className="w-full bg-transparent text-black pt-16 sm:pt-20 2xl:pt-24 pb-16 sm:pb-20 2xl:pb-24 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        {/* Section Heading with ample clearance for floating navbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-24 sm:mb-28 lg:mb-32 2xl:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Building a fitness experience that keeps progress in sight
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm sm:text-base 2xl:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            FitPlus pairs a focused visual system with energetic blue and green accents, clear workout details, and an accessible interface for everyday fitness routines.
          </motion.p>
        </div>

        {/* Branding Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8 justify-items-center sm:justify-items-stretch">
          {brandingData.map((item, index) => (
            <BrandingCard
              key={index}
              category={item.category}
              title={item.title}
              subtitle={item.subtitle}
              displayElement={item.displayElement}
              displayClassName={item.displayClassName}
              colors={item.colors}
              colorNames={item.colorNames}
              className="max-w-none w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
