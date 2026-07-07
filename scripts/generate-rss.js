const fs = require('fs');
const path = require('path');
const siteUrl = 'https://surinsf.com';

const ghRaw = 'https://raw.githubusercontent.com/nimamhn/surinsf.com/main/public';
const articles = [
  { slug: 'plc-selection-guide', title: 'Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø¬Ø§Ù…Ø¹ Ø§Ù†ØªØ®Ø§Ø¨ PLC ØµÙ†Ø¹ØªÛŒ', excerpt: 'Ø¨Ø±Ø±Ø³ÛŒ Ø§Ù†ÙˆØ§Ø¹ PLCÙ‡Ø§ÛŒ Ù…ÙˆØ¬ÙˆØ¯ Ø¯Ø± Ø¨Ø§Ø²Ø§Ø±', date: '2025-06-05', cat: 'Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ†', img: ghRaw + '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† ØµÙ†Ø¹ØªÛŒ Ùˆ Ø§ÛŒÙ†ØªØ±Ù†Øª Ø§Ø´ÛŒØ§Ø¡', excerpt: 'ØªØ­ÙˆÙ„ Ø¯ÛŒØ¬ÛŒØªØ§Ù„ Ø¯Ø± ØµÙ†Ø¹Øª Ø¨Ø§ IIoT', date: '2025-05-20', cat: 'ÙÙ†Ø§ÙˆØ±ÛŒ', img: ghRaw + '/images/blog/iot.jpg' },
  { slug: 'electrical-standards', title: 'Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§ÛŒ Ø¨ÛŒÙ†â€ŒØ§Ù„Ù…Ù„Ù„ÛŒ ØªØ¬Ù‡ÛŒØ²Ø§Øª Ø¨Ø±Ù‚', excerpt: 'IEC, NEMA Ùˆ ISO', date: '2025-04-10', cat: 'Ø§Ø³ØªØ§Ù†Ø¯Ø§Ø±Ø¯Ù‡Ø§', img: ghRaw + '/images/blog/standards.jpg' },
  { slug: 'vfd-drives-guide', title: 'Ø±Ø§Ù‡Ù†Ù…Ø§ÛŒ Ø¬Ø§Ù…Ø¹ Ø¯Ø±Ø§ÛŒÙˆÙ‡Ø§ÛŒ ÙØ±Ú©Ø§Ù†Ø³ Ù…ØªØºÛŒØ±', excerpt: 'Ú©Ø§Ø±Ø¨Ø±Ø¯Ù‡Ø§ Ùˆ Ù…Ø²Ø§ÛŒØ§ÛŒ VFD', date: '2025-03-05', cat: 'ØªØ¬Ù‡ÛŒØ²Ø§Øª', img: ghRaw + '/images/blog/vfd.jpg' },
  { slug: 'motor-control-centers', title: 'ØªØ§Ø¨Ù„ÙˆÙ‡Ø§ÛŒ MCC Ùˆ Ú©Ù†ØªØ±Ù„ Ù…ÙˆØªÙˆØ±', excerpt: 'Ø§ØµÙˆÙ„ Ø·Ø±Ø§Ø­ÛŒ ØªØ§Ø¨Ù„ÙˆÙ‡Ø§ÛŒ Ú©Ù†ØªØ±Ù„ Ù…ÙˆØªÙˆØ±', date: '2025-02-15', cat: 'ØªØ§Ø¨Ù„Ùˆ Ø¨Ø±Ù‚', img: ghRaw + '/images/blog/mcc.jpg' },
  { slug: 'power-quality', title: 'Ú©ÛŒÙÛŒØª Ø¨Ø±Ù‚ Ùˆ Ú©Ø§Ù‡Ø´ Ù‡Ø§Ø±Ù…ÙˆÙ†ÛŒÚ©â€ŒÙ‡Ø§', excerpt: 'Ø±ÙˆØ´â€ŒÙ‡Ø§ÛŒ Ø¨Ù‡Ø¨ÙˆØ¯ Ú©ÛŒÙÛŒØª ØªÙˆØ§Ù†', date: '2025-01-20', cat: 'Ø¨Ø±Ù‚', img: ghRaw + '/images/blog/power-quality.jpg' },
  { slug: 'plc-selection-guide', title: 'Complete Guide to Industrial PLC Selection', excerpt: 'PLC selection criteria', date: '2025-06-05', cat: 'Automation', img: ghRaw + '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'Industrial IoT and Smart Manufacturing', excerpt: 'IIoT technologies', date: '2025-05-20', cat: 'Technology', img: ghRaw + '/images/blog/iot.jpg' },
  { slug: 'electrical-standards-en', title: 'International Electrical Equipment Standards', excerpt: 'IEC, NEMA and ISO', date: '2025-04-10', cat: 'Standards', img: ghRaw + '/images/blog/standards.jpg' },
  { slug: 'vfd-drives-guide', title: 'Complete Guide to Variable Frequency Drives', excerpt: 'VFD benefits and selection', date: '2025-03-05', cat: 'Equipment', img: ghRaw + '/images/blog/vfd.jpg' },
  { slug: 'motor-control-centers', title: 'MCC Panels and Motor Control', excerpt: 'MCC design principles', date: '2025-02-15', cat: 'Switchboard', img: ghRaw + '/images/blog/mcc.jpg' },
  { slug: 'power-quality', title: 'Power Quality and Harmonic Mitigation', excerpt: 'Power quality improvement', date: '2025-01-20', cat: 'Electrical', img: ghRaw + '/images/blog/power-quality.jpg' },
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
      <enclosure url="${a.img}" type="image/jpeg" length="0"/>
    </item>`).join('');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ø³ÙˆØ±ÛŒÙ† ØµÙ†Ø¹Øª ÙØ±Ø²Ø§Ù† | ÙˆØ¨Ù„Ø§Ú¯</title>
    <link>${siteUrl}</link>
    <description>Ù…Ø·Ø§Ù„Ø¨ ØªØ®ØµØµÛŒ Ø¨Ø±Ù‚ ØµÙ†Ø¹ØªÛŒØŒ Ø§ØªÙˆÙ…Ø§Ø³ÛŒÙˆÙ† Ùˆ Ø§Ø¨Ø²Ø§Ø± Ø¯Ù‚ÛŒÙ‚</description>
    <language>fa</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), rss, 'utf-8');
console.log('RSS generated');


