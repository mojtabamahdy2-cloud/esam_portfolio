'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
// Shared Wrapper for Image Icons
const ImageIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#FAF8F5] shadow-lg border border-slate-100 transition-transform hover:scale-105">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
  </div>
);

const roleIconsData = [
  // 0: Graphic Designer
  [
    <ImageIcon key="ps" src="/images/skills/photoshop.svg" alt="Photoshop" />,
    <ImageIcon key="ai" src="/images/skills/illustrator.svg" alt="Illustrator" />,
    <ImageIcon key="id" src="/images/skills/indesign.svg" alt="InDesign" />,
  ],
  // 1: Digital Print & Sublimation Specialist
  [
    <ImageIcon key="epson" src="/images/skills/epson.svg" alt="Epson F9500" />,
    <ImageIcon key="press" src="/images/skills/heatpress.svg" alt="Heat Press" />,
  ],
  // 2: Textile & Embroidery Expert
  [
    <ImageIcon key="dtf" src="/images/skills/dtg.svg" alt="DTF Printing" />,
    <ImageIcon key="laser" src="/images/skills/laser.svg" alt="Laser CNC" />,
  ],
];

export function RoleIconDisplay({ roleIndex }: { roleIndex: number }) {
  // roleIndex should be 0, 1, or 2 based on the roles array order
  const currentIcons = roleIconsData[roleIndex % roleIconsData.length];

  return (
    <div className="relative flex items-center justify-start sm:justify-center gap-4 sm:gap-6 h-20 sm:h-32 w-fit sm:w-[300px]">
      <AnimatePresence mode="popLayout">
        {currentIcons.map((icon, index) => (
          <motion.div
            key={`${roleIndex}-${index}`}
            initial={{ y: 35, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -35, opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1, // Staggered slide up
            }}
          >
            {icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
