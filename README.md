# Almaden Trade — Website

Static site for [almadentrade.com](https://almadentrade.com), the client-facing site for **Almaden Trade** (commercial name of Almaden Investments LLC), a regulatory compliance consultancy helping Latin American food and beverage exporters navigate FDA and TTB requirements for the U.S. market.

## Stack

- Static HTML/CSS/JS — no build step, no framework
- Hosted on **Vercel** (project `almaden-trade`, team `gerardo-rivera-s-projects`)
- DNS on **Cloudflare** (`almadentrade.com` → Vercel via DNS-only CNAME; grey cloud, not proxied)
- `terminos.almadentrade.com` is hosted separately on **Carrd** — do not move it here

## Deploying

Every push to `main` triggers a Vercel deploy. Vercel treats each deploy as a full snapshot — **always include every file**, not just the ones that changed.

Config: `vercel.json` sets `cleanUrls: true` and `trailingSlash: true`, so internal links should be written without `.html` and with a trailing slash (e.g. `/precios/`, not `/precios.html`).

## Structure
/
├── index.html
├── registro-fda/ # Collection 1 — Iniciar registro
├── mantener-registro/ # Collection 2
├── etiquetado-ttb/ # Collection 3
├── cbma/ # Collection 4
├── precios/
├── contacto/
└── assets/
├── css/
├── img/
└── fonts/

## Brand

| Token | Value |
|---|---|
| Navy (primary) | `#0A1E4A` |
| Wordmark grey | `#8E8A7E` |
| Ring grey | `#B8B4A8` |
| Gold (marketing only — never logo, invoices, price list, WhatsApp catalog) | `#A8894F` |

Headings: **Poppins Bold**.

## Content source of truth

Service names, prices, and descriptions originate in the internal **Lista de precios** (not published) and flow downstream to Zoho Invoice → WhatsApp Business catalog → this website. Do not edit pricing copy here independently — update the source list first, then propagate.

## Notes

- Copy is Spanish-only, matching the LATAM-facing client base.
- No CFR citations in client-facing copy.
- Nominal/active-voice register per page type — see internal style reference.

---
Almaden Trade · San Jose, CA · almadentrade.com
