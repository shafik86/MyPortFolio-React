# CHANGELOG: Hero Banner, Navbar Dropdown, Favicon & Image Cleanup

**Tanggal:** 2026-06-23
**Category:** Enhancement / Fix / Cleanup
**Status:** ✅ Completed

## Deskripsi

Portfolio peribadi (bukan company), jadi: favicon tukar ke gambar Nik Shafik,
navbar diringkaskan dengan dropdown, Hero dapat gambar besar di kiri, dan folder
image duplikat dibersihkan.

## Perubahan

### 1. Favicon & Open Graph
- Favicon tab tukar dari `nasadef_log_small.png` → **`Shafik-Passport.png`**
  (gambar Nik Shafik). OG image kekal `Shafik-Passport.png`. (`index.html`)

### 2. Navbar — grouped dropdown
- Navbar kini tunjuk **Home | About | Products | Contact | More ▾** sahaja.
- "More" ialah dropdown berisi Leadership, Companies, Clients, Skills,
  Experience, Reviews — setiap satu dengan **icon** (UX lebih kemas).
- Dropdown tutup bila klik luar / tekan Escape; chevron berputar bila buka.
- Mobile kekal senarai penuh dalam panel slide-down.
- (`navigation.js` dipecah jadi `primaryLinks` / `moreLinks` / `navLinks`;
  `Navigation.jsx` ditulis semula; CSS dropdown ditambah.)

### 3. Hero — gambar besar + CTA lebih menarik
- Layout 2-kolum: **gambar Nik Shafik besar di kiri** (`NIkShafik Banner.png`)
  dengan glow lembut + drop-shadow; teks/stats/CTA di kanan (kiri-justify).
- Tambah eyebrow badge "Founder & CEO".
- CTA sekunder tukar dari plain outline → **`btn-glass`** (isi lembut bila hover).
- Responsif: <880px susun menegak & ke tengah semula.

### 4. Image folder cleanup
- App guna `public/images/` (dirujuk `/images/...` oleh Vite) — disahkan semua
  rujukan dalam `src/` guna laluan ini.
- **Dibuang:** `images/` di root (folder legacy duplikat, ~19M) — app tidak
  guna langsung.
- **Dikekalkan:** `public/images/` (sumber sebenar) + `dist/images/` (output
  build). Fail `.legacy.*` dikekalkan atas permintaan.

## File yang Teraffected
- index.html (favicon)
- src/data/navigation.js, src/components/common/Navigation.jsx
- src/components/sections/Hero.jsx
- src/styles/components.css (nav dropdown, hero grid, btn-glass, responsive)
- (dibuang) images/ root

## Details / Notes
- **Build:** `npm run build` lulus — 0 error (CSS ~29 kB / JS ~212 kB,
  gzip ~68 kB).
- Disahkan visual via screenshot: Hero (gambar kiri + stats 13+/2/5+),
  navbar (Home|About|Products|Contact|More), images serve HTTP 200.
- Bootstrap Icons masih dari CDN — chevron/icon dropdown perlu internet untuk
  render (berfungsi di browser biasa).
