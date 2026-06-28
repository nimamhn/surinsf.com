'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';

export default function ServicesPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.services.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.services.title}</h1>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4">
          {t.services.items.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="glass p-10 rounded-2xl hover:border-brand-700/40 hover:bg-white/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-brand-700/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-brand-400" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>
                <p className="text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
