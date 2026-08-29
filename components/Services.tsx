"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, Cpu, Palette, Cloud, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Fast, scalable, SEO-friendly websites built with modern frameworks and pixel-perfect precision.",
    tags: ["Responsive design", "Core Web Vitals", "CMS integration", "SEO ready"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS & Android apps with smooth, delightful user experiences.",
    tags: ["iOS & Android", "React Native", "Offline-first", "App Store launch"],
  },
  {
    icon: Cpu,
    title: "Custom Software Development",
    desc: "Tailored business software, dashboards and internal tools engineered to fit your workflow.",
    tags: ["API integrations", "Admin dashboards", "Automation", "Cloud native"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven interface design that turns visitors into loyal customers.",
    tags: ["User research", "Wireframes", "Prototyping", "Design systems"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure, elastic cloud infrastructure on AWS, Azure and GCP with zero-downtime deploys.",
    tags: ["DevOps & CI/CD", "Auto-scaling", "Cost optimization", "Migration"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Proactive security audits, penetration testing and compliance for peace of mind.",
    tags: ["Vulnerability scans", "Pen testing", "SOC 2 readiness", "Monitoring"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
            What We Do
          </motion.div>
          <motion.h2 initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Services built to{" "}
            <span className="text-blue-600">launch & scale</span>
          </motion.h2>
          <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }}
            className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            From custom software to conversion-driving creative, we cover the full spectrum of digital product work under one roof.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
              transition={{ delay: i*0.07, duration:0.45, ease:"easeOut" }}
              className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <s.icon className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="text-slate-900 font-bold text-[15px] mb-2.5">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:border-blue-200 hover:text-blue-600 transition-all">
            View all 15 services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
