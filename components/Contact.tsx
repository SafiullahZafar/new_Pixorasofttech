"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000); // Reset after 5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let&apos;s Build Something <span className="text-primary">Extraordinary</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 leading-relaxed">
              Have a project in mind? Reach out to us and let&apos;s discuss how we can help you achieve your digital goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-xl font-medium">pixorasofttech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-medium">+92 3094307701</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Location</p>
                  <p className="text-xl font-medium">Remote / Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] relative min-h-[500px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <input type="hidden" name="access_key" value="c419eb68-9071-4baa-ba64-5482713e1c52" />
                  <input type="hidden" name="from_name" value="PIXORASOFTTECH Contact Form" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/70 ml-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      placeholder="How can we help?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:border-primary outline-none transition-all resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-primary/80 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                    {status !== "loading" && <Send className="w-5 h-5" />}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
