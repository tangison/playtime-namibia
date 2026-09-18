# Playtime Namibia

The official website of **The Playtime Sport Development Trust**, a registered
charitable organisation in Walvis Bay, Namibia, empowering youth through sport
since 2015.

This repository is the 2026 rebuild of playtime.com.na: every page, programme,
coach profile, gallery photo and event from the original site, re-engineered as
a fast, accessible, mobile-first app.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + shadcn/ui components
- **Framer Motion** scroll reveals (respects reduced-motion settings)
- No database, no API keys, no environment variables required

## Develop locally

Requires Node.js 20+ (or Bun 1.1+).

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # eslint
```

## Deploy

### Vercel (recommended)

1. In Vercel: **Add New > Project > Import** this repository.
2. The framework preset auto-detects Next.js. No environment variables needed.
3. Add the custom domain `playtime.com.na` under **Settings > Domains**, then
   update DNS at the registrar:
   - Apex: `A 76.76.21.21` (or CNAME to `cname.vercel-dns.com`)
   - `www`: CNAME to `cname.vercel-dns.com`
4. HTTPS certificates are provisioned automatically.

### Netlify

Import the repository; the Next.js runtime is auto-detected. Add the domain
under **Domain settings** and follow the DNS instructions shown there.

## Pages

| Route                            | Content                                            |
| -------------------------------- | -------------------------------------------------- |
| `/`                              | Home: mission, programmes, facilities, stats       |
| `/about`                         | The trust, trustees, philosophy                    |
| `/programmes`                    | Sports codes: soccer, cricket, athletics, multi-sports |
| `/programmes/school-partnerships` | Multi-sports mornings and school football leagues |
| `/facilities`                    | The Hub (Kuisebmond) and Atlantis Sports Club      |
| `/coaches`                       | Coaching team profiles                             |
| `/coaches-corner`                | Coaching drills, lessons and video resources       |
| `/gallery`                       | Photo gallery (29 photos, keyboard-friendly lightbox) |
| `/events`                        | Tournaments and news                               |
| `/partners`                      | Sponsors and international partners                |
| `/get-involved`                  | Volunteering, sponsorship, spreading the word      |
| `/contact`                       | Contact details and form                           |
| `/privacy`                       | Privacy notice                                     |
| `404`                            | Custom not-found page                              |

## Legacy URL redirects

Old Yola-era URLs are configured as permanent 301 redirects in
`next.config.ts`:

| Old URL                        | New URL                          |
| ------------------------------ | -------------------------------- |
| `/about-us`                    | `/about`                         |
| `/sports-codes`                | `/programmes`                    |
| `/school-patnerships` (typo)   | `/programmes/school-partnerships`|
| `/test`                        | `/partners`                      |
| `/coaches-corner-2`            | `/coaches-corner`                |
| `/contact-us`                  | `/contact`                       |

## Performance and accessibility

- Images served as WebP (30.5 MB of original assets re-encoded to 4.1 MB),
  lazy-loaded below the fold, hero preloaded with high fetch priority
- Sub-500 KB page weight on 3G connections
- WCAG AA contrast, full keyboard navigation, visible focus states,
  skip-to-content link, alt text on every image, 44 px touch targets
- Unique meta titles, descriptions and canonical URLs per page; Open Graph
  and Twitter cards; NGO and SportsEvent JSON-LD structured data
- Security headers: HSTS, X-Frame-Options, nosniff, Referrer-Policy,
  Permissions-Policy
- `robots.txt`, `sitemap.xml` and web manifest generated at build time

## Contact form

The form uses a honeypot field and opens a pre-addressed email to
info@playtime.com.na, so it carries zero third-party weight. To route
submissions into an inbox without opening a mail client, plug Formspree or
Resend into `src/components/contact-form.tsx`.

## Updating content

- Site-wide details (phone, email, address, socials, sponsor list, nav) live
  in `src/lib/site.ts`.
- Page copy lives in each route under `src/app/`.
- Images live in `public/images/` (WebP recommended; keep files under 200 KB).

## Loading splash

The site opens with a short branded splash on a visitor’s first page view of
a session: the Playtime logo, the tagline, and a progress bar. It is
server-rendered into the HTML (no flash of content), driven by a small inline
script that runs before paint, shown once per session, and skipped entirely
for `prefers-reduced-motion` users. It lives in
`src/components/site-splash.tsx`; remove the `<SiteSplash />` line in
`src/app/layout.tsx` to turn it off.

## Credits

Made by [Tangison Studio](https://studio.tangison.com).

Copyright © The Playtime Sport Development Trust. All rights reserved.
