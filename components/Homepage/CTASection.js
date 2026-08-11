"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-[#FFFFFF] py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-100">
      {/* Background Architectural Mesh & Soft Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-transparent rounded-full blur-[180px]" />
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 163, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Lucrative High-Contrast Hero CTA Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-[#0B0F19] via-[#12103E] to-[#0B0F19] border border-white/20 p-8 sm:p-12 md:p-16 rounded-none backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,163,255,0.22)] overflow-hidden"
        >
          {/* Top Glowing Laser Border Beam */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00A3FF] via-[#38BDF8] to-[#E4FA00]" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#00A3FF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#12103E]/80 rounded-full blur-3xl pointer-events-none" />

          {/* Grid Layout: Main Copy & CTA Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#E4FA00] bg-[#12103E] border border-[#E4FA00]/40 px-4 py-1.5 rounded-full font-nav uppercase mb-6 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E4FA00] animate-pulse" />
                READY TO TRANSFORM?
              </div>

              {/* Heading */}
              <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-5xl uppercase tracking-tight text-white leading-tight mb-4">
                ARCHITECT YOUR <span className="gradient-text">DIGITAL FUTURE</span>
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm sm:text-base font-nav leading-relaxed max-w-xl">
                Partner with NoxiS to engineer high-impact software, scalable cloud infrastructure, and market-dominating digital experiences.
              </p>
            </div>

            {/* Right Action Controls */}
            <div className="lg:col-span-5 flex flex-col gap-4 text-left lg:border-l lg:border-white/15 lg:pl-10">
              <a
                href="mailto:contact@noxis.digital"
                className="w-full font-nav bg-[#00A3FF] hover:bg-[#008ADB] text-white text-base font-bold uppercase tracking-wider py-4 px-8 rounded-none hover:shadow-glow transition-all duration-300 shadow-xl shadow-[#00A3FF]/30 text-center flex items-center justify-center gap-3 group"
              >
                <span>Start a Project</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>

              <a
                href="#work"
                className="w-full font-nav border border-[#E4FA00]/60 hover:border-[#E4FA00] bg-white/5 hover:bg-[#E4FA00]/10 text-[#E4FA00] text-base font-bold uppercase tracking-wider py-4 px-8 rounded-none transition-all duration-300 backdrop-blur-md text-center flex items-center justify-center gap-2"
              >
                Schedule a Call
              </a>

              <span className="text-[11px] font-mono text-gray-400 text-center lg:text-left mt-1">
                ⚡ Typical response time: &lt; 2 hours
              </span>
            </div>
          </div>

          {/* Bottom Features Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 font-nav text-xs text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#00A3FF]/20 border border-[#00A3FF]/40 flex items-center justify-center text-[#00A3FF] shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-bold text-white">48-Hour Technical Audit</p>
                <p className="text-[11px] text-gray-400">Bespoke transformation roadmap</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#00A3FF]/20 border border-[#00A3FF]/40 flex items-center justify-center text-[#00A3FF] shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-bold text-white">100% IP Ownership</p>
                <p className="text-[11px] text-gray-400">Full source code transfer</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-none bg-[#00A3FF]/20 border border-[#00A3FF]/40 flex items-center justify-center text-[#00A3FF] shrink-0 font-bold">
                ✓
              </div>
              <div>
                <p className="font-bold text-white">Enterprise Security</p>
                <p className="text-[11px] text-gray-400">Strict NDA & SOC2 standard</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}