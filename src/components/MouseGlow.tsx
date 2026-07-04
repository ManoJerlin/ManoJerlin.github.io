import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export const MouseGlow: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-50 md:opacity-100"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 80%)`,
      }}
    />
  );
};
