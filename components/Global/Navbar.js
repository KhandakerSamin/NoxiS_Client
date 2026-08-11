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
            ? "bg-bg-primary/80 backdrop-blur-md   shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
          {/* Top Logo with Logo Font */}
          <a
            href="#"
            className="font-logo font-bold text-xl md:text-2xl tracking-wider flex items-center gap-0.5 group"
          >
            <span className="text-text-primary group-hover:text-accent-blue transition-colors">Noxi</span>
            <span className="gradient-text font-black">S</span>
          </a>

          {/* Desktop Navlinks (Different font than logo font) */}
          <ul className="hidden md:flex items-center gap-8 font-nav">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block font-nav bg-gradient-primary text-white text-sm font-medium px-6 py-2.5 rounded-none hover:shadow-glow transition-all duration-300"
          >
            Get Started
          </a>

          {/* Phone & Tablet Hamburger Toggle Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 text-text-primary hover:text-accent-blue focus:outline-none z-50 rounded-lg border border-border-subtle bg-bg-card/50 backdrop-blur-sm"
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

      {/* Phone & Tablet Responsive Modal Pop-up Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Logo and Close Button in Modal */}
            <div className="flex items-center justify-between w-full  border-border-subtle pb-4">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="font-logo font-bold text-2xl tracking-wider uppercase flex items-center gap-0.5"
              >
                <span className="text-text-primary">Noxi</span>
                <span className="gradient-text font-black">S</span>
              </a>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-text-primary hover:text-accent-purple rounded-full border border-border-subtle bg-bg-card"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Center Aligned Nav Links */}
            <div className="flex flex-col items-center justify-center gap-6 my-auto font-nav text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  className="text-2xl font-semibold text-text-primary hover:text-accent-blue transition-colors tracking-wide py-1"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button Down Below Navlinks */}
            <div className="flex flex-col items-center w-full pt-4 border-t border-border-subtle">
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="w-full max-w-xs font-nav bg-gradient-primary text-white text-base font-medium py-3.5 rounded-none text-center hover:shadow-glow transition-all duration-300 shadow-md"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}