import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, FolderGit2, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { fadeIn, staggerContainer, scaleUp } from '../animations/variants';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Data Science'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (p) => filter === 'All' || p.category === filter
  );

  const categories: Array<'All' | 'AI/ML' | 'Data Science'> = ['All', 'AI/ML', 'Data Science'];

  return (
    <section id="projects" className="relative py-24 bg-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-secondary/10 to-bg-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3"
          >
            My Work
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center items-center space-x-2 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 border cursor-pointer select-none ${
                filter === cat
                  ? 'bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                className="group relative interactive-card glass-panel rounded-2xl border border-slate-800 p-6 flex flex-col h-full hover:border-accent-blue/30 cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(59, 130, 246, 0.08)' }}
              >
                {/* Glowing border-beam hover visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/0 via-accent-purple/0 to-accent-cyan/0 group-hover:from-accent-blue/2 group-hover:to-accent-cyan/5 transition-all duration-300 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-slate-900/60 border border-slate-800 rounded-xl text-accent-cyan">
                    <FolderGit2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                <p className="text-sm text-slate-400 font-sans leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-850 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Modal Pop-Up */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop overlay */}
            <motion.div 
              className="absolute inset-0 bg-bg-dark/85 backdrop-blur-md cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content Card */}
            <motion.div 
              className="relative w-full max-w-2xl bg-secondary border border-slate-800 rounded-2xl p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[85vh] z-10 no-scrollbar"
              variants={scaleUp()}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer select-none"
              >
                &times;
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-900 border border-slate-800 text-accent-cyan rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white mt-4">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-350 leading-relaxed font-sans">
                  {selectedProject.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-sm font-semibold font-display text-white uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Stack chips */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-sm font-semibold font-display text-white uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span 
                        key={t}
                        className="text-[11px] font-mono text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-800">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-white font-medium text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaGithub size={15} />
                    <span>View GitHub Repository</span>
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] text-white font-medium text-xs transition-all flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={15} />
                    <span>Launch Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
