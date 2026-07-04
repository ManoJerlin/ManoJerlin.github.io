import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(currentProgress);

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 600); // Wait for exit animation to complete
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
        >
          {/* Glowing background blob */}
          <div className="absolute w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          
          <div className="flex flex-col items-center space-y-8 z-10">
            {/* Tech Logo Emblem */}
            <motion.div
              className="relative w-20 h-20 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Spinning outline rings */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border border-accent-blue/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-2 rounded-xl border border-dashed border-accent-cyan/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div 
                className="absolute inset-4 rounded-lg border border-accent-purple/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                animate={{ rotate: 180 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Central initials */}
              <span className="text-xl font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent font-display tracking-wider">
                MJ
              </span>
            </motion.div>

            {/* Progress Text */}
            <div className="flex flex-col items-center space-y-2">
              <motion.h1 
                className="text-lg font-medium text-white tracking-widest uppercase font-display"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                MANO JERLIN
              </motion.h1>
              <motion.p 
                className="text-xs text-slate-500 tracking-wider uppercase font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
              >
                Initializing AI Sandbox
              </motion.p>
            </div>

            {/* Bar & Number indicator */}
            <div className="w-48 flex flex-col items-center space-y-3">
              <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-accent-cyan/80 font-bold">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
