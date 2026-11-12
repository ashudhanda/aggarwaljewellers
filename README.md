# Aggarwal Jewellers

Static website for **Aggarwal Jewellers** — gold, diamond and 1-gram gold
jewellery with showrooms in Sector 20, Panchkula and The Mall, Solan.

## What is on the page

- Hero with the headline offer and WhatsApp enquiry buttons
- Collections — necklace sets, earrings, bangles & kada, rings, 1-gram gold,
  lab-grown diamonds
- Featured pieces with indicative prices and per-piece WhatsApp enquiry links
- Today's gold rate cards (22K / 24K gold, silver — indicative, changes daily)
- About / trust section (BIS Hallmark, lifetime 50% exchange)
- Instagram reels section linking out to [@aggarwaljewellerspkl](https://instagram.com/aggarwaljewellerspkl)
- Customer testimonials and showroom visit info with an embedded map

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content and structure |
| `style.css` | All styling, including the mobile layout and reduced-motion rules |
| `script.js` | Mobile menu toggle (class-based, closes on link click, Escape and tapping outside the menu) |
| `*.png` | Hero, category, product and showroom images |

## Accessibility

- Skip link ("Skip to main content") jumps to the `<main>` landmark
- Main navigation is labelled; the trust strip is a labelled section
- Decorative glyphs (✨, ✓, ▶, ☎) are hidden from screen readers
- Footer social links are labelled Instagram and WhatsApp (not "IG"/"WA")
- Keyboard focus is always visible (gold outline); the mobile menu button
  announces "Close menu" while the menu is open
- Hero image is prioritised with `fetchpriority="high"`; all other images
  are lazy-loaded
- Reduced-motion rules switch off smooth scrolling and hover animations

## Run it locally

No build step — open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Before publishing

The WhatsApp and phone links still use the placeholder number
`91XXXXXXXXXX` — replace it with the real showroom number (search for
`XXXXXXXXXX`). The gold-rate figures in the rate cards are indicative and
need updating when rates change.
