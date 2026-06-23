import { useMemo, useState } from 'react'
import { productsData } from '../../data/products'
import ProductCard from '../cards/ProductCard'
import SectionHead from '../common/SectionHead'

export default function Products() {
  const sectors = useMemo(
    () => ['All', ...new Set(productsData.map((p) => p.sector))],
    []
  )
  const [filter, setFilter] = useState('All')

  const visible =
    filter === 'All'
      ? productsData
      : productsData.filter((p) => p.sector === filter)

  return (
    <section id="products" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Innovation"
          title="Products Developed"
          subtitle="Revolutionary AI and IoT solutions transforming industries"
        />

        <div className="filter-bar reveal">
          {sectors.map((s) => (
            <button
              key={s}
              className={`filter-btn ${filter === s ? 'active' : ''}`}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid grid-3">
          {visible.map((p, i) => (
            <div key={p.id} className={`reveal delay-${(i % 3) + 1}`}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
