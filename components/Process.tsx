"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, CheckCircle, Code2, Search, Rocket, Send, RefreshCcw } from "lucide-react";

const steps = [
  { num:"01", icon:MessageSquare, title:"Discovery Call",    desc:"We understand your vision, goals, and business requirements in depth." },
  { num:"02", icon:PenTool,       title:"UI/UX Design",      desc:"High-fidelity Figma prototypes and design systems tailored to your brand." },
  { num:"03", icon:CheckCircle,   title:"Design Approval",   desc:"Iterate until every design decision is perfect and signed off." },
  { num:"04", icon:Code2,         title:"Development",       desc:"Senior engineers build the product with clean, scalable, tested code." },
  { num:"05", icon:Search,        title:"QA & Testing",      desc:"Cross-device, cross-browser testing for a flawless launch." },
  { num:"06", icon:Rocket,        title:"SEO & Launch",      desc:"Search-optimised, deployed to production with zero downtime." },
  { num:"07", icon:Send,          title:"Handoff",           desc:"Full codebase, docs, and knowledge transfer to your team." },
  { num:"08", icon:RefreshCcw,    title:"Ongoing Support",   desc:"Post-launch maintenance and unlimited reviews until you're 100% happy." },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            How We Work
          </motion.p>
          <motion.h2 initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }} className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Our <span className="text-blue-600">Work Process</span>
          </motion.h2>
          <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="text-slate-500 text-base max-w-xl mx-auto">
            A transparent, collaborative process designed to deliver excellence at every step.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.07, duration:0.45, ease:"easeOut" }}
              className="group bg-slate-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest mb-4 block">{s.num}</span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <s.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
