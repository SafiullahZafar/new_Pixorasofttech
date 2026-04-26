"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: "1,000+", color: "text-primary" },
  { label: "Happy Clients", value: "500+", color: "text-secondary" },
  { label: "Success Rate", value: "99%", color: "text-accent" },
  { label: "Team Members", value: "50+", color: "text-purple-400" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <h3 className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </h3>
              <p className="text-white/40 text-sm lg:text-base font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
