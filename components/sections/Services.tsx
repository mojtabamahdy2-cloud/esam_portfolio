'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'motion/react';
import { servicesData, type ServiceItem } from '@/lib/data/services';

export function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <section
      id="services"
      className="relative min-h-screen w-full overflow-hidden bg-[#003B5C] py-28 px-6 md:px-12 border-t border-[#00283E]/20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-section-title font-extrabold tracking-tight text-white leading-tight">
            {t('headline')}
          </h2>
        </div>

        {/* Minimalist Services Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {servicesData.map((service: ServiceItem, index: number) => {
            const title = isAr ? service.titleAr : service.titleEn;
            const tagline = isAr ? service.taglineAr : service.taglineEn;
            const description = isAr ? service.descriptionAr : service.descriptionEn;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative flex flex-col justify-start rounded-2xl border border-white/10 bg-[#FAF8F5] p-7 shadow-md transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold tracking-tight text-[#003B5C] mb-1.5 transition-colors group-hover:text-[#005684]">
                  {title}
                </h3>

                <p className="text-xs font-semibold text-[#005684] mb-3">
                  {tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
