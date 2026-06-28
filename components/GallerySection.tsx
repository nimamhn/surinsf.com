'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from './ScrollReveal';

export default function GallerySection() {
  const { t } = useI18n();
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.gallery.label}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3">{t.gallery.title}</h2>
          </div>
        </ScrollReveal>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {t.gallery.items.map((g, i) => (
            <ScrollReveal key={g.title} delay={i * 0.06}>
              <div className="glass rounded-2xl overflow-hidden break-inside-avoid group hover:border-brand-700/40 transition-all duration-500">
                <img src={g.img} alt={g.title} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="p-4">
                  <span className="text-xs text-brand-400">{g.cat}</span>
                  <p className="text-sm font-medium mt-1">{g.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
