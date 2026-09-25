'use client';

import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { Magnetic } from '@/components/ui/Magnetic';

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-[#ffffff]/90 py-3 backdrop-blur-md shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo / Monogram */}
        <Magnetic strength={0.2}>
          <a
            href="#"
            data-cursor="link"
            className="group flex items-center text-sm font-black tracking-tighter uppercase"
          >
            <div className="flex flex-col">
              <span className="text-xs font-extrabold tracking-widest text-[#003B5C] transition-colors group-hover:text-[#005684]">
                {locale === 'ar' ? 'عصام محمد' : 'ESAM MOHAMED'}
              </span>
              <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">
                {locale === 'ar' ? 'تصميم · طباعة سبلميشن · تطريز' : 'Design · Sublimation · Embroidery'}
              </span>
            </div>
          </a>
        </Magnetic>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-50/90 px-4 py-1.5 backdrop-blur-md md:flex shadow-xs">
          {navLinks.map((link) => (
            <Magnetic key={link.href} strength={0.15}>
              <a
                href={link.href}
                data-cursor="link"
                className="relative rounded-full px-4 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-200 hover:text-[#003B5C] hover:bg-[#ffffff]"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </nav>

        {/* Right Actions: Language Switcher, CV & Contact Button */}
        <div className="flex items-center gap-3">
          <LanguageToggle />

          <Magnetic strength={0.2}>
            <a
              href="/Original CV/Esam_Mohamed_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="hidden items-center justify-center rounded-full border border-slate-300 bg-[#ffffff] px-4 py-2 font-mono text-xs font-semibold text-[#003B5C] transition-all duration-200 hover:border-[#003B5C] hover:bg-slate-50 md:inline-flex"
            >
              <span>{t('resume')}</span>
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href="#contact"
              className="hidden items-center justify-center rounded-full bg-[#003B5C] px-5 py-2 font-mono text-xs font-semibold text-white transition-all duration-200 hover:bg-[#005684] hover:shadow-sm sm:inline-flex active:scale-[0.98]"
            >
              <span>{t('contact')}</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
