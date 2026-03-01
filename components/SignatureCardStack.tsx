'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const cards = [
  {
    id: 1,
    title: 'Immersive 3D Experience',
    description: 'High-fidelity WebGL environments that command attention and establish category dominance.',
    href: '/styles/immersive-3d',
  },
  {
    id: 2,
    title: 'Premium Brand Authority',
    description: 'Editorial-grade typography and layout systems designed for high-ticket service providers.',
    href: '/styles/premium-authority',
  },
  {
    id: 3,
    title: 'Conversion Engine Website',
    description: 'Data-driven architectures optimized relentlessly for lead generation and sales velocity.',
    href: '/styles/conversion-engine',
  },
  {
    id: 4,
    title: 'Modern Animated Presence',
    description: 'Fluid, physics-based interactions that communicate technological sophistication and polish.',
    href: '/styles/modern-animated',
  },
  {
    id: 5,
    title: 'Minimal Luxury',
    description: 'Stripped-back, high-contrast interfaces where negative space amplifies perceived value.',
    href: '/styles/minimal-luxury',
  },
];

export default function SignatureCardStack() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="systems" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            Architecture
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Digital Systems Built at <br className="hidden md:block" />
            <span className="text-gray-500">Every Strategic Level.</span>
          </motion.h2>
        </div>

        {/* Desktop Stacked Layout */}
        <div className="hidden lg:flex relative h-[600px] w-full items-center justify-center perspective-[2000px]">
          {cards.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            const isOtherHovered = hoveredCard !== null && hoveredCard !== card.id;
            
            // Calculate base transforms
            const translateY = index * 25;
            const scale = 1 - (index * 0.03);
            const zIndex = cards.length - index;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full max-w-3xl"
                style={{ zIndex }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={card.href} className="block w-full">
                  <motion.div
                    animate={{
                      y: isHovered ? translateY - 20 : translateY,
                      scale: isHovered ? 1.03 : scale,
                      rotateX: isHovered ? 0 : 2,
                      rotateZ: isHovered ? 0 : 1,
                      opacity: isOtherHovered ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`bg-surface-elevated border rounded-2xl p-10 shadow-2xl transition-colors duration-300 ${
                      isHovered ? 'border-accent/50 shadow-[0_20px_40px_rgba(59,130,246,0.1)]' : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                          <div className={`h-px w-12 transition-colors duration-300 ${isHovered ? 'bg-accent' : 'bg-white/20'}`} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                        <p className="text-gray-400 max-w-lg leading-relaxed font-light">{card.description}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'border-accent bg-accent text-white' : 'border-white/20 text-gray-400'
                      }`}>
                        <ArrowRight size={20} className={isHovered ? 'translate-x-1 transition-transform' : ''} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Tablet/Mobile Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={card.href} className="block group">
                <div className="bg-surface-elevated border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:border-accent/50 group-hover:scale-[1.02] group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                    <div className="h-px w-8 bg-white/20 group-hover:bg-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-6">{card.description}</p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Explore System <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
