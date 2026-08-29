"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We dig into your goals, audience and constraints to define a clear scope.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes, prototypes and brand direction — refined until it feels right.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Engineering and creative production in agile sprints with weekly demos.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "QA, deploy, optimise and support — we stay with you after go-live.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4"
          >
            A process built for{" "}
            <span className="text-blue-600">momentum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base max-w-lg mx-auto leading-relaxed"
          >
            Four focused phases that take you from idea to launch without the usual chaos.
          </motion.p>
        </div>

        {/* 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <span className="text-blue-200 text-3xl font-extrabold block mb-4 leading-none">
                {s.num}
              </span>
              <h3 className="text-slate-900 font-bold text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
