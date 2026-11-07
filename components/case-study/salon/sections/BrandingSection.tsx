"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrandingCard } from "@/components/ui/branding-card";

export default function BrandingSection() {
  const brandingData = [
    {
      category: "Typography",
      title: "Salon Display",
      subtitle: "Inter UI System",
      displayElement: "Aa",
      displayClassName: "font-serif italic font-bold",
      colors: ["#281426", "#6B214B", "#C02678", "#F472B6", "#FDF2F8"],
      colorNames: ["Plum", "Berry 800", "Pink 700", "Pink 400", "Pink 50"],
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
      title: "Salon Operations",
      subtitle: "Appointments, Services & Staff",
      displayElement: "AU",
      displayClassName: "font-serif font-black tracking-tighter",
      colors: ["#111827", "#1F2937", "#475569", "#C02678", "#EC4899"],
      colorNames: ["Ink", "Slate 800", "Slate 600", "Pink 700", "Pink 500"],
    },
    {
      category: "Color System",
      title: "Appointment Status",
      subtitle: "Clear Signals for Salon Teams",
      displayElement: "POS",
      displayClassName: "font-mono font-bold tracking-tight text-4xl pt-1",
      colors: ["#16A34A", "#F59E0B", "#DC2626", "#2563EB", "#F3F4F6"],
      colorNames: ["Confirmed", "Upcoming", "Needs attention", "Information", "Surface"],
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
              A smoother experience from salon booking to checkout
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-sm sm:text-base 2xl:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Aurelle connects stylist appointments, service packages, client history, staff shifts, and point of sale in one polished daily operations system.
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
