# Image manifest — grab2goshop.ca visual pass

All imagery is either **our own** (from the previous site's `/assets`, reused per
the owner's instruction) or **licensed free-stock** from Pexels. No manufacturer
or supplier marketing renders. No third-party vending machine is presented as ours.
Every served image is WebP, responsive `srcset`, `loading="lazy"` below the fold,
with explicit width/height to avoid layout shift.

---

## ⬛ RENDER TARGETS — internal note only, NOT rendered on the page

**All five on-page render placeholders were removed (2026-08-10).** Nothing on the
live site now says "coming soon", shows pixel dimensions, or draws a dashed empty
box. Each former slot was rebuilt around a visual we actually own — see the table
below for what replaced it.

This table is kept **only** as a spec for when real machine renders are generated.
To use one: drop the file in `/assets`, export at 2× for retina, and swap the
listed component for an `<img>` with `srcset`.

| Former slot | Where | Replaced on the page by | If a real render is made | Export size |
|-------------|-------|-------------------------|--------------------------|-------------|
| Hero machine | Hero, right column | ✅ **FILLED** — `hero-machine-900.webp` (see below) | *done* | 900 × 1200 (3:4) |
| Retail machine | Pillar B card | **`.tpanel`** — typographic brand panel ("Votre marque, de la façade à l'écran" / "Your brand, from the front panel to the screen") | `assets/render-pillar-retail.webp` | 1000 × 750 (4:3) |
| Wrap / branding | Customization tile 01 | **`.miniframe`** — code-drawn schematic machine elevation with an accent wrap band, matching tile 04's software mock | `assets/render-custom-wrap.webp` | 800 × 800 (1:1) |
| Bottle unit | Capability case, left | **`.sysmap`** — code-built "two units, one dashboard" schematic (replaces both case slots) | `assets/render-case-bottle.webp` | 900 × 1125 (4:5) |
| Branded retail machine | Capability case, right | *(same `.sysmap` component)* | `assets/render-case-retail.webp` | 900 × 1125 (4:5) |

> **Why not photographs?** Only two genuinely-owned machine images exist —
> `door-open.jpg` (→ `step-take`) and `grab-close.jpg` (→ `custom-access`) — and
> both are already placed on the page. Every other machine image in `/assets` and
> in git history is a third-party supplier marketing render (see the audit below);
> `MicroMarket.jpg` is a **365 Retail Markets** render covered in third-party
> product logos, and `many-doors.jpg` is only 350 × 203. There was no owned photo
> available to fill these slots, so they were rebuilt as code/typographic visuals
> rather than filled with vendor imagery.

---

## 🟩 AI-GENERATED BRAND RENDER — owner-commissioned (2026-08-10)

| Output (base) | Widths | Used in | Provenance |
|---------------|--------|---------|-----------|
| `hero-machine` | 600, 900 | Hero, right column | **AI-generated render**, commissioned by the owner to the owner's own prompt. Not a photograph and not a supplier asset. |

Generated 4 candidates; picked the one with the lightest background so it sits
cleanly against the white hero. **Checked at 2× zoom for hallucinated lettering
before use** — screen is blank, shelf price rails carry no characters, products
are unmarked, base is clean. The only marking anywhere is the universal EMV
contactless symbol on the card reader, which is a generic international standard,
not a vendor identifier. One rejected candidate had garbled digits on the shelf
rails.

Source PNG was 1856 × 2304. Cropped to 3:4 on the machine's detected bounding box
with balanced margins (L231/R230, T127/B127 px), then resized. 57 KB at 900w.

> Because it is a render rather than a photograph, the `alt` text describes the
> machine without asserting it is an installed unit.

---

## 🟨 REUSED FROM PREVIOUS SITE — retained at owner's explicit direction

> ⚠️ **Provenance note (read before shipping).** A visual audit (2026-08-09) found
> that MOST of these are **third-party supplier marketing CGI renders**, not
> photographs of Grab-n-Go AI's own machines. Several show a **supplier brand
> ("micromart")** on the units, "Your Brand Here", "Just grab anything™", and
> third-party product logos (Coca-Cola, Pepsi, Pringles, Advil, Tylenol, etc.).
> This conflicts with **Hard Rule 2** (no supplier identifiers / vendor marketing
> renders) and with presenting them as "our installations." The owner was shown
> this finding and **chose to keep them anyway**; they are retained on that basis.
> Recommended replacement: genuine photos of real installs, or owner-supplied AI
> brand renders (see render slots above).
>
> Treatment applied to all: slight desaturation (0.90), contrast (1.04),
> brightness (0.98); converted to WebP.

| Output (base) | Widths | Source file | Used in | Provenance |
|---------------|--------|-------------|---------|-----------|
| `step-take` | 520, 601 | `door-open.jpg` | How it works · step 2 | **Genuine photo** (real person/office, no supplier mark) |
| `custom-access` | 520, 803 | `grab-close.jpg` | Customization · access tile | **Genuine photo** (real install, on-door screen text) |
| `pillar-internal` | 640, 845 | `smart-fridge.jpg` | Pillar A | ⚠️ Supplier CGI render — "micromart" logos |
| ~~`step-identify`~~ | — | `payment.jpg` | **Removed** — step 1 is now a code-built card (`.badgecard`) | ⚠️ Marketing graphic — "Just grab anything™" + card-brand logos, English text, and it contradicted the badge copy |
| `custom-shelving` | 520, 633 | `micromart-fridge.jpg` | Customization · shelving | ⚠️ Supplier CGI render — "micromart" + "Your Brand Here" |
| `gal-1` | 800, 1344 | `01.jpg` | Gallery | ⚠️ Supplier CGI render — "micromart" + "just grab anything™" |
| `gal-2` | 800, 1600 | `Lobby 1200 542.jpg` | Gallery | ⚠️ CGI render — "24H Smart Vending" |
| `gal-3` | 800, 1600 | `Library 1200 542.jpg` | Gallery | ⚠️ CGI render — "24H Smart Vending" |
| `gal-4` | 800, 1600 | `Micromart-Offices.jpg` | Gallery | ⚠️ Supplier CGI render — "micromart" logos |
| `gal-5` | 800, 1600 | `Micromart-Lounge.jpg` | Gallery | ⚠️ Supplier CGI render — "micromart" logos |
| `gal-6` | 800, 1600 | `Micromart-Residential.jpg` | Gallery | ⚠️ CGI render — "just grab anything" screens |
| `ind-office` | 480, 800 | `office-pic.jpg` | Industry card · Offices | Generic office photo (no machine, no supplier mark) |
| `cta-bg` | 1600 | `Micromart-Hotel.jpg` | Contact background (low opacity) | ⚠️ CGI render |

Original JPGs remain in `/assets` untouched; only the WebP derivatives are served.

---

## 🟦 LICENSED FREE-STOCK — Pexels (industry context only)

Source: **Pexels License** (https://www.pexels.com/license/) — free for commercial
use, no attribution required, no model/property release implied. Used strictly as
industry/context imagery on the industries strip, never as our product.

| Output (base) | Widths | Pexels source URL | Subject |
|---------------|--------|-------------------|---------|
| `ind-aviation` | 480, 800 | https://www.pexels.com/photo/airplanes-in-hangar-building-11080086/ | Aircraft in hangar |
| `ind-warehouse` | 480, 800 | https://www.pexels.com/photo/boxes-on-shelves-inside-a-warehouse-5156696/ | Warehouse racking + workers |
| `ind-dealership` | 480, 800 | https://www.pexels.com/photo/serious-car-mechanic-pumping-up-car-wheel-in-modern-service-garage-3807695/ | Dealership service bay |
| `ind-construction` | 480, 800 | https://www.pexels.com/photo/construction-workers-wearing-hardhats-8961064/ | Construction workers in PPE |
| `ind-mall` | 480, 800 | https://www.pexels.com/photo/interior-design-of-shopping-mall-14230221/ | Modern shopping mall interior |

Each was downloaded, **verified visually** to match its label, tone-treated, and
converted to WebP. Retrieved 2026-08-09.

---

## Fonts (self-hosted, no CDN)

`assets/fonts/` — WebFont subsets (latin) from Fontsource (jsDelivr), served locally
via `@font-face`, `font-display: swap`:
`space-grotesk-500/700`, `inter-400/500/600`. Removes the Google Fonts CDN request.
