"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection({ overview }: { overview?: string } = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });

  const quoteText =
    "We build software that becomes the backbone of your business crafted with precision, designed for scale, and engineered to solve the problems that off-the-shelf tools never could.";

  const words = quoteText.split(" ");

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#F5F5F5] py-16 md:py-24 2xl:py-32 px-6 sm:px-12 lg:px-20 font-sans select-none flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-[2280px] w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left Column: Label with Dot and slide animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-4 lg:col-span-3 flex items-center gap-1.5 pt-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-700 uppercase">
            ABOUT SERVICE
          </span>
        </motion.div>

        {/* Right Column: 3D Perspective Word Stagger Reveal */}
        <div className="md:col-span-8 lg:col-span-9">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-medium leading-[1.3] flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] [perspective:1000px]">
            {words.map((word, index) => (
              <span key={index} className="inline-block overflow-hidden py-1">
                <motion.span
                  className="inline-block transform-gpu origin-bottom transition-colors duration-150"
                  initial={{
                    color: "rgba(161, 161, 170, 1)",
                    opacity: 0.2,
                    filter: "blur(8px)",
                    y: "110%",
                    rotateX: -35,
                  }}
                  animate={
                    isInView
                      ? {
                          color: "rgba(19, 25, 39, 1)",
                          opacity: 1,
                          filter: "blur(0px)",
                          y: "0%",
                          rotateX: 0,
                        }
                      : {
                          color: "rgba(161, 161, 170, 1)",
                          opacity: 0.2,
                          filter: "blur(8px)",
                          y: "110%",
                          rotateX: -35,
                        }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.08 + index * 0.025,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
