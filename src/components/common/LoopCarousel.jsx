import { useEffect, useRef, useState } from 'react'

const mod = (a, n) => ((a % n) + n) % n

/**
 * Endless drag/arrow carousel. The items are rendered three times so there are
 * always slides on both sides of the visible window; `offset` (in slides) is
 * kept within one copy's length, so it loops forever without a visible jump.
 *
 * `perViewFor(width)` returns how many slides fit the carousel's width.
 */
export default function LoopCarousel({ items, perViewFor, renderItem, label, className = '' }) {
  const viewportRef = useRef(null)
  const dragRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [offset, setOffset] = useState(0)
  const [animate, setAnimate] = useState(true)

  const n = items.length
  const loop = [...items, ...items, ...items]

  useEffect(() => {
    const el = viewportRef.current
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const perView = perViewFor(width)
  const slideW = width / perView || 1

  const step = (dir) => {
    setAnimate(true)
    setOffset((o) => o + dir)
  }

  // After a slide animation, silently move back into the middle copy.
  const onTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return // ignore card hover transitions
    if (offset < 0 || offset >= n) {
      setAnimate(false)
      setOffset((o) => mod(o, n))
    }
  }

  const onPointerDown = (e) => {
    dragRef.current = { x: e.clientX, start: offset }
    setAnimate(false)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    const d = dragRef.current
    if (!d) return
    setOffset(mod(d.start - (e.clientX - d.x) / slideW, n))
  }

  const onPointerUp = () => {
    if (!dragRef.current) return
    dragRef.current = null
    setAnimate(true)
    setOffset((o) => Math.round(o))
  }

  return (
    <div className={`loop-carousel ${className}`}>
      <button className="cc-arrow cc-arrow--prev" aria-label={`Previous ${label}`} onClick={() => step(-1)}>
        <i className="bi bi-chevron-left" />
      </button>

      <div
        className="cc-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          className="cc-track"
          style={{
            transform: `translateX(${-(n + offset) * slideW}px)`,
            transition: animate ? 'transform 0.45s var(--ease)' : 'none',
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loop.map((item, i) => (
            <div key={i} className="cc-slide" style={{ width: slideW }}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button className="cc-arrow cc-arrow--next" aria-label={`Next ${label}`} onClick={() => step(1)}>
        <i className="bi bi-chevron-right" />
      </button>
    </div>
  )
}
