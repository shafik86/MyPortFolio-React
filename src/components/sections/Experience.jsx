import { experienceData } from '../../data/experience'
import SectionHead from '../common/SectionHead'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Career"
          title="Professional Journey"
          subtitle="13+ years of technology leadership and innovation"
        />

        <div className="timeline">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className={`tl-item reveal ${exp.current ? 'tl-item--current' : 'tl-item--past'}`}
            >
              <div className="tl-node">{exp.index}</div>
              <div className="card tl-card">
                <div className="logo-frame">
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="tl-body">
                  <span className="tl-date">
                    {exp.duration}
                    {exp.current && <span className="tl-live" aria-label="Currently active" />}
                  </span>
                  <h4>{exp.position}</h4>
                  <div className="role-co">{exp.company}</div>
                  <p>{exp.description}</p>
                  <div className="chips">
                    {exp.tech.map((t) => (
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
