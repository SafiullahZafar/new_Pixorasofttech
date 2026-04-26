"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, CheckCircle, Code, Search, Rocket, RefreshCcw, Send } from "lucide-react";

const steps = [
  {
    title: "Customer Demands",
    desc: "We start by understanding your vision and specific business requirements.",
    icon: MessageSquare,
  },
  {
    title: "Figma Designs",
    desc: "Our designers craft stunning, high-fidelity UI/UX mockups in Figma.",
    icon: PenTool,
  },
  {
    title: "Design Approval",
    desc: "We iterate with you until the designs are perfect and approved.",
    icon: CheckCircle,
  },
  {
    title: "Development",
    desc: "Our engineers bring the designs to life using cutting-edge technologies.",
    icon: Code,
  },
  {
    title: "Rigorous Testing",
    desc: "We test every feature to ensure a bug-free and smooth experience.",
    icon: Search,
  },
  {
    title: "SEO Optimization",
    desc: "Our SEO engineers optimize your site for maximum search visibility.",
    icon: Rocket,
  },
  {
    title: "Delivery",
    desc: "We deploy your project to the live environment for the world to see.",
    icon: Send,
  },
  {
    title: "Unlimited Reviews",
    desc: "Not satisfied? We provide unlimited reviews until you are 100% happy.",
    icon: RefreshCcw,
  },
];

export default function Process() {
  return (
    <section id="workflow" className="py-32 bg-white/2 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Work <span className="text-primary">Process</span></h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A transparent and efficient workflow designed to deliver excellence at every step.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                  <div className="glass-card p-8 rounded-3xl inline-block max-w-md">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10 animate-pulse" />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
