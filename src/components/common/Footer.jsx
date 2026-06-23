import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/nasadef_logo_white.png" alt="Nasa Def" />
            <p>
              Leading AI-First Enterprise Solutions Provider. Transforming
              industries through innovative IoT and AI technology.
            </p>
            <div className="footer-social">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp" />
              </a>
              <a href={`mailto:${profile.emails[0]}`} aria-label="Email">
                <i className="bi bi-envelope" />
              </a>
            </div>
          </div>

          <div>
            <h6>Navigation</h6>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#companies">Companies</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>

          <div>
            <h6>Company</h6>
            <ul>
              <li><a href={profile.website} target="_blank" rel="noreferrer">Nasa Def Sdn Bhd</a></li>
              <li><a href="https://shafik86.github.io/isystec.com/" target="_blank" rel="noreferrer">Izwan Systec</a></li>
              <li><a href="#clients">Our Clients</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h6>Contact</h6>
            <div className="footer-contact">
              <div><i className="bi bi-telephone" /> {profile.phoneIntl}</div>
              <div><i className="bi bi-envelope" /> {profile.emails[0]}</div>
              <div><i className="bi bi-geo-alt" /> {profile.location}</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} {profile.name}. All rights reserved.</span>
          <span>Founder &amp; CEO of Nasa Def Sdn Bhd | AI Innovator</span>
        </div>
      </div>
    </footer>
  )
}
