'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Magnetic } from '@/components/ui/Magnetic';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    // If current path starts with /en or /ar, replace it
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'ar') {
      segments[1] = nextLocale;
      router.push(segments.join('/') || `/${nextLocale}`);
    } else {
      router.push(`/${nextLocale}${pathname}`);
    }
  };

  return (
    <Magnetic strength={0.25}>
      <button
        onClick={toggleLanguage}
        type="button"
        aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        data-cursor="link"
        dir="ltr"
        className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-[#ffffff]/90 px-3.5 py-1.5 text-xs font-semibold shadow-xs backdrop-blur-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
      >
        <span
          className={`font-mono text-[11px] uppercase transition-colors ${
            locale === 'en' ? 'font-bold text-[#003B5C]' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          EN
        </span>
        <span className="h-3 w-[1px] bg-slate-200" />
        <span
          className={`text-[12px] transition-colors ${
            locale === 'ar' ? 'font-bold text-[#003B5C]' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          عربي
        </span>
      </button>
    </Magnetic>
  );
}
