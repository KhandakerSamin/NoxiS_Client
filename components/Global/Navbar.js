"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/homepageData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile/tablet modal menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0F19]/85 backdrop-blur-md  shadow-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
          {/* Top Logo with Logo Font */}
          <a
            href="#"
            className="font-logo font-bold text-xl md:text-[27px] tracking-wider flex items-center gap-0.5 group"
          >
            <span className="text-white group-hover:text-cyanBlue transition-colors">Noxi</span>
            <span className="gradient-text font-black">S</span>
          </a>

          {/* Desktop Navlinks */}
          <ul className="hidden md:flex items-center gap-8 font-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-[#E4FA00] transition-colors tracking-wide relative group py-1"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E4FA00] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block font-nav bg-gradient-primary text-white text-sm font-semibold px-6 py-2.5 rounded-none hover:shadow-glow transition-all duration-300 shadow-md shadow-cyanBlue/20"
          >
            Let's Collaborate
          </a>

          {/* Phone & Tablet Hamburger Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 text-white hover:text-cyanBlue focus:outline-none z-50 rounded-none border border-white/15 bg-violet/60 backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Phone & Tablet Responsive Centered Modal Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Centered Compact Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[320px] bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-[#00A3FF]/10 p-6 md:hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="font-logo font-bold text-xl tracking-wider flex items-center gap-0.5 mb-6"
              >
                <span className="text-white">Noxi</span>
                <span className="gradient-text font-black">S</span>
              </a>

              {/* Nav Links */}
              <div className="flex flex-col gap-1 mb-6">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * idx, duration: 0.25 }}
                    className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all tracking-wide py-2.5 px-3 rounded-lg font-nav"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.25 }}
                className="block w-full font-nav bg-[#00A3FF] text-white text-sm font-semibold py-3 rounded-lg text-center hover:bg-[#008ADB] transition-colors shadow-md shadow-[#00A3FF]/20"
              >
                Get Started
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}