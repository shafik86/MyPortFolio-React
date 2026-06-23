import { profile, heroStats } from '../../data/profile'
import { useCountUp } from '../../hooks/useCountUp'

function Stat({ value, suffix, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="hero-stat" ref={ref}>
      <div className="num">
        {count}
        {suffix}
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <span className="hero-blob b1" />
      <span className="hero-blob b2" />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-photo">
            <div className="hero-photo-glow" />
            <img src="/images/NIkShafik Banner.png" alt={profile.name} />
          </div>

          <div className="hero-inner">
            <span className="hero-eyebrow">
              <i className="bi bi-broadcast" /> {profile.role}
            </span>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.title}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-stats">
              {heroStats.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>

            <div className="hero-cta">
              <button className="btn btn-light" onClick={() => scrollTo('about')}>
                <i className="bi bi-person" /> Learn More
              </button>
              <button className="btn btn-glass" onClick={() => scrollTo('contact')}>
                <i className="bi bi-envelope" /> Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="scroll-cue"
        aria-label="Scroll to about section"
        onClick={() => scrollTo('about')}
      >
        <i className="bi bi-chevron-double-down" />
      </button>
    </section>
  )
}
