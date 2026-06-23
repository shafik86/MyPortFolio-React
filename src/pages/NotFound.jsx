import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
        <p className="muted" style={{ marginBottom: '2rem' }}>
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary">
          <i className="bi bi-house" /> Back Home
        </Link>
      </div>
    </section>
  )
}
