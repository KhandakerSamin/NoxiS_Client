"use client";
import { motion } from "framer-motion";

const showcases = [
  {
    id: "noxis-ecosystem",
    tag: "FINTECH / SAAS PLATFORM",
    title: "NOXIS ECOSYSTEM",
    desc: "Re-architecting the global trading interface for a Tier-1 financial institution, resulting in a 40% increase in trade execution speed.",
    stat1: { value: "40%", label: "LATENCY REDUCTION" },
    stat2: { value: "$12B+", label: "DAILY VOLUME" },
    align: "left",
    gradient: "from-indigo-600/25 via-purple-900/15 to-slate-950/80",
    accentColor: "border-indigo-500/40",
    mockupType: "dashboard",
  },
  {
    id: "lumina-mobile",
    tag: "LUXURY / MOBILE APP",
    title: "LUMINA MOBILE",
    desc: "Crafting a bespoke mobile shopping experience for a luxury watchmaker, pioneering haptic feedback and cinematic transitions.",
    stat1: { value: "95%", label: "USER RETENTION" },
    stat2: { value: "2.4x", label: "CONVERSION LIFT" },
    align: "right",
    gradient: "from-purple-600/25 via-blue-900/15 to-slate-950/80",
    accentColor: "border-purple-500/40",
    mockupType: "mobile",
  },
];

export default function ImpactfulTransformations() {
  return (
    <section id="work" className="relative bg-[#FFFFFF] py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-100">
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-sky-50/60 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-6 h-[1.5px] bg-[#00A3FF]" />
            <span className="text-xs font-bold tracking-widest text-[#00A3FF] uppercase font-nav">
              SELECTED WORK
            </span>
            <span className="w-6 h-[1.5px] bg-[#00A3FF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#111827]"
          >
            IMPACTFUL <span className="gradient-text-blue">TRANSFORMATIONS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed font-nav"
          >
            A curated selection of our most ambitious innovations, where high-end design meets execution precision.
          </motion.p>
        </div>

        {/* Showcase Cards List */}
        <div className="space-y-32">
          {showcases.map((item) => {
            const isRightAlignedRow = item.align === "right";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${
                  isRightAlignedRow ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-between gap-10 lg:gap-14`}
              >
                {/* 60% Width Showcase Photo Card Container */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="w-full lg:w-[58%] h-[680px] sm:h-[800px] lg:h-[850px] bg-[#0B0F19] border border-gray-200 hover:border-[#00A3FF] rounded-none overflow-hidden relative group backdrop-blur-md shadow-2xl hover:shadow-[0_25px_65px_rgba(0,163,255,0.25)] transition-all duration-500 flex flex-col items-center justify-center p-6 sm:p-10 shrink-0"
                >
                  {/* Internal Ambient Glow Backdrop */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Vertical Interface Showcase Graphic */}
                  {item.mockupType === "dashboard" ? (
                    <div className="relative w-full h-full rounded-none bg-[#0B0F19] border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                      {/* Top Status Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-none bg-red-500/80" />
                          <span className="w-3 h-3 rounded-none bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-none bg-green-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-[#00A3FF] bg-[#00A3FF]/15 px-3 py-1 rounded-none border border-[#00A3FF]/30">
                          NOXIS OS v4.2 • LIVE
                        </span>
                      </div>

                      {/* Curved Perspective UI Panel */}
                      <div className="my-auto space-y-5 relative">
                        <div className="bg-gradient-to-r from-[#12103E] via-[#0B0F19] to-[#12103E] p-5 rounded-none border border-[#00A3FF]/30 text-center backdrop-blur-sm shadow-lg">
                          <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block mb-1.5">
                            SYSTEM MATRIX OVERVIEW
                          </span>
                          <p className="font-heading font-bold text-2xl sm:text-3xl text-white">
                            $12,480,920,400 <span className="text-sm text-[#E4FA00] font-sans font-semibold">+40%</span>
                          </p>
                        </div>

                        {/* Stacked Metric Panels */}
                        <div className="grid grid-cols-2 gap-3.5">
                          <div className="bg-white/5 border border-white/10 rounded-none p-4 text-left">
                            <p className="text-[10px] text-gray-400 font-nav uppercase">LATENCY</p>
                            <p className="font-heading font-bold text-xl text-white mt-1">0.8 ms</p>
                            <span className="text-[10px] text-[#00A3FF]">⚡ Ultra Fast</span>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-none p-4 text-left">
                            <p className="text-[10px] text-gray-400 font-nav uppercase">UPTIME</p>
                            <p className="font-heading font-bold text-xl text-white mt-1">99.99%</p>
                            <span className="text-[10px] text-[#E4FA00]">● Operational</span>
                          </div>
                        </div>

                        {/* Visual Wave Chart Graphic */}
                        <div className="h-36 w-full bg-[#12103E]/60 rounded-none border border-[#00A3FF]/20 p-4 flex items-end justify-between gap-1.5 overflow-hidden">
                          {[40, 60, 45, 80, 65, 90, 100, 85, 95, 110, 90, 105, 95, 120, 100, 110, 125, 115].map((h, i) => (
                            <div
                              key={i}
                              style={{ height: `${h}%` }}
                              className="w-full bg-[#00A3FF] rounded-t-none opacity-85 group-hover:opacity-100 transition-opacity"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Bottom Status Bar */}
                      <div className="flex items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-white/10 font-mono">
                        <span>SECURE WEBSOCKET: CONNECTED</span>
                        <span className="text-[#00A3FF]">TLS 1.3</span>
                      </div>
                    </div>
                  ) : (
                    /* Vertical Standalone Mobile Device Graphic */
                    <div className="relative w-[270px] sm:w-[320px] h-[95%] rounded-none bg-[#0B0F19] border-[7px] border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 flex flex-col justify-between overflow-hidden">
                      {/* Dynamic Island / Notch */}
                      <div className="w-32 h-6 bg-slate-800 rounded-b-none mx-auto -mt-5 mb-5 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-none bg-slate-950 border border-slate-700" />
                      </div>

                      {/* Mobile App UI Screen */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-sm font-bold text-white tracking-widest uppercase font-logo">LUMINA</span>
                          <span className="w-2.5 h-2.5 rounded-none bg-[#E4FA00] animate-pulse" />
                        </div>

                        <div className="space-y-4 my-auto">
                          <div className="h-44 w-full bg-gradient-to-tr from-[#12103E] via-[#0B0F19] to-slate-900 rounded-none border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                            <span className="text-[10px] font-mono text-[#E4FA00] uppercase tracking-widest mb-1.5">
                              LIMITED EDITION
                            </span>
                            <span className="text-base font-semibold text-white tracking-wide">
                              CHRONO AUTOMATIC 2026
                            </span>
                            <span className="text-sm font-bold text-[#00A3FF] mt-2">$24,500</span>
                          </div>

                          <div className="bg-white/5 p-3.5 rounded-none border border-white/5 flex items-center justify-between">
                            <span className="text-xs text-gray-300 font-nav">HAPTIC ENGINE</span>
                            <span className="text-[10px] font-bold text-[#E4FA00] bg-[#E4FA00]/15 px-2.5 py-1 rounded-none border border-[#E4FA00]/30">
                              ACTIVE
                            </span>
                          </div>
                        </div>

                        <div className="w-full py-3.5 bg-[#00A3FF] rounded-none text-xs font-bold text-white text-center shadow-lg uppercase tracking-wider">
                          CONFIRM ORDER
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* 40% Width Text Details Container */}
                <div
                  className={`w-full lg:w-[38%] flex flex-col ${
                    isRightAlignedRow ? "lg:items-end lg:text-right text-left" : "lg:items-start lg:text-left text-left"
                  }`}
                >
                  {/* Category Badge Box */}
                  <div className="inline-block border border-[#00A3FF]/30 bg-[#00A3FF]/10 px-3.5 py-1.5 rounded-none mb-5">
                    <span className="text-[11px] font-bold tracking-wider text-[#00A3FF] font-nav uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] mb-5 uppercase tracking-tight leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-nav max-w-md">
                    {item.desc}
                  </p>

                  {/* Metrics Grid */}
                  <div
                    className={`flex gap-10 pt-6 border-t border-gray-200 mb-8 font-nav w-full ${
                      isRightAlignedRow ? "lg:justify-end justify-start" : "justify-start"
                    }`}
                  >
                    <div>
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00A3FF]">
                        {item.stat1.value}
                      </p>
                      <p className="text-[11px] font-bold text-gray-500 mt-2 tracking-wider uppercase">
                        {item.stat1.label}
                      </p>
                    </div>

                    <div>
                      <p className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00A3FF]">
                        {item.stat2.value}
                      </p>
                      <p className="text-[11px] font-bold text-gray-500 mt-2 tracking-wider uppercase">
                        {item.stat2.label}
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#00A3FF] hover:text-[#0077CC] transition-colors font-nav uppercase group"
                  >
                    {isRightAlignedRow && <span className="group-hover:-translate-x-1.5 transition-transform duration-300">←</span>}
                    <span>EXPLORE CASE STUDY</span>
                    {!isRightAlignedRow && <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}