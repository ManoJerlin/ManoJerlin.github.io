import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-bg-dark/40 py-12 overflow-hidden">
      {/* Background line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Author signature */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <span className="font-display font-bold text-base text-white tracking-wider">
            Mano<span className="text-accent-purple">.Jerlin</span>()
          </span>
          <p className="text-xs text-slate-500 font-mono">
            Made with ❤️ by Mano Jerlin
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 hover:text-white transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Back to top trigger */}
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all cursor-pointer select-none"
          title="Back to top"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
};
