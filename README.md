## Momin Mohasin — Developer Portfolio

A modern, responsive portfolio built with Next.js App Router. It showcases a hero section, services, about, experience, projects, and a functional contact form.

### Tech stack
- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- shadcn/ui (Button, Card, Avatar, DropdownMenu, etc.)
- Motion (Framer Motion v12 API) for animations
- lucide-react icons
- next-themes for theme toggle
- react-hook-form for contact form
- Web3Forms for contact form submission (no backend required)

### Features
- Responsive Hero with animated image and CTAs
- Header with active link highlighting and mobile dropdown menu
- Distinct Footer with CTA, tech stack chips, status, socials, and client-only local time
- About page: profile card, skills (badges), and quick stats
- Services grid using shadcn Card components
- Contact page with validation, honeypot spam trap, a11y hints, and Web3Forms submission

### Project structure (highlights)
- `app/page.tsx` — Home: Hero + Services
- `app/about/page.tsx` — About section
- `app/experience/page.tsx` — Experience cards
- `app/projects/page.tsx` — Projects listing (skeleton placeholder if empty)
- `app/contact/page.tsx` — Contact form (react-hook-form + Web3Forms)
- `components/layout/Header.tsx` — Sticky header, active nav, theme toggle
- `components/layout/Footer.tsx` — CTA + status + socials with smooth back-to-top
- `components/Hero.tsx` — Responsive hero with Motion animations
- `components/Services.tsx` — Services grid (shadcn Card)

## Getting started

### Prerequisites
- Node.js 18+ and a package manager (pnpm recommended)

### Install dependencies
```bash
pnpm install
# or
npm install
```

### Development
```bash
pnpm dev
# or
npm run dev
```
Open http://localhost:3000 in your browser.

### Build and start
```bash
pnpm build && pnpm start
# or
npm run build && npm start
```

## Configuration

### Environment variables
The contact form submits directly to [Web3Forms](https://web3forms.com) from the browser and needs an access key:

```
# .env.local
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

Get a free access key at <https://web3forms.com> — no backend required.

### Resume download
Place your resume file at `public/resume.pdf` or update the link in:
- `components/Hero.tsx`
- `app/about/page.tsx`

## Contact form submission

The contact page (`app/contact/ContactClient.tsx`) submits directly to Web3Forms — no backend server needed:

- Endpoint: `POST https://api.web3forms.com/submit`
- Access key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (see [Environment variables](#environment-variables))
- A client-side honeypot field (`website`) silently no-ops the submission if filled, without alerting bots.

Web3Forms returns `{ success: boolean, message: string }`, which drives the success/error banner shown to the user.

## Notes
- Footer local time is rendered client-side after mount to avoid hydration mismatches.
- Animations use Motion (Framer Motion v12 API) with simple stagger/slide effects.

## License
Personal project. No license specified.
