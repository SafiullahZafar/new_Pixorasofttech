"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ArrowUpRight, Lock, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

const categories = ["All", "Websites", "Mobile Apps", "Software"];

const catColors: Record<string, string> = {
  Websites: "bg-blue-100 text-blue-700",
  "Mobile Apps": "bg-violet-100 text-violet-700",
  Software: "bg-sky-100 text-sky-700",
};

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filter */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold shrink-0 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> FILTER BY WORK TYPE
          </div>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                active === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-blue-200 hover:text-blue-600"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group"
    >
      {/* Image — clicking ALWAYS goes to detail page */}
      <Link href={`/portfolio/${p.id}`} className="block">
        <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-slate-100 border border-slate-200 cursor-pointer shadow-sm group-hover:shadow-xl group-hover:shadow-blue-950/10 transition-shadow">
          <img src={p.img} alt={p.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80"; }}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${catColors[p.category] || "bg-slate-100 text-slate-600"}`}>
              {p.category}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/35 transition-all duration-300 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <ArrowUpRight className="w-4 h-4 text-slate-800" />
            </div>
          </div>

          {/* Processing badge */}
          {p.status === "processing" && (
            <div className="absolute bottom-3 right-3">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-semibold backdrop-blur-sm">
                <Lock className="w-2.5 h-2.5" /> Under Processing
              </span>
            </div>
          )}
        </div>

        <h3 className="text-slate-900 font-bold text-[15px] mb-1.5 group-hover:text-blue-600 transition-colors">
          {p.title}
        </h3>
      </Link>

      <p className="text-slate-500 text-sm leading-relaxed mb-3">{p.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.tags.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-500 text-[11px] font-medium">{t}</span>
        ))}
      </div>

      {/* Links row */}
      <div className="flex items-center gap-4">
        <Link href={`/portfolio/${p.id}`}
          className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all">
          View Details <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
        {p.status === "live" && p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
            className="text-slate-400 text-xs hover:text-blue-600 transition-colors inline-flex items-center gap-1">
            Open Website <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
