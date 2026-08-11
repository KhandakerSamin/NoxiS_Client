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
    <section id="services" className="relative section-padding bg-[#080811] overflow-hidden">
      {/* Background Soft Glow Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow Badge & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-6 h-[1px] bg-indigo-500/60" />
            <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase font-nav">
              OUR CORE EXPERTISE
            </span>
            <span className="w-6 h-[1px] bg-indigo-500/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-text-primary"
          >
            DIGITAL MASTERY IN <span className="gradient-text">EVERY PIXEL</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed font-nav"
          >
            We bridge the gap between visionary design and high-performance engineering,
            delivering scalable digital ecosystems for world-class brands.
          </motion.p>
        </div>

        {/* 6 Core Services Grid with Scroll Effects & Hover Lift */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {masteryCards.map((card) => (
            <motion.div
              key={card.id}
              variants={{
                hidden: { opacity: 0, y: 35 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0e0e1a]/90 hover:bg-[#121224] border border-white/10 hover:border-indigo-500/40 rounded-none p-7 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] overflow-hidden"
            >
              {/* Subtle Ambient Corner Accent Glow */}
              <div className="absolute -top-20 -right-20 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-none bg-indigo-950/60 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-300 mb-6 shadow-inner">
                  {renderIcon(card.icon)}
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-3 group-hover:text-white transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 font-nav">
                  {card.desc}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-2.5 mb-6 font-nav">
                  {card.points.map((p) => (
                    <li key={p} className="text-xs text-text-muted group-hover:text-text-secondary transition-colors flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-none bg-indigo-500/80 group-hover:bg-purple-400 transition-colors" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider & Action Link */}
              <div>
                <div className="border-t border-white/5 my-5" />
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-400 group-hover:text-accent-purple transition-colors font-nav uppercase"
                >
                  <span>ANALYZE SCOPE</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}