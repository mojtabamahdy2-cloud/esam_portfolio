'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, FileText, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <section id="contact" className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#FAF8F5] pt-28 border-t border-slate-200/60">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-12 pb-20">
        {/* Pitch, Direct Contact Details & CV */}
        <div className="space-y-8">
          <h2 className="text-section-title font-black tracking-tight text-[#003B5C] leading-tight text-center">
            {t('headline')}
          </h2>

          {/* Direct Contact Cards */}
          <div className="space-y-4 pt-2">
            {/* WhatsApp & Call */}
            <a
              href="https://wa.me/966544851613"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-200 hover:border-[#003B5C] hover:bg-[#FAF8F5] hover:shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003B5C] text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-semibold text-slate-500 uppercase">
                    {t('phoneLabel')}
                  </div>
                  <div className="text-sm font-bold text-[#003B5C] dir-ltr text-left">
                    +966 544 851 613
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:text-[#003B5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Email */}
            <a
              href="mailto:esam1492@gmail.com"
              data-cursor="link"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-200 hover:border-[#003B5C] hover:bg-[#FAF8F5] hover:shadow-sm"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003B5C] text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-semibold text-slate-500 uppercase">
                    {t('emailLabel')}
                  </div>
                  <div className="text-sm font-bold text-[#003B5C]">
                    esam1492@gmail.com
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:text-[#003B5C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0284C7] text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] font-semibold text-slate-500 uppercase">
                  {t('locationLabel')}
                </div>
                <div className="text-sm font-semibold text-slate-700">
                  {t('locationValue')}
                </div>
              </div>
            </div>

            {/* Download CV Card */}
            <a
              href="/Original CV/Esam_Mohamed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group flex items-center justify-between rounded-2xl border-2 border-dashed border-[#003B5C]/30 bg-blue-50/40 p-4 transition-all duration-200 hover:border-[#003B5C] hover:bg-blue-50"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF8F5] border border-[#003B5C]/20 text-[#003B5C]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[11px] font-bold text-[#003B5C] uppercase">
                    {t('cvDownload')}
                  </div>
                  <div className="text-xs text-slate-600">
                    {locale === 'ar' ? 'ملف PDF يحتوي كامل الخبرات والماكينات والمؤهلات' : 'Complete career history, machinery mastery & certifications'}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#003B5C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Global Theme-Blue Footer */}
      <footer className="w-full border-t border-[#00283E]/20 bg-[#003B5C] py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center md:px-12">
          {/* Quote */}
          <div className="flex flex-col items-center justify-center max-w-3xl">
            <p
              className={`${
                locale === 'ar'
                  ? 'font-calligraphy-ar text-2xl sm:text-3xl md:text-4xl'
                  : 'font-calligraphy text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
              } text-white/95 leading-relaxed tracking-normal select-none`}
            >
              {tFooter('quote')}
            </p>
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">
              — {tFooter('author')}
            </span>
          </div>

          {/* Subtle separator */}
          <div className="my-6 h-px w-16 bg-[#FAF8F5]/20" aria-hidden="true" />

          {/* Created for Esam Mohamed */}
          <div className="flex items-center justify-center gap-1.5 font-mono text-xs text-white/80">
            <span>{locale === 'ar' ? 'صُنع بـ' : 'Created with'}</span>
            <span className="text-rose-400 text-sm" aria-hidden="true">❤</span>
            <span>{locale === 'ar' ? 'لعصام محمد' : 'for Esam Mohamed'}</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
