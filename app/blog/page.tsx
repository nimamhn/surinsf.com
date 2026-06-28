'use client';

import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.blog.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.blog.title}</h1>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-4">
          {t.blog.articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <article className="glass rounded-2xl overflow-hidden group hover:border-brand-700/40 transition-all duration-500">
                <div className="aspect-video bg-gradient-to-br from-brand-900/20 to-surface-lighter" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-brand-400">{a.cat}</span>
                    <span className="text-xs text-white/30">{a.date}</span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-brand-400 transition-colors">{a.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.blog.label} <ArrowRight size={14} />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
