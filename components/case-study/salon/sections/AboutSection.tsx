"use client";

import { motion } from "framer-motion";
import type { SalonSectionProps } from "./types";

export default function AboutSection({
  aboutDescription,
}: Pick<SalonSectionProps, "aboutDescription">) {
  return (
    <section className="w-full bg-[#f5f5f5] text-black py-12 sm:py-16 2xl:py-24 px-6 sm:px-12 2xl:px-20 select-none">
      <div className="max-w-[1600px] 2xl:max-w-[1920px] min-[2500px]:max-w-[2400px] mx-auto w-full">
        {/* Top Row: Huge ABOUT Header + Offset Small Detail Image (First Image - Untouched) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8 sm:mb-12 2xl:mb-16">
          <div className="w-full lg:w-1/2 pt-1">
            <h1 className="text-4xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black tracking-tight text-zinc-950 uppercase leading-none break-words">
              ABOUT
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex justify-start lg:pl-12 2xl:pl-16">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
              className="w-44 sm:w-64 2xl:w-80 h-56 sm:h-72 2xl:h-96 relative overflow-hidden bg-zinc-200 rounded-2xl shrink-0 shadow-lg"
            >
              <motion.img
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 1.3, ease: [0.77, 0, 0.175, 1] }}
                src="/case_studies/salon_soft/salon_hero_soft_01.png"
                alt="Aurelle salon appointments and staff dashboard"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </div>
        </div>

        {/* Second Row: Large Second Image + Narrative Paragraph (Untouched) */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 2xl:gap-24 mb-16 sm:mb-24 2xl:mb-32">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-full h-[380px] sm:h-[520px] md:h-[660px] 2xl:h-[680px] relative overflow-hidden bg-zinc-200 rounded-2xl shadow-xl"
            >
              <motion.img
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
                src="/case_studies/salon_soft/salon_about_soft_02.png"
                alt="Aurelle salon point of sale system"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-1 2xl:pl-16 pt-2 lg:pt-28 2xl:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-slate-800 leading-relaxed max-w-xl 2xl:max-w-2xl font-normal"
            >
              {aboutDescription}
            </motion.p>
          </div>
        </div>

        {/* Third Row: Description (Matching Upper Style) + Third Image */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 2xl:gap-24">
          <div className="w-full lg:w-1/2 pt-2 lg:pt-28 2xl:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-slate-800 leading-relaxed max-w-xl 2xl:max-w-2xl font-normal"
            >
              Salon teams can coordinate stylist schedules, client visit history, and service packages from one workspace. Product usage and staff activity stay connected to the checkout flow, helping managers keep appointments running smoothly and understand what happens across each business day.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-1 2xl:pl-16">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-full h-[380px] sm:h-[520px] md:h-[660px] 2xl:h-[680px] relative overflow-hidden bg-zinc-200 rounded-2xl shadow-xl"
            >
              <motion.img
                initial={{ scale: 1.25 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
                src="/case_studies/salon_soft/salon_about_soft_01.png"
                alt="Aurelle salon operations dashboard"
                className="w-full h-full object-cover object-center block"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
