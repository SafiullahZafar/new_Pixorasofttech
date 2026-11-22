"use client";

import { motion } from "framer-motion";
import type { VelouraAppSectionProps } from "./types";
export default function HeroSection({ heroRef, mobileHeroImage, heroImage, title }: Pick<VelouraAppSectionProps, "heroRef" | "heroScale" | "mobileHeroImage" | "heroImage" | "title">) {
  return (
      <section
        ref={heroRef}
        className="mt-16 relative z-0 w-full h-[calc(100svh-4rem)] min-h-[360px] overflow-hidden bg-[#f5f5f5] select-none"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {/* Mobile Hero Image */}
            <motion.img
              src={mobileHeroImage}
              alt={title}
              className="block md:hidden w-full h-full object-contain object-center"
            />
            {/* Desktop Hero Image */}
            <motion.img
              src={heroImage}
              alt={title}
              className="hidden md:block w-full h-full object-contain object-center"
            />
          </motion.div>
        </div>

        {/* Hero Bottom Floating Label */}

      </section>
  );
}

