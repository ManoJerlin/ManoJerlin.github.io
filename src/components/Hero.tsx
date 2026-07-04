import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { fadeIn, staggerContainer } from '../animations/variants';

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const texts = personalInfo.typingTexts;
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 40;
    }

    const handleType = () => {
      const fullText = texts[index];
      
      if (!isDeleting && charIndex < fullText.length) {
        // Typing
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        // Hold full text, then start deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        // Shift to next text
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Mock Resume Download
  const handleDownloadResume = () => {
    alert("Resume download triggered! In production, swap personalInfo.resumeUrl with your actual file path.");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial gradient blob */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        {/* Left Content Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="inline-flex self-center lg:self-start items-center space-x-2 bg-slate-900/60 border border-slate-800 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#06B6D4]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider">Available for Opportunities</span>
          </motion.div>

          <div className="space-y-3">
            <motion.p variants={fadeIn('up', 0.2)} className="text-lg md:text-xl font-medium text-slate-400 font-display">
              Hi, I'm
            </motion.p>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                Mano Jerlin
              </span>
            </motion.h1>
            <motion.h2 
              variants={fadeIn('up', 0.4)} 
              className="text-2xl md:text-3xl font-semibold font-display text-slate-200"
            >
              AI Full Stack Web Developer
            </motion.h2>
          </div>

          {/* Typing specialty animation */}
          <motion.div 
            variants={fadeIn('up', 0.5)} 
            className="h-8 flex items-center justify-center lg:justify-start"
          >
            <span className="text-lg md:text-xl font-mono text-accent-cyan font-semibold tracking-wide">
              {currentText}
            </span>
            <span className="w-[3px] h-5 bg-accent-cyan ml-1 animate-pulse" />
          </motion.div>

          <motion.p 
            variants={fadeIn('up', 0.6)} 
            className="text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={fadeIn('up', 0.7)} 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] cursor-pointer select-none flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-medium text-sm hover:bg-slate-800/40 hover:border-slate-700 transition-all duration-300 cursor-pointer select-none flex items-center justify-center space-x-2"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </motion.div>

          {/* Socials & Info details */}
          <motion.div 
            variants={fadeIn('up', 0.8)} 
            className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-6 text-slate-400"
          >
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/60 border border-slate-800 hover:border-accent-blue hover:text-white rounded-xl backdrop-blur-md transition-all duration-300"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900/60 border border-slate-800 hover:border-accent-purple hover:text-white rounded-xl backdrop-blur-md transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-slate-900/60 border border-slate-800 hover:border-accent-cyan hover:text-white rounded-xl backdrop-blur-md transition-all duration-300"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="h-6 w-[1px] bg-slate-800 hidden sm:block" />

            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Phone size={13} className="text-accent-cyan" />
                <span>+91 93422 70553</span>
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <div className="flex items-center space-x-2">
                <Mail size={13} className="text-accent-purple" />
                <span>manojerlin2006@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Illustration Column */}
        <motion.div 
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Glowing Animated SVGs */}
          <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
            {/* Background glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 via-accent-purple/10 to-accent-cyan/15 rounded-full blur-[50px] animate-pulse-slow pointer-events-none" />
            <motion.div 
              className="absolute w-[90%] h-[90%] rounded-full border border-dashed border-accent-purple/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div 
              className="absolute w-[80%] h-[80%] rounded-full border border-accent-blue/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Custom Developer SVG Dashboard Illustration */}
            <svg 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full drop-shadow-[0_10px_30px_rgba(139,92,246,0.15)] z-10"
            >
              {/* Gradients */}
              <defs>
                <linearGradient id="svgGlowPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#D946EF" />
                </linearGradient>
                <linearGradient id="svgGlowBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <filter id="shadowGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Console Dashboard Base Card */}
              <rect x="75" y="110" width="350" height="260" rx="16" fill="#111827" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
              {/* Window Header */}
              <path d="M75 126C75 117.163 82.1635 110 91 110H409C417.837 110 425 117.163 425 126V145H75V126Z" fill="#1F2937" />
              {/* Window Dots */}
              <circle cx="95" cy="127" r="5" fill="#EF4444" />
              <circle cx="110" cy="127" r="5" fill="#F59E0B" />
              <circle cx="125" cy="127" r="5" fill="#10B981" />
              {/* Header Title */}
              <text x="210" y="131" fill="#9CA3AF" fontSize="11" fontFamily="monospace" letterSpacing="1">sandbox_env.py</text>

              {/* Left Panel: Neural Network Visualization */}
              {/* Connecting Lines */}
              <line x1="120" y1="200" x2="160" y2="240" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
              <line x1="160" y1="240" x2="120" y2="280" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
              <line x1="120" y1="200" x2="200" y2="200" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
              <line x1="160" y1="240" x2="200" y2="240" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="200" y1="200" x2="200" y2="280" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
              <line x1="120" y1="280" x2="200" y2="280" stroke="rgba(89, 130, 246, 0.4)" strokeWidth="1" />

              {/* Nodes */}
              <circle cx="120" cy="200" r="7" fill="url(#svgGlowBlue)" filter="url(#shadowGlow)" />
              <circle cx="160" cy="240" r="10" fill="url(#svgGlowPurple)" filter="url(#shadowGlow)" />
              <circle cx="120" cy="280" r="7" fill="url(#svgGlowBlue)" />
              <circle cx="200" cy="200" r="8" fill="#10B981" />
              <circle cx="200" cy="280" r="9" fill="url(#svgGlowPurple)" />

              {/* Floating neural wave nodes */}
              <path d="M 120,240 Q 140,220 160,240 T 200,240" fill="none" stroke="#06B6D4" strokeWidth="1.5" opacity="0.3" />

              {/* Right Panel: Code Blocks */}
              <rect x="235" y="170" width="165" height="15" rx="4" fill="#1F2937" />
              <rect x="235" y="195" width="130" height="15" rx="4" fill="rgba(59, 130, 246, 0.2)" />
              <rect x="250" y="220" width="120" height="15" rx="4" fill="rgba(139, 92, 246, 0.2)" />
              <rect x="250" y="245" width="140" height="15" rx="4" fill="#1F2937" />
              <rect x="235" y="270" width="80" height="15" rx="4" fill="rgba(6, 182, 212, 0.2)" />

              {/* Small details */}
              <circle cx="245" cy="202" r="3" fill="#3B82F6" />
              <circle cx="260" cy="227" r="3" fill="#8B5CF6" />
              <circle cx="245" cy="277" r="3" fill="#06B6D4" />

              {/* Holographic Glowing Brain above dashboard */}
              <g transform="translate(190, 50)" filter="url(#shadowGlow)">
                <path d="M60 40C45 40 35 48 35 60C35 68 40 73 45 78L60 90L75 78C80 73 85 68 85 60C85 48 75 40 60 40Z" fill="none" stroke="url(#svgGlowPurple)" strokeWidth="2.5" />
                <circle cx="60" cy="65" r="8" fill="#8B5CF6" />
                <path d="M 45,65 A 15,15 0 0,1 75,65" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3" />
                {/* Floating pulses */}
                <circle cx="60" cy="40" r="3" fill="#3B82F6">
                  <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="60" r="3" fill="#06B6D4">
                  <animate attributeName="opacity" values="1;0.2;1" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="85" cy="60" r="3" fill="#8B5CF6">
                  <animate attributeName="opacity" values="0.1;0.9;0.1" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Keyboard Shelf */}
              <rect x="125" y="380" width="250" height="12" rx="4" fill="#1F2937" stroke="rgba(255,255,255,0.05)" />
              {/* Keyboard Keys line representation */}
              <line x1="140" y1="386" x2="360" y2="386" stroke="#9CA3AF" strokeWidth="2.5" strokeDasharray="3 2" />

              {/* Interactive Data Floats (cards overlapping the screen) */}
              <g transform="translate(320, 260)" filter="url(#shadowGlow)">
                <rect width="110" height="70" rx="10" fill="#1F2937" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" />
                <text x="12" y="25" fill="#06B6D4" fontSize="10" fontWeight="bold" fontFamily="monospace">LOSS: 0.024</text>
                <text x="12" y="42" fill="#E5E7EB" fontSize="9" fontFamily="sans-serif">Accuracy: 99.2%</text>
                <rect x="12" y="52" width="86" height="5" rx="2.5" fill="#374151" />
                <rect x="12" y="52" width="78" height="5" rx="2.5" fill="#10B981" />
              </g>

              <g transform="translate(40, 180)">
                <rect width="90" height="40" rx="8" fill="#1F2937" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                <text x="10" y="24" fill="#E5E7EB" fontSize="9" fontFamily="sans-serif">FastAPI active</text>
                <circle cx="75" cy="21" r="3.5" fill="#10B981">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
