import { useEffect, useRef, useState } from 'react'
import { navLinks, primaryLinks, moreLinks } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const [open, setOpen] = useState(false)        // mobile menu
  const [moreOpen, setMoreOpen] = useState(false) // desktop "More" dropdown
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(navLinks.map((l) => l.id))
  const moreRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the dropdown on outside click / Escape.
  useEffect(() => {
    const onDown = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setMoreOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    setMoreOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const moreActive = moreLinks.some((l) => l.id === active)

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="nav-brand gradient-text" onClick={(e) => go(e, 'home')}>
          {profile.shortName}
        </a>

        {/* Desktop: primary links + grouped "More" dropdown */}
        <ul className="nav-links nav-links--desktop">
          {primaryLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={(e) => go(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="nav-more" ref={moreRef}>
            <button
              className={`nav-more-btn ${moreActive ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((o) => !o)}
            >
              More <i className={`bi bi-chevron-down ${moreOpen ? 'flip' : ''}`} />
            </button>
            <div className={`nav-dropdown ${moreOpen ? 'open' : ''}`} role="menu">
              {moreLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  role="menuitem"
                  className={active === link.id ? 'active' : ''}
                  onClick={(e) => go(e, link.id)}
                >
                  <span className="nav-dropdown-icon"><i className={`bi ${link.icon}`} /></span>
                  {link.label}
                </a>
              ))}
            </div>
          </li>
        </ul>

        {/* Mobile: full flat list inside the slide-down panel */}
        <ul className={`nav-links nav-links--mobile ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'active' : ''}
                onClick={(e) => go(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="icon-btn nav-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <i className={open ? 'bi bi-x-lg' : 'bi bi-list'} />
          </button>
        </div>
      </div>
    </nav>
  )
}
