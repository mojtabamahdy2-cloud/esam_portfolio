'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'motion/react';

import { RoleIconDisplay } from '@/components/ui/RoleIconDisplay';
import { StitchedName } from '@/components/ui/StitchedName';

// Dynamic import of 3D WebGL Hero Canvas with SSR disabled
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#ffffff]" />,
});

export function HeroSection() {
  const t = useTranslations('hero');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    t('roles.0'),
    t('roles.1'),
    t('roles.2'),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#ffffff] px-6 py-24 md:px-12">
      {/* 3D WebGL Interactive Background */}
      <HeroScene />

      {/* Clean gradient overlay ensuring crisp readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />

      {/* Main typography hero body */}
      <div className="relative z-10 mx-auto w-full max-w-7xl py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
        <div className="space-y-4 w-full md:w-auto flex-1 max-w-3xl">
          {/* Name Display in Authoritative Deep Navy */}
          <motion.h1
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(-5% -5% -5% -5%)' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full uppercase selection:bg-[#EBF5FA] selection:text-[#003B5C]"
          >
            <StitchedName name={t('name')} />
          </motion.h1>

          {/* Cycling Multi-Discipline Roles with clean, solid typography */}
          <div className="flex items-start sm:items-center gap-3 text-hero-sub font-bold text-[#003B5C]">
            <span className="text-slate-400 font-light select-none pt-1 sm:pt-0 shrink-0">/</span>
            <div className="relative overflow-hidden min-h-[1.5em] flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="py-1 flex items-center"
                >
                  <span className="font-extrabold tracking-tight text-[#003B5C] leading-normal sm:leading-snug">
                    {roles[roleIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dynamic Icons on the right side on desktop, below title on mobile */}
        <div className="flex w-full md:w-auto flex-1 justify-start md:justify-end pt-2 md:pt-0">
          <RoleIconDisplay roleIndex={roleIndex} />
        </div>
      </div>
    </section>
  );
}
