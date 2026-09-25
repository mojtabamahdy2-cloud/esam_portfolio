import type { Metadata } from 'next';
import { DM_Sans, Almarai, Great_Vibes, Aref_Ruqaa } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, localeDirection, type Locale } from '@/lib/i18n/config';
import { LenisProvider } from '@/components/ui/LenisProvider';
import { Nav } from '@/components/ui/Nav';
import '../globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-calligraphy',
  display: 'swap',
});

const arefRuqaa = Aref_Ruqaa({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic-calligraphy',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return {
    title: isAr
      ? 'عصام محمد — مصمم جرافيك، أخصائي طباعة سبلميشن وتطريز حاسوبي'
      : 'Esam Mohamed — Graphic Designer, Sublimation & Embroidery Specialist',
    description: isAr
      ? 'ملف أعمال عصام محمد — مصمم جرافيك وأخصائي إنتاج طباعي، تشغيل ماكينات إبسون للسبلميشن والمكابس الحرارية، برمجة تطريز ويلكم، وقص ليزر.'
      : 'Official Portfolio of Esam Mohamed — Graphic Designer, Digital Print & Sublimation Specialist, Computerized Embroidery & Laser Fabrication Expert.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const direction = localeDirection[locale as Locale];
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${dmSans.variable} ${almarai.variable} ${greatVibes.variable} ${arefRuqaa.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white text-[#003B5C] antialiased selection:bg-[#EBF5FA] selection:text-[#003B5C]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LenisProvider>
            <Nav />
            <main>{children}</main>
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
