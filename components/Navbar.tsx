'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n';

export default function Navbar() {
  const { t, lang, toggleLang } = useI18n();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-brand-400 transition-colors">
          {t.nav.logo}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {t.nav.links.slice(0, 5).map(l => (
            <Link key={l.href} href={l.href} className={`text-sm transition-colors hover:text-brand-400 ${pathname === l.href ? 'text-brand-400' : 'text-white/70'}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all">
            {t.common.langSwitch}
          </button>
          <Link href="/contact" className="hidden md:inline-flex px-5 py-2 text-sm font-medium bg-brand-700 hover:bg-brand-600 text-white rounded-full transition-all">
            {t.nav.contactLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}
