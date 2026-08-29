"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Paintbrush, Shield, Headphones, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Paintbrush, title: "Modern Design",    sub: "Clean & Creative"  },
  { icon: Shield,     title: "Secure & Reliable",sub: "Safe & Scalable"   },
  { icon: Headphones, title: "Support 24/7",     sub: "We're Always Here" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-[68px]"
    >
      {/* subtle dot grid matching image bg */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #bfdbfe 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* light blue tint top-right to match image */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="-mt-40 lg:mt-6"
          >
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-white text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Digital Solutions That Drive Real Growth
            </div> */}

            {/* Headline */}
            <h1 className="text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5">
              We Build Digital
              <br />
              Solutions That
              <br />
              <span className="text-blue-600">Grow Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-slate-500 text-base lg:text-[17px] leading-relaxed mb-8 max-w-md">
              We create modern, responsive and result-driven web solutions that help your brand stand out and achieve real success.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-20 mb-10">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-[13px] font-bold leading-tight">{f.title}</p>
                    <p className="text-slate-400 text-[11px]">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Hero Visual Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex items-start justify-center -mt-10 lg:-mt-20"
          >
            {/* Main visual image — static, blended into bg */}
            <img
              src="/hero-visual.png"
              alt="PixoraSoftTech 3D Visual"
              className="w-full max-w-[540px] h-auto object-contain select-none mt-16 lg:mt-24"
              style={{ mixBlendMode: "multiply" }}
              draggable={false}
            />

            {/* Floating card — Performance */}
            {/* <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-8 right-0 bg-white rounded-2xl border border-slate-200 shadow-xl px-4 py-3 z-20 min-w-[145px]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-slate-600 text-xs font-semibold">Performance</span>
              </div>
              <p className="text-emerald-600 text-sm font-extrabold">+120% ↗</p>
            </motion.div> */}

            {/* Floating card — Trusted Solutions */}
            {/* <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-16 right-0 bg-white rounded-2xl border border-slate-200 shadow-xl px-4 py-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-slate-900 text-xs font-bold">Trusted</p>
              <p className="text-slate-400 text-[11px]">Solutions</p>
            </motion.div> */}

            {/* Floating icon — code bracket */}
            {/* <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-1/3 left-4 bg-white rounded-2xl border border-slate-200 shadow-lg w-12 h-12 flex items-center justify-center z-20"
            >
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </motion.div> */}

            {/* Floating icon — users */}
            {/* <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-1/3 left-4 bg-slate-900 rounded-2xl shadow-lg w-12 h-12 flex items-center justify-center z-20"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Trusted brands strip */}
      <div className="relative z-10 border-t border-slate-100 bg-white/80 backdrop-blur-sm py-7">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
            Trusted by Fast-Growing Brands Worldwide
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {["Fit","FinSight","Lumen","ApexGear","PureLeaf","Wander","Brew","NovaCart","PulseFit",
                "Fit","FinSight","Lumen","ApexGear","PureLeaf","Wander","Brew","NovaCart","PulseFit"].map((b, i) => (
                <span key={i} className="text-slate-400 text-base font-bold shrink-0 hover:text-slate-600 transition-colors">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
