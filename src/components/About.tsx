import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { statistics } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';
import { Brain, Code, Network, Globe } from 'lucide-react';

// Subcomponent for counting animation
const StatCounter: React.FC<{ value: number; suffix: string; isInView: boolean }> = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / end), 25);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-24 bg-secondary/30">
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
            About Me
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Powering Web Stacks with AI
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-slate-300"
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              variants={fadeIn('up', 0.1)}
              className="text-2xl font-bold font-display text-white"
            >
              Who is Mano Jerlin?
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.2)}
              className="leading-relaxed font-sans"
            >
              I am an AI-focused Software Engineer who specializes in bridging the gap between computational intelligence and web delivery. I design, train, and integrate neural networks, Convolutional Neural Networks (CNNs), and LLMs into production-ready full stack environments.
            </motion.p>
            <motion.p 
              variants={fadeIn('up', 0.3)}
              className="leading-relaxed font-sans"
            >
              By combining high-performance Python frameworks like FastAPI with highly responsive React architectures and database backbones, I create solutions that are not just beautiful, but also robust, performant, and smart.
            </motion.p>

            {/* Sub-areas details */}
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm"
            >
              <div className="flex items-center space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <Brain size={20} className="text-accent-purple flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">AI-Powered Apps</h4>
                  <p className="text-xs text-slate-400">LLMs, classification models</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <Code size={20} className="text-accent-blue flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Full Stack Engineering</h4>
                  <p className="text-xs text-slate-400">React, Node.js, FastAPI</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <Network size={20} className="text-accent-cyan flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Deep Learning Integration</h4>
                  <p className="text-xs text-slate-400">Computer Vision & CNN models</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                <Globe size={20} className="text-emerald-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Scalable Databases</h4>
                  <p className="text-xs text-slate-400">MySQL, MongoDB optimization</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Statistics Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Stats Cards Grid */}
            <div 
              ref={statsRef}
              className="grid grid-cols-2 gap-4"
            >
              {statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="interactive-card glass-panel rounded-2xl p-6 flex flex-col justify-between border border-slate-800 hover:border-accent-purple/35 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, boxShadow: '0 10px 25px rgba(139, 92, 246, 0.08)' }}
                >
                  <span className="text-xs font-mono text-slate-400 tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent mt-4">
                    <StatCounter value={stat.value} suffix={stat.suffix} isInView={isStatsInView} />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
