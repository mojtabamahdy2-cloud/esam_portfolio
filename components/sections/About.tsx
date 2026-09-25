'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ProfileOrbit } from '@/components/ui/ProfileOrbit';
import { FileText, Download } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();

  const stats = [
    {
      value: '8+',
      label: locale === 'ar' ? 'سنوات من الخبرة' : 'Years Experience',
      sub: locale === 'ar' ? 'تصميم وإنتاج صناعي' : 'Design & Production',
    },
    {
      value: '100+',
      label: locale === 'ar' ? 'حملات ومطبوعات' : 'Delivered Works',
      sub: locale === 'ar' ? 'مؤسسات ومصانع' : 'Institutions & Brands',
    },
    {
      value: '5',
      label: locale === 'ar' ? 'ماكينات طباعة' : 'Printing Machines',
      sub: locale === 'ar' ? 'سبلميشن، DTF وليزر' : 'Sublimation, DTF, Laser',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden bg-[#FAF8F5] py-28 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Main Column (Headline, narrative, stats, CV download) */}
          <div className="space-y-8 lg:col-span-7">
            <h2 className="text-section-title font-extrabold tracking-tight text-[#003B5C] leading-tight">
              {t('headline')}
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              {t('bio')}
            </p>

            {/* Stat Counter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-[#FAF8F5] p-5 shadow-xs">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1 sm:border-r last:border-r-0 border-slate-100 pr-3 rtl:sm:border-r-0 rtl:sm:border-l rtl:last:border-l-0 rtl:pl-3">
                  <div className="font-mono text-3xl font-black text-[#003B5C] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800">{stat.label}</div>
                  <div className="font-mono text-[10px] text-slate-500 uppercase">{stat.sub}</div>
                </div>
              ))}
            </div>


          </div>

          {/* Visual Column (Portrait Photo with Orbiting Tech Stack) */}
          <div className="relative lg:col-span-5 flex justify-center items-center">
            <div className="pause-orbit relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              {/* Orbiting Tech Stack Icons (Layered behind the portrait photo) */}
              <ProfileOrbit />

              {/* Portrait Photo of Esam Mohamed */}
              <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 select-none flex items-center justify-center drop-shadow-2xl">
                <Image
                  src="/Profile picture/profile.png"
                  alt="Esam Mohamed"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
