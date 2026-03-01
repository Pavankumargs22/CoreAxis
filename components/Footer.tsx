'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {/* Brand Summary */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">CoreAxis</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs mb-8">
              Structured digital revenue systems for high-ticket service providers. We engineer websites that convert traffic into qualified pipeline.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col lg:pl-12">
            <h4 className="text-white font-semibold mb-6 tracking-tight">Architecture</h4>
            <ul className="space-y-4">
              <li><Link href="/styles/immersive-3d" className="text-sm text-gray-400 hover:text-white transition-colors">Immersive 3D Experience</Link></li>
              <li><Link href="/styles/premium-authority" className="text-sm text-gray-400 hover:text-white transition-colors">Premium Brand Authority</Link></li>
              <li><Link href="/styles/conversion-engine" className="text-sm text-gray-400 hover:text-white transition-colors">Conversion Engine</Link></li>
              <li><Link href="/styles/modern-animated" className="text-sm text-gray-400 hover:text-white transition-colors">Modern Animated Presence</Link></li>
              <li><Link href="/styles/minimal-luxury" className="text-sm text-gray-400 hover:text-white transition-colors">Minimal Luxury</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#problem" className="text-sm text-gray-400 hover:text-white transition-colors">The Problem</Link></li>
              <li><Link href="#systems" className="text-sm text-gray-400 hover:text-white transition-colors">Our Systems</Link></li>
              <li><Link href="#automation" className="text-sm text-gray-400 hover:text-white transition-colors">Automation Demo</Link></li>
              <li><Link href="#process" className="text-sm text-gray-400 hover:text-white transition-colors">Methodology</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col lg:pl-4">
            <h4 className="text-white font-semibold mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4">
              <li className="text-sm text-gray-400">hello@coreaxis.digital</li>
              <li className="text-sm text-gray-400">+1 (800) 555-0199</li>
              <li className="text-sm text-gray-400 mt-6 pt-6 border-t border-white/5">
                100 Enterprise Way<br />
                Suite 400<br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CoreAxis Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
