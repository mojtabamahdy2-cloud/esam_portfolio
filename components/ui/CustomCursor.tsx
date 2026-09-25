'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'view' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      const isInteractive = target.closest('a, button, [role="button"], input, textarea');

      if (cursorAttr === 'view') {
        setCursorType('view');
      } else if (cursorAttr === 'drag') {
        setCursorType('drag');
      } else if (cursorAttr === 'link' || isInteractive) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 rounded-full bg-[#003B5C]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Lagging interactive outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'view' ? 64 : cursorType === 'link' ? 44 : 32,
          height: cursorType === 'view' ? 64 : cursorType === 'link' ? 44 : 32,
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(0, 59, 92, 0.08)'
              : cursorType === 'link'
                ? 'rgba(0, 108, 165, 0.06)'
                : 'transparent',
          borderColor:
            cursorType === 'view'
              ? '#003B5C'
              : cursorType === 'link'
                ? 'rgba(0, 108, 165, 0.5)'
                : 'rgba(0, 59, 92, 0.25)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 320 }}
      >
        {cursorType === 'view' && (
          <span className="font-mono text-[9px] font-bold tracking-wider text-[#003B5C] uppercase">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
