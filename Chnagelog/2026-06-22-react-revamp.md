# CHANGELOG: React.js Revamp — Core + CEO Portfolio

**Tanggal:** 2026-06-22
**Category:** Feature / Component
**Status:** ✅ Completed

## Deskripsi

Merombak portfolio dari HTML/Bootstrap statik ke **React 18 + Vite** mengikut
PLANNING-01 (architecture), PLANNING-02 (core features) dan PLANNING-03
(CEO portfolio — Phase 1 high-impact items).

Semua kandungan diekstrak dari `index.html` lama supaya data **sebenar**
dikekalkan (companies, products, clients, skills, experience). Gambar sedia ada
dalam `images/` disalin ke `public/images/` dan dirujuk sebagai `/images/...`.

### Yang dibina

**Setup & Infrastructure (PLANNING-01)**
- Vite + React project (`package.json`, `vite.config.js`, entry `index.html`)
- Folder structure: components/common, components/sections, components/cards,
  context, data, hooks, pages, styles
- Design system CSS variables (Tech Blue & Green) + dark/light theme
- `.gitignore`, README dengan arahan run

**Core sections (PLANNING-02)**
- Hero (animated count-up stats, gradient blobs, scroll cue)
- About (profile card + highlights)
- Companies (CompanyCard, reusable)
- Products (ProductCard + filter ikut sektor: All/Enterprise/Agriculture/Security)
- Clients (grid logo + projek)
- Skills (8 kategori, icon tiles)
- Experience (timeline vertical, 8 entri)
- Testimonials (carousel auto-rotate + dots)
- Contact (info + Google Map embed)
- Navigation (sticky, scroll-spy active link, mobile hamburger)
- Footer, BackToTop, ThemeToggle

**CEO sections (PLANNING-03 Phase 1)**
- Leadership (vision, philosophy, 3 pillars)
- Impact (6 metric count-up, gradient band)
- Achievements (timeline milestone + year filter)

### Hooks & Context
- `ThemeContext` — dark/light, localStorage, system preference
- `useReveal` — IntersectionObserver scroll reveal
- `useScrollSpy` — highlight nav section aktif
- `useCountUp` — animasi nombor bila masuk viewport

## File yang Teraffected (baru)

- package.json, vite.config.js, index.html, .gitignore, README.md
- src/main.jsx, src/App.jsx
- src/context/ThemeContext.jsx
- src/hooks/useReveal.js, useScrollSpy.js, useCountUp.js
- src/data/ — profile, navigation, companies, products, clients, skills,
  experience, testimonials, leadership, impact, achievements
- src/components/common/ — Navigation, Footer, ThemeToggle, BackToTop, SectionHead
- src/components/cards/ — CompanyCard, ProductCard
- src/components/sections/ — Hero, About, Leadership, Impact, Companies,
  Products, Clients, Achievements, Skills, Experience, Testimonials, Contact
- src/pages/ — Home, NotFound
- src/styles/ — variables.css, animations.css, global.css, components.css
- public/images/ (disalin dari images/)

## File legacy (dikekalkan untuk rujukan)
- index.legacy.html, style.legacy.css, script.legacy.js

## Details / Notes

- **Build status:** `npm run build` lulus — 73 modules, 0 error
  (CSS 19 kB / JS 202 kB, gzip ~64 kB).
- **Isu Google Drive:** `npm install` gagal terus dalam `G:\My Drive\...`
  (Drive lock fail dalam node_modules → `EBADF`/`ENOTEMPTY`). Workaround:
  install & run dari folder lokal di luar Drive. Lihat README untuk langkah.
- Data CEO (achievements, leadership, impact, testimonials) diasaskan pada
  fakta sebenar founder/syarikat, bukan rekaan. Boleh tambah award/press
  sebenar bila ada dengan edit fail dalam `src/data/`.
- **Belum dibina (PLANNING-03 phase lanjut):** Speaking Events, Media/Press,
  Investments, Team, Blog, Case Studies, Admin Panel — boleh tambah ikut
  pola data + section yang sama.
