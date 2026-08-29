"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Project",
    type: "Fixed scope",
    typeColor: "text-blue-600",
    desc: "A defined deliverable with a clear timeline and budget. Ideal for launches and redesigns.",
    features: ["Scoped deliverables", "Fixed timeline", "Milestone billing", "30-day support"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Retainer",
    type: "Monthly",
    typeColor: "text-blue-300",
    desc: "A dedicated squad that ships continuously. Best for products that keep evolving.",
    features: ["Dedicated team", "Weekly sprints", "Priority queue", "Ongoing optimisation"],
    cta: "Get started",
    highlight: true,
  },
  {
    name: "On-Demand",
    type: "Hourly",
    typeColor: "text-blue-600",
    desc: "Tap us for specific tasks — a landing page, an A+ module, a logo refresh — as you need.",
    features: ["Flexible hours", "Single tasks", "Fast turnaround", "No minimums"],
    cta: "Get started",
    highlight: false,
  },
];

export default function ServicesEngagement() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Engagement Models
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4"
          >
            Flexible ways to{" "}
            <span className="text-blue-600">work with us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed"
          >
            Whether you need a one-off project or a long-term partner, we have a model that fits.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: "easeOut" }}
              className={`rounded-2xl p-8 border flex flex-col justify-between ${
                p.highlight
                  ? "bg-blue-600 border-blue-600 shadow-2xl shadow-blue-200"
                  : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              }`}
            >
              <div>
                <p className={`text-lg font-extrabold mb-1 ${p.highlight ? "text-white" : "text-slate-900"}`}>
                  {p.name}
                </p>
                <p className={`text-sm font-semibold mb-4 ${p.highlight ? "text-blue-300" : "text-blue-600"}`}>
                  {p.type}
                </p>
                <p className={`text-sm leading-relaxed mb-6 ${p.highlight ? "text-blue-100" : "text-slate-500"}`}>
                  {p.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        p.highlight ? "bg-blue-500" : "bg-blue-50"
                      }`}>
                        <Check className={`w-3 h-3 ${p.highlight ? "text-white" : "text-blue-600"}`} />
                      </div>
                      <span className={`text-sm ${p.highlight ? "text-white" : "text-slate-700"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all ${
                  p.highlight ? "text-white" : "text-blue-600"
                }`}
              >
                {p.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
