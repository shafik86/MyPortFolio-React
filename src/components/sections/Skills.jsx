import { skillsData } from '../../data/skills'
import SectionHead from '../common/SectionHead'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Capabilities"
          title="Technical Expertise"
          subtitle="Full-stack capabilities across modern technology stacks"
        />

        <div className="grid grid-3">
          {skillsData.map((s, i) => (
            <div key={s.id} className={`reveal delay-${(i % 3) + 1}`}>
              <div className={`card skill-card accent-${s.color}`}>
                <div className="icon-tile">
                  <i className={`bi ${s.icon}`} />
                </div>
                <h4>{s.category}</h4>
                <p>{s.description}</p>
                <div className="skill-tags">
                  {s.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
