'use client';

import { motion } from 'motion/react';
import { ShieldAlert, Users, Target, Activity } from 'lucide-react';

const problems = [
  {
    icon: ShieldAlert,
    title: 'No Lead Capture Strategy',
    description: 'Traffic bounces because there is no structured mechanism to convert anonymous visitors into known prospects.',
  },
  {
    icon: Users,
    title: 'No Automated Follow-Up',
    description: 'Leads go cold while waiting for manual responses. Speed to lead dictates conversion rates.',
  },
  {
    icon: Target,
    title: 'No Conversion Architecture',
    description: 'Websites built for aesthetics rather than user psychology fail to guide visitors toward a specific action.',
  },
  {
    icon: Activity,
    title: 'No Measurable Optimization',
    description: 'Without tracking and analytics, marketing spend is wasted on assumptions rather than data-driven decisions.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-accent text-sm font-bold tracking-widest uppercase mb-4"
          >
            Structural Failure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
          >
            Most Business Websites <br className="hidden md:block" />
            <span className="text-gray-500">Fail Silently.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl font-light"
          >
            The problem isn’t traffic. It’s system design. Without a revenue infrastructure, your website is just a digital brochure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface-elevated border border-white/5 hover:border-white/10 p-8 md:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                <problem.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
