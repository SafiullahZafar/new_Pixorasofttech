"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function ScrollRevealWord({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-[0.28em] inline-block">
      <span aria-hidden="true" className="absolute inset-0 text-black/20">
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

function ScrollRevealText({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });
  const words = text.split(/\s+/);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;

        return (
          <ScrollRevealWord
            key={`${index}-${word}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </ScrollRevealWord>
        );
      })}
    </p>
  );
}

const statements = [
  {
    label: "About - Team",
    text: "PixoraSoftTech brings together design, strategy, and engineering to turn bold ideas into production-grade software. We collaborate closely with every client to make thoughtful decisions and deliver work built to last.",
  },
  {
    label: "About - Clients",
    text: "We work with startups and established businesses across technology, e-commerce, and digital products—building long-term partnerships focused on useful solutions and measurable progress.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative w-full overflow-hidden border-b border-black/10 bg-transparent px-6 py-24 text-black sm:px-12 lg:px-16 lg:py-40">
      <div className="relative z-10 mx-auto flex max-w-[2200px] flex-col gap-24 lg:gap-36">
        {statements.map((statement) => (
          <div
            key={statement.label}
            className="grid grid-cols-1 items-start pt-6 sm:pt-8 md:grid-cols-12"
          >
            <h2
              className={`text-2xl font-bold tracking-tight sm:text-4xl md:col-span-4 ${
                statement.label === "About - Clients"
                  ? "md:col-start-9 md:text-right"
                  : "md:col-start-1"
              }`}
            >
              {statement.label}
            </h2>
            <ScrollRevealText
              text={statement.text}
              className={`mt-2 text-[1.7rem] font-medium leading-[1.2] tracking-tight sm:text-4xl md:col-span-8 md:mt-8 lg:col-span-7 lg:mt-10 lg:text-[2.6rem] ${
                statement.label === "About - Clients"
                  ? "md:col-start-1 lg:col-start-1"
                  : "md:col-start-5 lg:col-start-6"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
