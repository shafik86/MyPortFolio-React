import { clientsData } from '../../data/clients'
import SectionHead from '../common/SectionHead'
import LoopCarousel from '../common/LoopCarousel'

// Cards visible at once for a given carousel width.
const perViewFor = (w) => (w >= 1000 ? 5 : w >= 760 ? 4 : w >= 560 ? 3 : w >= 360 ? 2 : 1)

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Trust"
          title="Key Clients & Projects"
          subtitle="Trusted by leading organizations across Malaysia"
        />

        <LoopCarousel
          className="client-carousel reveal"
          label="clients"
          items={clientsData}
          perViewFor={perViewFor}
          renderItem={(c) => (
            <div className="card cc-card">
              <div className="logo-frame cc-logo">
                <img src={c.logo} alt={c.name} draggable={false} />
              </div>
              <div className="cc-body">
                <h5>{c.name}</h5>
                <p>{c.project}</p>
              </div>
            </div>
          )}
        />

        <p className="cc-hint">
          <i className="bi bi-arrows" /> Drag or use the arrows to browse {clientsData.length} clients
        </p>
      </div>
    </section>
  )
}
