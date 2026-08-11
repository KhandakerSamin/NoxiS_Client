"use client";
import { motion } from "framer-motion";
import { featuredWork } from "@/data/homepageData";

const renderProjectIllustration = (idx) => {
  switch (idx) {
    case 0:
      return (
        /* Motion Design Vector Canvas Illustration */
        <div className="relative w-full h-full border border-white/10 p-3.5 flex flex-col justify-between backdrop-blur-md bg-black/40 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-indigo-300 tracking-wider">MOTION // CANVAS 01</span>
            <span className="w-1.5 h-1.5 bg-indigo-400" />
          </div>

          {/* Motion Vector Waves & Keyframe Nodes */}
          <div className="my-auto space-y-2">
            <div className="h-14 w-full bg-indigo-950/40 border border-indigo-500/20 p-2 flex items-center justify-around relative overflow-hidden">
              {/* Wave SVG */}
              <svg className="absolute inset-0 w-full h-full text-indigo-500/30 opacity-80" viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 20 Q 25 5, 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M0 25 Q 25 35, 50 25 T 100 25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
              </svg>
              {/* Keyframe Nodes */}
              {[15, 45, 80].map((left, i) => (
                <div
                  key={i}
                  style={{ left: `${left}%` }}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 border border-white rotate-45 shadow-md shadow-indigo-500/50"
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-text-muted">
              <span>60 FPS • EASE-IN-OUT</span>
              <span className="text-indigo-400">RENDERED</span>
            </div>
          </div>

          <div className="text-left">
            <span className="text-xs font-heading font-semibold text-white tracking-wide block">
              Biomorphic Workspace Motion
            </span>
          </div>
        </div>
      );
    case 1:
      return (
        /* Product Design Wireframe Matrix & Sphere Illustration */
        <div className="relative w-full h-full border border-white/10 p-3.5 flex flex-col justify-between backdrop-blur-md bg-black/40 overflow-hidden group-hover:border-purple-500/30 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-300 tracking-wider">UI // MATRIX 02</span>
            <span className="w-1.5 h-1.5 bg-purple-400" />
          </div>

          {/* 3D Wireframe Sphere & UI Tokens Vector */}
          <div className="my-auto relative flex items-center justify-center h-16">
            <div className="w-14 h-14 border border-purple-500/40 rounded-full flex items-center justify-center relative animate-[spin_12s_linear_infinite]">
              <div className="w-14 h-6 border border-purple-400/30 rounded-full absolute" />
              <div className="w-6 h-14 border border-purple-400/30 rounded-full absolute" />
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
            </div>
            <div className="absolute right-2 top-0 bg-white/5 border border-white/10 p-1 text-[8px] font-mono text-text-muted">
              TOKEN_GRID
            </div>
          </div>

          <div className="text-left">
            <span className="text-xs font-heading font-semibold text-white tracking-wide block">
              Digital Interface Sphere
            </span>
          </div>
        </div>
      );
    case 2:
      return (
        /* Branding & Web Editorial Grid Illustration */
        <div className="relative w-full h-full border border-white/10 p-3.5 flex flex-col justify-between backdrop-blur-md bg-black/40 overflow-hidden group-hover:border-blue-500/30 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-blue-300 tracking-wider">BRAND // GRID 03</span>
            <span className="w-1.5 h-1.5 bg-blue-400" />
          </div>

          {/* Editorial Grid & Typography Scale Illustration */}
          <div className="my-auto space-y-1.5">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-9 bg-blue-950/50 border border-blue-500/20 p-1 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-blue-400">GRID A</span>
                <span className="text-[9px] font-heading font-bold text-white">48px</span>
              </div>
              <div className="h-9 bg-white/5 border border-white/10 p-1 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-text-muted">GRID B</span>
                <span className="text-[9px] font-mono text-text-secondary">#080812</span>
              </div>
              <div className="h-9 bg-white/5 border border-white/10 p-1 flex flex-col justify-between">
                <span className="text-[7px] font-mono text-text-muted">GRID C</span>
                <span className="text-[9px] font-mono text-text-secondary">SERIF</span>
              </div>
            </div>
          </div>

          <div className="text-left">
            <span className="text-xs font-heading font-semibold text-white tracking-wide block">
              Ceramic Studio Concept
            </span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function FeaturedWork() {
  return (
    <section id="work" className="relative bg-[#0B0F19] py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/10">
      {/* Background Soft Glow Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#12103E]/80 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-5 h-[1.5px] bg-[#00A3FF]" />
              <span className="text-xs font-bold tracking-widest text-[#00A3FF] uppercase font-nav">
                PORTFOLIO SHOWCASE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-white"
            >
              FEATURED <span className="gradient-text">WORK</span>
            </motion.h2>
          </div>

          {/* Top Header CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a
              href="#contact"
              className="font-nav border border-white/20 hover:border-[#00A3FF] bg-[#12103E]/60 backdrop-blur-md px-6 py-3 rounded-none text-sm font-semibold text-white transition-all shadow-sm flex items-center gap-2 group whitespace-nowrap"
            >
              <span>See Our Work</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </div>

        {/* Single Row with 3 Minimal Box Cards featuring Related Illustrations */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {featuredWork.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer text-left"
            >
              {/* Minimal Box Preview Container */}
              <div className="aspect-[4/3] w-full bg-[#12103E]/90 border border-white/15 group-hover:border-[#00A3FF] relative overflow-hidden mb-5 transition-all duration-300 shadow-md group-hover:shadow-[0_10px_30px_rgba(0,163,255,0.25)] flex items-center justify-center p-5 rounded-none">
                {/* Gradient Box Sheen Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Render Related Vector Illustration */}
                {renderProjectIllustration(idx)}
              </div>

              {/* Minimal Text Info Below Box */}
              <p className="text-[11px] font-bold tracking-wider text-[#E4FA00] uppercase font-nav mb-1">
                {project.tag}
              </p>
              <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00A3FF] transition-colors">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Bottom CTA Button ("See Our Work") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="font-nav bg-[#00A3FF] hover:bg-[#008ADB] text-white text-base font-bold uppercase tracking-wider px-9 py-3.5 rounded-none hover:shadow-glow transition-all duration-300 shadow-xl shadow-[#00A3FF]/25 inline-flex items-center gap-3 group"
          >
            <span>See Our Work</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}