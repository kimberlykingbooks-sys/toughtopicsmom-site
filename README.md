# Tough Topics Mom — Website

Website for [toughtopicsmom.com](https://toughtopicsmom.com), rebuilt on Next.js and hosted on Vercel.

## Tech stack

- [Next.js 14](https://nextjs.org/docs) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Deployed on [Vercel](https://vercel.com/), connected to this GitHub repo — every push to `main` deploys automatically

## Project structure

- `src/app/` — one folder per page/route (e.g. `src/app/about/page.tsx` is the About page)
- `src/components/` — shared pieces used across pages, like `Header.tsx` and `Footer.tsx`
- `src/lib/nav-links.ts` — the list of pages shown in the site navigation; add a page here and it shows up in both the header and footer automatically

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Changes to files under `src/` show up instantly.

## Adding a new page

1. Create a new folder under `src/app/` (e.g. `src/app/faq/`) with a `page.tsx` file inside it.
2. Add the page to `src/lib/nav-links.ts` if it should appear in the site navigation.

## Booking a consultation (Stan)

The header's **Book a Consultation** button opens her Stan 1:1 booking page in a new tab.
Paste that page's link into `STAN_BOOKING_URL` in `src/lib/booking.ts`. Until it's set, the button goes to `/contact`.

Set up in Stan (not in this code): a 60-minute call, available Thursdays 3–5pm Eastern, with Zoom connected so each booking gets its own meeting link.
