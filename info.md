# سورین صنعت فرزان (Surin Sanat Farzan)

وبسایت رسمی شرکت سورین صنعت فرزان - واردات و صادرات تجهیزات برق صنعتی، اتوماسیون، ابزار دقیق

## تکنولوژی
- Next.js 15 (App Router) با static export
- React 19 + TypeScript
- Tailwind CSS 3
- GSAP برای انیمیشن‌ها
- Three.js برای پس‌زمینه
- Vazirmatn + Inter Font

## شروع

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # خروجی در out/
```

## Deploy
خروجی استاتیک در `out/` - مستقر روی Cloudflare Pages

## SEO
- sitemap.xml (استاتیک در public/)
- robots.txt
- RSS feed (تولید خودکار با generate-rss.js)
- OG Image
- Canonical URL: https://surinsf.com
- Hreflang: fa, en
