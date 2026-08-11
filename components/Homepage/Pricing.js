"use client";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/homepageData";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full py-24 sm:py-32 bg-[#0B0F19] text-white overflow-hidden"
    >
      {/* Background Ambient Glow & Hazy Watermark Text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Right Vivid Lime Ambient Glow (Matching Reference Image) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#E4FA00]/25 via-[#00A3FF]/15 to-transparent blur-[140px] sm:blur-[180px]"
        />

        {/* Bottom-Left Ambient Indigo Glow */}
        <div className="absolute -bottom-32 -left-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#12103E]/80 blur-[150px]" />

        {/* Giant Hazy "PRICING" Watermark Text Across Top */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0">
          <span className="font-heading font-black text-[110px] sm:text-[180px] md:text-[250px] lg:text-[300px] text-white/[0.035] tracking-widest leading-none block uppercase">
            PRICING
          </span>
        </div>

        {/* Subtle Corner Grid Markings (Inspired by Reference Design) */}
        <div className="absolute top-8 left-6 sm:left-12 font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">
          2026
        </div>
        <div className="absolute top-8 right-6 sm:right-12 font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">
          NOXIS STUDIO
        </div>
        <div className="absolute bottom-8 left-6 sm:left-12 font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">
          2026
        </div>
        <div className="absolute bottom-8 right-6 sm:right-12 font-mono text-[10px] sm:text-xs text-gray-500 tracking-widest uppercase">
          EST. BANGLADESH
        </div>

        {/* Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow Badge */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-widest font-semibold text-[#E4FA00] border border-[#E4FA00]/40 bg-[#12103E]/80 backdrop-blur-md px-4 py-1.5 mb-6 font-nav uppercase rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4FA00] animate-pulse" />
            Our Plans
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
          >
            Pricing and Plans <br className="hidden sm:inline" />
            Tailored to any Team
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mt-4 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-nav leading-relaxed"
          >
            We offer flexible, custom-fit plans designed to meet the unique needs and budget of your project.
          </motion.p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isHighlight = plan.highlight;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 transition-all duration-300 ${
                  isHighlight
                    ? "bg-gradient-to-b from-[#12103E] via-[#12103E]/95 to-[#E4FA00]/10 border-2 border-[#E4FA00] shadow-[0_0_50px_rgba(228,250,0,0.15)] lg:-translate-y-3 z-20"
                    : "bg-[#12103E]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl z-10"
                }`}
              >
                {/* Top Row: Icon + Price */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    {/* Minimal Icon Box */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                        isHighlight
                          ? "bg-[#E4FA00]/15 border-[#E4FA00]/40 text-[#E4FA00]"
                          : "bg-white/5 border-white/10 text-[#00A3FF]"
                      }`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        {plan.id === "product-design" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        )}
                        {plan.id === "web-app-dev" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        )}
                        {plan.id === "ai-solutions" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                          />
                        )}
                      </svg>
                    </div>

                    {/* Price Tag */}
                    <div className="text-right">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 text-xs font-nav ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Plan Name & Tagline */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm font-nav leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Action Button */}
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl transition-all duration-300 font-nav text-sm tracking-wide mb-8 ${plan.buttonStyle}`}
                  >
                    <span>{plan.buttonText}</span>
                  </a>

                  {/* Features List Section */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-semibold text-gray-400 font-nav uppercase tracking-wider mb-4">
                      Features Included:
                    </p>
                    <ul className="space-y-3 font-nav">
                      {plan.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-gray-200 leading-snug"
                        >
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <svg
                              className={`w-3 h-3 ${
                                isHighlight ? "text-[#E4FA00]" : "text-[#00A3FF]"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Optional Bottom Badge for Highlighted Card */}
                {isHighlight && (
                  <div className="mt-8 pt-4 border-t border-[#E4FA00]/20 text-center">
                    <span className="text-[11px] font-semibold text-[#E4FA00] font-nav uppercase tracking-widest">
                      ✦ Recommended Choice for Startups & Brands ✦
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
