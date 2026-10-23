"use client";

import React from "react";
import { motion } from "framer-motion";

const statement =
  "PixoraSoftTech is a software development and digital product design company. We exist to bridge the gap between what if and what's live building custom web apps, mobile apps, and management systems that help businesses across healthcare, e-commerce, startups, and enterprise move faster and grow smarter.";

const words = statement.split(" ");

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-transparent font-sans text-black py-20 sm:py-28 border-t border-dashed border-zinc-300"
    >
      <div className="mx-auto max-w-[2200px] px-6 sm:px-8 lg:px-10">
        <div className="flex items-start justify-between pb-12 sm:pb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-3">
              <span className="h-2 w-2 rounded-full bg-black inline-block"></span>
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950">
              Who We Are
            </h2>
          </div>
          <div className="font-mono text-zinc-600 text-lg sm:text-2xl">
            01<span className="text-xs align-top text-[#0A2540] font-bold">+</span>
          </div>
        </div>

        <div className="max-w-5xl">
          <p className="flex flex-wrap text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.35] tracking-[-0.02em]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.18 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                className="relative mr-2.5 sm:mr-3.5 inline-block text-zinc-950 transition-colors"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
