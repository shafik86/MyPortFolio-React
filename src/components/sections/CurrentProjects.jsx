import { currentProjects } from '../../data/currentProjects'
import { useCountUp } from '../../hooks/useCountUp'
import SectionHead from '../common/SectionHead'

function Stat({ value, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="proj-stat" ref={ref}>
      <strong>{count}</strong>
      <span>{label}</span>
    </div>
  )
}

// Whole months from today until the target date (never negative).
function monthsTo(target) {
  const t = new Date(target)
  const now = new Date()
  const months = (t.getFullYear() - now.getFullYear()) * 12 + (t.getMonth() - now.getMonth())
  return Math.max(months, 0)
}

export default function CurrentProjects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Now Delivering"
          title="Current Projects"
          subtitle="Live deployments led by Nasa Def across Malaysia"
        />

        <div className="proj-grid">
          {currentProjects.map((p, i) => {
            const left = monthsTo(p.target)
            return (
              <article key={p.id} className={`card proj-card reveal delay-${i + 1}`}>
                <div className={`proj-media proj-media--${p.media}`}>
                  <img src={p.image} alt={p.title} />
                  <span className="proj-live">
                    <span className="proj-live-dot" /> LIVE · {p.status}
                  </span>
                </div>

                <div className="proj-body">
                  <div className="proj-client">
                    <div className="proj-client-logo">
                      <img src={p.clientLogo} alt={p.client} />
                    </div>
                    <div>
                      <strong>{p.client}</strong>
                      <span>{p.sector}</span>
                    </div>
                  </div>

                  <h3>{p.title}</h3>
                  <p className="proj-desc">{p.description}</p>

                  <div className="proj-stats">
                    {p.stats.map((s) => (
                      <Stat key={s.label} {...s} />
                    ))}
                  </div>

                  <ol className="proj-steps">
                    {p.phases.map((ph, j) => (
                      <li
                        key={ph}
                        className={j < p.step ? 'is-done' : j === p.step ? 'is-active' : ''}
                      >
                        <span className="proj-step-dot">
                          {j < p.step ? <i className="bi bi-check-lg" /> : j + 1}
                        </span>
                        <span className="proj-step-lbl">{ph}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="proj-target">
                    <i className="bi bi-flag-fill" />
                    <span>
                      Target <strong>{p.targetLabel}</strong>
                    </span>
                    {left > 0 && <span className="proj-countdown">~{left} months to go</span>}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
