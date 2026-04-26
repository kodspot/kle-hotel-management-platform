# KLE Hotel Management Landing Page

An ultra-premium, conversion-focused admissions landing page built with Next.js App Router, Tailwind CSS v4, GSAP, Framer Motion, Lenis smooth scroll, and Supabase.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Framer Motion
- Lenis smooth scrolling
- Supabase (lead storage)

## Features

- Fullscreen hero with video background and GSAP intro timeline
- Section storytelling with GSAP ScrollTrigger reveals
- Subtle parallax motion for visual depth
- Modular sections: About, Courses, Placements, CTA
- Framer Motion modal form for admissions
- Backend API route for storing leads in Supabase
- WhatsApp redirect with prefilled applicant message
- Premium loading screen and responsive layout
- Remote image optimization and modern image formats (WebP/AVIF)

## Project Structure

```text
src/
	app/
		api/admissions/route.ts      # Supabase lead insert endpoint
		globals.css                  # Theme, typography, global styles
		layout.tsx                   # Metadata and font setup
		page.tsx                     # Landing entry
	components/landing/
		AboutSection.tsx
		AdmissionModal.tsx
		CoursesSection.tsx
		CtaSection.tsx
		HeroSection.tsx
		LandingPage.tsx
		LoadingScreen.tsx
		PlacementsSection.tsx
		SectionShell.tsx
	data/content.ts                # Reusable content data
	hooks/
		useGsapIntro.ts
		useGsapReveal.ts
		useLenisSmoothScroll.ts
	lib/
		supabase.ts
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Add your Supabase values in `.env.local`:

```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

4. Run the app:

```bash
npm run dev
```

## Supabase Table Example

Run this SQL in Supabase to create the admissions table:

```sql
create table if not exists public.admission_leads (
	id bigint generated always as identity primary key,
	name text not null,
	phone text not null,
	course text not null,
	source text default 'landing-page',
	created_at timestamptz default now()
);
```

## Notes for Production

- Replace demo WhatsApp number in `src/data/content.ts`
- Replace hero video source with your own compressed file if needed
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only and never expose it in client code
- Use CDN and caching headers for media-heavy assets

## WhatsApp Campaign Entry Link

Use this format when sharing admissions link on WhatsApp:

```text
https://your-domain.com/?src=wa&apply=1
```

Behavior:

- Opens the premium multi-step form automatically after initial load
- Tags submissions with `source = whatsapp-link`
- Continues to WhatsApp chat after successful form submit
