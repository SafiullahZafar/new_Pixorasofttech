"use client";

import React from "react";
import { motion } from "framer-motion";
import IconCloud, { defaultTechSlugs } from "@/components/IconCloud";

const technologies = [
  { name: "Next.js", category: "Fullstack Framework", tag: "Frontend" },
  { name: "React 19", category: "Modern UI Architecture", tag: "Frontend" },
  { name: "TypeScript", category: "Type-Safe Systems", tag: "Language" },
  { name: "Node.js", category: "High Concurrency APIs", tag: "Backend" },
  { name: "Python / AI", category: "Data & Automation", tag: "Intelligence" },
  { name: "PostgreSQL", category: "Relational Data Hub", tag: "Database" },
  { name: "AWS Cloud", category: "Scalable Infrastructure", tag: "DevOps" },
  { name: "Tailwind CSS", category: "Design System UI", tag: "Styling" },
  { name: "Flutter", category: "Cross-Platform Mobile", tag: "Mobile" },
  { name: "Docker", category: "Containerization", tag: "DevOps" },
  { name: "GraphQL", category: "Flexible Data Queries", tag: "API" },
  { name: "Redis", category: "In-Memory Speed", tag: "Cache" },
];

export default function TechLeverage() {
  return (
    <section
      id="tech-leverage"
      className="bg-transparent py-16 md:py-24 px-6 md:px-12 lg:px-12 select-none overflow-hidden border-t border-dashed border-zinc-300 font-sans"
    >
      <div className="max-w-[2200px] mx-auto">
        {/* Main Showcase: Heading & Paragraph on Left, 3D Interactive Icon Sphere on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20 items-center">
          {/* Left Column: Clean Heading & Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111111] leading-[1.1] font-medium tracking-tight mb-4">
              For companies with
              <br />
              tech leverage
            </h2>
            <p className="text-base md:text-lg text-[#555555] leading-relaxed max-w-xl font-normal">
              We choose the right technologies for each product, from modern
              frameworks and cloud platforms to data, AI, and automation. The
              tools shown here are a small selection of what we work with; we
              tailor the stack to each team&apos;s goals and needs.
            </p>
          </div>

          {/* Right Column: 3D Interactive Icon Sphere */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              <IconCloud iconSlugs={defaultTechSlugs} />
            </div>
          </div>
        </div>

        {/* Tech Stack Grid Below with dark hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group p-5 rounded-2xl bg-white border border-zinc-200 hover:border-[#0A2540] hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[120px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-[#0A2540] transition-colors">
                  {tech.tag}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 group-hover:bg-[#0A2540] transition-colors"></span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-zinc-900 group-hover:text-black">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


