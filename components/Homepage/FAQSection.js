"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/homepageData";

export default function FAQSection() {
  const [open, setOpen] = useState(0); // First item open by default

  return (
    <section className="relative bg-[#0B0F19] py-28 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/10">
      {/* Background Soft Glow Ambient Light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#12103E]/80 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Technical Audit Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[1.5px] bg-[#E4FA00]" />
              <span className="text-xs font-bold tracking-widest text-[#E4FA00] uppercase font-nav">
                INSIGHTS
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4 leading-none">
              INQUISITIVE <br />
              <span className="gradient-text">MINDS</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base font-nav leading-relaxed mb-10 max-w-md">
              Answers to common inquiries from our prospective enterprise partners.
            </p>
          </div>

          {/* Side Challenge Box */}
          <div className="bg-[#12103E]/90 border border-white/15 hover:border-[#00A3FF] p-7 sm:p-8 rounded-none transition-all duration-300 backdrop-blur-md shadow-xl">
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Have a unique challenge?
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-nav leading-relaxed mb-6">
              Our engineering team is ready to analyze your specific technical requirements and provide a bespoke transformation roadmap within 48 hours.
            </p>
            <a
              href="#contact"
              className="w-full font-nav bg-[#00A3FF] hover:bg-[#008ADB] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-none text-center block transition-colors shadow-lg shadow-[#00A3FF]/25"
            >
              REQUEST TECHNICAL AUDIT
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Accordion List */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 divide-y divide-white/10"
        >
          {faqData.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div key={faq.q} className="py-6 first:pt-0">
                {/* Question Row Header */}
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#00A3FF] transition-colors">
                    {faq.q}
                  </h3>
                  <span className="text-gray-400 group-hover:text-[#00A3FF] transition-colors shrink-0">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#00A3FF]" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>

                {/* Answer Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-300 text-xs sm:text-sm font-nav leading-relaxed pt-4 pr-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}