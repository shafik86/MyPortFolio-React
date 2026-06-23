# CHANGELOG: UI Enhancement — Hero, Card Deck, Logo Fit

**Tanggal:** 2026-06-23
**Category:** Fix / Enhancement
**Status:** ✅ Completed

## Deskripsi

Atas permintaan: buang 3 section, perkemas Hero, samakan card deck, betulkan
logo yang tak fit, dan perbaiki warna.

## Perubahan

### Buang section + navbar
- Dikeluarkan dari paparan: **Achievements & Milestones**, **Case Studies**,
  **The Team** (`Home.jsx`, `navigation.js`).
- Data files (`achievements.js`, `caseStudies.js`, `team.js`) + komponen
  dikekalkan supaya **Admin Panel** masih boleh urus koleksi tersebut; cuma
  tidak lagi dirender di halaman utama (di-tree-shake dari bundle Home).

### Hero — lebih cantik
- Gradient brand berlapis (radial + linear, 3-stop) untuk kedalaman.
- Tekstur grid halus + vignette lembut (`::before` / `::after`).
- Role jadi **pill badge** kaca; tagline line-height lebih lega.
- Stat cards: latar kaca (glassmorphism) + border halus.
- Blob warna diperkemas (cyan/green) untuk warna lebih hidup.

### Card deck (Companies) — konsisten
- Frame logo tinggi tetap **200px**, body jadi flex-column, CTA "Learn More"
  rata di bawah (kad sebaris sejajar walau teks berbeza panjang).
- Garis aksen brand di tepi atas setiap `logo-frame`.
- Meta icons dapat warna `--tech-blue`.

### Logo fit
- `logo-frame img`: had `max-width: 82%` + `object-fit: contain` →
  logo besar/kecil seimbang.
- Logo company dirender pada **optical height 110px** supaya logo lebar
  (NASA DEF) & persegi (Izwan Systec) nampak sama besar.
- Logo Izwan Systec (1000×1000, banyak padding lutsinar) di-`scale(1.8)` —
  sumber resolusi tinggi jadi kekal tajam.

## File yang Teraffected
- src/styles/components.css (Hero, Companies)
- src/styles/global.css (logo-frame)
- src/components/cards/CompanyCard.jsx (buang inline height)
- src/pages/Home.jsx, src/data/navigation.js (buang 3 section)
- src/App.jsx (kemas; route preview QA dibuang semula)

## Details / Notes
- **Build:** `npm run build` lulus — 60 modules, 0 error
  (CSS ~26 kB / JS ~210 kB, gzip ~67 kB).
- Disahkan visual via screenshot Chrome headless: Hero & card deck kemas,
  kedua-dua logo company seimbang & jelas.
- **Nota:** Bootstrap Icons di-load dari CDN (`index.html`) — perlu internet
  untuk render icon meta (calendar/geo/globe). Berfungsi di browser biasa.
