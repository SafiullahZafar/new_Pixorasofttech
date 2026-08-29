"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Projects Completed" },
  { value: "500+",   label: "Happy Clients"      },
  { value: "99%",    label: "Success Rate"        },
  { value: "50+",    label: "Team Members"        },
];

export default function Stats() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="bg-blue-600 rounded-2xl py-10 px-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-blue-500">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, scale:0.9 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.08, duration:0.4 }}
                className="text-center lg:px-6"
              >
                <p className="text-white text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">{s.value}</p>
                <p className="text-blue-200 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
