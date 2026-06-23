import { leadership } from '../../data/leadership'
import SectionHead from '../common/SectionHead'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Leadership"
          title={leadership.title}
          subtitle="Vision, philosophy, and the way I lead"
        />

        <div className="lead-grid">
          <div className="card lead-statement reveal">
            <i className="bi bi-quote q-icon" />
            <h4 className="gradient-text">Vision</h4>
            <p>{leadership.vision}</p>
            <h4 className="gradient-text" style={{ marginTop: '1.5rem' }}>Philosophy</h4>
            <p>{leadership.philosophy}</p>
          </div>

          <div className="lead-pillars">
            {leadership.pillars.map((p, i) => (
              <div key={p.title} className={`card lead-pillar reveal delay-${i + 1}`}>
                <div className="icon-tile">
                  <i className={`bi ${p.icon}`} />
                </div>
                <div>
                  <h5>{p.title}</h5>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
