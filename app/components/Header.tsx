'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f3] border-b border-gray-200">
      <nav className="px-8 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold">
            Quntaniks<sup className="text-xs">®</sup>
          </div>
          <div className="hidden md:flex items-center">
            <img 
              src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9/6840ad47034f7c5148f8b56b_bar-code-1.svg" 
              alt="Barcode" 
              className="h-8 w-auto"
            />
          </div>
          <span className="hidden md:block text-sm uppercase tracking-wider">
            Web Development
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          <li>
            <a href="#" className="hover:opacity-70 transition-opacity">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:opacity-70 transition-opacity">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="hover:opacity-70 transition-opacity relative">
              Work
              <span className="absolute -top-1 -right-4 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                5
              </span>
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:opacity-70 transition-opacity">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white border-t border-gray-200 px-6 py-6"
        >
          <ul className="flex flex-col gap-4 text-base">
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="block hover:opacity-70 transition-opacity">
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block hover:opacity-70 transition-opacity">
                Services
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                Work
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">5</span>
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block hover:opacity-70 transition-opacity">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block hover:opacity-70 transition-opacity">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
