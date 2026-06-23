# Nik Shafik Portfolio — React + Vite

Portfolio profesional CEO-level untuk **Nik Mohd Shafik Izwan**, dibina semula
dari HTML statik ke **React 18 + Vite** mengikut dokumen dalam `Planning/`.

## Tech Stack
- **React 18** + **React Router v6**
- **Vite 5** (build tool)
- CSS variables design system (Tech Blue & Green), dark/light theme
- Bootstrap Icons (icon font sahaja, via CDN)

## Cara Run (Development)

```bash
npm install
npm run dev
```

Buka http://localhost:3000 (Vite akan auto-open).

### ⚠️ Nota penting: folder ini dalam Google Drive

`npm install` **tidak stabil** terus dalam folder Google Drive (`G:\My Drive\...`)
kerana Drive lock fail-fail kecil dalam `node_modules` (error `EBADF` / `ENOTEMPTY`).

**Penyelesaian paling senang** — install & run dari folder lokal:

```bash
# 1. Salin projek ke folder lokal (bukan dalam Google Drive)
#    contoh: C:\dev\nikshafik-portfolio
# 2. Dari folder lokal tu:
npm install
npm run dev
```

Atau install di lokasi lokal kemudian copy `node_modules` masuk — tapi cara
salin keseluruhan projek ke luar Drive adalah paling bersih.

## Build untuk Production

```bash
npm run build      # output ke /dist
npm run preview    # preview hasil build
```

Folder `dist/` yang sedia ada dalam repo ini ialah hasil build terkini.

## Struktur Folder

```
src/
├── components/
│   ├── common/      Navigation, Footer, ThemeToggle, BackToTop, SectionHead
│   ├── sections/    Hero, About, Leadership, Impact, Companies, Products,
│   │                Clients, Achievements, Skills, Experience,
│   │                Testimonials, Contact
│   └── cards/       CompanyCard, ProductCard
├── context/         ThemeContext (dark/light + localStorage)
├── data/            Semua kandungan (profile, companies, products, dll)
├── hooks/           useReveal, useScrollSpy, useCountUp
├── pages/           Home, NotFound
├── styles/          variables.css, animations.css, global.css, components.css
├── App.jsx
└── main.jsx
```

## Update Kandungan

Semua teks/data ada dalam `src/data/`. Untuk tambah produk baru, edit
`src/data/products.js` — tak perlu sentuh component. Sama untuk companies,
clients, skills, experience, achievements, testimonials, leadership, impact.

Gambar diletak dalam `public/images/` dan dirujuk sebagai `/images/...`.

## Fail Lama (Legacy)

Versi HTML statik asal dikekalkan sebagai rujukan:
`index.legacy.html`, `style.legacy.css`, `script.legacy.js`.

---

**Status:** ✅ Core + CEO sections siap (PLANNING-02 & PLANNING-03 Phase 1)
