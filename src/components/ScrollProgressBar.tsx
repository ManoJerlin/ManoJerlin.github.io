import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan origin-[0%] z-50 shadow-[0_1px_10px_rgba(139,92,246,0.5)]"
      style={{ scaleX }}
    />
  );
};
