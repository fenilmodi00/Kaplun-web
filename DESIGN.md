# Clay.com Design System & Specifications

## 0. Runtime Verification (extracted live from clay.com via Playwright, 2026-07-22)

This section overrides older reference material below wherever they conflict. Extracted from the live site with getComputedStyle + full-page screenshot + DOM snapshot.

### 0.1 Verified typography (current site)

- **Font family (everything):** `Roobertvf` (variable), fallback `Arial, sans-serif`. Roobert is licensed — our free substitute is **Nunito** (Google Fonts) for display headlines (rounded terminals, same warmth) and **Inter** for body/UI. Display substitute: Nunito 700 with matching negative tracking.
- **h1 (hero):** 88px / weight 575 / line-height 1.0 / letter-spacing -3.52px / color `rgb(254,253,251)` (near-white — hero is DARK).
- **h2 (section):** 72px / 500 / -2.16px / black. Secondary h2 (CTA band): 44px / 500 / -0.88px / line-height 1.1.
- **h3 (band titles):** 48px / 500 / -1.92px / line-height 1.0. Color is TINTED per band: black on white, `rgb(0,20,51)` navy on blue band, `rgb(56,16,5)` brown on orange band (dark-tinted text matching band hue).
- **Buttons:** font 13.92px / 500 / ls -0.14px / radius 12px / padding 8px 16px / height ~38.5px / border 0.8px. Primary = black bg white text; secondary = `#f3f2ed` bg black text.

### 0.2 Verified hero structure (BIGGEST DELTA from old clone)

The hero is a **full-bleed dark green band** (`rgb(3,93,68)` = #035D44), containing:
1. The claymation contraption video/scene across the top (wide 2:1 scene, green hills + blue sky).
2. Bottom-left: near-white h1 "Build systems to grow revenue" (88px).
3. Bottom-right: sub-paragraph (white) + two CTAs (primary black pill-ish rounded-12, secondary cream #f3f2ed).
4. "Latest launch:" pill link above the h1.
Nav sits on top: white/cream bar, fixed, ~85% width, rounded bottom corners, 58.6px tall.

### 0.3 Verified section map (page order)

1. **Nav** — logo left; Product/Use Cases/Solutions/Resources/Company/Pricing center; ⌘K, Log in, Get a demo, Start free trial right.
2. **Hero** — dark green #035D44, video scene, h1 + sub + dual CTA.
3. **Social proof** — cream band: "Trusted by more than 500,000+..." line with inline links, logo cloud (ramp, stripe, Figma, Uber, OpenAI…), then a **scrolling bento of stat/quote cards** (duplicated DOM ×3 = infinite marquee: Figma quote, OpenAI quote, +140% Intercom, 80%+ Vanta, Anthropic 3x, Rippling 2x, Verkada 3x, ElevenLabs +50%).
4. **Tab section** — h2 "GTM engineers build on Clay" (72px black on white), sub "Find every account in your TAM in one place.", 7 pill tabs (TAM Sourcing, Automated Inbound, Lead Scoring, Automated Outbound, CRM Enrichment, Launch Ads, Rep Productivity), large product-UI panel below that swaps per tab (blue-tinted backdrop card).
5. **AI prompt widget** — h3 "What do you want to build?" (48px) on cream, large input card with placeholder prompt, preset pills (Find people/company/jobs data), black submit.
6. **4 tinted feature bands** — full-width rounded bands, each: small caps label chip, tinted 48px h3, paragraph, proof strip (2-3 logos + one customer stat sentence), CTA row (colored "Start free trial" button matching band hue + text link), claymation video/image on the right:
   - DATA — light blue bg, navy text, blue button. ("Get data from the most complete data marketplace")
   - AGENTS — light orange bg, brown text, orange button. ("Create agents who mimic your best reps")
   - ORCHESTRATION — light green bg, dark-green text, green button. ("Orchestrate workflows across tools in real time")
   - EXECUTION — light pink bg, maroon text, pink button. ("Launch new plays as fast as you have ideas")
7. **Infrastructure band** — label "GTM INFRASTRUCTURE", h3 "Build systems that make reps more productive", chat-UI mock, Terrapinn stat card, cream CTA band card on white.
8. **Case studies** — h3 "Hear from the teams that grow with Clay", 3 cards: Hex case card, video player card (3:30 customer video), Verkada EMEA card (image + "Read case study").
9. **Resources grid** — h3 "Learn more about GTM engineering", 6 mixed cards (conference CTA, university card w/ claymation, livestream, 2 community stories w/ photos, careers card).
10. **CTA band** — "Turn your growth ideas into reality today" (44px) + "Start for free today. No credit card required." + dual CTA, on white/cream.
11. **Footer** — cream #faf5e8, 7 link columns (Use cases, Product, Blog, Resources, Company, Customers, Legal), big logo bottom-left, "Born in Brooklyn" + "©2026 Clay Labs Inc.", social icons bottom-right.

### 0.4 Media asset map (local files in `public/media/`)

| File | Spec | Content | Assignment |
|---|---|---|---|
| `hero-contraption.webm` (+ `.mp4` fallback 12.9MB) | 3000×1500, 17s | Claymation contraption on green hills under blue sky (funnel, pipe, magnifier, mailbox, bar chart) | **Hero video** — autoplay muted loop playsinline |
| `magnifier.webm` | 1000×1000, 8s | Blue magnifying-glass contraption with red ball on cream | **Discovery (blue) band** visual |
| `shapes-tower.webm` (+ `.mp4`) | 1920×1080, 6s | Colorful clay shapes balancing on pedestal, mascot characters on ladders, blue bg | **Case-study video card** preview loop |
| (not copied) 73MB logo video | 1920×1080, 210s | Clay logo brand video | EXCLUDED — Clay trademark, never ship |

### 0.5 Kaplun copy deck (micro-influencer agency — final copy)

- **Hero pill:** "NEW: AI CREATOR MATCHING" → #services
- **H1:** "Build systems to grow with creators"
- **Hero sub:** "Infrastructure to source micro-influencers, launch seeding programs, and scale creator-led growth."
- **CTAs:** "Join the waitlist" (primary → waitlist modal) · "Get a demo" (secondary → waitlist modal)
- **Proof line:** "Trusted by 120+ DTC brands and consumer startups. Inspired by our customers. Built with love."
- **Bento stats:** +184% creator-sourced revenue · 24h creator shortlists · 3.2x avg. ROAS on creator ads · 85% creator response rate · 500+ campaigns shipped · 40M+ creator-driven impressions. Quotes from 3 fictional founders (Nūrio, Bloom & Co., Velvet Skincare).
- **Tabs (7):** Creator Sourcing · Product Seeding · Affiliates · UGC Content · Creator Ads · Whitelisting · Analytics. Panel per tab = styled product-UI mock (table/card fragments, no real screenshots).
- **AI widget:** h3 "What creators do you want to source?" presets: "Find skincare creators" · "Find fitness creators" · "Find food creators".
- **Bands:**
  - DISCOVERY (blue) — "Source creators from the most complete influencer graph" — magnifier.webm — stat: "Nūrio cut creator discovery from 3 weeks to 2 days."
  - SEEDING (orange) — "Run seeding programs that ship themselves" — stat: "Bloom & Co. seeded 1,200 creators in one quarter with a team of two."
  - CAMPAIGNS (green) — "Orchestrate every campaign in one place" — stat: "Halcyon runs 40+ live campaigns without a single spreadsheet."
  - AMPLIFICATION (pink) — "Turn winning posts into paid growth" — stat: "Velvet Skincare scaled creator ads to 3.8x ROAS."
- **Infra band:** label "CREATOR INFRASTRUCTURE" — "Build systems that make your team more productive" — chat mock prompt: "Which skincare micro-creators have >8% engagement this month?" — stat: "Terrapin generates +32% more revenue per marketer with Kaplun."
- **Case studies:** "Hear from the brands that grow with Kaplun" — cards: Nūrio (+212% creator-sourced revenue), video card w/ shapes-tower.webm loop + play overlay ("Watch how Bloom & Co. scaled seeding"), Halcyon (40+ campaigns).
- **Resources:** "Learn more about creator-led growth" — 6 cards: Creator Playbook (guide), 2026 Creator Pricing Report, Livestream "How Kaplun uses Kaplun", Community story, Careers ("Come and join us"), Kaplun Academy.
- **CTA band:** "Turn your creator ideas into revenue today" + "Book your demo today. No commitment required."
- **Footer:** columns Services · Platform · Playbooks · Resources · Company · Customers · Legal; "Born remote" + "©2026 Kaplun Tech."; socials LinkedIn/YouTube/X.

### 0.6 Motion rules (verified + system)

- Hero: video autoplay loop; h1/sub/CTAs staggered fade-up on load (0/100/200ms), GPU props only.
- Bento: infinite horizontal marquee (translateX loop, ~40s duration, pause on hover, `prefers-reduced-motion` disables).
- Tabs: panel crossfade (opacity + translateY 8px, 250ms ease-out).
- Scroll reveal: IntersectionObserver, fade-up 24px → 0, 700ms cubic-bezier(0.22,1,0.36,1), once per element, threshold 0.15.
- Band videos: autoplay muted loop playsinline, `preload="metadata"`.
- Hover: cards lift translateY(-4px) + soft shadow; buttons translateY(-1px). No other hover decoration.
- Never animate layout properties (width/height/top/left).

## Overview

Clay.com is the most playful B2B SaaS interface in the GTM-data category. The base atmosphere is **cream-tinted white canvas** (`{colors.canvas}` — #fffaf0) holding dark-navy ink type and **3D-rendered claymation illustrations** (mountains, mascot characters, peach/ochre/lavender landscapes) as the dominant brand voltage. Where most data-platform brands play it cool with grids and gradients, Clay leans hard into hand-crafted-looking 3D illustrations and saturated single-color feature cards.

Type voice runs **Plain Black** (or substituted with Inter weight 500-600) — a custom rounded display face used at very large sizes (72px hero) with negative letter-spacing. Body type uses Inter at standard weights. The display weight stays at 500, never bolder — the rounded character of the typeface gives it warmth without needing weight.

Component voltage comes from **saturated single-color feature cards** in a 6-color palette: hot pink, deep teal, lavender, peach, ochre, and cream-card. Each card shows product UI fragments at small scale — Claygent agent runs, sequencer flows, CRM enrichment outputs. The colored card IS the primary visual element on every long-scroll page.

**Key Characteristics:**
- Cream-tinted white canvas (`{colors.canvas}` — #fffaf0). The warmth differentiates Clay from cool-gray competitor sites.
- Dark navy/black primary CTAs (`{colors.primary}` — #0a0a0a). Buttons rounded `{rounded.md}` (12px) — friendly modern but not pill.
- 6-color saturated feature card palette: `{colors.brand-pink}`, `{colors.brand-teal}`, `{colors.brand-lavender}`, `{colors.brand-peach}`, `{colors.brand-ochre}`, `{colors.surface-card}` (cream).
- 3D claymation illustrations (mountains, characters, abstract shapes) as full-bleed hero artifacts — the brand's most-recognized visual element.
- Custom rounded Plain Black display typeface at 500 weight with -1 to -2.5px letter-spacing on display sizes.
- Border radius is generous: `{rounded.md}` (12px) for buttons + inputs, `{rounded.lg}` (16px) for content cards, `{rounded.xl}` (24px) for feature cards. The bigger radius matches the rounded display type's character.
- Product UI fragments embedded inside colored cards at small scale — agent run logs, sequencer flows, enrichment results.
- Section rhythm `{spacing.section}` (96px) between major bands.
- Footer is cream-tinted (`{colors.surface-soft}`) — Clay does NOT use a dark footer. Even the closing band stays warm-light.

## Colors

### Brand & Accent
- **Primary** (`{colors.primary}` — #0a0a0a): All primary CTAs, h1/h2 ink type. Near-black with slight warmth.
- **Brand Pink** (`{colors.brand-pink}` — #ff4d8b): Hot-pink feature card surface. Sequencer / outbound feature pages.
- **Brand Teal** (`{colors.brand-teal}` — #1a3a3a): Deep teal-green feature card. Often the featured pricing tier.
- **Brand Lavender** (`{colors.brand-lavender}` — #b8a4ed): Soft lavender feature card.
- **Brand Peach** (`{colors.brand-peach}` — #ffb084): Warm peach feature card.
- **Brand Ochre** (`{colors.brand-ochre}` — #e8b94a): Mustard / ochre feature card and illustration accents.
- **Brand Mint** (`{colors.brand-mint}` — #a4d4c5): Mint accent on illustrations and small badges.
- **Brand Coral** (`{colors.brand-coral}` — #ff6b5a): Coral accent for highlights.

### Surface
- **Canvas** (`{colors.canvas}` — #fffaf0): The default page floor. Cream-tinted white.
- **Surface Soft** (`{colors.surface-soft}` — #faf5e8): Footer and CTA-band background.
- **Surface Card** (`{colors.surface-card}` — #f5f0e0): Cream feature cards, testimonial cards.
- **Surface Strong** (`{colors.surface-strong}` — #ebe6d6): Stronger cream for emphasized bands.
- **Surface Dark** (`{colors.surface-dark}` — #0a1a1a): Dark teal-tinted near-black for occasional dark cards (rare).
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a2a2a): Elevated dark cards.
- **Hairline** (`{colors.hairline}` — #e5e5e5): 1px borders on cards and inputs.

### Text
- **Ink** (`{colors.ink}` — #0a0a0a): Headlines and primary text.
- **Body Strong** (`{colors.body-strong}` — #1a1a1a): Emphasized body, lead paragraphs.
- **Body** (`{colors.body}` — #3a3a3a): Default running-text.
- **Muted** (`{colors.muted}` — #6a6a6a): Sub-headings, breadcrumbs, footer body.
- **Muted Soft** (`{colors.muted-soft}` — #9a9a9a): Captions, fine-print.
- **On Primary / On Dark** (`{colors.on-primary}` — #ffffff): Text on primary buttons + dark feature cards (teal).

### Semantic
- **Success** (`{colors.success}` — #22c55e): Success states.
- **Warning** (`{colors.warning}` — #f59e0b): Warning callouts.
- **Error** (`{colors.error}` — #ef4444): Validation errors.

## Typography

### Font Family
The system runs **Plain Black** (a custom rounded display face) for headlines and **Inter** for body, navigation, and UI. Plain Black at weight 500 with negative letter-spacing handles every display headline; Inter handles the rest. The fallback stack walks `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` for both.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 500 | 1.0 | -2.5px | Homepage h1 ("Go to market with unique data") — Plain Black |
| `{typography.display-lg}` | 56px | 500 | 1.05 | -2px | Section heads — Plain Black |
| `{typography.display-md}` | 40px | 500 | 1.1 | -1px | Sub-section heads, product names |
| `{typography.display-sm}` | 32px | 500 | 1.15 | -0.5px | CTA-band heads, feature card titles |
| `{typography.title-lg}` | 24px | 600 | 1.3 | -0.3px | Pricing plan names, larger feature titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 12px | 600 | 1.4 | 1.5px | Section labels, "FEATURED" badges |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Plain Black at weight 500 + negative letter-spacing IS the brand voice. Going to weight 700 reads as bombastic; the rounded character of the typeface adds warmth that bolder weight would flatten.

The body-vs-display split is functional: Plain Black for Plain Black moments (headlines), Inter for everything else (running text, UI, buttons). Mixing them is a system violation.

### Note on Font Substitutes
If Plain Black is unavailable, **Inter** at weight 500 with -0.05em letter-spacing is a usable approximation. **Söhne Breit** at weight Buch is an alternative if licensed. **Recoleta** at weight 500 carries similar rounded-display warmth.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards and pricing tiers; `{spacing.lg}` (24px) for testimonial and product mockup cards.

### Grid & Container
- **Max content width:** ~1280px centered.
- **Editorial body:** Single 12-column grid; hero often uses 7/5 split (h1 left, illustration right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pricing grid:** 3-4 up at desktop, 1-up at mobile.

### Whitespace Philosophy
Clay uses generous whitespace around big rounded display headlines and saturated feature cards. The cream canvas + colored cards + 3D illustrations create a playful warmth that competing data-platform sites lack.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, small content cards |
| Saturated card | Brand pink/teal/lavender/peach/ochre fill — no shadow | Feature cards |
| Cream card | `{colors.surface-card}` background — no shadow | Testimonial, secondary cards |
| Subtle drop shadow | Faint shadow at low alpha | Hover-elevated states (rare) |

The system uses no heavy shadows. Depth comes from the saturated color contrast between cream canvas and bright feature cards.

### Decorative Depth
- **3D claymation illustrations** — mountains, characters, mascots rendered in a hand-crafted 3D style. The brand's most-recognized depth element. Not a token — these are illustrated assets.
- **Mascot characters** appear as inline figures in feature cards and CTAs.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Small badges, dropdown items |
| `{rounded.sm}` | 8px | Small buttons, hairline-border accent |
| `{rounded.md}` | 12px | Standard CTA buttons, text inputs |
| `{rounded.lg}` | 16px | Content cards, testimonial cards, pricing tiers |
| `{rounded.xl}` | 24px | Feature cards (the saturated brand-color cards) |
| `{rounded.pill}` | 9999px | Category tabs, badge pills |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons |

## Components

### Top Navigation

**`top-nav`** — Cream/white nav bar attached to top. 58-64px tall, attached flush at `top: 0px` (not floating with margin/padding above), spans 80%-90% of screen width (`w-[88%] sm:w-[85%] max-w-[1250px] mx-auto`), rounded bottom corners (`rounded-b-2xl` / 24px), position fixed at top (`fixed top-0 left-0 right-0 z-50`). Carries the Clay logo + wordmark at left, primary horizontal menu (Product, Solutions, Resources, Pricing, Customers) center, right-side cluster with Command+K search shortcut, "Log in", "Get a demo", and "Start free trial" primary CTA button.

### Buttons

**`button-primary`** — Background `{colors.primary}` (near-black), text `{colors.on-primary}` (white), type `{typography.button}` (Inter 14px / 600), padding 12px × 20px, height 44px, rounded `{rounded.md}` (12px).

**`button-secondary`** — Cream button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px hairline border.

**`button-on-color`** — White button used over saturated brand-color feature cards. Same shape as primary but inverted (white background, ink text).

**`button-text-link`** — Inline text button, no background. Used for "Sign in" and inline link CTAs.

**`text-link`** — Inline body links in `{colors.ink}` with underline.

### Cards & Containers

**`hero-band`** — Cream-canvas hero with 7-5 grid: h1 + sub-headline + button row on the left, 3D claymation illustration on the right. Vertical padding `{spacing.section}` (96px).

**`hero-illustration-card`** — Right-side artifact holding 3D claymation illustration (mountains, mascot character, abstract shapes). Background `{colors.surface-soft}`, rounded `{rounded.xl}` (24px). The illustration IS the artifact.

**`feature-card-pink`** / **`feature-card-teal`** / **`feature-card-lavender`** / **`feature-card-peach`** / **`feature-card-ochre`** — Saturated single-color feature cards. Background varies per variant; rounded `{rounded.xl}` (24px); padding `{spacing.xl}` (32px). Each card carries an h3 in `{typography.title-md}`, a body description, and a product UI fragment or mascot illustration. Text color flips to `{colors.on-dark}` (white) on pink and teal cards, `{colors.ink}` (dark) on lavender/peach/ochre cards (the lighter saturations have enough contrast for dark text).

**`feature-card-cream`** — Lower-key feature card variant on `{colors.surface-card}`. Used for less-emphasized features that don't warrant a saturated color.

**`product-mockup-card`** — Card showing actual Clay product UI (Claygent agent runs, sequencer flows, CRM enrichment tables). Background `{colors.canvas}` with hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px).

**`testimonial-card`** — Customer quote cards. Background `{colors.surface-card}` (cream), rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Top row has avatar + name + role; below sits the testimonial in `{typography.body-md}`.

**`pricing-tier-card`** — Standard tier card. Background `{colors.canvas}` with hairline, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px).

**`pricing-tier-card-featured`** — The featured tier flips to `{colors.brand-teal}` (deep teal-green). The teal surface IS the featured signal.

**`expert-card`** — Used on /experts page. Background `{colors.canvas}` with hairline, rounded `{rounded.lg}`, padding `{spacing.lg}`. Carries an avatar at top, expert name, specialization, and a "Book session" link.

### Inputs & Forms

**`text-input`** — Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, rounded `{rounded.md}` (12px), padding 12px × 16px, height 44px. 1px hairline border.

**`text-input-focused`** — Border thickens to ink for emphasis.

### Tabs / Badges

**`category-tab`** + **`category-tab-active`** — Pill-shaped tabs in sub-nav. Inactive: transparent + muted text. Active: cream-card background + ink text. Padding 8px × 16px.

**`badge-pill`** — Small cream-fill pill labels in `{typography.caption}` (13px / 500), rounded `{rounded.pill}`.

### CTA / Footer

**`cta-band-illustrated`** — Pre-footer "Turn your growth ideas into reality today" band. Background `{colors.surface-soft}`, rounded `{rounded.xl}`, padding 80px. Carries an h2 in `{typography.display-md}`, a sub-line, and a `{component.button-primary}` — usually paired with a 3D illustration of a mascot or scene.

**`footer`** — Cream-tinted footer (NOT dark navy unlike most SaaS sites). Background `{colors.surface-soft}`, text `{colors.body}`. 4-column link list. Vertical padding 80px. Often features a horizon-style 3D mountain illustration at the very bottom — Clay's signature footer mountain.

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas (`{colors.canvas}` — #fffaf0). The warm tint differentiates Clay from cool-gray data sites.
- Top navigation is attached flush to top edge (`top: 0`), covers 80-90% width of screen, fixed in place, does not scroll away.
- Use 3D claymation illustrations as hero artifacts. Hand-crafted 3D characters and mountains ARE the brand.
- Cycle saturated feature cards across the page — pink → teal → lavender → peach → ochre → cream. Repeating the same color twice in a row reads as off-rhythm.
- Use Plain Black at weight 500 with negative letter-spacing on every display headline.
- Show product UI fragments inside saturated feature cards. The brand voltage is product-driven, not abstract.
- Use cream footer (NOT dark). Clay deliberately closes pages with warm cream rather than the standard dark-footer SaaS template.
- Anchor every band with `{spacing.section}` (96px) vertical rhythm.

### Don't
- Don't make top navbar floating with margin above top edge. It must be attached flush to top edge (`top: 0`).
- Don't use cool grays for canvas. The cream tint is non-negotiable.
- Don't use a 7th brand-color card. The 6-color palette is saturated enough.
- Don't bold display weight beyond 500. Plain Black at 700 reads as bombastic.
- Don't repeat the same brand-color card twice in a row.
- Don't replace claymation illustrations with flat vector art. The hand-crafted 3D character IS the brand voice.
- Don't use a dark footer. The cream footer is part of the system's warm-throughout pacing.
- Don't add hover state styling beyond what the system already encodes.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero h1 72→36px; hero-illustration-card stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up; pricing 2-up |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3-up pricing tiers |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- `{component.button-primary}` at minimum 44 × 44px (matches WCAG AAA).
- `{component.text-input}` height is 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px.
- Hero 7-5 grid → single-column on mobile.
- Feature card grids reduce columns rather than scaling.
- Saturated feature cards retain their colored fill at every breakpoint.
- Pricing tier cards collapse 4 → 2 → 1.
