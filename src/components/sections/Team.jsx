import { teamData } from '../../data/team'
import SectionHead from '../common/SectionHead'

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <SectionHead
          eyebrow="People"
          title="The Team"
          subtitle="The engineers and innovators building the products across our ventures"
        />

        <div className="grid grid-4">
          {teamData.map((m, i) => (
            <div key={m.id} className={`card team-card reveal delay-${(i % 4) + 1}`}>
              <div className="team-avatar">
                {m.image ? (
                  <img src={m.image} alt={m.name} />
                ) : (
                  <span className="team-initials">{initials(m.name)}</span>
                )}
              </div>
              <h4>{m.name}</h4>
              <div className="team-role">{m.position}</div>
              <div className="team-co muted">{m.company}</div>
              <p className="muted">{m.bio}</p>
              <div className="chips" style={{ justifyContent: 'center' }}>
                {m.specialization.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="team-link"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <i className="bi bi-linkedin" /> LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
