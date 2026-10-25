"use client";

import React from "react";
import { motion } from "framer-motion";

export interface BlurredStaggerProps {
  text: string;
  className?: string;
  staggerDuration?: number;
  duration?: number;
}

export const BlurredStagger: React.FC<BlurredStaggerProps> = ({
  text,
  className = "text-sm sm:text-base leading-relaxed text-zinc-600 break-words whitespace-normal",
  staggerDuration = 0.006,
  duration = 0.25,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDuration,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 2,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  return (
    <div className="w-full">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className={className}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default BlurredStagger;
