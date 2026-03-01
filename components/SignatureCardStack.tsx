'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

const cards = [
  {
    id: 1,
    title: 'Immersive 3D Experience',
    description: 'High-fidelity WebGL environments that command attention and establish category dominance.',
    href: '/styles/immersive-3d',
    preview: 'immersive-3d',
  },
  {
    id: 2,
    title: 'Premium Brand Authority',
    description: 'Editorial-grade typography and layout systems designed for high-ticket service providers.',
    href: '/styles/premium-authority',
    preview: 'premium-authority',
  },
  {
    id: 3,
    title: 'Conversion Engine Website',
    description: 'Data-driven architectures optimized relentlessly for lead generation and sales velocity.',
    href: '/styles/conversion-engine',
    preview: 'conversion-engine',
  },
  {
    id: 4,
    title: 'Modern Animated Presence',
    description: 'Fluid, physics-based interactions that communicate technological sophistication and polish.',
    href: '/styles/modern-animated',
    preview: 'modern-animated',
  },
  {
    id: 5,
    title: 'Minimal Luxury',
    description: 'Stripped-back, high-contrast interfaces where negative space amplifies perceived value.',
    href: '/styles/minimal-luxury',
    preview: 'minimal-luxury',
  },
];

const PreviewPanel = ({ type }: { type: string }) => {
  switch (type) {
    case 'immersive-3d':
      return (
        <div className="w-full h-48 bg-[#0B0B0F] rounded-t-xl relative overflow-hidden flex items-center justify-center border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
          <div className="w-24 h-24 relative transform-gpu rotate-x-12 rotate-y-12 animate-[spin_10s_linear_infinite]">
            <div className="absolute inset-0 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm" />
            <div className="absolute inset-0 border border-blue-400/20 bg-blue-400/5 translate-x-4 translate-y-4" />
          </div>
          <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[slide_3s_ease-in-out_infinite]" />
        </div>
      );
    case 'premium-authority':
      return (
        <div className="w-full h-48 bg-[#111117] rounded-t-xl relative overflow-hidden flex flex-col items-center justify-center border-b border-white/5 p-6">
          <div className="w-full max-w-[80%] space-y-3">
            <div className="w-1/3 h-2 bg-white/20 rounded-full mx-auto mb-6" />
            <div className="w-full h-4 bg-white/80 rounded-sm" />
            <div className="w-5/6 h-4 bg-white/60 rounded-sm mx-auto" />
            <div className="w-2/3 h-4 bg-white/40 rounded-sm mx-auto" />
          </div>
        </div>
      );
    case 'conversion-engine':
      return (
        <div className="w-full h-48 bg-[#0B0B0F] rounded-t-xl relative overflow-hidden flex items-center justify-center border-b border-white/5 p-6 gap-4">
          <div className="flex-1 h-full flex flex-col justify-end gap-2">
            <div className="w-full h-[40%] bg-blue-500/20 rounded-t-sm border-t border-blue-500/30" />
            <div className="w-full h-[60%] bg-blue-500/40 rounded-t-sm border-t border-blue-500/50" />
            <div className="w-full h-[80%] bg-blue-500/60 rounded-t-sm border-t border-blue-500/70" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="w-full h-12 bg-white/5 rounded-md border border-white/10 flex items-center px-3">
              <div className="w-8 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="w-full h-12 bg-white/5 rounded-md border border-white/10 flex items-center px-3">
              <div className="w-12 h-2 bg-white/20 rounded-full" />
            </div>
            <div className="w-full h-8 bg-blue-600 rounded-md mt-auto" />
          </div>
        </div>
      );
    case 'modern-animated':
      return (
        <div className="w-full h-48 bg-[#111117] rounded-t-xl relative overflow-hidden flex items-center justify-center border-b border-white/5">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-lg transform -rotate-6 transition-transform duration-1000 hover:rotate-0" />
            <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-lg transform rotate-3 transition-transform duration-1000 hover:rotate-0 backdrop-blur-sm flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500/50 animate-pulse" />
            </div>
          </div>
        </div>
      );
    case 'minimal-luxury':
      return (
        <div className="w-full h-48 bg-white rounded-t-xl relative overflow-hidden flex flex-col items-center justify-center border-b border-gray-200 p-8">
          <div className="w-full h-full border border-gray-100 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-1 bg-black" />
            <div className="w-32 h-2 bg-gray-200" />
            <div className="w-24 h-2 bg-gray-100" />
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default function SignatureCardStack() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
        <div 
          className="hidden lg:flex relative h-[800px] w-full items-center justify-center"
          style={{ perspective: '1800px' }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.14] blur-[120px] rounded-full pointer-events-none z-0" />

          <motion.div 
            className="relative w-full max-w-3xl h-full flex items-center justify-center"
            style={{ 
              transformStyle: 'preserve-3d',
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          >
            {cards.map((card, index) => {
              const isHovered = hoveredCard === card.id;
              const isOtherHovered = hoveredCard !== null && hoveredCard !== card.id;
              
              // Base stack configuration
              const baseTranslateY = index * 35;
              const baseScale = 1 - (index * 0.04);
              const baseZIndex = 50 - (index * 10);
              const baseBlur = index * 1;
              const baseBrightness = 100 - (index * 4);

              // Hover state calculations
              const targetTranslateY = isHovered ? baseTranslateY - 10 : baseTranslateY;
              const targetTranslateZ = isHovered ? 40 : 0;
              const targetScale = isHovered ? 1.04 : (isOtherHovered ? baseScale * 0.98 : baseScale);
              const targetBlur = isHovered ? 0 : (isOtherHovered ? baseBlur + 0.5 : baseBlur);
              const targetBrightness = isHovered ? 100 : (isOtherHovered ? baseBrightness - 5 : baseBrightness);

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: baseTranslateY + 30 }}
                  whileInView={{ opacity: 1, y: baseTranslateY }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="absolute w-full will-change-transform"
                  style={{ 
                    zIndex: isHovered ? 60 : baseZIndex,
                    transformStyle: 'preserve-3d'
                  }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link href={card.href} className="block w-full outline-none">
                    <motion.div
                      animate={{
                        y: targetTranslateY,
                        z: targetTranslateZ,
                        scale: targetScale,
                        filter: `blur(${targetBlur}px) brightness(${targetBrightness}%)`,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`bg-[#14141C] border rounded-xl shadow-2xl transition-colors duration-300 flex flex-col ${
                        isHovered ? 'border-blue-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.15)]' : 'border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
                      }`}
                    >
                      <PreviewPanel type={card.preview} />
                      
                      <div className="p-8 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                            <div className={`h-px w-8 transition-colors duration-300 ${isHovered ? 'bg-accent' : 'bg-white/10'}`} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                          <p className="text-sm text-gray-400 max-w-md leading-relaxed font-light">{card.description}</p>
                        </div>
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isHovered ? 'border-accent bg-accent text-white' : 'border-white/10 text-gray-500'
                        }`}>
                          <ArrowRight size={18} className={isHovered ? 'translate-x-[3px] transition-transform duration-300' : 'transition-transform duration-300'} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
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
              <Link href={card.href} className="block group outline-none">
                <div className="bg-[#14141C] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-blue-500/30 group-hover:scale-[1.01] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <PreviewPanel type={card.preview} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                      <div className="h-px w-6 bg-white/10 group-hover:bg-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">{card.description}</p>
                    <div className="flex items-center text-accent text-sm font-medium">
                      Explore System <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
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
