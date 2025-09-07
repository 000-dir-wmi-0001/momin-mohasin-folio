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
- axios for API requests

### Features
- Responsive Hero with animated image and CTAs
- Header with active link highlighting and mobile dropdown menu
- Distinct Footer with CTA, tech stack chips, status, socials, and client-only local time
- About page: profile card, skills (badges), and quick stats
- Services grid using shadcn Card components
- Contact page with validation, honeypot spam trap, a11y hints, and API submission

### Project structure (highlights)
- `app/page.tsx` — Home: Hero + Services
- `app/about/page.tsx` — About section
- `app/experience/page.tsx` — Experience cards
- `app/projects/page.tsx` — Projects listing (skeleton placeholder if empty)
- `app/contact/page.tsx` — Contact form (react-hook-form)
- `components/layout/Header.tsx` — Sticky header, active nav, theme toggle
- `components/layout/Footer.tsx` — CTA + status + socials with smooth back-to-top
- `components/Hero.tsx` — Responsive hero with Motion animations
- `components/Services.tsx` — Services grid (shadcn Card)
- `api/api.ts` — Client helper using axios
- `config/axios.ts` — Axios instance (optional base URL, interceptors)

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
The axios client reads an optional base URL:

```
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

- If `NEXT_PUBLIC_API_URL` is set, requests will be sent to that base (e.g., `http://localhost:3001`).
- If not set, axios posts to relative paths on the same origin.

### Resume download
Place your resume file at `public/resume.pdf` or update the link in:
- `components/Hero.tsx`
- `app/about/page.tsx`

## Contact form API
The contact page submits to an API via `axios`:

- Client helper: `api/api.ts`
- Endpoint (configurable by base URL): `POST /v1/contact/create`

Expected JSON body shape:
```json
{
	"name": "Your Name",
	"email": "you@example.com",
	"subject": "Optional subject",
	"message": "Your message",
	"website": "" // honeypot: leave empty
}
```

Back-end should return a 2xx response on success. Update the path/base URL as needed for your server.

## Notes
- Footer local time is rendered client-side after mount to avoid hydration mismatches.
- Animations use Motion (Framer Motion v12 API) with simple stagger/slide effects.

## License
Personal project. No license specified.
