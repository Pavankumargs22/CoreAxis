'use client';

import { useEffect, useState } from 'react';

export default function BackgroundSystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#07080C]">
      {/* Layer 1: Primary Glow */}
      <div 
        className="absolute inset-0 opacity-75 md:opacity-100 transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle at 65% 35%, rgba(59,130,246,0.18) 0%, transparent 55%)'
        }}
      />
      
      {/* Layer 2: Secondary Glow */}
      <div 
        className="absolute inset-0 opacity-75 md:opacity-100 transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(30,64,175,0.12) 0%, transparent 45%)'
        }}
      />

      {/* Layer 3: Micro Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 80px),
            repeating-linear-gradient(to bottom, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 80px)
          `
        }}
      />

      {/* Layer 4: Soft Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Layer 5: Atmospheric Particle System */}
      <div className="absolute inset-0 hidden md:block">
        <div className="particles-layer-1 absolute inset-0" />
        <div className="particles-layer-2 absolute inset-0" />
      </div>

      {/* Layer 6: Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] hidden md:block mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
}
