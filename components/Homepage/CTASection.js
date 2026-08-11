"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-[#070814] py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Soft Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Modern Glassmorphic Hero CTA Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gradient-to-b from-[#0e0f26]/95 via-[#0b0c1e]/90 to-[#080918]/95 border border-white/15 p-8 sm:p-12 md:p-16 rounded-none backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Top Glowing Laser Border Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-purple-500" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Main Copy & CTA Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-300 bg-indigo-950/70 border border-indigo-500/30 px-3.5 py-1.5 rounded-none font-nav uppercase mb-6 shadow-inner">
                <span className="w-1.5 h-1.5 bg-indigo-400 animate-pulse" />
                READY TO TRANSFORM?
              </div>

              {/* Heading */}
              <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-5xl uppercase tracking-tight text-white leading-tight mb-4">
                ARCHITECT YOUR <span className="gradient-text">DIGITAL FUTURE</span>
              </h2>

              {/* Subtitle */}
              <p className="text-text-secondary text-sm sm:text-base font-nav leading-relaxed max-w-xl">
                Partner with NoxiS to engineer high-impact software, scalable cloud infrastructure, and market-dominating digital experiences.
              </p>
            </div>

            {/* Right Action Controls */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left lg:border-l lg:border-white/10 lg:pl-10">
              <a
                href="mailto:contact@noxis.digital"
                className="w-full font-nav bg-gradient-primary text-white text-base font-semibold py-4 px-8 rounded-none hover:shadow-glow transition-all duration-300 shadow-xl shadow-indigo-500/20 text-center flex items-center justify-center gap-3 group"
              >
                <span>Start a Project</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>

              <a
                href="#work"
                className="w-full font-nav border border-white/20 hover:border-indigo-400 bg-white/5 hover:bg-white/10 text-white text-base font-semibold py-4 px-8 rounded-none transition-all duration-300 backdrop-blur-md text-center flex items-center justify-center gap-2"
              >
                Schedule a Call
              </a>

              <span className="text-[11px] font-mono text-text-muted text-center lg:text-left mt-1">
                ⚡ Typical response time: &lt; 2 hours
              </span>
            </div>
          </div>

          {/* Bottom Features Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-nav text-xs text-text-secondary">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">48-Hour Technical Audit</p>
                <p className="text-[11px] text-text-muted">Bespoke transformation roadmap</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">100% IP Ownership</p>
                <p className="text-[11px] text-text-muted">Full source code transfer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">Enterprise Security</p>
                <p className="text-[11px] text-text-muted">Strict NDA & SOC2 standard</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}