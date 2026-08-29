"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "PixoraSoftTech rebuilt our storefront and conversions jumped 38% in the first quarter. They feel like an extension of our own team.",
    name: "Sarah Mitchell",
    role: "CEO, NovaCart",
    img: "https://i.pravatar.cc/48?img=47",
  },
  {
    text: "The mobile app they delivered is fast, beautiful and our 4.9 star rating speaks for itself. Truly premium work.",
    name: "David Chen",
    role: "Founder, PulseFit",
    img: "https://i.pravatar.cc/48?img=12",
  },
  {
    text: "Our Amazon listings never looked this good. Click-through rate doubled within two weeks of the new images going live.",
    name: "Aisha Rahman",
    role: "Marketing Director, ApexGear",
    img: "https://i.pravatar.cc/48?img=5",
  },
  {
    text: "From brand strategy to a full identity system, they nailed every detail. Our investors noticed the difference immediately.",
    name: "Marcus Weber",
    role: "COO, Lumen Energy",
    img: "https://i.pravatar.cc/48?img=15",
  },
  {
    text: "A complex analytics dashboard delivered ahead of schedule with zero compromises on quality. Exceptional engineering.",
    name: "Priya Nair",
    role: "Product Lead, FinSight",
    img: "https://i.pravatar.cc/48?img=23",
  },
  {
    text: "The packaging design gave our coffee a premium shelf presence. Sales through retail partners climbed noticeably.",
    name: "Tom Becker",
    role: "Owner, Brew Coffee",
    img: "https://i.pravatar.cc/48?img=33",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
            Client Love
          </motion.div>
          <motion.h2 initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Don&apos;t take our{" "}
            <span className="text-blue-600">word for it</span>
          </motion.h2>
          <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            We measure our success by the success of the people we work with. Here is what a few of them have to say.
          </motion.p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*0.07, duration:0.45, ease:"easeOut" }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-100 hover:shadow-md transition-all duration-300 relative"
            >
              {/* Quote icon top right */}
              <div className="absolute top-5 right-5 text-slate-100">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor">
                  <path d="M0 22V13.5C0 5.833 4.167.5 12.5 0l1 2C9.333 3 7.083 5.583 6.5 10H12V22H0zm16 0V13.5C16 5.833 20.167.5 28.5 0l1 2C25.333 3 23.083 5.583 22.5 10H28V22H16z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_,s) => (
                  <Star key={s} className="w-4 h-4 fill-blue-600 text-blue-600" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} width={40} height={40}
                  className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                <div>
                  <p className="text-slate-900 text-sm font-semibold">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
