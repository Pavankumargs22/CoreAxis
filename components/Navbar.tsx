'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">CoreAxis</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#problem" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Problem</Link>
          <Link href="#systems" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Systems</Link>
          <Link href="#automation" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Automation</Link>
          <Link href="#process" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Process</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link 
            href="#contact" 
            className="text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all hover:scale-[1.02]"
          >
            Book Strategy Call
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0B0B0F] border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
        >
          <Link href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">Problem</Link>
          <Link href="#systems" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">Systems</Link>
          <Link href="#automation" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">Automation</Link>
          <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-300 hover:text-white">Process</Link>
          <Link 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 text-center text-sm font-medium bg-accent text-white px-5 py-3 rounded-md"
          >
            Book Strategy Call
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
