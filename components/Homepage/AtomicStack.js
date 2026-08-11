"use client";
import { motion } from "framer-motion";
import { stackItems } from "@/data/homepageData";

const renderTechIcon = (type) => {
  switch (type) {
    case "typescript":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 20l3-5m2-3l3 8" />
        </svg>
      );
    case "postgres":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="8" ry="3" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case "docker":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15a4 4 0 004 4h12a5 5 0 001-9.9M15 8A6 6 0 004.5 12" />
        </svg>
      );
    case "graphql":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2 12h20" />
        </svg>
      );
    case "reactnative":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <rect x="6" y="2" width="12" height="20" rx="3" strokeWidth="1.8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 18h.01" />
        </svg>
      );
    case "python":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "vercel":
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 2L2 7l10 5 10-5-10-5z" />
        </svg>
      );
  }
};

export default function AtomicStack() {
  return (
    <section
      id="technologies"
      className="relative bg-[#0c0d1a] border-y border-white/5 py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Soft Glow Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Header (Matching Reference Design Layout) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[1px] bg-indigo-400" />
            <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase font-nav">
              TECHNOLOGY
            </span>
          </div>

          <h2 className="font-heading font-bold text-4xl md:text-6xl tracking-tight leading-[1.08] text-text-primary uppercase">
            OUR <br />
            ATOMIC <br />
            STACK
          </h2>

          <p className="text-text-secondary mt-6 text-sm md:text-base leading-relaxed max-w-md font-nav">
            Engineered for speed, security, and scalability. We utilize a modern toolkit
            to build future-proof digital products.
          </p>
        </motion.div>

        {/* Right Side: 3x3 Technology Cards Grid (Matching Reference Image Design) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {stackItems.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-[#111224]/80 hover:bg-[#161832] border border-white/10 hover:border-indigo-500/50 rounded-none p-4 sm:p-5 transition-all duration-300 backdrop-blur-md shadow-sm hover:shadow-[0_8px_25px_rgba(99,102,241,0.18)] flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-none bg-indigo-950/60 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-300 shrink-0">
                {renderTechIcon(item.icon)}
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm tracking-wider text-text-primary group-hover:text-white transition-colors uppercase">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}