"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Star,
  CheckCircle,
  AlertCircle,
  Building2,
  Clock3,
  PackageCheck,
  Sparkles,
  ShieldCheck,
  Layers,
  Quote
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";

const catColors: Record<string, string> = {
  Websites: "bg-blue-100 text-blue-700 border-blue-200",
  "Mobile Apps": "bg-violet-100 text-violet-700 border-violet-200",
  Software: "bg-sky-100 text-sky-700 border-sky-200",
};

export default function ProjectDetail({ project: p }: { project: Project }) {
  // Helper to extract initials from name
  const initials = p.testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    <div className="bg-white pt-[68px]">
      {/* ── HERO INFO SECTION ── */}
      <section className="bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white pt-12 pb-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            {/* Status + Category badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex px-3.5 py-1 rounded-full text-xs font-bold border ${
                  catColors[p.category] || "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                {p.category}
              </span>
              {p.status === "processing" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold">
                  <Lock className="w-3 h-3 text-amber-600" /> In Active Development
                </span>
              )}
              {p.status === "live" && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live & Deployed
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 tracking-tight leading-tight">
              {p.title}
            </h1>
            <p className="text-blue-600 font-semibold text-lg sm:text-xl mb-5 leading-snug">{p.tagline}</p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mb-6">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {p.status === "live" && p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                >
                  Visit Live Site <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 text-slate-400 font-semibold text-sm select-none border border-slate-200">
                  <Lock className="w-4 h-4" /> Under Active Processing
                </div>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition shadow-2xs"
              >
                Start a Similar Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-200/80 group"
          >
            <img
              src={p.heroImg}
              alt={p.title}
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=85";
              }}
            />

            {/* Processing Overlay */}
            {p.status === "processing" && (
              <div className="absolute inset-0 bg-slate-900/65 flex flex-col items-center justify-center gap-3 backdrop-blur-xs p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-bold text-xl tracking-tight">Under Active Processing</p>
                <p className="text-white/70 text-sm max-w-md leading-relaxed">
                  This project is undergoing active engineering and QA testing by PixoraSofttech. Live link will be available upon launch.
                </p>
              </div>
            )}

            {/* Live Badge overlay */}
            {p.status === "live" && p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-xl hover:bg-white transition border border-slate-200"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                View Live Site <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── METADATA CARDS ── */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 hover:border-blue-200 hover:bg-blue-50/30 transition">
              <Building2 className="w-5 h-5 text-blue-600 mb-3" />
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">Client &amp; Industry</p>
              <p className="font-bold text-slate-900 text-sm leading-snug">{p.client}</p>
              <p className="text-slate-500 text-xs mt-0.5">{p.industry}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 hover:border-blue-200 hover:bg-blue-50/30 transition">
              <Clock3 className="w-5 h-5 text-blue-600 mb-3" />
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">Project Timeline</p>
              <p className="font-bold text-slate-900 text-sm leading-snug">{p.timeline}</p>
              <p className="text-slate-500 text-xs mt-0.5">Strategy, architecture &amp; rollout</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 hover:border-blue-200 hover:bg-blue-50/30 transition">
              <PackageCheck className="w-5 h-5 text-blue-600 mb-3" />
              <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-1">Project Category</p>
              <p className="font-bold text-slate-900 text-sm leading-snug">{p.category}</p>
              <p className="text-slate-500 text-xs mt-0.5">Tailored custom solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ── */}
      {p.overview && (
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50/40 border border-blue-100 rounded-3xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-2.5 mb-3 text-blue-700 font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Project Overview &amp; Background
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Understanding the Scope</h2>
              <p className="text-slate-700 text-base leading-relaxed">{p.overview}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CHALLENGE & SOLUTION DEEP DIVE ── */}
      <section className="py-12 bg-slate-50/80 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-blue-600 text-xs font-bold tracking-[0.16em] uppercase mb-2">Problem &amp; Innovation</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Overcoming Challenges with Smart Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6">
                  <AlertCircle className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-slate-900 font-extrabold text-xl mb-3">The Client&apos;s Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.challenge}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-rose-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Core Friction Identified
              </div>
            </motion.div>

            {/* How We Solved It */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-slate-900 font-extrabold text-xl mb-3">How PixoraSofttech Solved It</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.solution}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Engineered Solution Delivered
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES SECTION ── */}
      {p.keyFeatures && p.keyFeatures.length > 0 && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="max-w-2xl mb-10">
              <p className="text-blue-600 text-xs font-bold tracking-[0.16em] uppercase mb-2">Core Functionalities</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Key Features &amp; Technical Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {p.keyFeatures.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-4 hover:border-blue-200 hover:bg-blue-50/20 transition"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-blue-500/20">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-snug">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DELIVERABLES & MEASURABLE RESULTS ── */}
      <section className="py-14 bg-slate-50/50 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 pb-14">
          <div className="max-w-2xl mb-8">
            <p className="text-blue-600 text-xs font-bold tracking-[0.16em] uppercase mb-2">What We Built</p>
            <h2 className="text-2xl font-extrabold text-slate-900">Project Deliverables</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-2xl border border-blue-100 bg-white p-5 shadow-2xs flex flex-col justify-between"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-xs font-black text-blue-700 mb-3">
                  0{index + 1}
                </span>
                <p className="font-semibold text-slate-800 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <p className="text-blue-600 text-xs font-bold tracking-[0.16em] uppercase mb-2">Impact &amp; Growth</p>
            <h2 className="text-2xl font-extrabold text-slate-900">Measurable Results Achieved</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {p.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-xs"
              >
                <CheckCircle className="w-7 h-7 text-blue-600 mx-auto mb-3" />
                <p className="text-slate-800 text-sm font-bold leading-snug">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIAL SHOWCASE ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-blue-50/60 to-slate-50/80 border border-blue-100/80 rounded-3xl p-8 sm:p-12 shadow-lg shadow-blue-500/5 text-center overflow-hidden"
          >
            <Quote className="w-16 h-16 text-blue-200/70 absolute -top-2 left-6 -rotate-12 pointer-events-none" />

            {/* Verified badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Client Feedback
            </div>

            {/* 5-Star rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(p.testimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-slate-800 text-lg sm:text-xl leading-relaxed mb-8 italic font-medium max-w-2xl mx-auto">
              &ldquo;{p.testimonial.text}&rdquo;
            </p>

            {/* Client Info with Avatar Initials */}
            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${
                  p.testimonial.avatarBg || "bg-blue-600"
                } text-white font-extrabold text-sm flex items-center justify-center shadow-md`}
              >
                {initials}
              </div>
              <div className="text-left">
                <p className="text-slate-900 font-extrabold text-base leading-tight">{p.testimonial.name}</p>
                <p className="text-blue-600 font-semibold text-xs mt-0.5">{p.testimonial.role}</p>
                <p className="text-slate-400 text-xs">{p.testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#0a0f1e] py-16 px-8 text-center shadow-xl"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.4) 0%, transparent 70%)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Ready to build something extraordinary?
            </h2>
            <p className="text-slate-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Let&apos;s discuss your goals and deliver a solution tailored specifically to your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-500/25 active:scale-[0.98]"
              >
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition"
              >
                Explore More Portfolio Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
