"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Lock, Star, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const catColors: Record<string, string> = {
  Websites: "bg-[#39ff88]/15 text-[#087a3a]",
  "Mobile Apps": "bg-[#111a15] text-[#39ff88]",
  Software: "bg-[#d7fbe4] text-[#087a3a]",
};

export default function ProjectDetail({ project: p }: { project: Project }) {
  return (
    <div className="bg-white pt-[68px]">
      {/* ── HERO INFO ── */}
      <section className="bg-gradient-to-b from-[#e8fff1] to-white pt-12 pb-10">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-[#087a3a] transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            {/* Status + category */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${catColors[p.category] || "bg-slate-100 text-slate-600"}`}>
                {p.category}
              </span>
              {p.status === "processing" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                  <Lock className="w-3 h-3" /> Under Processing
                </span>
              )}
              {p.status === "live" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                </span>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">{p.title}</h1>
            <p className="text-[#087a3a] font-semibold text-lg mb-4">{p.tagline}</p>
            <p className="text-slate-500 text-base leading-relaxed max-w-2xl mb-6">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {p.tags.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium">{t}</span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {p.status === "live" && p.liveUrl ? (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#087a3a] text-white font-semibold text-sm hover:bg-[#055d2b] transition shadow-md shadow-emerald-100">
                  Visit Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-400 font-semibold text-sm select-none">
                  <Lock className="w-4 h-4" /> Currently Under Processing
                </div>
              )}
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#39ff88] hover:text-[#087a3a] transition">
                Start a Similar Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO IMAGE — centered, not full width ── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60"
          >
            <img
              src={p.heroImg}
              alt={p.title}
              className="w-full aspect-video object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85";
              }}
            />

            {/* Under processing overlay on image for apps/software */}
            {p.status === "processing" && (
              <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-bold text-lg">Under Processing</p>
                <p className="text-white/60 text-sm text-center max-w-xs">This project is currently in active development and will be available soon.</p>
              </div>
            )}

            {/* Live badge on image */}
            {p.status === "live" && p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold shadow-lg hover:bg-white transition border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                View Live Site <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CHALLENGE + SOLUTION ── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">The Challenge</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="w-10 h-10 rounded-xl bg-[#e8fff1] flex items-center justify-center mb-5">
                <CheckCircle className="w-5 h-5 text-[#087a3a]" />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-3">Our Solution</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-extrabold text-slate-900 mb-8 text-center">
            Results &amp; Outcomes
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {p.results.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#effff5] border border-[#c9f7da] rounded-2xl p-6 text-center">
                <CheckCircle className="w-6 h-6 text-[#087a3a] mx-auto mb-3" />
                <p className="text-slate-800 text-sm font-semibold leading-snug">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-sm">
            <div className="flex justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
              &ldquo;{p.testimonial.text}&rdquo;
            </p>
            <p className="text-slate-900 font-bold">{p.testimonial.name}</p>
            <p className="text-slate-400 text-sm">{p.testimonial.role}</p>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#07110b] py-16 px-8 text-center"
            style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(57,255,136,0.28) 0%, transparent 65%)" }}>
            <h2 className="text-3xl font-extrabold text-white mb-4">Want a similar project?</h2>
            <p className="text-slate-400 text-base max-w-md mx-auto mb-8">
              Let&apos;s talk about your idea and build something great together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#39ff88] text-[#07110b] font-bold text-sm hover:bg-[#72ffad] transition">
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition">
                View More Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
