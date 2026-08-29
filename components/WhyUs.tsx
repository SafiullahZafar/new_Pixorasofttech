"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Zap, ShieldCheck, Headphones } from "lucide-react";

const cards = [
  { icon: Users,       title: "Expert Team",         desc: "Senior engineers and designers with 10+ years of combined craft." },
  { icon: Lightbulb,   title: "Creative Solutions",  desc: "Fresh, original thinking tailored to your market and audience." },
  { icon: Zap,         title: "Fast Delivery",       desc: "Agile sprints and tight feedback loops keep projects on schedule." },
  { icon: ShieldCheck, title: "Quality Assurance",   desc: "Rigorous QA on every release so what ships actually works." },
  { icon: Headphones,  title: "Dedicated Support",   desc: "A real human partner from kickoff through launch and beyond." },
];

export default function WhyUs() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
            Why PixoraSofttech
          </motion.div>
          <motion.h2 initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Why clients <span className="text-blue-600">choose us</span>
          </motion.h2>
          <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            We pair engineering rigor with creative flair, so your product works beautifully and looks unmistakably yours.
          </motion.p>
        </div>

        {/* Grid: 3 top + 2 bottom left + 1 blue card bottom right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*0.07, duration:0.45, ease:"easeOut" }}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-[15px] mb-2">{c.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}

          {/* Blue highlight card */}
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay:0.35, duration:0.45, ease:"easeOut" }}
            className="bg-blue-600 rounded-2xl p-7 relative overflow-hidden"
          >
            <h3 className="text-white font-bold text-[15px] mb-2">One partner, end-to-end</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Strategy, design, engineering and marketplace creative — all delivered by one accountable team.
            </p>
            <p className="text-white text-4xl font-extrabold mb-1">99%</p>
            <p className="text-blue-300 text-sm">Client retention rate</p>

            {/* decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-14 h-14 bg-white/10 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
