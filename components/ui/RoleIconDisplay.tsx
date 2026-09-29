'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Fabric-stitched cloth patch icon component
const StitchedClothIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="group relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center select-none rounded-[22px] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
    {/* 1. Physical Embroidered Patch Body with Woven Fabric Texture */}
    <div
      className="absolute inset-0 rounded-[22px] border border-[#003B5C]/15 transition-shadow duration-300"
      style={{
        backgroundColor: '#FAFCFE',
        backgroundImage: `
          radial-gradient(rgba(0, 59, 92, 0.08) 0.8px, transparent 0.8px),
          radial-gradient(rgba(0, 59, 92, 0.04) 0.8px, #F8FAFD 0.8px)
        `,
        backgroundSize: '6px 6px',
        backgroundPosition: '0 0, 3px 3px',
        boxShadow: `
          0 10px 25px -4px rgba(0, 59, 92, 0.16),
          0 4px 10px -2px rgba(0, 59, 92, 0.08),
          inset 0 1px 2px rgba(255, 255, 255, 0.9),
          inset 0 -1px 2px rgba(0, 40, 65, 0.05)
        `,
      }}
    />

    {/* 2. Perimeter Running Stitch (Realistic Thread with Shadow & Highlight) */}
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none p-1"
      viewBox="0 0 72 72"
      fill="none"
    >
      {/* Stitch Needle Depressions / Thread Shadow */}
      <rect
        x="6"
        y="7"
        width="60"
        height="60"
        rx="16"
        stroke="rgba(0, 35, 55, 0.25)"
        strokeWidth="2.2"
        strokeDasharray="4.5 3.5"
        strokeLinecap="round"
      />
      {/* Top Thread Specular Highlight */}
      <rect
        x="6"
        y="5.6"
        width="60"
        height="60"
        rx="16"
        stroke="rgba(255, 255, 255, 0.85)"
        strokeWidth="1.8"
        strokeDasharray="4.5 3.5"
        strokeLinecap="round"
      />
      {/* Real Navy Embroidery Thread Stitch */}
      <rect
        x="6"
        y="6"
        width="60"
        height="60"
        rx="16"
        stroke="#003B5C"
        strokeWidth="2.2"
        strokeDasharray="4.5 3.5"
        strokeLinecap="round"
        className="transition-colors duration-300 group-hover:stroke-[#005684]"
      />
    </svg>

    {/* 3. The Graphic / Skill Icon resting as an embroidered appliqué */}
    <div className="relative z-10 flex items-center justify-center p-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow-[0_2px_4px_rgba(0,35,55,0.18)] transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* 4. Subtle Corner Stitch Accent */}
    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#003B5C]/20 pointer-events-none" />
  </div>
);

const roleIconsData = [
  // 0: Graphic Designer
  [
    <StitchedClothIcon key="ps" src="/images/skills/photoshop.svg" alt="Photoshop" />,
    <StitchedClothIcon key="ai" src="/images/skills/illustrator.svg" alt="Illustrator" />,
    <StitchedClothIcon key="id" src="/images/skills/indesign.svg" alt="InDesign" />,
  ],
  // 1: Digital Print & Sublimation Specialist
  [
    <StitchedClothIcon key="epson" src="/images/skills/epson.svg" alt="Epson F9500" />,
    <StitchedClothIcon key="press" src="/images/skills/heatpress.svg" alt="Heat Press" />,
  ],
  // 2: Textile & Embroidery Expert
  [
    <StitchedClothIcon key="dtf" src="/images/skills/dtg.svg" alt="DTF Printing" />,
    <StitchedClothIcon key="laser" src="/images/skills/laser.svg" alt="Laser CNC" />,
  ],
];

export function RoleIconDisplay({ roleIndex }: { roleIndex: number }) {
  const currentIcons = roleIconsData[roleIndex % roleIconsData.length];

  return (
    <div className="relative flex items-center justify-start sm:justify-center gap-4 sm:gap-6 h-24 sm:h-32 w-fit sm:w-[320px]">
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
              delay: index * 0.1,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
