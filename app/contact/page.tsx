'use client';

import { useState } from 'react';
import { useI18n } from '@/i18n';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-widest text-brand-400 uppercase">{t.contact.label}</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">{t.contact.title}</h1>
            <p className="text-white/50 mt-4">{t.contact.subtitle}</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: t.contact.info.address, title: t.contact.form.name },
                { icon: Phone, label: t.contact.info.phone, title: 'Phone' },
                { icon: Mail, label: t.contact.info.email, title: 'Email' },
                { icon: Clock, label: t.contact.info.hours, title: 'Hours' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-700/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-brand-400" />
                  </div>
                  <div>
                    <p className="text-white/70" dir={i === 2 ? 'ltr' : undefined}>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            {sent ? (
              <div className="glass p-8 rounded-2xl text-center">
                <p className="text-lg text-brand-400">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <input type="text" placeholder={t.contact.form.name} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" required />
                <input type="email" placeholder={t.contact.form.email} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" required />
                <input type="tel" placeholder={t.contact.form.phone} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors" />
                <textarea placeholder={t.contact.form.message} rows={4} className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 transition-colors resize-none" required />
                <button type="submit" className="w-full px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                  <Send size={16} /> {t.contact.form.submit}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
