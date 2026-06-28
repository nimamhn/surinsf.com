const fs = require('fs');
const path = require('path');
const siteUrl = 'https://surinsf-site.task-malt-juvenile.workers.dev';

const articles = [
  { slug: 'plc-selection-guide', title: 'راهنمای جامع انتخاب PLC صنعتی', excerpt: 'بررسی انواع PLCهای موجود در بازار', date: '2025-06-05', cat: 'اتوماسیون', img: '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'اتوماسیون صنعتی و اینترنت اشیاء', excerpt: 'تحول دیجیتال در صنعت با IIoT', date: '2025-05-20', cat: 'فناوری', img: '/images/blog/iot.jpg' },
  { slug: 'electrical-standards', title: 'استانداردهای بین‌المللی تجهیزات برق', excerpt: 'IEC, NEMA و ISO', date: '2025-04-10', cat: 'استانداردها', img: '/images/blog/standards.jpg' },
  { slug: 'vfd-drives-guide', title: 'راهنمای جامع درایوهای فرکانس متغیر', excerpt: 'کاربردها و مزایای VFD', date: '2025-03-05', cat: 'تجهیزات', img: '/images/blog/vfd.jpg' },
  { slug: 'motor-control-centers', title: 'تابلوهای MCC و کنترل موتور', excerpt: 'اصول طراحی تابلوهای کنترل موتور', date: '2025-02-15', cat: 'تابلو برق', img: '/images/blog/mcc.jpg' },
  { slug: 'power-quality', title: 'کیفیت برق و کاهش هارمونیک‌ها', excerpt: 'روش‌های بهبود کیفیت توان', date: '2025-01-20', cat: 'برق', img: '/images/blog/power-quality.jpg' },
  { slug: 'plc-selection-guide', title: 'Complete Guide to Industrial PLC Selection', excerpt: 'PLC selection criteria', date: '2025-06-05', cat: 'Automation', img: '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'Industrial IoT and Smart Manufacturing', excerpt: 'IIoT technologies', date: '2025-05-20', cat: 'Technology', img: '/images/blog/iot.jpg' },
  { slug: 'electrical-standards-en', title: 'International Electrical Equipment Standards', excerpt: 'IEC, NEMA and ISO', date: '2025-04-10', cat: 'Standards', img: '/images/blog/standards.jpg' },
  { slug: 'vfd-drives-guide', title: 'Complete Guide to Variable Frequency Drives', excerpt: 'VFD benefits and selection', date: '2025-03-05', cat: 'Equipment', img: '/images/blog/vfd.jpg' },
  { slug: 'motor-control-centers', title: 'MCC Panels and Motor Control', excerpt: 'MCC design principles', date: '2025-02-15', cat: 'Switchboard', img: '/images/blog/mcc.jpg' },
  { slug: 'power-quality', title: 'Power Quality and Harmonic Mitigation', excerpt: 'Power quality improvement', date: '2025-01-20', cat: 'Electrical', img: '/images/blog/power-quality.jpg' },
];

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

const items = articles.map(a => `
    <item>
      <title>${esc(a.title)}</title>
      <link>${siteUrl}/blog/${a.slug}</link>
      <guid>${siteUrl}/blog/${a.slug}</guid>
      <description>${esc(a.excerpt)}</description>
      <category>${esc(a.cat)}</category>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <enclosure url="${siteUrl}${a.img}" type="image/jpeg" length="0"/>
    </item>`).join('');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>سورین صنعت فرزان | وبلاگ</title>
    <link>${siteUrl}</link>
    <description>مطالب تخصصی برق صنعتی، اتوماسیون و ابزار دقیق</description>
    <language>fa</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), rss, 'utf-8');
console.log('RSS generated');
