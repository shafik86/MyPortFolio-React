import { projectsData, feldaSites, feldaRegions } from '../../data/projects'
import { useCountUp } from '../../hooks/useCountUp'
import SectionHead from '../common/SectionHead'
import ProjectMap from './ProjectMap'

function Highlight({ value, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="proj-stat" ref={ref}>
      <strong>{count}</strong>
      <span>{label}</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Live Now"
          title="Current Projects"
          subtitle="Nationwide AI + IoT deployments currently in progress at Nasa Def"
        />

        <div className="proj-list">
          {projectsData.map((p) => (
            <article key={p.id} className="card proj-card reveal">
              <div className="proj-head">
                <div className="logo-frame proj-media">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="proj-intro">
                  <div className="case-tags">
                    <span className={`proj-status proj-status--${p.statusTone}`}>
                      <span className="tl-live" aria-hidden="true" /> {p.status}
                    </span>
                    <span className="chip chip--neutral">{p.client}</span>
                  </div>
                  <h4>{p.title}</h4>
                  <p className="muted">{p.summary}</p>
                  <div className="proj-stats">
                    {p.highlights.map((h) => (
                      <Highlight key={h.label} {...h} />
                    ))}
                  </div>
                </div>
              </div>

              <ol className="proj-stages">
                {p.stages.map((s) => (
                  <li key={s.label} className={`stage stage--${s.state}`}>
                    <span className="stage-dot">
                      {s.state === 'done' && <i className="bi bi-check-lg" />}
                    </span>
                    <span className="stage-label">{s.label}</span>
                  </li>
                ))}
              </ol>

              {p.map && <ProjectMap sites={feldaSites} regions={feldaRegions} />}

              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
