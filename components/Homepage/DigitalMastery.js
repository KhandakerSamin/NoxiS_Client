"use client";
import { motion } from "framer-motion";
import { masteryCards } from "@/data/homepageData";

const renderIcon = (type) => {
  switch (type) {
    case "layers":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "code":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "smartphone":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01" />
        </svg>
      );
    case "layout":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9h18M9 21V9" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l1.5 4.5L19 9l-4.5 1.5L13 15l-1.5-4.5L7 9l4.5-1.5L13 3zM19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
        </svg>
      );
    case "cloud":
      return (
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15a4 4 0 004 4h12a5 5 0 001-9.9M15 8A6 6 0 004.5 12" />
        </svg>
      );
    default:
      return null;
  }
};

export default function DigitalMastery() {
  return (
    <section id="services" className="relative section-padding bg-[#FFFFFF] overflow-hidden border-t border-gray-100">
      {/* Dynamic Background Architectural Mesh & Multi-Tone Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[750px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 163, 255, 0.18) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00A3FF] bg-[#00A3FF]/10 border border-[#00A3FF]/30 px-4 py-1.5 rounded-full font-nav uppercase mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse" />
            OUR CORE EXPERTISE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0B0F19] leading-tight"
          >
            DIGITAL MASTERY IN <span className="gradient-text">EVERY PIXEL</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed font-nav"
          >
            We bridge the gap between visionary design and high-performance engineering,
            delivering scalable digital ecosystems for world-class brands.
          </motion.p>
        </div>

        {/* 6 Core Services Luxury Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8"
        >
          {masteryCards.map((card, idx) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#FFFFFF] border border-slate-200/90 rounded-none p-8 md:p-9 flex flex-col justify-between transition-all duration-500 hover:border-[#00A3FF] hover:shadow-[0_25px_60px_rgba(0,163,255,0.18)] overflow-hidden"
            >
              {/* Top Glowing Multi-Tone Laser Beam */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00A3FF] via-[#38BDF8] to-[#E4FA00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Dynamic Mouse Glow Backdrop Spotlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A3FF]/[0.06] via-[#12103E]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Row: 3D Tech Icon Frame & Dark Index Badge */}
                <div className="flex items-center justify-between mb-7">
                  {/* 3D Tech Icon Box */}
                  <div className="w-14 h-14 bg-[#0B0F19] border border-[#00A3FF]/40 text-[#00A3FF] flex items-center justify-center shadow-lg group-hover:bg-[#00A3FF] group-hover:text-white group-hover:border-[#00A3FF] group-hover:shadow-[0_0_25px_rgba(0,163,255,0.6)] group-hover:scale-110 transition-all duration-500">
                    {renderIcon(card.icon)}
                  </div>

                  {/* Dark Navy Index Tag */}
                  <span className="font-mono text-xs font-bold tracking-widest text-[#00A3FF] bg-[#0B0F19] px-3 py-1.5 border border-[#00A3FF]/30 text-white rounded-none shadow-sm uppercase">
                    0{idx + 1} // 06
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-2xl text-[#0B0F19] group-hover:text-[#00A3FF] transition-colors duration-300 tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-nav">
                  {card.desc}
                </p>

                {/* Key Bullet Points as Sleek Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {card.points.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 text-xs font-bold text-slate-700 group-hover:border-[#00A3FF]/40 group-hover:bg-white group-hover:text-[#0B0F19] transition-all duration-300 font-nav"
                    >
                      <span className="w-1.5 h-1.5 rounded-none bg-[#00A3FF] group-hover:bg-[#E4FA00] transition-colors" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Action Bar */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <a
                  href="#contact"
                  className="text-xs font-bold tracking-widest text-slate-400 group-hover:text-[#00A3FF] transition-colors duration-300 font-nav uppercase"
                >
                  ANALYZE SCOPE
                </a>

                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-[#00A3FF]/10 text-[#00A3FF] border border-[#00A3FF]/30 flex items-center justify-center group-hover:bg-[#00A3FF] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_15px_rgba(0,163,255,0.4)] group-hover:translate-x-1.5 transition-all duration-300"
                >
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}