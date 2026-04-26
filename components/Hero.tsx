"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code } from "lucide-react";

function TypingCode() {
  const [displayText, setDisplayText] = useState("");
  const [blockIndex, setBlockIndex] = useState(0);

  const blocks = [
    // Block 1: Frontend (React/JSX)
    [
      { text: "const ", color: "text-[#ff7b72]" },
      { text: "ContactForm ", color: "text-[#d2a8ff]" },
      { text: "= () => {\n", color: "text-white" },
      { text: "  return (\n", color: "text-white" },
      { text: "    <form ", color: "text-[#ff7b72]" },
      { text: "onSubmit=", color: "text-[#79c0ff]" },
      { text: "{handleSubmit}>\n", color: "text-[#a5d6ff]" },
      { text: "      <input ", color: "text-[#ff7b72]" },
      { text: "type=", color: "text-[#79c0ff]" },
      { text: "\"email\" ", color: "text-[#a5d6ff]" },
      { text: "required ", color: "text-[#79c0ff]" },
      { text: "/>\n", color: "text-[#ff7b72]" },
      { text: "      <button ", color: "text-[#ff7b72]" },
      { text: "className=", color: "text-[#79c0ff]" },
      { text: "\"btn-primary\"", color: "text-[#a5d6ff]" },
      { text: ">\n", color: "text-[#ff7b72]" },
      { text: "        Submit\n", color: "text-white" },
      { text: "      </button>\n", color: "text-[#ff7b72]" },
      { text: "    </form>\n", color: "text-[#ff7b72]" },
      { text: "  );\n", color: "text-white" },
      { text: "};", color: "text-white" }
    ],
    // Block 2: Backend (Node/API)
    [
      { text: "app.", color: "text-[#79c0ff]" },
      { text: "post", color: "text-[#d2a8ff]" },
      { text: "(\"/api/v1/deploy\", ", color: "text-[#a5d6ff]" },
      { text: "async ", color: "text-[#ff7b72]" },
      { text: "(req, res) => {\n", color: "text-white" },
      { text: "  const ", color: "text-[#ff7b72]" },
      { text: "{ project } = req.body;\n", color: "text-[#79c0ff]" },
      { text: "  try ", color: "text-[#ff7b72]" },
      { text: "{\n", color: "text-white" },
      { text: "    await ", color: "text-[#ff7b72]" },
      { text: "Pixora.", color: "text-[#79c0ff]" },
      { text: "build", color: "text-[#d2a8ff]" },
      { text: "(project);\n", color: "text-white" },
      { text: "    res.", color: "text-[#79c0ff]" },
      { text: "status", color: "text-[#d2a8ff]" },
      { text: "(200).", color: "text-white" },
      { text: "json", color: "text-[#d2a8ff]" },
      { text: "({ success: ", color: "text-white" },
      { text: "true ", color: "text-[#79c0ff]" },
      { text: "});\n", color: "text-white" },
      { text: "  } catch ", color: "text-[#ff7b72]" },
      { text: "(err) {\n", color: "text-white" },
      { text: "    res.status(500).send(err);\n", color: "text-white" },
      { text: "  }\n", color: "text-white" },
      { text: "});", color: "text-white" }
    ],
    // Block 3: Design (Tailwind/CSS)
    [
      { text: "@theme ", color: "text-[#ff7b72]" },
      { text: "{\n", color: "text-white" },
      { text: "  --color-primary: ", color: "text-[#79c0ff]" },
      { text: "#8b5cf6", color: "text-[#a5d6ff]" },
      { text: ";\n", color: "text-white" },
      { text: "  --color-secondary: ", color: "text-[#79c0ff]" },
      { text: "#06b6d4", color: "text-[#a5d6ff]" },
      { text: ";\n", color: "text-white" },
      { text: "  --font-family-sans: ", color: "text-[#79c0ff]" },
      { text: "\"Inter\", sans-serif", color: "text-[#a5d6ff]" },
      { text: ";\n", color: "text-white" },
      { text: "  --shadow-xl: ", color: "text-[#79c0ff]" },
      { text: "0 20px 25px -5px rgba(0,0,0,0.1)", color: "text-[#a5d6ff]" },
      { text: ";\n", color: "text-white" },
      { text: "  --animate-float: ", color: "text-[#79c0ff]" },
      { text: "float 3s ease-in-out infinite", color: "text-[#a5d6ff]" },
      { text: ";\n", color: "text-white" },
      { text: "}", color: "text-white" }
    ]
  ];

  const currentCode = blocks[blockIndex];
  const fullRawText = currentCode.map(l => l.text).join("");
  
  useEffect(() => {
    let currentText = "";
    let i = 0;
    let isDeleting = false;
    let hasMadeMistake = false;

    const type = () => {
      // Mistake logic: at middle of first line, type some errors
      if (i === 15 && !hasMadeMistake) {
        currentText += " [ERROR_DETECTED]";
        setDisplayText(currentText);
        setTimeout(() => {
          isDeleting = true;
          hasMadeMistake = true;
          type();
        }, 500);
        return;
      }

      if (isDeleting) {
        currentText = currentText.slice(0, -1);
        setDisplayText(currentText);
        if (currentText === fullRawText.slice(0, i)) {
          isDeleting = false;
          setTimeout(type, 100);
        } else {
          setTimeout(type, 20);
        }
      } else {
        if (i < fullRawText.length) {
          currentText += fullRawText[i];
          setDisplayText(currentText);
          i++;
          setTimeout(type, Math.random() * 20 + 10);
        } else {
          // Move to next block after pause
          setTimeout(() => {
            setDisplayText("");
            setBlockIndex((prev) => (prev + 1) % blocks.length);
          }, 3000);
        }
      }
    };

    type();
  }, [blockIndex]);

  const renderColoredText = () => {
    let totalLen = 0;
    return currentCode.map((line, idx) => {
      const start = totalLen;
      const end = totalLen + line.text.length;
      totalLen = end;

      if (displayText.length <= start) return null;
      const visiblePart = displayText.slice(start, end);
      
      return (
        <span key={`${blockIndex}-${idx}`} className={line.color}>
          {visiblePart}
        </span>
      );
    });
  };

  return (
    <pre className="font-mono whitespace-pre-wrap text-[10px] leading-tight">
      {renderColoredText()}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1.5 h-3 bg-primary ml-1 align-middle"
      />
    </pre>
  );
}

export default function Hero() {

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 lg:mt-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Empowering Digital Innovation
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Building the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient drop-shadow-sm">
              Future of Tech
            </span>
          </h1>
          <p className="text-white/60 text-lg lg:text-xl max-w-lg mb-8 leading-relaxed">
            From cutting-edge web development to high-performance mobile apps. 
            We turn your vision into 3D-powered reality with PixoraSoftTech.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/80 transition-all hover:scale-105 shadow-2xl shadow-primary/40">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-2xl glass text-white font-bold hover:bg-white/10 transition-all border border-white/10">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* 3D Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block perspective-1000 mt-12 lg:mt-40 mb-20"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Main 3D Card */}
            <motion.div
              animate={{ 
                rotateX: [0, 5, -5, 0],
                rotateY: [0, -5, 5, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full glass-card rounded-3xl p-8 flex flex-col justify-between border-2 border-white/10 relative z-20"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Code className="text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/40 uppercase tracking-widest">Innovation</div>
                  <div className="text-xl font-bold">PIXORA v1.0</div>
                </div>
              </div>

              {/* Realistic Typing Console Display */}
              <div className="my-8 p-6 rounded-2xl bg-[#0d1117] border border-white/10 relative overflow-hidden font-mono text-[10px] leading-relaxed h-48 shadow-inner group">
                <div className="absolute top-2 left-4 flex gap-1.5 mb-4 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                
                <div className="mt-4 space-y-1 overflow-hidden">
                  <TypingCode />
                </div>
                
                {/* Overlay Gradient for focus */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none" />
              </div>
              
              <div className="space-y-4">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40">Systems</div>
                    <div className="font-bold text-sm">Active</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-xs text-white/40">Uptime</div>
                    <div className="font-bold text-sm">99.9%</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full -z-10 animate-pulse-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
