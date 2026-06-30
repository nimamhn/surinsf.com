'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { LangProvider, useI18n } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';
import QuickContact from '@/components/QuickContact';
import AnimatedPage from '@/components/AnimatedPage';
import './globals.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollRestore() {
  const pathname = usePathname();
  useEffect(() => { window.scrollTo(0, 0); ScrollTrigger.refresh(); }, [pathname]);
  return null;
}

function BodyInner({ children }: { children: React.ReactNode }) {
  const { lang, dir, t } = useI18n();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.style.fontFamily = "'Vazirmatn', system-ui, sans-serif";
    document.title = t.site.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.site.description);
  }, [lang, dir, t]);
  return <>{children}</>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="canonical" href="https://surinsf.com" />
        <link rel="alternate" href="/rss.xml" type="application/rss+xml" title="RSS" />
        <link rel="alternate" href="https://surinsf.com" hrefLang="fa" />
        <link rel="alternate" href="https://surinsf.com/en" hrefLang="en" />
        <link rel="alternate" href="https://surinsf.com" hrefLang="x-default" />
        <meta property="og:title" content="سورین صنعت فرزان | واردات تجهیزات برق صنعتی" />
        <meta property="og:description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://surinsf.com" />
        <meta property="og:image" content="https://surinsf.com/images/og-image.jpg" />
        <meta property="og:locale" content="fa_IR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سورین صنعت فرزان" />
        <meta name="twitter:description" content="واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق" />
        <meta name="twitter:image" content="https://surinsf.com/images/og-image.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'سورین صنعت فرزان',
            alternateName: 'Surin Sanat Farzan',
            url: 'https://surinsf.com',
            logo: 'https://surinsf.com/images/og-image.jpg',
            contactPoint: { '@type': 'ContactPoint', telephone: '+982122201734', contactType: 'customer service' },
            address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
            sameAs: [],
          }),
        }} />
      </head>
      <body className="font-vazir">
        <LangProvider>
          <BodyInner>
            <ScrollRestore />
            <ThreeBackground />
            <Navbar />
            <main className="relative z-10 pt-16"><AnimatedPage>{children}</AnimatedPage></main>
            <QuickContact />
            <Footer />
          </BodyInner>
        </LangProvider>
      </body>
    </html>
  );
}
