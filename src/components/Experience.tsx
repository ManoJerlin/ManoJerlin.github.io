import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Calendar } from 'lucide-react';
import { experiencesData } from '../data/portfolioData';
import { fadeIn } from '../animations/variants';

export const Experience: React.FC = () => {
  // Helper to render type icon
  const getIcon = (type: 'education' | 'work' | 'project') => {
    switch (type) {
      case 'education':
        return <GraduationCap size={18} className="text-accent-blue" />;
      case 'work':
        return <Briefcase size={18} className="text-accent-purple" />;
      case 'project':
        return <Code2 size={18} className="text-accent-cyan" />;
    }
  };

  const getBorderColor = (type: 'education' | 'work' | 'project') => {
    switch (type) {
      case 'education': return 'border-accent-blue';
      case 'work': return 'border-accent-purple';
      case 'project': return 'border-accent-cyan';
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-secondary/10 to-bg-dark pointer-events-none" />

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
            My Journey
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan opacity-25" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {experiencesData.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      className={`glass-panel border-l-2 ${getBorderColor(
                        exp.type
                      )} rounded-2xl p-6 shadow-lg relative overflow-hidden transition-colors hover:bg-slate-900/60`}
                      variants={fadeIn(
                        isEven ? 'left' : 'right',
                        0.15,
                        0.6
                      )}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      {/* Sub-glow behind card */}
                      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-accent-blue/0 to-accent-purple/5 rounded-full blur-xl pointer-events-none" />

                      <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-3">
                        <Calendar size={12} className="text-slate-500" />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-medium font-sans text-accent-cyan mb-4">
                        {exp.organization}
                      </h4>
                      <p className="text-sm text-slate-400 font-sans leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Icon Node Dot on Center Line */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <motion.div
                      className={`w-9 h-9 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shadow-[0_0_15px_rgba(3,7,18,0.6)]`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                      whileHover={{ scale: 1.2, borderColor: '#8B5CF6' }}
                    >
                      {getIcon(exp.type)}
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout mapping */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
