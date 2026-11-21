"use client";

import { motion } from "framer-motion";
import type { TravelHotelHubSectionProps } from "./types";

export default function HeroSection({
  heroRef,
  heroScale,
  mobileHeroImage,
  heroImage,
  title,
}: Pick<TravelHotelHubSectionProps, "heroRef" | "heroScale" | "mobileHeroImage" | "heroImage" | "title">) {
  return (
    <section
      ref={heroRef}
      className="mt-16 relative z-0 w-full h-[45vh] sm:h-[70vh] lg:h-screen overflow-hidden bg-black select-none"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <motion.img
            style={{ scale: heroScale }}
            src={mobileHeroImage}
            alt={title}
            className="block md:hidden w-full h-full object-cover object-center"
          />
          <motion.img
            style={{ scale: heroScale }}
            src={heroImage}
            alt={title}
            className="hidden md:block w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
