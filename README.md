<div align="center">

<img src="./public/icons/icon-512.png" alt="techassure" width="120" height="120" />

<br />

<img src="./public/images/logo-wordmark.png" alt="techassure wordmark" width="280" />

<br /><br />

**Phones · Laptops · Accessories — Swap, Buy & Sell**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white)](./src/app/manifest.ts)
[![License](https://img.shields.io/badge/License-Private-lightgrey)](#)

<br />

📍 Sel Filling Station, UPSA · Accra, Ghana &nbsp;|&nbsp; 📞 [057 227 3425](tel:+233572273425)

</div>

---

## Overview

**techassure** is a modern e-commerce storefront for phones, laptops, and accessories — built for customers in Accra who want to **swap, buy, and sell** tech with confidence.

This repo powers the full shopping experience: browse, compare, wishlist, cart, checkout, and order tracking — with a progressive web app (PWA) shell for installable, app-like use on mobile.

---

## Brand

<table>
  <tr>
    <td align="center" width="25%">
      <img src="./public/icons/icon-192.png" alt="App icon" width="96" /><br />
      <sub>App icon (192)</sub>
    </td>
    <td align="center" width="25%">
      <img src="./public/icons/icon-512.png" alt="App icon large" width="96" /><br />
      <sub>App icon (512)</sub>
    </td>
    <td align="center" width="25%">
      <img src="./public/images/logo-mark.png" alt="Logo mark" width="96" /><br />
      <sub>Logo mark</sub>
    </td>
    <td align="center" width="25%">
      <img src="./public/images/logo.png" alt="Full logo" width="96" /><br />
      <sub>Full logo</sub>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <img src="./public/images/logo-wordmark.png" alt="Wordmark" height="48" /><br />
      <sub>Wordmark (light backgrounds)</sub>
    </td>
    <td align="center" colspan="2">
      <img src="./public/images/logo-wordmark-light.png" alt="Wordmark light" height="48" /><br />
      <sub>Wordmark (dark backgrounds)</sub>
    </td>
  </tr>
</table>

Theme color: `#7b2ff7`

---

## Features

| | Feature | Description |
| :--- | :--- | :--- |
| 🛍️ | **Shop catalog** | Browse phones, laptops, headphones, cameras, TVs & accessories |
| ⚡ | **Best deals & flash sales** | Highlighted promotions, flyers, and featured product grids |
| 🔍 | **Product detail & quick view** | Full product pages plus in-place quick view |
| ❤️ | **Wishlist** | Save products for later |
| ⚖️ | **Compare** | Side-by-side product comparison |
| 🛒 | **Cart & checkout** | Quantity controls, checkout flow, and success confirmation |
| 📦 | **Track order** | Look up order status after purchase |
| 📱 | **PWA** | Installable app with service worker & web app manifest |
| 💳 | **Local payments** | MoMo, card & bank transfer messaging |
| 🏪 | **Visit / call to order** | Storefront at UPSA + phone ordering |

---

## Categories

<div align="center">

| <img src="./public/images/categories/smartphone.png" width="72" /><br />Smartphones | <img src="./public/images/categories/laptop.png" width="72" /><br />Computers & Laptops | <img src="./public/images/categories/headphones.png" width="72" /><br />Headphones |
| :---: | :---: | :---: |
| <img src="./public/images/categories/camera.png" width="72" /><br />Camera & Photo | <img src="./public/images/categories/tv.png" width="72" /><br />TV & Homes | <img src="./public/images/categories/accessories.png" width="72" /><br />Accessories |

</div>

---

## Brands

<div align="center">

<img src="./public/images/brands/apple.png" alt="Apple" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/samsung.png" alt="Samsung" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/dell.png" alt="Dell" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/lg.png" alt="LG" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/tecno.png" alt="Tecno" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/jbl.png" alt="JBL" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/belkin.png" alt="Belkin" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/grandstream.png" alt="Grandstream" height="36" />
&nbsp;&nbsp;
<img src="./public/images/brands/sigma.png" alt="Sigma" height="36" />

</div>

---

## Tech stack

| Layer | Choice |
| :--- | :--- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) + CSS Modules |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Font | [Outfit](https://fonts.google.com/specimen/Outfit) via `next/font` |
| PWA | Custom service worker (`public/sw.js`) + `manifest.ts` |

---

## Project structure

```text
cliton/
├── public/
│   ├── icons/                 # PWA & favicon assets
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── icon-512-maskable.png
│   │   └── apple-touch-icon.png
│   ├── images/
│   │   ├── logo*.png / .svg   # Brand logos & wordmarks
│   │   ├── brands/            # Partner brand marks
│   │   ├── categories/        # Category imagery
│   │   ├── products/          # Product photography
│   │   ├── hero/ · flyers/ · shop/
│   └── sw.js                  # Service worker
├── src/
│   ├── app/                   # Routes (home, shop, cart, checkout…)
│   ├── components/
│   │   ├── home/              # Hero, deals, categories, banners
│   │   ├── layout/            # Header, footer, cart popup, gate
│   │   ├── product/           # Detail & quick view
│   │   ├── shop/ · cart/ · checkout/
│   │   ├── compare/ · wishlist/ · track/
│   │   └── pwa/
│   └── data/                  # Products, cart, brands, flyers…
└── package.json
```

---

## Routes

| Path | Page |
| :--- | :--- |
| `/` | Home — hero, flyers, deals, categories, featured products |
| `/shop` | Product catalog with filters |
| `/product/[id]` | Product detail |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |
| `/checkout/success` | Order confirmation |
| `/wishlist` | Saved products |
| `/compare` | Product comparison |
| `/track-order` | Order tracking |

---

## Getting started

### Prerequisites

- **Node.js** 20+ (recommended)
- **npm** (or yarn / pnpm / bun)

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build & run production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Contact

<div align="center">

<img src="./public/icons/icon-192.png" alt="techassure" width="48" height="48" />

**techassure**

📞 **Call / WhatsApp:** [057 227 3425](tel:+233572273425)  
📍 **Visit:** Sel Filling Station, UPSA — Accra, Ghana  
🛍️ Phones, laptops & accessories — we swap, buy & sell

</div>

---

## Deploy

Deploy on [Vercel](https://vercel.com/new) (or any Node host that supports Next.js):

```bash
npm run build
```

Point the hosting platform at this repository and use the default Next.js build settings.

---

<div align="center">

<img src="./public/images/logo-wordmark.png" alt="techassure" width="160" />

<br />

**techassure** © 2026 · Built with Next.js

<sub>Phones, laptops & accessories — swap, buy & sell at UPSA.</sub>

</div>
