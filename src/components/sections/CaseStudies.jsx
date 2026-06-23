import { caseStudiesData } from '../../data/caseStudies'
import SectionHead from '../common/SectionHead'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Proof of Work"
          title="Case Studies"
          subtitle="Real problems solved with technology — challenge, solution, results"
        />

        <div className="case-list">
          {caseStudiesData.map((cs, i) => (
            <article
              key={cs.id}
              className={`card case-card reveal ${i % 2 === 1 ? 'case-card--rev' : ''}`}
            >
              <div className="case-media logo-frame">
                <img src={cs.image} alt={cs.title} />
              </div>

              <div className="case-body">
                <div className="case-tags">
                  <span className="chip">{cs.industry}</span>
                  <span className="chip chip--neutral">{cs.client}</span>
                </div>
                <h4>{cs.title}</h4>

                <div className="case-block">
                  <span className="case-label case-label--challenge">Challenge</span>
                  <p>{cs.challenge}</p>
                </div>
                <div className="case-block">
                  <span className="case-label case-label--solution">Solution</span>
                  <p>{cs.solution}</p>
                </div>
                <div className="case-block">
                  <span className="case-label case-label--results">Results</span>
                  <p>{cs.results}</p>
                </div>

                <div className="case-metrics">
                  {cs.impactMetrics.map((m) => (
                    <div key={m.metric} className="case-metric">
                      <strong>{m.value}</strong>
                      <span>{m.metric}</span>
                    </div>
                  ))}
                </div>

                <div className="chips">
                  {cs.technologies.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
