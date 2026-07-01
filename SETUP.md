# Mahnoor Gul Portfolio — Setup Guide

## Quick Start

```bash
cd mahnoor-portfolio
npm install
npm run dev
```

Open http://localhost:3000

---

## First: Replace Your Assets

### 1. YOUR PHOTO
Drop your professional photo here:
→ public/images/about/mahnoor-photo.webp

### 2. HERO VIDEO LOOP
A dark, cinematic 8–20 second silent clip from your thesis film or teaser:
→ public/videos/hero-background-loop.mp4
→ public/images/hero/hero-background-fallback.webp  (single frame fallback)

### 3. SHOWREEL
Update Vimeo URLs in src/lib/data.ts:
→ showreelData.masterReel.vimeoUrl
→ showreelData.animationReel.vimeoUrl (optional)
→ Drop poster image: public/images/hero/showreel-poster.webp

### 4. THESIS FILM
→ Update thesisFilm.vimeoUrl in src/lib/data.ts
→ public/images/projects/thesis/thesis-hero.webp
→ public/images/projects/thesis/thesis-thumbnail.webp
→ public/images/projects/thesis/thesis-still-01.webp through thesis-still-04.webp

### 5. ALL PROJECT THUMBNAILS & PREVIEWS
→ public/images/projects/3d/    (thumbnails)
→ public/images/projects/2d/    (thumbnails)
→ public/images/projects/motion/ (thumbnails)
→ public/videos/3d/             (5–10s silent preview loops)
→ public/videos/2d/             (5–10s silent preview loops)
→ public/videos/motion/         (5–10s silent preview loops)

### 6. ILLUSTRATIONS
→ public/images/projects/illustration/illus-01.webp ... illus-16.webp

### 7. CHARACTER DESIGN
→ public/images/projects/character/char-jackson-turnaround.webp
→ public/images/projects/character/char-jackson-expressions.webp
→ public/images/projects/character/char-jackson-thumbnail.webp

### 8. BRANDING
→ public/images/projects/branding/brand-01-card.webp
→ public/images/projects/branding/brand-01-full-01.webp (full package images)

### 9. EXPERIENCE LETTERS
→ public/certs/cert-experience-figment.pdf
→ public/certs/cert-experience-etribe.pdf

---

## Update Your Text Content

All text, links, and project data lives in ONE file:
→ src/lib/data.ts

Search for "REPLACE" — every placeholder is marked.

Key fields to update:
- siteConfig.instagram / .behance / .linkedin
- experience[].period (add your actual internship dates)
- education.university (your university name)
- thesisFilm.title (your thesis film's actual title)
- All project titles and descriptions

---

## Deploy to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import from GitHub
3. Vercel auto-detects Next.js — click Deploy
4. Your site is live at yourname.vercel.app

Custom domain: Add mahnoorgul.com in Vercel → Domains settings.

---

## File Structure

```
src/
├── app/                    ← All pages
│   ├── page.tsx            ← Homepage
│   ├── about/page.tsx
│   ├── thesis/page.tsx
│   ├── 2d-animation/page.tsx
│   ├── 3d-animation/page.tsx
│   ├── motion-graphics/page.tsx
│   ├── illustration/page.tsx
│   ├── character-design/page.tsx
│   ├── branding/page.tsx
│   ├── experience/page.tsx
│   ├── contact/page.tsx
│   └── work/page.tsx       ← All work index
├── components/
│   ├── layout/             ← Navigation, Footer
│   ├── sections/           ← Page sections
│   └── ui/                 ← Reusable components
└── lib/
    └── data.ts             ← ALL your content lives here
```
