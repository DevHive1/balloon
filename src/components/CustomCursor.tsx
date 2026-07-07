'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');
  
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target) {
        // Use double negation to force a boolean result from the closest() call
        const isInteractive = !!target.closest('a, button, .btn-luxury');
        
        if (isInteractive) {
          setCursorType('pointer');
        } else if ((window.getSelection()?.toString() ?? '').length > 0) {
          setCursorType('text');
        } else {
          setCursorType('default');
        }
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handlePointer);
    window.addEventListener('mouseup', handlePointer);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handlePointer);
      window.removeEventListener('mouseup', handlePointer);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: cursorType === 'pointer' ? 2.5 : 1,
        backgroundColor: cursorType === 'pointer' ? 'var(--accent-primary)' : 'white',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className="w-full h-full rounded-full border border-white/20" />
    </motion.div>
  );
}
