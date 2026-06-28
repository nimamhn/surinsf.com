'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Lang, T } from './types';
import { fa } from './fa';
import { en } from './en';

interface Ctx { lang: Lang; t: T; setLang: (l: Lang) => void; toggleLang: () => void; dir: 'rtl' | 'ltr' }

const C = createContext<Ctx | null>(null);
const dict: Record<Lang, T> = { fa, en };

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, set] = useState<Lang>('fa');
  const setLang = useCallback((l: Lang) => { set(l); document.documentElement.lang = l; document.documentElement.dir = l === 'fa' ? 'rtl' : 'ltr'; }, []);
  const toggleLang = useCallback(() => setLang(lang === 'fa' ? 'en' : 'fa'), [lang, setLang]);
  return <C.Provider value={{ lang, t: dict[lang], setLang, toggleLang, dir: lang === 'fa' ? 'rtl' : 'ltr' }}>{children}</C.Provider>;
}

export function useI18n() { const c = useContext(C); if (!c) throw new Error('useI18n outside LangProvider'); return c; }
