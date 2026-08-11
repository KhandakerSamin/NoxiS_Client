"use client";
import { motion } from "framer-motion";
import { precisionSteps } from "@/data/homepageData";

export default function PrecisionSteps() {
  return (
    <section className="relative bg-[#FFFFFF] py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-gray-100">
      {/* Background Soft Ambient Light & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-50/50 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-6 h-[1.5px] bg-[#00A3FF]" />
            <span className="text-xs font-bold tracking-widest text-[#00A3FF] uppercase font-nav">
              OUR METHODOLOGY
            </span>
            <span className="w-6 h-[1.5px] bg-[#00A3FF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#111827] mb-4"
          >
            PRECISION IN <span className="gradient-text-blue">EVERY STEP</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-nav"
          >
            A disciplined, four-phase architectural process designed for absolute predictability and technical excellence.
          </motion.p>
        </div>

        {/* 4 Precision Step Items Row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center"
        >
          {precisionSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center cursor-default"
            >
              {/* Circle Number Badge */}
              <div className="w-16 h-16 rounded-full border-2 border-[#00A3FF] group-hover:border-[#0077CC] bg-[#00A3FF] group-hover:bg-[#0077CC] flex items-center justify-center font-heading font-bold text-lg text-white mb-6 shadow-lg shadow-[#00A3FF]/20 group-hover:scale-105 transition-all duration-300">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-base sm:text-lg uppercase tracking-wider text-[#111827] mb-3 group-hover:text-[#00A3FF] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm font-nav leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}