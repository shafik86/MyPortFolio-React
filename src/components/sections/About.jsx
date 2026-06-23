import { profile, aboutBio, aboutHighlights } from '../../data/profile'
import SectionHead from '../common/SectionHead'

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Technology visionary with a passion for innovation"
        />

        <div className="about-grid">
          <div className="card profile-card reveal">
            <img className="profile-img" src={profile.image} alt={profile.name} />
            <h4>{profile.name}</h4>
            <p className="muted" style={{ margin: 0 }}>{profile.role}</p>

            <div className="profile-meta">
              <div><i className="bi bi-geo-alt" /> {profile.location}</div>
              <div><i className="bi bi-telephone" /> {profile.phone}</div>
              <div><i className="bi bi-envelope" /> {profile.emails[0]}</div>
              <div><i className="bi bi-cake2" /> {profile.age} Years Old</div>
            </div>
          </div>

          <div className="reveal delay-1">
            <h3 className="gradient-text">Technology Leader &amp; AI Innovator</h3>
            {aboutBio.map((para, i) => (
              <p key={i} className="muted">{para}</p>
            ))}

            <div className="about-highlights">
              {aboutHighlights.map((h) => (
                <div key={h.title} className={`highlight accent-${h.color}`}>
                  <div className="icon-tile icon-tile--soft">
                    <i className={`bi ${h.icon}`} />
                  </div>
                  <div>
                    <h5>{h.title}</h5>
                    <p>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
