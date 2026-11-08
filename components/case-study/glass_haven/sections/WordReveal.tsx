"use client";

import { motion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const WordReveal = ({ text, className = "", delay = 0 }: WordRevealProps) => {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.25,
            delay: delay + 0.03 * idx,
            ease: "easeOut",
          }}
          className="inline-block mr-[0.28em] whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default WordReveal;
