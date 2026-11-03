"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cpu,
  Palette,
  Cloud,
  ShieldCheck,
  Star,
  ShoppingBag,
  FileText,
  BarChart2,
  Image as ImageIcon,
  Share2,
  PenTool,
  Package,
  Layout
} from "lucide-react";

const services = [
  // Row 1 — Software & Systems
  {
    slug: "website-development",
    icon: Code2,
    title: "Website Development",
    desc: "Fast, scalable, SEO-friendly websites built with modern frameworks and pixel-perfect precision.",
    tags: ["Responsive design", "Core Web Vitals", "CMS integration", "SEO ready"],
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform iOS & Android apps with smooth, delightful user experiences.",
    tags: ["iOS & Android", "React Native", "Offline-first", "App Store launch"],
  },
  {
    slug: "custom-software-development",
    icon: Cpu,
    title: "Custom Software Development",
    desc: "Tailored business software, dashboards and internal tools engineered to fit your workflow.",
    tags: ["API integrations", "Admin dashboards", "Automation", "Cloud native"],
  },
  {
    slug: "saas-development",
    icon: Cloud,
    title: "SaaS Development",
    desc: "Scalable SaaS products with customer workspaces, subscriptions, analytics, and secure user access.",
    tags: ["Multi-tenant apps", "Subscriptions", "Product dashboards", "Cloud ready"],
  },
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven interface design that turns visitors into loyal customers.",
    tags: ["User research", "Wireframes", "Prototyping", "Design systems"],
  },
  {
    slug: "cloud-solutions",
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Secure, elastic cloud infrastructure on AWS, Azure and GCP with zero-downtime deploys.",
    tags: ["DevOps & CI/CD", "Auto-scaling", "Cost optimization", "Migration"],
  },
  {
    slug: "cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Proactive security audits, penetration testing and compliance for peace of mind.",
    tags: ["Vulnerability scans", "Pen testing", "SOC 2 readiness", "Monitoring"],
  },
  // Row 2 — Creative & E-Commerce
  {
    slug: "branding-identity-design",
    icon: Star,
    title: "Branding & Identity Design",
    desc: "Memorable brand identities, guidelines and visual systems that build trust.",
    tags: ["Brand strategy", "Visual identity", "Guidelines", "Asset kits"],
  },
  {
    slug: "amazon-listing-design",
    icon: ShoppingBag,
    title: "Amazon Listing Design",
    desc: "Conversion-focused Amazon listing images that make products impossible to scroll past.",
    tags: ["Hero images", "Feature callouts", "A/B variants", "Brand-compliant"],
  },
  {
    slug: "amazon-a-plus-content",
    icon: FileText,
    title: "Amazon A+ Content",
    desc: "Rich A+ and Premium A+ modules that lift conversion and tell your brand story.",
    tags: ["Module design", "Comparison charts", "Brand storytelling", "Copywriting"],
  },
  {
    slug: "product-infographics",
    icon: BarChart2,
    title: "Product Infographics",
    desc: "Clean, data-rich infographics that explain your product value in seconds.",
    tags: ["Icon sets", "Spec charts", "Lifestyle blends", "Print ready"],
  },
  {
    slug: "lifestyle-images",
    icon: ImageIcon,
    title: "Lifestyle Images",
    desc: "Authentic lifestyle photography and composites that connect emotionally with buyers.",
    tags: ["Set design", "Model shoots", "Retouching", "Marketplace ready"],
  },
  {
    slug: "social-media-design",
    icon: Share2,
    title: "Social Media Design",
    desc: "Scroll-stopping social content and ad creatives that grow audiences and engagement.",
    tags: ["Post templates", "Ad creatives", "Story sets", "Brand kit"],
  },
  {
    slug: "logo-design",
    icon: PenTool,
    title: "Logo Design",
    desc: "Distinctive, timeless logos with full variation sets and source files.",
    tags: ["3 concepts", "Vector files", "Variations", "Usage guide"],
  },
  {
    slug: "packaging-design",
    icon: Package,
    title: "Packaging Design",
    desc: "Shelf-ready packaging that protects, communicates and stands out at retail.",
    tags: ["Dielines", "3D mockups", "Print ready", "Sustainable options"],
  },
  {
    slug: "graphic-design",
    icon: Layout,
    title: "Graphic Design",
    desc: "Print and digital design across flyers, brochures, decks and brand collateral.",
    tags: ["Brochures", "Pitch decks", "Flyers", "Brand collateral"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.07, duration: 0.45, ease: "easeOut" }}
              className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <s.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-slate-900 font-bold text-[15px] mb-2.5 group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Learn More Link */}
              <div>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all group-hover:text-blue-700"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
