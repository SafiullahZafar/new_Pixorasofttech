"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">Stay ahead of the curve</h3>
            <p className="text-slate-400 text-sm max-w-sm">
              Get insights on design, development and marketplace growth delivered to your inbox monthly.
            </p>
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center gap-2 hover:bg-blue-700 transition whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand col — wider */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <img
                src="/logo.png"
                alt="PixoraSoftTech Logo"
                className="w-10 h-10 object-contain rounded-xl"
              />
              <span className="text-base font-bold">
                Pixora<span className="text-blue-400">SoftTech</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              We build modern websites, custom software, mobile apps and creative marketplace assets that help businesses stand out and grow.
            </p>

            <div className="space-y-3">
              <a href="mailto:pixorasofttech@gmail.com" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                pixorasofttech@gmail.com
              </a>
              <a href="tel:+923094307701" className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                +92 309 4307701
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                Remote / Global
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Website Development", href: "/services/website-development" },
                { label: "Mobile App", href: "/services/mobile-app-development" },
                { label: "Custom Software", href: "/services/custom-software-development" },
                { label: "UI/UX Design", href: "/services/ui-ux-design" },
                { label: "Cloud Solutions", href: "/services/cloud-solutions" },
                { label: "Cyber Security", href: "/services/cyber-security" },
              ].map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Creative</h4>
            <ul className="space-y-3">
              {[
                { label: "Branding & Identity", href: "/services/branding-identity-design" },
                { label: "Logo Design", href: "/services/logo-design" },
                { label: "Packaging Design", href: "/services/packaging-design" },
                { label: "Social Media Design", href: "/services/social-media-design" },
                { label: "Amazon Listing", href: "/services/amazon-listing-design" },
                { label: "Lifestyle Images", href: "/services/lifestyle-images" },
              ].map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">© {new Date().getFullYear()} PixoraSoftTech. All rights reserved.</p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { label:"LinkedIn", href:"https://www.linkedin.com/company/pixorasofttech-smc-private-limited", svg:<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label:"Twitter", href:"https://x.com/Pixorasofttech", svg:<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg> },
              { label:"Instagram", href:"https://www.instagram.com/pixrasofttech/", svg:<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              { label:"GitHub", href:"https://github.com/pixrasofttech-maker", svg:<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
              { label:"Facebook", href:"https://www.facebook.com/profile.php?id=61589128270064", svg:<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-600/40 transition-all">
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
