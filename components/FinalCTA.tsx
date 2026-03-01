'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-elevated border border-white/10 rounded-[40px] p-12 md:p-24 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-5 pointer-events-none">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border border-white/20 rounded-sm" />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-6"
          >
            Initiate Sequence
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-10 leading-[1.1]"
          >
            Ready to Turn Your Website <br className="hidden md:block" />
            <span className="text-gray-500">Into a Revenue System?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] w-full sm:w-auto"
            >
              Book Strategy Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
