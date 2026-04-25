# Professional Redesign — Implementation Guide (full site)

Drop-in replacements for every page of the site, applying the same editorial design system across the home page, consultancy hub, all five sector case studies, the AI Integration page, and the Open Projects pages.

## What's in this folder

```
implementation/
├── src/
│   ├── app/
│   │   ├── globals.css                              ← full rewrite
│   │   ├── layout.tsx                               ← new fonts (Source Serif 4 + Inter + JetBrains Mono)
│   │   ├── page.tsx                                 ← home
│   │   ├── ai-integration/page.tsx                  ← AI Integration
│   │   ├── consultancy/
│   │   │   ├── page.tsx                             ← Consultancy hub
│   │   │   ├── nuclear/page.tsx                     ← Case study: ENEC / Barakah
│   │   │   ├── healthcare/page.tsx                  ← Case study: NMC
│   │   │   ├── gov-health/page.tsx                  ← Case study: DHA / DoH
│   │   │   ├── actuarial/page.tsx                   ← Case study: Milliman
│   │   │   └── fintech/page.tsx                     ← Case study: Rasan IT
│   │   └── open-projects/
│   │       ├── page.tsx                             ← index
│   │       └── [id]/page.tsx                        ← Streamlit embed page
│   └── components/
│       ├── site-layout.tsx                          ← header + footer shell
│       └── case-study.tsx                           ← reusable case-study template
└── README.md                                        ← this file
```

The **component library** (`src/components/ui/*` — `bento-grid.tsx`, `sidebar.tsx`, `svg-mask-effect.tsx`, `hero-odyssey.tsx`, `illuminated-hero.tsx`, `radial-orbital-timeline.tsx`, etc.) is **no longer used** by any page. You can either:
- Leave it in place (it's dead code but harmless), or
- Delete the files you don't use. Nothing in the new pages imports any of them except `card`, `badge`, and `button`, which the new pages avoid too.

No new dependencies. The three Google Fonts all come through `next/font/google`, already in your project.

---

## Step-by-step

### 1. Back up first

```bash
cd website
git add -A && git commit -m "Snapshot before redesign"
```

### 2. Drop the files in

Copy every file in `implementation/src/…` to the matching path in your project. They replace existing files 1-for-1:

| Replace this…                                                    | …with                                                                         |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `src/app/globals.css`                                            | `implementation/src/app/globals.css`                                          |
| `src/app/layout.tsx`                                             | `implementation/src/app/layout.tsx`                                           |
| `src/app/page.tsx`                                               | `implementation/src/app/page.tsx`                                             |
| `src/app/ai-integration/page.tsx`                                | `implementation/src/app/ai-integration/page.tsx`                              |
| `src/app/consultancy/page.tsx`                                   | `implementation/src/app/consultancy/page.tsx`                                 |
| `src/app/consultancy/nuclear/page.tsx`                           | `implementation/src/app/consultancy/nuclear/page.tsx`                         |
| `src/app/consultancy/healthcare/page.tsx`                        | `implementation/src/app/consultancy/healthcare/page.tsx`                      |
| `src/app/consultancy/gov-health/page.tsx`                        | `implementation/src/app/consultancy/gov-health/page.tsx`                      |
| `src/app/consultancy/actuarial/page.tsx`                         | `implementation/src/app/consultancy/actuarial/page.tsx`                       |
| `src/app/consultancy/fintech/page.tsx`                           | `implementation/src/app/consultancy/fintech/page.tsx`                         |
| `src/app/open-projects/page.tsx`                                 | `implementation/src/app/open-projects/page.tsx`                               |
| `src/app/open-projects/[id]/page.tsx`                            | `implementation/src/app/open-projects/[id]/page.tsx`                          |
| `src/components/site-layout.tsx`                                 | `implementation/src/components/site-layout.tsx`                               |
| *(new file)*                                                     | `implementation/src/components/case-study.tsx`                                |

### 3. Run it

```bash
cd website
npm run dev
```

Open http://localhost:3000. Click through all the routes — everything should share the same editorial aesthetic.

### 4. Replace the placeholder content

All the case-study copy is a faithful port of what was on your live pages, tightened up. You'll want to:

- **Verify metrics** — I translated things like "5.6 GW" and "Over 10% manual review reduction" verbatim. Audit these before publishing.
- **Swap the hero portrait** in `page.tsx` for a real B&W photo (see previous README step 6).
- **Put the real CV at `public/CV.pdf`** (or update the `href` in `page.tsx` and the contact section).
- **Replace the Streamlit URLs** in `open-projects/[id]/page.tsx` with the real ones.

### 5. Palettes & accents (optional)

Same as before — add attributes on `<html>` in `layout.tsx`:

```tsx
<html lang="en" data-palette="graphite" data-accent="oxblood" ...>
```

Palettes: `ivory` (default), `paper`, `graphite`
Accents: `navy` (default), `oxblood`, `forest`, `ink`

### 6. Clean up old components (optional)

If you want to remove dead code:

```bash
rm -rf src/components/ui/hero-odyssey.tsx
rm -rf src/components/ui/illuminated-hero.tsx
rm -rf src/components/ui/svg-mask-effect.tsx
rm -rf src/components/ui/radial-orbital-timeline.tsx
rm -rf src/components/ui/turbulent-flow.tsx
rm -rf src/components/ui/bento-grid.tsx
rm -rf src/components/ui/features-8.tsx
rm -rf src/components/ui/project-showcase.tsx
rm -rf src/components/ui/sidebar.tsx
```

Leave `card.tsx`, `badge.tsx`, `button.tsx` if you think you'll use them later.

---

## Design system, in one paragraph

- **Type:** Source Serif 4 for display, Inter for body/UI, JetBrains Mono for metadata.
- **Palette:** ivory paper, ink black, one muted accent (navy default).
- **Grid:** 1240px max, 200px left gutter for eyebrow labels, hairline rules as the primary divider.
- **No gradients, no glass cards, no emoji-icons.** Numbers are tabular-figured. Everything reads like an editorial profile rather than a SaaS landing page.
- **Reusable template:** `<CaseStudyPage>` handles all five sector pages — add another sector by writing one more file with 20 lines of props.
