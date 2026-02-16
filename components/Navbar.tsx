"use client";

import { useState } from "react";
import ToggleLogo from "./ToggleLogo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#features");

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <ToggleLogo size={36} interactive />
          <span className="text-base font-semibold text-slate-900">
            Toggle Present.
          </span>
        </a>

        {/* Center nav pill */}
        <div className="hidden md:flex items-center rounded-full bg-white p-1 shadow-lg shadow-blue-100/50 border border-blue-100">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                activeLink === link.href
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download button */}
        <a
          href="https://github.com/Anand-sahni/TogglePresent/raw/main/TogglePresent.dmg"
          className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-[13px] font-medium text-blue-600 transition-all hover:bg-blue-100"
        >
          Download
          <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
