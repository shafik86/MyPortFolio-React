import { useMemo, useState } from 'react'
import { achievementsData } from '../../data/achievements'
import SectionHead from '../common/SectionHead'

const ICON_COLORS = ['blue', 'green', 'amber', 'cyan', 'red']

export default function Achievements() {
  const years = useMemo(
    () => ['All', ...[...new Set(achievementsData.map((a) => a.year))].sort((a, b) => b - a)],
    []
  )
  const [year, setYear] = useState('All')

  const visible =
    year === 'All'
      ? achievementsData
      : achievementsData.filter((a) => a.year === year)

  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Track Record"
          title="Achievements & Milestones"
          subtitle="Key moments in the journey of building technology that matters"
        />

        <div className="filter-bar reveal">
          {years.map((y) => (
            <button
              key={y}
              className={`filter-btn ${year === y ? 'active' : ''}`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="ach-list">
          {visible.map((a, i) => (
            <div key={a.id} className={`card ach-item accent-${ICON_COLORS[i % ICON_COLORS.length]} reveal`}>
              <div className="icon-tile">
                <i className={`bi ${a.icon}`} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="ach-year">{a.year}</span>
                <h4>{a.title}</h4>
                <div className="issuer">{a.issuer}</div>
                <p>{a.description}</p>
              </div>
              <span className="ach-cat">{a.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
