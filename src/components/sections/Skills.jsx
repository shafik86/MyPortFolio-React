import { skillsData } from '../../data/skills'
import SectionHead from '../common/SectionHead'
import LoopCarousel from '../common/LoopCarousel'

const perViewFor = (w) => (w >= 1100 ? 4 : w >= 800 ? 3 : w >= 540 ? 2 : 1)

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Capabilities"
          title="Technical Expertise"
          subtitle="Full-stack capabilities across modern technology stacks"
        />
      </div>

      {/* Full-bleed: sits outside .container so it runs edge to edge */}
      <LoopCarousel
        className="skill-carousel reveal"
        label="skills"
        items={skillsData}
        perViewFor={perViewFor}
        renderItem={(s) => (
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
        )}
      />
    </section>
  )
}
