"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="#home" className="flex items-center gap-3">
            <img 
              src="https://assets.zyrosite.com/Yyv3N2MG9rINKDZm/balloon-svg-dOqyLyJVlWH0qaa5.svg" 
              alt="Balloon CG Logo" 
              className="h-10 w-auto object-contain invert"
            />
            <span className="text-xl font-bold text-white tracking-tighter hidden sm:block">
              Balloon CG
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Navigation Links */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-neo-deep/80 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              <motion.span
                className="relative z-10"
              >
                {item.name}
              </motion.span>
              
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-neo-cyan/20 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 right-6 z-50 bg-neo-deep p-2 rounded-full md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neo-deep flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}