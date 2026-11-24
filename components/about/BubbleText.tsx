"use client";

import { useState } from "react";

interface BubbleTextProps {
  text: string;
  className?: string;
}

export default function BubbleText({ text, className = "" }: BubbleTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <span onMouseLeave={() => setHoveredIndex(null)} className={className}>
      {Array.from(text).map((char, index) => {
        const distance = hoveredIndex === null ? null : Math.abs(hoveredIndex - index);
        const emphasis =
          distance === 0
            ? "font-black text-[#0342DD]"
            : distance === 1
              ? "font-medium text-[#2357B8]"
              : distance === 2
                ? "font-light"
                : "";

        return (
          <span
            key={`${index}-${char}`}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`inline transition-all duration-300 ease-in-out cursor-default ${emphasis}`}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
