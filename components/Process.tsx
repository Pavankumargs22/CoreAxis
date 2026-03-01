'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Strategic Audit',
    description: 'We analyze your current infrastructure, identifying conversion bottlenecks and missed revenue opportunities.',
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'Designing the blueprint. We map out user journeys, data flow, and automation triggers before writing a single line of code.',
  },
  {
    number: '03',
    title: 'Build & Integration',
    description: 'Development of high-performance interfaces connected seamlessly to your CRM and operational tools.',
  },
  {
    number: '04',
    title: 'Optimization & Scaling',
    description: 'Post-launch monitoring, A/B testing, and iterative refinements to maximize conversion velocity over time.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            Methodology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Our Build Process Is Engineered <br className="hidden md:block" />
            <span className="text-gray-500">— Not Improvised.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px bg-white/10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col group"
            >
              <div className="w-20 h-20 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center mb-8 relative transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:-translate-y-2">
                <span className="text-2xl font-mono font-bold text-white tracking-tighter">{step.number}</span>
                {/* Connecting Dot */}
                <div className="hidden lg:block absolute -right-[calc(50%+2rem)] top-1/2 w-2 h-2 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
