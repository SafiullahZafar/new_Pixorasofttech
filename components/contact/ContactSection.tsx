"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import toast from "react-hot-toast";

const hours = [
  { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday",  time: "10:00 AM - 2:00 PM" },
  { day: "Sunday",    time: "Closed"              },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/pixorasofttech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/pixorasofttech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/pixorasofttech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/pixorasofttech",
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
];

const inputClass =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition bg-white";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const j = await r.json();

      if (j.success) {
        toast.success("Message sent! We'll be in touch within 24 hours.", {
          duration: 5000,
          style: {
            background: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
            borderRadius: "12px",
            fontSize: "14px",
          },
          iconTheme: { primary: "#16a34a", secondary: "#fff" },
        });
        formRef.current?.reset();
      } else {
        toast.error("Failed to send. Please try again.", {
          duration: 5000,
          style: {
            background: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
            borderRadius: "12px",
            fontSize: "14px",
          },
        });
      }
    } catch {
      toast.error("Network error. Please check your connection.", {
        duration: 5000,
        style: {
          background: "#fef2f2",
          color: "#991b1b",
          border: "1px solid #fecaca",
          borderRadius: "12px",
          fontSize: "14px",
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gradient-to-b from-blue-50/50 to-white pt-[68px] pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-14">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5"
          >
            Contact Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07 }}
            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Let&apos;s start a{" "}
            <span className="text-blue-600">conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13 }}
            className="text-slate-500 text-base max-w-lg mx-auto"
          >
            Tell us about your project and we will get back to you within one business day.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="access_key" value="c419eb68-9071-4baa-ba64-5482713e1c52" />
              <input type="hidden" name="from_name"  value="PixoraSofttech Contact Page" />
              <input type="hidden" name="subject"    value="New Contact Form Submission - PixoraSofttech" />

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">
                    Name <span className="text-blue-600">*</span>
                  </label>
                  <input type="text" name="name" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">
                    Email <span className="text-blue-600">*</span>
                  </label>
                  <input type="email" name="email" required placeholder="jane@company.com" className={inputClass} />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">Company</label>
                  <input type="text" name="company" placeholder="Acme Inc." className={inputClass} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-1.5">Message</label>
                <textarea name="message" required rows={5}
                  placeholder="Tell us about your project, timeline and goals..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-blue-700 transition shadow-md shadow-blue-100 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-2 flex flex-col gap-5"
          >

            {/* Company info */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-slate-900 font-bold text-base mb-5">Company information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail,   label: "Email",   value: "pixorasofttech@gmail.com" },
                  { icon: Phone,  label: "Phone",   value: "+92 309 4307701"           },
                  { icon: MapPin, label: "Address", value: "Remote / Global Operations" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-slate-800 text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-blue-600" />
                <h3 className="text-slate-900 font-bold text-base">Working hours</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">{h.day}</span>
                    <span className={`text-sm font-medium ${h.time === "Closed" ? "text-red-500" : "text-slate-800"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow us */}
            <div className="bg-blue-600 rounded-2xl p-6 relative overflow-hidden">
              <h3 className="text-white font-bold text-base mb-1">Follow us</h3>
              <p className="text-blue-200 text-sm mb-5">Stay connected for insights and updates.</p>
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white hover:bg-white/30 transition-all">
                    {s.svg}
                  </a>
                ))}
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
              <div className="absolute right-6 bottom-4 w-10 h-10 bg-white/10 rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
