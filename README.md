# Drop-in: Animated Landing Page

This folder is a **drop-in patch** for your existing Next.js project. Just paste files in matching paths.

## Files

```
src/app/page.tsx           ← REPLACE your existing page.tsx
src/app/globals.append.css ← APPEND its contents to your existing globals.css
```

## How to apply

1. **Replace `src/app/page.tsx`** with the file in this drop-in.
2. **Open `src/app/globals.css`** and **paste the entire contents** of `globals.append.css` at the bottom of the file. Do not delete what's already in `globals.css` — it has your `:root` tokens, palettes, button styles, etc., that the new page depends on.
3. Run `npm run dev`. The home page now uses real route links — header `Consultancy` → `/consultancy`, `AI Integration` → `/ai-integration`, `Open Projects` → `/open-projects`, `Contact` → `/#contact`. The practice cards and engagement rows also deep-link into your existing sub-routes (e.g. ENEC → `/consultancy/nuclear`).

## Logo placeholders

Striped paper tiles with a monogram chip (e.g. `EN`, `NM`) appear:

- in the **client marquee** (56×56)
- in the **engagements list** (64×64)

To swap in a real logo later, find the `<LogoTile initials="EN" />` lines in `page.tsx` and replace with:

```tsx
<div className="logo-tile" style={{ width: 64, height: 64 }}>
  <Image src="/logos/enec.svg" alt="ENEC" fill style={{ objectFit: "contain", padding: 8 }} />
</div>
```

(Drop the actual logo file into `public/logos/`.)

## What's animated

- Hero: word-by-word headline reveal, fading subhead/CTA, pulsing live dot, rotating capability ticker
- Stats: count-up + accent underline draw on scroll
- Client marquee: continuous scroll, pauses on hover, each cell links to that sector's page
- Practice cards: top accent rule fills on hover, name shifts right
- Process timeline: animated axis line draws across, nodes fill, per-stage duration bars fill
- Sector mix bar chart: bars fill in on scroll
- Engagement load line chart: stroke-draw animation, area fade-in, hover crosshair with year + value tooltip
- Engagement list: rows shift right, accent left-edge bar slides in, arrow nudges
- Capabilities: gauge bars fill, hover surfaces years-of-use in accent

All routes match the existing structure of your `website/` folder — nothing else needs to change.
