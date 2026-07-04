import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

export const Skills: React.FC = () => {
  // Array of glowing glow-colors corresponding to each card
  const borderGlows = [
    'hover:border-accent-purple/35 hover:shadow-[0_0_25px_rgba(139,92,246,0.06)]',
    'hover:border-accent-blue/35 hover:shadow-[0_0_25px_rgba(59,130,246,0.06)]',
    'hover:border-accent-cyan/35 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)]',
    'hover:border-emerald-500/35 hover:shadow-[0_0_25px_rgba(16,185,129,0.06)]',
    'hover:border-amber-500/35 hover:shadow-[0_0_25px_rgba(245,158,11,0.06)]',
  ];

  const barColors = [
    'bg-gradient-to-r from-accent-purple to-pink-500',
    'bg-gradient-to-r from-accent-blue to-accent-cyan',
    'bg-gradient-to-r from-accent-cyan to-teal-500',
    'bg-gradient-to-r from-emerald-500 to-teal-600',
    'bg-gradient-to-r from-amber-500 to-orange-500',
  ];

  return (
    <section id="skills" className="relative py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

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
            My Stack
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className={`interactive-card glass-panel rounded-2xl p-6 border border-slate-800 transition-all duration-400 ${borderGlows[catIdx % borderGlows.length]}`}
              variants={fadeIn('up', 0.1 * catIdx, 0.6)}
              whileHover={{ y: -6 }}
            >
              <h3 className="text-lg font-bold font-display text-white mb-6 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs font-mono text-slate-500 font-normal">0x0{catIdx+1}</span>
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-slate-300 font-sans">{skill.name}</span>
                      <span className="font-mono text-slate-400 text-xs">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${barColors[catIdx % barColors.length]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 * skillIdx }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
