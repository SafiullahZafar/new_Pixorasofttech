"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  ShieldCheck,
  Sparkles,
  Layers3,
  ChevronDown,
  Wrench,
  TrendingUp,
  Target
} from "lucide-react";
import type { ServiceDetail as ServiceDetailType } from "@/lib/service-details";

export default function ServiceDetail({ service }: { service: ServiceDetailType }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-[68px] bg-white">
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
                {service.category}
              </span>
            </div>

            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.18em] mb-3">
              {service.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5 tracking-tight">
              {service.title}
            </h1>
            <p className="max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              {service.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/20 active:scale-[0.98]"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-7 py-3.5 rounded-xl hover:border-blue-300 hover:text-blue-600 transition shadow-2xs"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW BOX ── */}
      {service.overview && (
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50/40 border border-blue-100 rounded-3xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-2.5 mb-3 text-blue-700 font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Service Overview &amp; Strategy
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Why This Service Matters</h2>
              <p className="text-slate-700 text-base leading-relaxed">{service.overview}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── PROBLEM VS SOLUTION ── */}
      <section className="py-14 bg-slate-50/80 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="text-blue-600 text-xs font-bold tracking-[0.16em] uppercase mb-2">Core Friction &amp; Strategy</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Solving Industry Challenges with Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Problem */}
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6">
                  <CircleHelp className="w-6 h-6 text-rose-500" />
                </div>
                <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">The Challenge</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Why Clients Come to Us</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.problem}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-rose-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" /> Key Bottlenecks Resolved
              </div>
            </motion.article>

            {/* Our Solution */}
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">Our Methodology</p>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">How PixoraSoftTech Solves It</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.solution}</p>
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Verified Engineering Execution
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <p className="text-blue-600 text-xs font-bold tracking-[0.18em] uppercase mb-2">What You Receive</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Deliverables &amp; Artifacts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 p-5 hover:border-blue-200 hover:bg-blue-50/20 transition"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-md shadow-blue-500/20 mt-0.5">
                  0{index + 1}
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">{deliverable}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ROADMAP ── */}
      <section className="py-16 bg-slate-50/60 border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-blue-600 text-xs font-bold tracking-[0.18em] uppercase mb-2">Step-by-Step Workflow</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              A Clear Journey from Vision to Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-black text-sm mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{step.text}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600">
                  Phase 0{index + 1} Milestone
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES & TECH STACK ── */}
      <section className="py-16 bg-[#0a0f1e] text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-[0.18em] uppercase mb-3">
              <TrendingUp className="w-4 h-4" /> Measurable Impact
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4 leading-snug">
              Built to Deliver Tangible Business Outcomes
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Our engineering and creative workflows focus directly on revenue growth, operational efficiency, user satisfaction, and long-term brand authority.
            </p>
          </div>

          <div className="space-y-4">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3.5 items-start p-4 rounded-2xl bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-slate-200 text-sm font-semibold leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="w-4 h-4 text-blue-400" /> Primary Tools &amp; Technologies Applied
            </div>
            <div className="flex flex-wrap gap-2.5">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-blue-100 text-xs font-bold tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-blue-600 text-xs font-bold tracking-[0.18em] uppercase mb-2">Got Questions?</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-900 text-sm pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0f1e] py-14 px-8 shadow-xl"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.4) 0%, transparent 70%)",
            }}>
            <Layers3 className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Ready to start your {service.title} project?
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Tell us what you want to achieve and we&apos;ll build a customized plan and proposal tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/25 active:scale-[0.98]"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
