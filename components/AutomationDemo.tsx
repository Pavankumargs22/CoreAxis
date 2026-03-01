'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function AutomationDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="automation" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            Operational Intelligence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Automation That Responds <br className="hidden md:block" />
            <span className="text-gray-500">Before You Do.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
          >
            Stop losing deals to competitors who reply faster. Our integrated workflows qualify, route, and schedule leads instantly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-5xl mx-auto">
          {/* Left Phone: Customer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-[#111117] rounded-[40px] border-[8px] border-[#1A1A24] shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-6 bg-[#1A1A24] rounded-b-3xl w-1/2 mx-auto" />
            <div className="p-6 pt-12 flex flex-col h-full bg-gradient-to-b from-[#111117] to-[#0B0B0F]">
              <div className="text-center text-xs text-gray-500 font-medium mb-8">Prospect Device</div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: step >= 1 ? 1 : 0, scale: step >= 1 ? 1 : 0.9, y: step >= 1 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-accent text-white p-4 rounded-2xl rounded-br-sm self-end max-w-[85%] shadow-sm"
                >
                  <p className="text-sm">Hi, I need a custom enterprise platform built. Are you taking new clients?</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: step >= 2 && step < 3 ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-gray-500 self-start ml-2 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.9, y: step >= 3 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1A1A24] text-gray-200 p-4 rounded-2xl rounded-bl-sm self-start max-w-[85%] border border-white/5"
                >
                  <p className="text-sm">Hello! Yes, we are currently accepting Q3 enterprise projects. To ensure we align with your goals, could you confirm your budget range?</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Phone: System */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[320px] aspect-[9/19] bg-[#0B0B0F] rounded-[40px] border-[8px] border-[#14141C] shadow-[0_0_50px_rgba(59,130,246,0.1)] overflow-hidden"
          >
            <motion.div 
              animate={{ opacity: step >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 border-2 border-accent/30 rounded-[32px] pointer-events-none" 
            />
            <div className="absolute top-0 inset-x-0 h-6 bg-[#14141C] rounded-b-3xl w-1/2 mx-auto" />
            <div className="p-6 pt-12 flex flex-col h-full">
              <div className="text-center text-xs text-accent font-mono mb-8">COREAXIS_SYSTEM</div>
              
              <div className="flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#14141C] border border-white/10 p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Incoming Lead</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">Enterprise Platform Inquiry</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: step >= 2 ? 1 : 0, height: step >= 2 ? 'auto' : 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#14141C] border border-accent/20 p-4 rounded-xl relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-xl" />
                    <div className="text-[10px] uppercase tracking-wider text-accent font-mono mb-2">Executing Workflow</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                        </div>
                        Analyze intent
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                        </div>
                        Draft response
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#14141C] border border-emerald-500/20 p-4 rounded-xl mt-auto"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-emerald-500">Response Sent</div>
                      <div className="text-[10px] text-gray-500 font-mono">0.4s latency</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
