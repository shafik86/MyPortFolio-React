import { clientsData } from '../../data/clients'
import SectionHead from '../common/SectionHead'

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Trust"
          title="Key Clients & Projects"
          subtitle="Trusted by leading organizations across Malaysia"
        />

        <div className="grid grid-3">
          {clientsData.map((c, i) => (
            <div key={c.id} className={`reveal delay-${(i % 3) + 1}`}>
              <div className="card client-card">
                <div className="logo-frame">
                  <img src={c.logo} alt={c.name} />
                </div>
                <div className="card-body">
                  <h5 className="gradient-text" style={{ marginBottom: '0.1rem' }}>{c.name}</h5>
                  <small className="muted">{c.industry}</small>
                  <h6 style={{ margin: '0.8rem 0 0.3rem' }}>{c.project}</h6>
                  <p className="muted" style={{ fontSize: '0.85rem' }}>{c.description}</p>
                  {c.link && (
                    <p style={{ fontSize: '0.82rem', marginBottom: '0.6rem' }}>
                      <i className="bi bi-link-45deg" style={{ color: 'var(--tech-blue)' }} /> {c.link}
                    </p>
                  )}
                  <div className="chips">
                    {c.tech.map((t) => (
                      <span key={t} className="chip chip--neutral">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
