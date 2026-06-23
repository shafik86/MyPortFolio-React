# Database — Admin content backend

The admin panel at `/admin` runs in **demo mode** today: edits save to the
browser's `localStorage` only (see `src/admin/store.js`). This folder is
everything you need to swap that demo store for a real database.

## Files

- `schema.sql` — PostgreSQL schema. One table per admin collection, JSONB for
  array/nested fields so shapes match `src/data/*.js` exactly.

## Create the database (PostgreSQL)

```bash
createdb nikshafik_portfolio
psql -d nikshafik_portfolio -f database/schema.sql
```

Or with a connection string (Supabase / Neon / RDS):

```bash
psql "$DATABASE_URL" -f database/schema.sql
```

**Supabase:** open the SQL editor, paste `schema.sql`, run.

## Wire the front-end to it

In `src/admin/store.js`, the functions already have the right signatures.
Replace their bodies with API calls — the UI does not change:

```js
export async function getCollection(name)        { return (await fetch(`/api/${name}`)).json() }
export async function upsertItem(name, item)     { /* POST if no id, else PUT /api/:name/:id */ }
export async function deleteItem(name, id)        { await fetch(`/api/${name}/${id}`, { method: 'DELETE' }) }
```

(They become `async`, so make the callers in `src/pages/Admin.jsx` `await` them.)

## Collection → table mapping

| Admin key      | Table          |
|----------------|----------------|
| companies      | companies      |
| products       | products       |
| clients        | clients        |
| experience     | experience     |
| achievements   | achievements   |
| caseStudies    | case_studies   |
| team           | team           |
| testimonials   | testimonials   |

## Auth

The demo uses a hard-coded passphrase (`admin`) — **not** real security.
For production, create rows in `admin_users` (bcrypt password hashes) and use
proper server-side auth (Supabase Auth, JWT, or session cookies), then drop the
passphrase check in `src/pages/Admin.jsx`.
