"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Shield, Layers, LayoutGrid, Terminal } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable web applications built with the latest technologies and 3D aesthetics.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Mobile App Dev",
    desc: "Native and cross-platform mobile apps that offer seamless performance and premium UX.",
    icon: Smartphone,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Software Solutions",
    desc: "Custom enterprise software tailored to solve your specific business challenges.",
    icon: Terminal,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "UI/UX Design",
    desc: "Stunning Figma designs that bridge the gap between imagination and reality.",
    icon: LayoutGrid,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    title: "Cyber Security",
    desc: "Robust security measures to ensure your data and applications remain protected.",
    icon: Shield,
    color: "bg-red-500/10 text-red-500",
  },
  {
    title: "Cloud Services",
    desc: "Scalable cloud infrastructure to power your digital ecosystem with 99.9% uptime.",
    icon: Layers,
    color: "bg-cyan-500/10 text-cyan-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Our <span className="text-primary">Premium</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            We provide end-to-end digital solutions that help your business scale and stand out in the modern market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card tilt-card p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
