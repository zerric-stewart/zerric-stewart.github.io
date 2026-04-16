"use client";

import { useState, useEffect } from "react";

const links = ["About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-950/90 backdrop-blur border-b border-gray-800" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold text-white tracking-tight">
          ZS<span className="text-violet-500">.</span>
        </a>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
