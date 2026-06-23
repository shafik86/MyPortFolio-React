// =============================================================================
// Admin content store — DEMO implementation (localStorage only)
// =============================================================================
//
// This is a front-end-only demo so the admin panel works without a backend.
// Edits are saved to the browser's localStorage and DO NOT persist across
// devices or browsers. The static `src/data/*.js` files remain the source of
// truth that ships with the site; this store seeds itself from them on first
// load and lets you preview edits locally.
//
// ── HOW TO SWAP IN A REAL DATABASE ──────────────────────────────────────────
// Replace the body of the functions below with API calls. Keep the SAME
// signatures so the UI does not change. A matching SQL schema lives in
// `database/schema.sql`. Suggested REST mapping:
//
//   getCollection(name)        -> GET    /api/:name
//   saveCollection(name, rows) -> (bulk) PUT /api/:name        (optional)
//   upsertItem(name, item)     -> POST   /api/:name  (new)  /  PUT /api/:name/:id
//   deleteItem(name, id)       -> DELETE /api/:name/:id
//
// e.g.  const res = await fetch(`/api/${name}`); return res.json()
//
// Recommended stack to "just run": Supabase or PostgreSQL + a thin Express/
// Fastify API, or Firebase Firestore. Run `database/schema.sql` to create the
// tables, point an API at it, then flip the functions here to fetch().
// =============================================================================

import { companiesData } from '../data/companies'
import { productsData } from '../data/products'
import { clientsData } from '../data/clients'
import { experienceData } from '../data/experience'
import { achievementsData } from '../data/achievements'
import { caseStudiesData } from '../data/caseStudies'
import { teamData } from '../data/team'
import { testimonialsData } from '../data/testimonials'

const PREFIX = 'nsp_admin_'

// Collections the admin panel can manage. `key` matches the localStorage slot,
// the DB table name, and the API resource name — keep them aligned.
export const COLLECTIONS = [
  { key: 'companies', label: 'Companies', seed: companiesData, titleField: 'name' },
  { key: 'products', label: 'Products', seed: productsData, titleField: 'name' },
  { key: 'clients', label: 'Clients', seed: clientsData, titleField: 'name' },
  { key: 'experience', label: 'Experience', seed: experienceData, titleField: 'position' },
  { key: 'achievements', label: 'Achievements', seed: achievementsData, titleField: 'title' },
  { key: 'caseStudies', label: 'Case Studies', seed: caseStudiesData, titleField: 'title' },
  { key: 'team', label: 'Team', seed: teamData, titleField: 'name' },
  { key: 'testimonials', label: 'Testimonials', seed: testimonialsData, titleField: 'author' },
]

const seedOf = (name) => COLLECTIONS.find((c) => c.key === name)?.seed ?? []

// READ — returns the live (possibly edited) rows, seeding from static data once.
export function getCollection(name) {
  try {
    const raw = localStorage.getItem(PREFIX + name)
    if (raw) return JSON.parse(raw)
  } catch {
    /* corrupted slot — fall through to seed */
  }
  const seed = seedOf(name)
  localStorage.setItem(PREFIX + name, JSON.stringify(seed))
  return seed
}

// WRITE (bulk)
export function saveCollection(name, rows) {
  localStorage.setItem(PREFIX + name, JSON.stringify(rows))
  return rows
}

// CREATE or UPDATE a single item (matched by `id`).
export function upsertItem(name, item) {
  const rows = getCollection(name)
  if (item.id == null) {
    const nextId = rows.reduce((m, r) => Math.max(m, Number(r.id) || 0), 0) + 1
    return saveCollection(name, [...rows, { ...item, id: nextId }])
  }
  return saveCollection(
    name,
    rows.map((r) => (r.id === item.id ? { ...r, ...item } : r))
  )
}

// DELETE
export function deleteItem(name, id) {
  const rows = getCollection(name).filter((r) => r.id !== id)
  return saveCollection(name, rows)
}

// Reset a collection back to the shipped static data.
export function resetCollection(name) {
  return saveCollection(name, seedOf(name))
}

export function resetAll() {
  COLLECTIONS.forEach((c) => localStorage.removeItem(PREFIX + c.key))
}
