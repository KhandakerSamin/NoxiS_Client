"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Digital",
  "Web Development",
  "App Development",
  "Product Design",
  "AI Innovation",
  "Cloud Architecture",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex];
    let typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && currentText === targetWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? targetWord.substring(0, prev.length - 1)
          : targetWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 pb-20 px-6 md:px-12 lg:px-24 text-center overflow-hidden bg-[#06060e]"
    >
      {/* Dynamic Animated Gradient Glow Background (Framer Motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Indigo Glow Orb */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-indigo-900/40 via-purple-900/25 to-transparent blur-[140px]"
        />

        {/* Bottom-Right Deep Blue Glow Orb */}
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1.1, 0.9, 1.2, 1.1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-slate-900/60 via-blue-950/35 to-transparent blur-[160px]"
        />

        {/* Center Violet Ambient Core Pulse */}
        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [0.85, 1.1, 0.85],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]"
        />

        {/* Tech Grid Overlay with Radial Fade */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest text-accent-light border border-border-subtle/80 bg-bg-card/40 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 shadow-inner"
        >
          <span className="w-1.5 h-1.5 rounded-none bg-indigo-400 animate-pulse" />
          DIGITAL EXPERIENCE STUDIO
        </motion.span>

        {/* Animated Letter-by-Letter Changing Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight text-text-primary"
        >
          Architecting the Future of{" "}
          <br className="hidden sm:inline" />
          <span className="gradient-text inline-block min-h-[1.2em] relative">
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="inline-block ml-1 font-normal text-accent-purple"
            >
              |
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-text-secondary max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed font-nav"
        >
          NoxiS is a systemic studio agency architecting design and digital
          high-end innovation and services. We craft meaningful, boundary-pushing
          digital experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-9"
        >
          <a
            href="#contact"
            className="font-nav bg-gradient-primary text-white text-sm font-medium px-7 py-3.5 rounded-none hover:shadow-glow transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="font-nav border border-border-subtle text-sm font-medium px-7 py-3.5 rounded-none hover:bg-white/5 transition-colors backdrop-blur-sm"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Highlights / Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mt-16 text-xs text-text-muted font-nav"
        >
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★</span> Award Winning Studio
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★</span> 250+ Projects Delivered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★</span> Trusted Worldwide
          </span>
        </motion.div>
      </div>
    </section>
  );
}