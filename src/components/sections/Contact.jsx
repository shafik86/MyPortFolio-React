import { profile } from '../../data/profile'
import SectionHead from '../common/SectionHead'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Connect"
          title="Get In Touch"
          subtitle="Contact information and location"
        />

        <div className="contact-grid">
          <div className="card contact-info reveal">
            <h5 className="gradient-text" style={{ marginBottom: '1.5rem' }}>Contact Information</h5>

            <div className="contact-row">
              <i className="bi bi-envelope" />
              <div>
                <h5>Email</h5>
                {profile.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`}>{e}</a>
                ))}
              </div>
            </div>

            <div className="contact-row">
              <i className="bi bi-whatsapp" style={{ color: 'var(--tech-green)' }} />
              <div>
                <h5>WhatsApp</h5>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">{profile.phoneIntl}</a>
              </div>
            </div>

            <div className="contact-row">
              <i className="bi bi-geo-alt" style={{ color: 'var(--c-red)' }} />
              <div>
                <h5>Residential Address</h5>
                {profile.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            </div>

            <div className="contact-row">
              <i className="bi bi-globe" style={{ color: 'var(--c-cyan)' }} />
              <div>
                <h5>Corporate Website</h5>
                <a href={profile.website} target="_blank" rel="noreferrer">www.nasadef.com.my</a>
              </div>
            </div>
          </div>

          <div className="card contact-map reveal delay-1">
            <iframe
              src={profile.mapEmbed}
              title="Location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
