"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const words = [
  "Digital Ecosystems",
  "Web Architecture",
  "Mobile Products",
  "AI Innovation",
  "Cloud Scalability",
];

const servicesList = [
  "PRODUCT DESIGN",
  "WEB DEVELOPMENT",
  "APP DEVELOPMENT",
  "UI/UX DESIGN",
  "AI INNOVATION",
  "CLOUD ARCHITECTURE",
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
      className="relative h-[100dvh] max-h-[100dvh] w-full flex flex-col items-center pt-20 sm:pt-24 pb-0 px-0 text-center overflow-hidden bg-[#0B0F19]"
    >
      {/* Dynamic Animated Gradient Glow & Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Deep Indigo Glow Orb */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#12103E] via-[#00A3FF]/25 to-transparent blur-[110px] sm:blur-[150px]"
        />

        {/* Bottom-Right Vivid Lime & Electric Blue Glow Orb */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1.1, 0.85, 1.25, 1.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-32 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-tl from-[#12103E] via-[#E4FA00]/20 to-[#00A3FF]/20 blur-[130px] sm:blur-[170px]"
        />

        {/* Center Spotlight Radial Glow (Eliminates gloominess & illuminates text) */}
        <motion.div
          animate={{
            opacity: [0.35, 0.65, 0.35],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[#00A3FF]/20 blur-[110px] sm:blur-[140px]"
        />

        {/* Floating Glowing Sparkle Star 1 (Top Left) */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 45, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[12%] text-[#E4FA00] text-xl sm:text-3xl select-none"
        >
          ✦
        </motion.div>

        {/* Floating Glowing Sparkle Star 2 (Right Mid) */}
        <motion.div
          animate={{
            y: [0, 22, 0],
            rotate: [0, -45, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-44 right-[14%] text-[#00A3FF] text-2xl sm:text-4xl select-none"
        >
          ✦
        </motion.div>

        {/* Floating Glowing Sparkle Star 3 (Bottom Left) */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-36 left-[18%] text-[#E4FA00] text-lg sm:text-2xl select-none"
        >
          ✦
        </motion.div>

        {/* Tech Grid Overlay with Radial Fade */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(circle at center, black 50%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 85%)",
          }}
        />
      </div>

      {/* Content Layer - Perfectly Proportioned */}
      <div className="absolute z-30 top-[45%] sm:top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full flex flex-col items-center px-4 sm:px-6 md:px-12">
        {/* Eyebrow Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-widest font-semibold text-[#E4FA00] border border-[#E4FA00]/40 bg-[#12103E]/70 backdrop-blur-md px-3.5 sm:px-4 py-1.5 mb-4 sm:mb-6 font-nav uppercase rounded-full shadow-lg shadow-[#E4FA00]/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E4FA00] animate-pulse" />
          DIGITAL EXPERIENCE STUDIO
        </motion.span>

        {/* 2-Row Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug tracking-tight text-white w-full drop-shadow-sm"
        >
          <div>Architecting the Future of</div>
          <div className="gradient-text inline-block min-h-[1.2em] relative mt-1 sm:mt-2">
            {currentText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="inline-block ml-1 font-normal text-[#E4FA00]"
            >
              |
            </motion.span>
          </div>
        </motion.h1>

        {/* 2-Row Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-300 max-w-xl mx-auto mt-3 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed font-nav px-2 sm:px-0"
        >
          NoxiS is a systemic studio agency architecting high-end digital innovation. <br className="hidden sm:inline" />
          We craft meaningful, boundary-pushing digital experiences.
        </motion.p>

        {/* Single High-Impact Action Button: Our Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 sm:mt-8"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 font-nav bg-gradient-to-r from-[#00A3FF] to-[#0077FF] hover:from-[#00A3FF] hover:to-[#00A3FF] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-[0_0_30px_rgba(0,163,255,0.4)] hover:shadow-[0_0_45px_rgba(0,163,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <span>OUR PRICING</span>
            <span className="text-[#E4FA00] text-base group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* X-Shaped Crossing Marquee Service Ribbons — absolutely positioned inside section */}
      {/* Top Ribbon (Electric Blue) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[16%] sm:bottom-[15%] left-1/2 -translate-x-1/2 w-[250vw] -rotate-[9deg] sm:-rotate-4 bg-[#00A3FF] py-2.5 sm:py-3.5 shadow-2xl z-20 pointer-events-none border-y border-white/20"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-heading font-black text-xs sm:text-sm md:text-base tracking-widest text-white uppercase select-none">
          {[...servicesList, ...servicesList, ...servicesList, ...servicesList].map((srv, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{srv}</span>
              <span className="text-[#E4FA00] text-xl">✦</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Ribbon (Vivid Lime — crosses the blue one forming full X) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay:1 }}
        className="absolute bottom-[16%] sm:bottom-[14%] left-1/2 -translate-x-1/2 w-[250vw] rotate-[9deg] sm:rotate-4 bg-[#E4FA00] py-2.5 sm:py-3.5 shadow-xl z-10 pointer-events-none border-y border-black/10"
      >
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-8 font-heading font-black text-xs sm:text-sm md:text-base tracking-widest text-[#0B0F19] uppercase select-none">
          {[...servicesList, ...servicesList, ...servicesList, ...servicesList].map((srv, idx) => (
            <span key={idx} className="flex items-center gap-8">
              <span>{srv}</span>
              <span className="text-[#00A3FF] text-xl">✦</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}