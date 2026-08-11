"use client";
import { navLinks } from "@/data/homepageData";

const brandingServices = [
  "Pitch Deck",
  "Brand Identity",
  "Logo Design",
  "Graphic Design",
  "Rebranding",
];

const designServices = [
  "UI/UX Design",
  "Web Design",
  "Mobile App Design",
  "Website Redesign",
  "UX/UI Audit",
];

const devServices = [
  "Web Development",
  "MVP Development",
  "App Development",
  "Cloud Architecture",
  "AI Innovation",
];

const companyLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { label: "f", href: "https://facebook.com" },
  { label: "ig", href: "https://instagram.com" },
  { label: "in", href: "https://linkedin.com" },
  { label: "yt", href: "https://youtube.com" },
  { label: "be", href: "https://behance.net" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F19] border-t border-white/10 overflow-hidden font-nav">
      {/* Soft Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#12103E]/80 blur-[180px] rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-full mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-10">
        {/* Top 5-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Brand Logo & Description & Contact Us Button */}
          <div className="lg:col-span-4 space-y-5 pr-4">
            {/* Same Logo Copy from Navbar */}
            <a
              href="#"
              className="font-logo font-bold text-xl md:text-2xl tracking-wider flex items-center gap-0.5 group inline-block"
            >
              <span className="text-white group-hover:text-[#00A3FF] transition-colors">Noxi</span>
              <span className="gradient-text font-black">S</span>
            </a>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-nav max-w-sm">
              Beyond being an innovative UI UX design & engineering hub, we're your one-stop for research, wireframing, design, and development!
            </p>

            {/* Contact Us Button matching website button style */}
            <div className="pt-2">
              <a
                href="#contact"
                className="font-nav bg-[#00A3FF] hover:bg-[#008ADB] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-none inline-flex items-center gap-2.5 hover:shadow-glow transition-all duration-300 shadow-md shadow-[#00A3FF]/25 group"
              >
                <span>Contact Us</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Branding Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase font-nav mb-4">
              Branding Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {brandingServices.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Design Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase font-nav mb-4">
              Design Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {designServices.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Development Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase font-nav mb-4">
              Development Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {devServices.map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-[#00A3FF] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase font-nav mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-[#E4FA00] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Sub-Footer Divider Strip */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-400 font-nav">
          {/* Copyright Notice */}
          <p>© 2024–2026, NoxiS , All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-2">
            {socialIcons.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#00A3FF] hover:bg-[#00A3FF]/15 flex items-center justify-center text-white font-mono text-xs transition-all"
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Centered Giant NoxiS Watermark Title */}
        <div className="w-full my-6 text-center overflow-hidden">
          <h1 className="font-logo font-bold text-[14vw] sm:text-[16vw] tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/25 via-white/5 to-transparent select-none pointer-events-none text-center w-full">
            NoxiS
          </h1>
        </div>
      </div>
    </footer>
  );
}