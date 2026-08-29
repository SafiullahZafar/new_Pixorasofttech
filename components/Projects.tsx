"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Show first 6 on home page
const featured = projects.slice(0, 6);

const catColors: Record<string, string> = {
  Websites:      "bg-blue-100 text-blue-700",
  "Mobile Apps": "bg-violet-100 text-violet-700",
  Software:      "bg-emerald-100 text-emerald-700",
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Recent <span className="text-blue-600">projects</span>
            </motion.h2>
          </div>
          <Link href="/portfolio"
            className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all shrink-0">
            View All Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
              className="group">
              {/* Image — click to detail page */}
              <Link href={`/portfolio/${p.id}`} className="block">
                <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] bg-slate-100 border border-slate-100">
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700&q=80";
                    }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${catColors[p.category] || "bg-slate-100 text-slate-600"}`}>
                      {p.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <ArrowUpRight className="w-4 h-4 text-slate-800" />
                    </div>
                  </div>
                  {/* Under processing badge */}
                  {p.status === "processing" && (
                    <div className="absolute bottom-3 right-3">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/70 text-white text-[10px] font-semibold">
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
                  <span key={t} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-medium">{t}</span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link href={`/portfolio/${p.id}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all">
                  View Project <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                {p.status === "live" && p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 text-xs hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                    Live <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
