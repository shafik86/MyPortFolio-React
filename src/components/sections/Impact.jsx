import { impactMetrics } from '../../data/impact'
import { useCountUp } from '../../hooks/useCountUp'

function Metric({ icon, value, suffix, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div className="impact-cell reveal" ref={ref}>
      <i className={`bi ${icon}`} />
      <div className="num">
        {count}
        {suffix}
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function Impact() {
  return (
    <section className="section impact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">By the Numbers</span>
          <h2>Growth &amp; Impact</h2>
          <p>What Nasa Def and Izwan Systec are delivering on the ground today</p>
        </div>

        <div className="impact-grid">
          {impactMetrics.map((m) => (
            <Metric key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}
