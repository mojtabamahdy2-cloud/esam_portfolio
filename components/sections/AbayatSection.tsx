"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const abayatData = [
  {
    "folder": "1",
    "images": [
      "ChatGPT Image Sep 28, 2026, 01_13_46 AM.jpg",
      "ChatGPT Image Sep 28, 2026, 01_13_42 AM.jpg"
    ]
  },
  {
    "folder": "3",
    "images": [
      "0655a427-acb7-4a37-913d-ddfe7cd10eae-666.66666666667x1000-TUSTuh7Zt7Oiy3WMc9HjcWNpGd2SqedOQ64DPSaX.jpg",
      "cfa65a26-9b6c-4a57-9799-89e3d851318e-666.66666666667x1000-IEkn33fk46x35rl60iT4M1jsXjGfjGdpWayk8zPx.jpg"
    ]
  },
  {
    "folder": "4",
    "images": [
      "1dabeab2-f2aa-42ac-a6f6-a015d8620a94-691.82389937107x1000-hP0J0uMSEGZwZTqzTjgIePmyBXORxsXBQbvWiwjd.jpg",
      "a63776e5-e1af-4d4c-86d9-5d21c17a89f7-698.4126984127x1000-QKVh663GyrmxM0DjhwVYzUzNMsVdHTPUXx9zpoLF.jpg",
      "eefff286-2a6a-4a24-bebe-5a56859be86e-689.65517241379x1000-poBi3tf8v1XMrGAwRXlBYpJOTYMpCMkJzG4zJvEs.jpg"
    ]
  },
  {
    "folder": "8",
    "images": [
      "2d8316ef-4ccf-4871-a3d2-28a26b763907-685.71428571429x1000-ox0rYFmNpAmhMQsHmDAeqw5R57kMjAL8vYcK9rEx.jpg",
      "b0ea276f-370b-40e1-828c-117690d187f9-689.29503916449x1000-ne0H7hnIREhdzsApzUOKVulJjVxgZtyWvwlEFrl1.jpg",
      "c7157f5f-b0fb-445f-a849-5544bcc99ccd-691.09947643979x1000-G1J859NKH0uy6u7jRjSVfF3wKlxDXL1zIm5jyqr5.jpg"
    ]
  },
  {
    "folder": "12",
    "images": [
      "4cc48fa3-c344-4877-9fb5-4950415d17bc-749.86346258875x1000-mCg1NRhduTL35nNO8X6eOMvdLRImuVRn0ZOY3AFk.jpg",
      "58fea9e3-cef3-446c-8ebe-50fe7236e38a-749.87066735644x1000-fyq90nIVGlrWSj5LHp7ID2sp8rWqn4kLQHU595ch.jpg",
      "eb7f12e1-f178-49a6-8ad9-56618bfbe3df-750.25075225677x1000-D99sE0Vn3PfApn6DEa4UfcZIvKjxlSxNXcs9wSXA.jpg"
    ]
  },
  {
    "folder": "13",
    "images": [
      "56793e91-2f54-40d1-9270-625f3b23a6db-799.69954932399x1000-wmXvHa77RjBPRDXIPI4Mb8vkJ38Gs46yARfmpXf9.jpg",
      "77af353f-b006-4c24-a1ac-df9eb19aedf5-799.67948717949x1000-YtBu2yPWNx5MFbEyuYTxzdmD7AWvBtvr7kZMOWza.jpg",
      "9d68dc56-6457-4257-99f2-346860e22d79-799.80276134122x1000-MWGK00PVBKh1fe3oGzUTi6suXwTrrQ8f5Z0vyC5q.jpg",
      "b0036525-b20c-4f81-b0af-b332b009653b-800x1000-DmMRrDo41qhsLjoccVK6nZHQousJqfMxC5OD9K2i.jpg",
      "e400a630-477a-48c6-85ec-96ba99aa8ff6-799.60415635824x1000-U119EqWdBpf3JBFqAHlvKNMsbHLuSQ7rLPNrZsqV.jpg",
      "ef1429f8-5ea8-46ec-b7b2-2679542b7e61-799.70178926441x1000-cjsoOuuyfccJ5TIdFUgggkDFnL7dLJbA4OguTMeu.jpg"
    ]
  },
  {
    "folder": "14",
    "images": [
      "5ec7fb7e-4ede-4890-a371-f1b3e8c05ff1-799.60415635824x1000-egH97zXJXtOP6jjTbmo6wY9nNSqc54UefUrP2a82.jpg",
      "8f87627b-053d-44f6-abab-b5804cd9319d-799.68863518422x1000-vGoDoVxofSXNMcZZwrwLuWDg1gm9hHJOC39ljiY7.jpg",
      "be10d263-4077-4ed6-9be1-f4d7e093e24c-799.58570688762x1000-lDk3QGG5a7FsRRcwSEm1YlofDtS1Pvtv8kC738qj.jpg"
    ]
  },
  {
    "folder": "15",
    "images": [
      "61e84b4f-c748-40d0-badc-125e0eec1f4d-704x1000-AvmAyKYVNNimT4vrcsdF10DaYFmRXcDcHWwCG891.jpg",
      "d452b549-cf6d-4739-b1d4-ec60e05e15f1-711.59029649596x1000-NZBa2xUwSdnJuNcrGQePMqfVsTYSVlbC0MeYqtXe.jpg",
      "d58e0d3a-0804-44c2-b006-c0aad9324fec-704x1000-HoIdo8EPLprKfwnz06bItgX7Au6umfHMUl6SSm0j.jpg"
    ]
  },
  {
    "folder": "22",
    "images": [
      "1d6885ac-98ba-478d-8ebc-9b79859a056c-713.51351351351x1000-P6MpHwsFyrObJxNjQIAnQHbhb9ItHHjg5HUdxb9f.jpg",
      "f296ce3b-f843-43ae-b7da-2a2096434ac9-708.91514500537x1000-pEszjr5cmAojSnBSx9nPE0o58tzBm8djsW9veGKy.jpg",
      "f4b607eb-0f49-405b-ae96-92b213b0afa0-698.4126984127x1000-kvhDvJmjSxQwjHQwAZBshvTEXEVk8a0QWK2nK615.jpg"
    ]
  },
  {
    "folder": "40",
    "images": [
      "18da9172-1285-4394-875f-77852da74d41-688.21689259645x1000-2Z4wUzpSxtIHp3gsEKxGcVuGmg3iHP4g8WiNjV61.jpg",
      "2d844809-698b-4458-90f9-c28b41173bd0-704.7517351842x1000-WqQFtyLwwlPQgWQpvh1iKYtvcRvjpXAPk58VWaZ5.jpg",
      "8bb77952-e9c0-4782-a52e-b7c4432e3908-682.52326783868x1000-IuhG32iLJ0xcTPMOdK8vX7mmNPoWJU6ugSZAFrZA.jpg"
    ]
  }
];

const MorphingImage = ({ images, folder, isActive }: { images: string[], folder: string, isActive: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only animate if there are multiple images and this slide is currently active
    if (images.length <= 1 || !isActive) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2.5 seconds per view
    
    return () => clearInterval(interval);
  }, [images, isActive]);

  return (
    <div className="relative w-full aspect-[3/4] max-h-[80vh] overflow-hidden rounded-2xl bg-gray-100/10 shadow-xl">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={`/Abayat/${folder}/${images[currentIndex]}`}
          alt={`Abaya collection view ${currentIndex + 1}`}
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

export const AbayatSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('abayat');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % abayatData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + abayatData.length) % abayatData.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t('title')}</h2>
      </div>

      <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center group">
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/40 transition-all translate-y-0"
          aria-label="Previous Abaya"
        >
          <ChevronLeft className="w-6 h-6 text-black dark:text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/40 transition-all translate-y-0"
          aria-label="Next Abaya"
        >
          <ChevronRight className="w-6 h-6 text-black dark:text-white" />
        </button>

        {/* Current Slide Display */}
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
                images={abayatData[currentSlide].images} 
                folder={abayatData[currentSlide].folder} 
                isActive={true} 
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex gap-2 mt-8">
        {abayatData.map((_, idx) => (
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
