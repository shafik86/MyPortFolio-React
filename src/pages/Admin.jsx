import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  COLLECTIONS,
  getCollection,
  upsertItem,
  deleteItem,
  resetCollection,
} from '../admin/store'

// Demo-only gate. NOTE: a hard-coded passphrase is NOT real security — it is a
// placeholder for the demo. When the database/API is added, replace this with
// proper server-side auth (e.g. Supabase Auth, JWT, or session cookies).
const DEMO_PASS = 'admin'

export default function Admin() {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem('nsp_admin_ok') === '1'
  )
  const [pass, setPass] = useState('')
  const [active, setActive] = useState(COLLECTIONS[0].key)
  const [tick, setTick] = useState(0) // bump to re-read after writes
  const [editing, setEditing] = useState(null) // { json, id }
  const [error, setError] = useState('')

  const collection = useMemo(
    () => COLLECTIONS.find((c) => c.key === active),
    [active]
  )
  const rows = useMemo(() => getCollection(active), [active, tick])

  const refresh = () => setTick((t) => t + 1)

  function login(e) {
    e.preventDefault()
    if (pass === DEMO_PASS) {
      sessionStorage.setItem('nsp_admin_ok', '1')
      setAuthed(true)
    } else {
      setError('Incorrect passphrase (demo passphrase is "admin").')
    }
  }

  function startEdit(item) {
    setError('')
    setEditing({ id: item?.id ?? null, json: JSON.stringify(item ?? {}, null, 2) })
  }

  function save() {
    try {
      const obj = JSON.parse(editing.json)
      upsertItem(active, editing.id == null ? obj : { ...obj, id: editing.id })
      setEditing(null)
      setError('')
      refresh()
    } catch {
      setError('Invalid JSON — fix the syntax and try again.')
    }
  }

  function remove(id) {
    if (window.confirm('Delete this item? (demo: affects local storage only)')) {
      deleteItem(active, id)
      refresh()
    }
  }

  function reset() {
    if (window.confirm(`Reset "${collection.label}" back to the shipped data?`)) {
      resetCollection(active)
      setEditing(null)
      refresh()
    }
  }

  if (!authed) {
    return (
      <section className="section admin-login">
        <div className="container" style={{ maxWidth: 420 }}>
          <h2 className="gradient-text" style={{ textAlign: 'center' }}>Admin</h2>
          <p className="muted" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Demo content manager. Saves to this browser only.
          </p>
          <form onSubmit={login} className="card" style={{ padding: '1.6rem' }}>
            <label className="admin-label">Passphrase</label>
            <input
              type="password"
              className="admin-input"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder='Demo: "admin"'
              autoFocus
            />
            {error && <p className="admin-error">{error}</p>}
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '1rem' }}>
              Enter
            </button>
            <Link to="/" className="muted" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem' }}>
              ← Back to site
            </Link>
          </form>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <div className="admin-head">
          <div>
            <h2 className="gradient-text" style={{ marginBottom: '0.2rem' }}>Content Manager</h2>
            <p className="muted" style={{ margin: 0, fontSize: '0.88rem' }}>
              Demo mode — changes persist in <strong>this browser only</strong>. See
              {' '}<code>src/admin/store.js</code> &amp; <code>database/schema.sql</code> to wire a real database.
            </p>
          </div>
          <Link to="/" className="btn btn-ghost btn-sm">View site</Link>
        </div>

        <div className="admin-grid">
          <aside className="admin-side card">
            {COLLECTIONS.map((c) => (
              <button
                key={c.key}
                className={`admin-tab ${active === c.key ? 'active' : ''}`}
                onClick={() => { setActive(c.key); setEditing(null); setError('') }}
              >
                {c.label}
                <span className="admin-count">{getCollection(c.key).length}</span>
              </button>
            ))}
          </aside>

          <div className="admin-main card">
            <div className="admin-toolbar">
              <h4 style={{ margin: 0 }}>{collection.label}</h4>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-ghost btn-sm" onClick={reset}>Reset</button>
                <button className="btn btn-primary btn-sm" onClick={() => startEdit(null)}>+ Add</button>
              </div>
            </div>

            {error && <p className="admin-error">{error}</p>}

            {editing ? (
              <div className="admin-editor">
                <label className="admin-label">
                  {editing.id == null ? 'New item' : `Editing #${editing.id}`} — edit as JSON
                </label>
                <textarea
                  className="admin-textarea"
                  value={editing.json}
                  spellCheck={false}
                  onChange={(e) => setEditing({ ...editing, json: e.target.value })}
                />
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                  <button className="btn btn-primary btn-sm" onClick={save}>Save</button>
                  <button className="btn btn-ghost btn-sm" onClick={() => { setEditing(null); setError('') }}>Cancel</button>
                </div>
              </div>
            ) : (
              <ul className="admin-list">
                {rows.map((r) => (
                  <li key={r.id} className="admin-row">
                    <span className="admin-row-title">
                      <span className="admin-id">#{r.id}</span>
                      {r[collection.titleField] ?? '(untitled)'}
                    </span>
                    <span className="admin-row-actions">
                      <button className="admin-icon-btn" onClick={() => startEdit(r)} aria-label="Edit">
                        <i className="bi bi-pencil" />
                      </button>
                      <button className="admin-icon-btn danger" onClick={() => remove(r.id)} aria-label="Delete">
                        <i className="bi bi-trash" />
                      </button>
                    </span>
                  </li>
                ))}
                {rows.length === 0 && <li className="muted" style={{ padding: '1rem' }}>No items.</li>}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
