import { useRef, useState } from 'react'
import { experienceData } from '../../data/experience'
import SectionHead from '../common/SectionHead'

// Roles shown before "Show earlier roles" is pressed. Open/closed state is
// plain component state, so everything collapses again on refresh.
const VISIBLE = 4

// "June 2025 - August 2025" -> ['2025', '2025']
const years = (duration) => duration.split(' - ').map((d) => d.split(' ').pop())

function ExperienceItem({ exp, extra, delay }) {
  const [open, setOpen] = useState(false)
  const panelId = `exp-details-${exp.id}`

  return (
    <div
      className={`tl-item ${extra ? 'tl-item--extra' : 'reveal'} ${
        exp.current ? 'tl-item--current' : 'tl-item--past'
      } ${open ? 'is-open' : ''}`}
      style={extra ? { animationDelay: `${delay}s` } : undefined}
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

          <button
            className="tl-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide details' : 'View details'}
            <i className="bi bi-chevron-down" />
          </button>

          <div className="tl-details" id={panelId}>
            <div>
              <p>{exp.description}</p>
              <div className="chips">
                {exp.tech.map((t) => (
                  <span key={t} className="chip chip--neutral">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const moreRef = useRef(null)
  const hidden = experienceData.length - VISIBLE
  const items = showAll ? experienceData : experienceData.slice(0, VISIBLE)
  const hiddenRange = hidden > 0 && `${years(experienceData.at(-1).duration)[0]} – ${years(experienceData[VISIBLE].duration)[1]}`

  const toggleAll = () => {
    setShowAll((s) => !s)
    // When collapsing, keep the button in view instead of leaving the reader
    // stranded further down the page.
    if (showAll) {
      requestAnimationFrame(() =>
        moreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      )
    }
  }

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Career"
          title="Professional Journey"
          subtitle="13+ years of technology leadership and innovation"
        />

        <div className={`timeline ${showAll ? '' : 'timeline--collapsed'}`}>
          {items.map((exp, i) => (
            <ExperienceItem
              key={exp.id}
              exp={exp}
              extra={i >= VISIBLE}
              delay={(i - VISIBLE) * 0.08}
            />
          ))}
        </div>

        {hidden > 0 && (
          <div className="tl-more" ref={moreRef}>
            <button className="tl-more-btn" onClick={toggleAll} aria-expanded={showAll}>
              <i className={`bi ${showAll ? 'bi-arrow-up-circle' : 'bi-clock-history'}`} />
              {showAll ? 'Show less' : `Show ${hidden} earlier roles`}
              {!showAll && <span className="tl-more-range">{hiddenRange}</span>}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
