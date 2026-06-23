export default function CompanyCard({ company }) {
  return (
    <div className="card company-card">
      <div className="logo-frame">
        <img src={company.logo} alt={company.name} />
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '0.5rem' }}>
          <div>
            <h4 className="gradient-text" style={{ marginBottom: '0.15rem' }}>{company.name}</h4>
            <p className="muted" style={{ margin: 0, fontSize: '0.9rem' }}>{company.role}</p>
          </div>
          <span className="badge-status">{company.status}</span>
        </div>

        <div className="company-meta">
          <div><i className="bi bi-calendar" /> {company.founded}</div>
          <div><i className="bi bi-card-text" /> {company.ssm}</div>
          <div><i className="bi bi-geo-alt" /> {company.location}</div>
          <div><i className="bi bi-globe" /> {company.websiteLabel}</div>
        </div>

        <p className="muted" style={{ fontSize: '0.9rem' }}>{company.description}</p>

        <div className="chips" style={{ marginBottom: '1.1rem' }}>
          {company.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <a href={company.website} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm btn-block">
          <i className="bi bi-arrow-right" /> Learn More
        </a>
      </div>
    </div>
  )
}
