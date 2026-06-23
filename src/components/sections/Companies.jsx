import { companiesData } from '../../data/companies'
import CompanyCard from '../cards/CompanyCard'
import SectionHead from '../common/SectionHead'

export default function Companies() {
  return (
    <section id="companies" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Ventures"
          title="My Companies"
          subtitle="Leading innovation through strategic technology ventures"
        />
        <div className="grid grid-2" style={{ maxWidth: 820, margin: '0 auto' }}>
          {companiesData.map((c, i) => (
            <div key={c.id} className={`reveal delay-${(i % 4) + 1}`}>
              <CompanyCard company={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
