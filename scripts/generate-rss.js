const fs = require('fs');
const path = require('path');

const siteUrl = 'https://surinsf-site.task-malt-juvenile.workers.dev';

const fa = {
  articles: [
    { title: 'راهنمای جامع انتخاب PLC صنعتی', excerpt: 'بررسی انواع PLCهای موجود در بازار و نکات مهم در انتخاب مناسب‌ترین گزینه برای خط تولید شما', date: '2025-06-05', cat: 'اتوماسیون', img: '/images/blog/plc.jpg' },
    { title: 'اتوماسیون صنعتی و اینترنت اشیاء', excerpt: 'تحول دیجیتال در صنعت با ترکیب اتوماسیون سنتی و فناوری‌های نوین IIoT', date: '2025-05-20', cat: 'فناوری', img: '/images/blog/iot.jpg' },
    { title: 'استانداردهای بین‌المللی تجهیزات برق', excerpt: 'آشنایی با مهم‌ترین استانداردهای IEC، NEMA و ISO در حوزه تجهیزات برق صنعتی', date: '2025-04-10', cat: 'استانداردها', img: '/images/blog/standards.jpg' },
  ],
};

const en = {
  articles: [
    { title: 'Complete Guide to Industrial PLC Selection', excerpt: 'Review of available PLCs and key selection criteria for your production line', date: '2025-06-05', cat: 'Automation', img: '/images/blog/plc.jpg' },
    { title: 'Industrial IoT and Smart Manufacturing', excerpt: 'Digital transformation combining traditional automation with IIoT technologies', date: '2025-05-20', cat: 'Technology', img: '/images/blog/iot.jpg' },
    { title: 'International Electrical Equipment Standards', excerpt: 'Overview of IEC, NEMA and ISO standards for industrial electrical equipment', date: '2025-04-10', cat: 'Standards', img: '/images/blog/standards.jpg' },
  ],
};

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function buildRss(lang, articles, title, desc) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${siteUrl}/${lang === 'fa' ? '' : lang}</link>
    <description>${escapeXml(desc)}</description>
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles.map(a => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${siteUrl}/${lang === 'fa' ? '' : lang}/blog</link>
      <guid>${siteUrl}/${lang === 'fa' ? '' : lang}/blog#${escapeXml(a.title)}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <category>${escapeXml(a.cat)}</category>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <media:content url="${siteUrl}${a.img}" medium="image"/>
    </item>
    `).join('')}
  </channel>
</rss>`;
}

const rssFa = buildRss('fa', fa.articles, 'سورین صنعت فرزان | وبلاگ', 'مطالب تخصصی در حوزه برق صنعتی، اتوماسیون و ابزار دقیق');
const rssEn = buildRss('en', en.articles, 'Surin Sanat Farzan | Blog', 'Expert articles on industrial electrical, automation and instrumentation');

const combinedRss = rssFa.replace('</channel>\n</rss>', '') + rssEn.replace('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">\n  <channel>\n', '');

const outPath = path.join(__dirname, '..', 'public', 'rss.xml');
fs.writeFileSync(outPath, combinedRss, 'utf-8');
console.log('✅ RSS feed generated: public/rss.xml');
