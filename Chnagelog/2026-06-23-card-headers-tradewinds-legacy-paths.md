# CHANGELOG: Unified Card Headers, Tradewinds Client, Legacy Image Paths

**Tanggal:** 2026-06-23
**Category:** Enhancement / Content / Fix
**Status:** ✅ Completed

## Perubahan

### 1. Card header gradient — semua section sama
- Gradient **biru (kiri) → putih (tengah) → hijau (kanan)** kini di base
  `.logo-frame` (`global.css`), jadi **semua** card guna header sama:
  Companies, Products, Clients, Experience.
- Override duplikat di `.client-card .logo-frame` & `.tl-card .logo-frame`
  dibuang (base sudah handle) — kurang pengulangan CSS.
- Putih di tengah pastikan logo kekal jelas.

### 2. Client baru — Tradewinds
- Ditambah ke `src/data/clients.js` (id 6):
  - Project: **Farm Guard with Drone Activation**
  - Detail: AI camera detection → drone activation + server monitoring dashboard
  - Tech: AI Camera, Drone, Node.js, React
  - Link: `apps.nasadef.com.my`
  - Logo: `/images/tradewinds_logo.png` (disahkan serve 200)

### 3. Legacy HTML — guna public/images
- `index.legacy.html`: semua 23 rujukan `="images/..."` (relatif) tukar ke
  `="/images/..."` supaya rujuk `public/images/` (folder `images/` root dah
  dibuang sebelum ini). Tiada double-slash, tiada rujukan relatif tinggal.
- `style.legacy.css` / `script.legacy.js`: tiada rujukan image (tiada perubahan).

## File yang Teraffected
- src/styles/global.css (base .logo-frame gradient)
- src/styles/components.css (buang override duplikat)
- src/data/clients.js (Tradewinds)
- index.legacy.html (image paths)

## Details / Notes
- **Build:** `npm run build` lulus — 0 error (CSS ~29 kB / JS ~213 kB).
- Tiada screenshot atas permintaan — user test sendiri.
