"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button, a, .flat-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-neo-cyan mix-blend-difference pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "#ff00ff" : "#00f3ff",
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
}