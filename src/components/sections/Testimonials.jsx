import { useEffect, useState } from 'react'
import { testimonialsData } from '../../data/testimonials'
import SectionHead from '../common/SectionHead'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonialsData.length

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(timer)
  }, [count])

  const current = testimonialsData[index]

  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Reviews"
          title="What Clients Say"
          subtitle="Feedback from the organizations we have partnered with"
        />

        <div className="testi reveal">
          <div className="card testi-card">
            <div className="testi-stars" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <i key={i} className="bi bi-star-fill" />
              ))}
            </div>
            <p className="testi-text">&ldquo;{current.text}&rdquo;</p>
            <div className="testi-author">{current.author}</div>
            <div className="testi-meta">
              {current.position} &middot; {current.company}
            </div>
          </div>

          <div className="testi-dots">
            {testimonialsData.map((t, i) => (
              <button
                key={t.id}
                className={`testi-dot ${i === index ? 'active' : ''}`}
                aria-label={`Show review ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
