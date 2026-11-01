# Al Badar Quran Institute website

A Next.js App Router website using the existing copied site template and Al Badar Quran Institute content. Page composition remains in `app/`; reusable layouts, sections, cards and controls remain in `components/`; editable content remains in `data/`.

## Routes

`/`, `/about`, `/services`, `/courses`, `/blog`, `/media`, and `/contact`. The site also includes a custom 404 page, loading and error states, `/sitemap.xml`, `/robots.txt`, and a contact API route.

## Content

Course subjects and other unverified items are clearly marked as pending. Update `data/company.ts` for the legal name, phone, email and addresses; `data/pages.ts` for page copy and CTAs; and the remaining `data/` files for approved courses, services, team, articles, programmes, media, resources, FAQs and social links. The public asset folders are ready for approved images and recordings. The two supplied logos are in `public/assets/brand/`.

The homepage hero image in `public/assets/home/images/hero-architecture.png` is generated conceptual imagery, not a photograph of the center. Its path is configured in `data/pages.ts`.

## Configuration

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to the verified public origin before deployment; canonical URLs, sitemap entries and organization structured data use it. The contact form requires a separately authorized and configured delivery service. Its route currently returns an unavailable response without transmitting enquiries.

Run `npm ci`, then `npm run dev` for local development. Use `npm run lint`, `npm run typecheck`, and `npm run build` to verify changes.
