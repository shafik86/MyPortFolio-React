# CHANGELOG: UI Polish + Case Studies, Team & Admin Panel (demo)

**Tanggal:** 2026-06-22
**Category:** Fix / Feature / Component
**Status:** ✅ Completed

## Deskripsi

Dua bahagian kerja:

1. **Pembetulan UI** untuk masalah keterbacaan logo & highlight timeline.
2. **Sambungan PLANNING-03**: tambah section Case Studies, Team, dan Admin
   Panel versi demo (localStorage) + skema database siap-run.

## A. UI Fixes & Enhancements

- **Logo frame** (`src/styles/global.css`): tukar background dari
  `var(--surface-2)` (gelap dalam dark mode → logo/teks tenggelam) ke gradient
  putih lembut yang konsisten dalam light & dark. Logo brand kini sentiasa
  jelas.
- **Experience timeline** (`Experience.jsx`, `components.css`):
  - Peranan **semasa** (`current: true`) di-highlight dengan aksen hijau:
    border hijau, node hijau, badge tarikh hijau + titik "live" berdenyut.
  - Peranan **lepas** dapat look neutral/silver (node slate, background
    `surface-2`, badge muted) — mudah bezakan yang masih aktif vs dah lepas.
- **Products data fix** (`products.js`): tambah `sector: 'Agriculture'` pada
  Farm Sense yang tertinggal → buang warning React duplicate `key`.
- **React Router** (`main.jsx`): opt-in `v7_startTransition` &
  `v7_relativeSplatPath` future flags → console bersih.

## B. Section baru (PLANNING-03)

- **Case Studies** (`#case-studies`) — format Challenge → Solution → Results,
  berasaskan projek/produk sebenar (Felcra/Farm Sense, FloodSense, IWK billing).
  Layout zig-zag + metric band + tech chips.
- **Team** (`#team`) — grid kad ahli pasukan merentas Nasa Def & Izwan Systec.
  Avatar fallback inisial bila tiada gambar. *Nama ahli 2-4 adalah placeholder
  — ganti dengan nama sebenar dalam `src/data/team.js`.*
- Kedua-dua didaftar dalam `Home.jsx` + `navigation.js` (scroll-spy).

## C. Admin Panel — DEMO (localStorage)

- Route `/admin` (chrome navigation/footer disembunyikan).
- Gate kata laluan demo (`admin`) — **bukan keselamatan sebenar**, placeholder.
- Urus 8 koleksi (companies, products, clients, experience, achievements,
  caseStudies, team, testimonials): senarai, tambah, edit (JSON), padam, reset.
- `src/admin/store.js`: abstraksi CRUD yang seed dari `src/data/*.js`. Komen
  jelas cara tukar ke API/database sebenar (kekalkan signature fungsi).

## D. Database (siap run)

- `database/schema.sql` — skema PostgreSQL, satu jadual per koleksi, JSONB untuk
  array/nested. Termasuk trigger `updated_at` & jadual `admin_users`.
  Run: `psql -d nikshafik_portfolio -f database/schema.sql` (atau paste ke
  Supabase SQL editor).
- `database/README.md` — langkah penuh: cipta DB, wire `store.js` ke API,
  mapping koleksi→jadual, nota auth.

## File yang Teraffected

**Baru:**
- src/components/sections/CaseStudies.jsx, Team.jsx
- src/data/caseStudies.js, team.js
- src/admin/store.js
- src/pages/Admin.jsx
- database/schema.sql, database/README.md

**Diubah:**
- src/styles/global.css, src/styles/components.css
- src/components/sections/Experience.jsx
- src/data/products.js, src/data/navigation.js
- src/pages/Home.jsx, src/App.jsx, src/main.jsx

## Details / Notes

- **Build:** `npm run build` lulus — 63 modules, 0 error
  (CSS ~25 kB, JS ~215 kB / gzip ~68 kB).
- Dev server & route `/admin` kedua-dua HTTP 200, console bersih.
- **Belum dibina (sengaja skip):** Speaking Events, Media/Press, Investments —
  elak data palsu yang menjejaskan kredibiliti; tambah bila ada data sebenar
  ikut pola section + data file yang sama.
