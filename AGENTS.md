<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Kaplun Landing Page — Agent Guide

## Project Identity
- **Kaplun.tech** — AI Creator-Led Growth Partner (micro-influencer agency landing page)
- **Inspiration:** Clay.com design system (cream canvas, claymation 3D aesthetic, tinted feature bands)
- **Not a Next.js tutorial app** — this is a production-in-progress marketing site

## Tech Stack
- **Framework:** Next.js 15+ (App Router) — read breaking changes docs in `node_modules/next/dist/docs/` before coding
- **Language:** Plain JSX/JS (no TypeScript — do not add TS files or types)
- **Styling:** Tailwind CSS v4 + `app/globals.css` custom properties (`--clay-*` design tokens)
- **State:** React hooks only (useState, useEffect, useRef, useCallback)
- **Bundler:** Next.js built-in (Turbopack in dev)

## Project Structure
```
app/
  page.jsx          — Main landing page (single page, sections composed here)
  layout.jsx        — Root layout (font loading, metadata, globals.css import)
  globals.css       — Design tokens + Tailwind + clay system CSS
  components/       — All components (ClayHero, WaitlistModal, BentoMarquee, bands, etc.)
  api/              — API routes (waitlist email submission)
public/
  media/            — Video assets (webm/mp4 for hero, bands, case studies)
  images/           — Static images, logos, social icons
```

## Design System (see DESIGN.md)
- All visual tokens live in `app/globals.css` as `--clay-*` CSS custom properties
- Key token categories: surfaces, borders, ink/body text, badge accents, band tints, gradients, radii, spacing, motion
- Most components use Tailwind utility classes directly (not CSS variables)
- Exceptions: `WaitlistModal` uses inline styles referencing `var(--clay-*)` variables
- Radii: `--clay-rounded-md: 14px` (buttons/inputs), `--clay-rounded-xl: 28px` (feature bands)
- Motion: `--clay-ease-out`, `--clay-ease-deck`, `--clay-ease-spring` cubic-bezier tokens

## Key Components
| Component | File | Purpose |
|---|---|---|
| ClayHero | `app/components/ClayHero.jsx` | Full-bleed dark green hero with video, h1, CTAs |
| WaitlistModal | `app/components/WaitlistModal.jsx` | Email capture modal with loading/success/error states |
| BentoMarquee | `app/components/BentoMarquee.jsx` | Infinite horizontal stat/quote marquee |
| BandSection | `app/components/BandSection.jsx` | Tinted feature band (discovery/seeding/campaigns/amplification) |
| TabSection | `app/components/TabSection.jsx` | 7-tab feature switcher with product-UI mock panels |

## Coding Conventions
- Use `'use client'` only when hooks, state, or browser APIs are needed
- Server components by default (page.jsx, layout.jsx)
- No TypeScript — all files are `.jsx` or `.js`
- No `console.log` in production code — use `console.warn` for dev diagnostics
- No third-party UI libraries — all components hand-built with Tailwind
- Event handlers: use `useCallback` for handlers passed as props
- Image/video assets: use `<video>` for webm/mp4 (not Next.js Image), `<Image>` from `next/image` for static PNGs
- SVG inline or as `<Image>` component

## Running & Building
```bash
# Dev server (port 3000, Turbopack)
bun run dev

# Production build
bun run build

# Lint
bun run lint
```

## When Working Here
1. Always check `CLAUDE.md` + `AGENTS.md` + `DESIGN.md` first for context
2. Read `app/globals.css` before adding new design tokens — prefer existing `--clay-*` variables
3. Match existing component patterns (Tailwind classes, event handler naming, file structure)
4. Keep the design consistent with the clay-theme (cream canvas `--clay-canvas`, ink type `--clay-ink`, rounded bands)
5. Never add TypeScript, never add third-party UI libraries, never add redundant state management
6. If the build fails, check `node_modules/next/dist/docs/` for breaking API changes first
