"use client";

import { motion } from "framer-motion";

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
        {statements.map((statement, index) => (
          <div
            key={statement.label}
            className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 lg:gap-16"
          >
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:col-span-4">
              {statement.label}
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-medium leading-[1.2] tracking-tight sm:text-3xl md:col-span-8 lg:col-span-7 lg:col-start-6 lg:text-[2.4rem]"
            >
              {statement.text}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}
