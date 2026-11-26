"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method:"POST", body:fd });
      const j = await r.json();
      if (j.success) { setStatus("success"); setTimeout(() => setStatus("idle"), 5000); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p initial={{ opacity:0,y:8 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Get In Touch
          </motion.p>
          <motion.h2 initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.05 }} className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
            Start Your <span className="text-blue-600">Project Today</span>
          </motion.h2>
          <motion.p initial={{ opacity:0,y:14 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ delay:0.1 }} className="text-slate-500 text-base max-w-lg mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left info */}
          <motion.div initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.55,ease:"easeOut" }}>
            <h3 className="text-slate-900 font-bold text-xl mb-2">Let&apos;s work together</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-9">
              Whether you have a fully-fleshed idea or just a spark of inspiration, we&apos;re here to help you build it.
            </p>

            <div className="space-y-5 mb-9">
              {[
                { icon:Mail,   label:"Email",    value:"pixorasofttech@gmail.com", color:"text-blue-600",   bg:"bg-blue-50"   },
                { icon:Phone,  label:"Phone",    value:"+92 309 4307701",          color:"text-violet-600", bg:"bg-violet-50" },
                { icon:MapPin, label:"Location", value:"Remote / Global",           color:"text-emerald-600",bg:"bg-emerald-50"},
              ].map((item,i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{item.label}</p>
                    <p className="text-slate-800 text-sm font-medium mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity:0,x:20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.55,ease:"easeOut" }}>
            <div className="bg-white border border-slate-200 rounded-2xl p-7 card-shadow">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="ok" initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0,scale:0.95 }} className="py-14 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-slate-900 font-bold text-lg mb-2">Message Sent!</h3>
                    <p className="text-slate-500 text-sm">We&apos;ll be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="space-y-4">
                    <input type="hidden" name="access_key" value="c419eb68-9071-4baa-ba64-5482713e1c52" />
                    <input type="hidden" name="from_name"  value="PixoraSofttech Contact Form" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Full Name</label>
                        <input type="text" name="name" required placeholder="John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                      </div>
                      <div>
                        <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Email</label>
                        <input type="email" name="email" required placeholder="john@company.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Subject</label>
                      <input type="text" name="subject" placeholder="What are you looking to build?"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                    </div>

                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Message</label>
                      <textarea name="message" required rows={4} placeholder="Tell us about your project..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:border-blue-400 focus:bg-white transition resize-none" />
                    </div>

                    {status === "error" && (
                      <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
                    )}

                    <button type="submit" disabled={status==="loading"}
                      className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-md shadow-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status==="loading" ? "Sending..." : <><span>Send Message</span><Send className="w-4 h-4" /></>}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
