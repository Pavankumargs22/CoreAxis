'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Revenue Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-6"
          >
            Stop Losing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              High-Value Leads.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-light"
          >
            We build conversion-focused websites with automation built in. Stop relying on hope and start relying on systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Book Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#problem"
              className="flex items-center justify-center px-8 py-4 rounded-lg font-medium text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              View Architecture
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Abstract Engineered Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-1000"
        >
          {/* Abstract Grid System */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20 transform rotate-x-12 rotate-y-[-12deg] scale-110">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm bg-surface/30 backdrop-blur-sm" />
            ))}
          </div>

          {/* Floating Data Nodes */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[20%] w-32 h-32 bg-surface-elevated border border-white/10 rounded-xl shadow-2xl flex flex-col p-4 gap-2 z-20"
          >
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-accent" />
            </div>
            <div className="text-[10px] text-gray-500 font-mono mt-auto">CONVERSION_RATE</div>
            <div className="text-xl font-bold text-white">8.4%</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] left-[10%] w-48 h-24 bg-surface-elevated border border-white/10 rounded-xl shadow-2xl flex items-center p-4 gap-4 z-30"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
              <div className="w-4 h-4 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="text-[10px] text-gray-500 font-mono">LEAD_CAPTURED</div>
              <div className="text-sm font-medium text-white">Automated Sequence Initiated</div>
            </div>
          </motion.div>

          {/* Central Hub */}
          <div className="absolute w-64 h-64 border border-accent/30 rounded-full flex items-center justify-center z-10">
            <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="w-32 h-32 bg-surface-elevated rounded-full border border-white/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-800 rounded-full blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
