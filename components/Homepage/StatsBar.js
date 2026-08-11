"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { statsData } from "@/data/homepageData";

function AnimatedCounter({ value, duration = 2.2 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-30px" });

  // Extract integer number and non-numeric suffix/prefix
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericPart, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier curve
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, duration]);

  return (
    <span ref={nodeRef} className="inline-block">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-[#12103E] py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-y border-white/10">
      {/* Background Eye-Catchy Ambient Glow & Radial Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3FF]/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B0F19]/60 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative bg-[#0B0F19]/90 hover:bg-[#0B0F19] border border-white/15 hover:border-[#00A3FF] p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,163,255,0.25)] rounded-none flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Top Glowing Gradient Accent Line */}
              <div className="w-full h-[3px] bg-gradient-to-r from-[#00A3FF] to-[#E4FA00] absolute top-0 left-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated Counter Metric */}
              <p className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl gradient-text mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} />
              </p>

              {/* Stat Label */}
              <p className="text-xs sm:text-sm font-bold text-gray-300 group-hover:text-[#E4FA00] transition-colors tracking-widest uppercase font-nav">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}