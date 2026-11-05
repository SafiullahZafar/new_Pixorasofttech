"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
      category: "Typography",
      title: "Primary Display",
      subtitle: "Playfair Display Serif",
      displayElement: "Aa",
      displayClassName: "font-serif italic font-bold",
      colors: ["#2C1810", "#5E3C14", "#7B511A", "#C8956C", "#FDF6EC"],
      colorNames: ["Espresso", "Coffee 800", "Coffee 700", "Latte", "Cream"],
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
      title: "Artisan Roastery",
      subtitle: "Espresso & Dark Roast",
      displayElement: "BH",
      displayClassName: "font-serif font-black tracking-tighter",
      colors: ["#2C1810", "#3D2609", "#5E3C14", "#7B511A", "#9A6A20"],
      colorNames: ["Espresso", "Dark Bean", "Coffee 800", "Coffee 700", "Caramel 600"],
    },
    {
      category: "Color System",
      title: "Latte & Crema",
      subtitle: "Warm Froth & Amber Gold",
      displayElement: "98°",
      displayClassName: "font-mono font-bold tracking-tight text-4xl pt-1",
      colors: ["#B8832E", "#C8956C", "#DFC07F", "#EDD9B0", "#FDF6EC"],
      colorNames: ["Gold 500", "Latte", "Coffee 300", "Coffee 200", "Cream"],
    },
  ];

  return (
    <section className="w-full bg-[#F3F3F7] text-black pt-20 sm:pt-24 2xl:pt-28 pb-16 sm:pb-20 2xl:pb-28 px-4 sm:px-8 lg:px-12 2xl:px-20 select-none border-t border-b border-zinc-200/70">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] mx-auto w-full">
        {/* Section Heading with ample clearance for floating navbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-zinc-200 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#7B511A] shadow-xs mb-3">
              Brand Identity &bull; Design System
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Crafting the sensory language of Brew Haven
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm sm:text-base 2xl:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Derived directly from the live platform at <span className="font-semibold text-zinc-900">brew.haven.pixorasofttech.com</span>—uniting rich espresso tones, Playfair Display serif editorial craft, and an accessible Inter UI system.
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
