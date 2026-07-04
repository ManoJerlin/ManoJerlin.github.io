import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

export const Services: React.FC = () => {
  // Helper to dynamically render Lucide icons by string name
  const renderIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent size={24} className="text-accent-cyan" />;
    }
    return <LucideIcons.Layers size={24} className="text-accent-cyan" />; // fallback
  };

  const glows = [
    'hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]',
    'hover:border-accent-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.06)]',
    'hover:border-accent-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)]',
    'hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]',
    'hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.06)]',
    'hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)]',
  ];

  return (
    <section id="services" className="relative py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3"
          >
            My Services
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Solutions I Offer
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              className={`interactive-card glass-panel rounded-2xl p-6 border border-slate-800 transition-all duration-400 ${glows[idx % glows.length]}`}
              variants={fadeIn('up', 0.1 * idx, 0.5)}
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-inner">
                {renderIcon(service.iconName)}
              </div>

              <h3 className="text-lg font-bold font-display text-white mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
