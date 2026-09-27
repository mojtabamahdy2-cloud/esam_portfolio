"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const hatsData = [
  { images: ["ChatGPT Image Sep 28, 2026, 12_23_23 AM.jpg"] },
  { images: ["ChatGPT Image Sep 28, 2026, 12_25_07 AM.jpg"] }
];

const MorphingImage = ({ images, isActive }: { images: string[], isActive: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1 || !isActive) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [images, isActive]);

  return (
    <div className="relative w-full aspect-[3/4] max-h-[80vh] overflow-hidden rounded-2xl bg-gray-100/10 shadow-xl">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={`/images/hats/${images[currentIndex]}`}
          alt={`Hats view ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
    </div>
  );
};

export const HatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('hats');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hatsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hatsData.length) % hatsData.length);
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
          aria-label="Previous Hat"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/40 transition-all translate-y-0"
          aria-label="Next Hat"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>

        <div className="w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              <MorphingImage 
                images={hatsData[currentSlide].images} 
                isActive={true} 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-8">
        {hatsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
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
