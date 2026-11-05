"use client";

import * as React from "react";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// JSDoc for props documentation
export interface BrandingCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  /** The main category label displayed at the top. */
  category: string;
  /** The primary title for the branding element. */
  title: string;
  /** The subtitle or specific name (e.g., font name). */
  subtitle: string;
  /** The visual element to display, typically text or an icon. */
  displayElement: React.ReactNode;
  /** An array of color strings (e.g., hex, rgb) for the palette. */
  colors: string[];
  /** Optional class for the displayElement (e.g., font-serif or font-sans). */
  displayClassName?: string;
  /** Optional color names for tooltips on each swatch. */
  colorNames?: string[];
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const swatchVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const BrandingCard = React.forwardRef<HTMLDivElement, BrandingCardProps>(
  (
    {
      className,
      category,
      title,
      subtitle,
      displayElement,
      colors,
      displayClassName,
      colorNames,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200/90 bg-white text-zinc-900 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300",
          className
        )}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        aria-label={`${category}: ${title}`}
        role="group"
        {...props}
      >
        {/* Main content area */}
        <div className="p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {category}
          </p>
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-zinc-950">{title}</h3>
              <p className="text-sm font-medium text-zinc-500 mt-0.5">{subtitle}</p>
            </div>
            <div
              className={cn(
                "text-5xl font-extrabold tracking-tighter text-zinc-900 shrink-0 select-none",
                displayClassName
              )}
            >
              {displayElement}
            </div>
          </div>
        </div>

        {/* Color palette section */}
        <div className="flex h-24 w-full border-t border-zinc-100">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              className="h-full flex-1 relative group/swatch transition-transform duration-200 hover:scale-105 hover:z-10"
              style={{ backgroundColor: color }}
              variants={swatchVariants}
              aria-label={`Color swatch ${index + 1}: ${color}`}
            >
              {/* Tooltip on hover showing color name & hex */}
              <div className="opacity-0 group-hover/swatch:opacity-100 transition-opacity absolute inset-0 flex flex-col items-center justify-end pb-1.5 px-0.5 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none select-none">
                {colorNames?.[index] && (
                  <span className="text-[9px] font-semibold text-white/90 leading-tight truncate w-full text-center">
                    {colorNames[index]}
                  </span>
                )}
                <span className="text-[10px] font-mono font-bold text-white drop-shadow-sm">
                  {color}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }
);

BrandingCard.displayName = "BrandingCard";

export { BrandingCard };
