# BAO GO clone — page brief

Source: https://www.baogo.vn/ (single-page Next.js site, Vietnamese, moving/cleaning services).

## Route map

| Source | Local route | Owner files |
| --- | --- | --- |
| `/` (all content, anchor-linked sections) | `/` | `src/app/page.tsx` composes `src/components/sites/baogo/*` |

This is a first root clone, so it replaced the template's untouched placeholder homepage.

## Design tokens

Extracted verbatim from the site's compiled CSS (`--color-*`, `--radius-*`, `--font-sans: Nunito`)
and wired into `src/app/globals.css` (`:root` variables + `@theme inline` mapping), so plain
Tailwind utilities (`text-navy`, `bg-blue-soft`, `rounded-card`, etc.) work exactly like on the
source. Key values: primary `#2e6fe0`, navy `#17357e`, ink `#14295e`, canvas `#eef4fd`, warning
accent (headline underline) `#e07b2e`, card radius `18px`, pill buttons fully rounded.

## Sections built (in order)

1. **Header** — sticky, blurred, logo + nav + hotline + "Đặt lịch" CTA + mobile `<details>` menu.
2. **Hero** — headline with hand-drawn underline accent, CTA buttons, avatar row, hero photo with
   a hand-built "app mockup" phone (map, order cards, bottom nav — all real markup, not a flattened
   image), and the 4-stat strip.
3. **Marquee** — looping ticker of 11 service pills (CSS `@keyframes`, duplicated list for a
   seamless loop).
4. **Services** — two feature cards (Chuyển nhà trọn gói / Bao Home vệ sinh).
5. **Process** — 4-step numbered cards with real step photos.
6. **Pricing** — distance-based price table, 4 packing combo tiers, labor table, furniture
   disassembly price list, and a **working** quote calculator (`QuoteCalculator.tsx`, client
   component) that reproduces the source's exact formula and default output (7 km, Xe 1 tấn,
   2 thợ → 1.150.000đ).
7. **Bao Home** — two cleaning price tables + feature badges.
8. **Why choose us** — 5 numbered reason cards + a 6th "team" card in the same grid.
9. **Contact** — dark banner CTA with hotline / app / Zalo links and a service-area list.
10. **Footer** — sitemap columns + contact block.
11. **ChatFab** — fixed call + Zalo buttons (bottom-right).

Icons are hand-reproduced from the source's inline SVGs (`src/components/sites/baogo/icons.tsx`),
not a generic icon library, to keep shapes 1:1.

## Assets

All real photos/logo downloaded from the source's own `_next/static/media` and `/brand` paths into
`public/sites/baogo/images/` (no placeholders).

## Checks run

- `npm run typecheck` — clean.
- `npm run lint` — clean.
- `npm run build` — succeeds (static prerender of `/`).
- Manual browser pass (desktop + 375px mobile): hero, marquee, every pricing table, the quote
  calculator (verified two input combinations against hand-computed totals), Bao Home, why-choose,
  contact, footer, floating call/Zalo buttons. No horizontal overflow, no console errors from the
  app itself.

## Known gaps / deviations

- The process-step and "why choose us" photo-to-step pairing is a best-effort mapping (the source's
  lazy-loaded images don't expose a 1:1 DOM order to step order); content and captions are exact,
  photo assignment is close but not verified pixel-for-pixel against the live DOM order.
- Scroll-reveal/entrance animations on the source (opacity/translate on scroll into view) were not
  reproduced; sections render fully visible immediately. Hover states, the marquee loop, the pulsing
  "xe đang đến" dot, and the floating truck-tracker badge animation are implemented.
- The footer's `admin.baogo.vn` backend link was intentionally omitted (internal, not part of the
  public site experience).
- "Nhận báo giá trên app" / all "Đặt lịch" CTAs still point at `https://app.baogo.vn` and
  `tel:+84849609878`, matching the source; no backend exists locally so these are outbound links,
  not wired to a real booking flow (out of scope for a front-end clone).

## Run it

```bash
npm run dev
```

Then open the printed local URL — the clone is the site root (`/`).
