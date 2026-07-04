import type { Variants } from 'framer-motion';

// Fade-in in different directions with custom offsets
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay = 0,
  duration = 0.5
): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Simple fade-in without position shift
export const fadeSimple = (delay = 0, duration = 0.6): Variants => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };
};

// Stagger parent container for list items
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

// Scale up zoom effect
export const scaleUp = (delay = 0, duration = 0.4): Variants => {
  return {
    hidden: { scale: 0.85, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: duration,
      },
    },
  };
};

// Floating bobbing effect
export const floatVariant: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

// Slow rotation
export const rotateVariant: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 25,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};
