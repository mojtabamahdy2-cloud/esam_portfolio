"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const abayaConceptsImages = [
  "IMG-20260922-WA0021.jpg",
  "IMG-20260922-WA0022.jpg",
  "IMG-20260922-WA0023.jpg"
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0
  })
};

export const AbayaConceptsSection = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const t = useTranslations('abayaConcepts');

  const nextSlide = () => {
    setSlide(([curr]) => [(curr + 1) % abayaConceptsImages.length, 1]);
  };

  const prevSlide = () => {
    setSlide(([curr]) => [(curr - 1 + abayaConceptsImages.length) % abayaConceptsImages.length, -1]);
  };

  const goToSlide = (idx: number) => {
    setSlide(([curr]) => [idx, idx > curr ? 1 : -1]);
  };

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t('title')}</h2>
      </div>

      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center group">
        
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/40 transition-all translate-y-0"
          aria-label="Previous Abaya Concept"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/40 transition-all translate-y-0"
          aria-label="Next Abaya Concept"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>

        <div className="w-full relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative w-full aspect-[3/4] max-h-[80vh] overflow-hidden rounded-2xl bg-gray-100/10 shadow-xl">
                <img
                  src={`/images/Abaya concepts/${abayaConceptsImages[currentSlide]}`}
                  alt={`Abaya Concept ${currentSlide + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {abayaConceptsImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "w-8 bg-black dark:bg-white" : "w-2 bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
