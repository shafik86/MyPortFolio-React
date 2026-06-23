export default function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="section-head reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="gradient-text">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
