export default function ProductCard({ product }) {
  return (
    <div className="card product-card">
      <div className="logo-frame img-frame">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '0.5rem' }}>
          <div>
            <h4 className="gradient-text" style={{ marginBottom: '0.1rem' }}>{product.name}</h4>
            <p className="muted" style={{ margin: 0, fontSize: '0.88rem' }}>{product.category}</p>
          </div>
          <span className="badge-status">{product.status}</span>
        </div>

        <p className="muted" style={{ fontSize: '0.9rem', marginTop: '0.6rem' }}>{product.description}</p>

        <ul className="product-features">
          {product.features.map((f) => (
            <li key={f}>
              <i className="bi bi-check-circle" /> {f}
            </li>
          ))}
        </ul>

        <a href={product.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm btn-block">
          Learn More
        </a>
      </div>
    </div>
  )
}
