"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Plus } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const titleWords = ["Custom", "Software", "Development"];
  const servicesLeft = ["Web Applications", "SaaS Platforms", "API Development"];
  const servicesRight = ["CMS Solutions", "Automation Tools"];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-transparent pt-18 md:pt-16 lg:pt-40 pb-12 px-6 md:px-12 lg:px-10 text-[#131927] overflow-hidden"
    >
      <div className="max-w-[2440px] mx-auto">
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold tracking-tight leading-[0.98] text-[#131927] flex flex-wrap gap-x-[0.28em] gap-y-2">
              {titleWords.map((word, idx) => (
                <span key={word} className="inline-block overflow-hidden py-1">
                  <motion.span
                    initial={{ opacity: 0, y: "100%" }}
                    animate={isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "100%" }}
                    transition={{
                      duration: 0.75,
                      delay: idx * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 lg:pl-10 lg:pt-3"
          >
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              We build tailor-made software solutions that solve real problems from MVPs to enterprise-grade platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="space-y-3">
                {servicesLeft.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.08, ease: "easeOut" }}
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#131927]"
                  >
                    <Plus className="w-4 h-4 text-[#131927] stroke-[2.5]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                {servicesRight.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.45 + idx * 0.08, ease: "easeOut" }}
                    className="flex items-center gap-2.5 text-sm sm:text-base font-medium text-[#131927]"
                  >
                    <Plus className="w-4 h-4 text-[#131927] stroke-[2.5]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom software hero image card */}
        <div
          className="relative left-1/2 mb-[10px] mt-[10px] h-[550px] min-h-[320px] w-[calc(100vw-30px)] -translate-x-1/2 overflow-hidden rounded-md bg-transparent sm:h-[650px] md:h-[770px] lg:h-[850px] 2xl:h-[1000px] min-[2560px]:h-[1150px] min-[3000px]:h-[1300px] select-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/service/custom_softw/hero_sec/custom_software_hero_service_2.png"
              alt="AuraPOS hospitality management dashboard shown on a laptop"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
          </motion.div>


        </div>
      </div>
    </section>
  );
}
