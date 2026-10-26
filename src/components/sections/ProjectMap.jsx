import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const TILE_URL =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'

// Numbered, colour-coded site markers on a topo map of Malaysia.
export default function ProjectMap({ sites, regions }) {
  const el = useRef(null)

  useEffect(() => {
    const colors = Object.fromEntries(regions.map((r) => [r.key, r.color]))
    const labels = Object.fromEntries(regions.map((r) => [r.key, r.label]))

    const map = L.map(el.current, { scrollWheelZoom: false, attributionControl: true })
    L.tileLayer(TILE_URL, {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri',
    }).addTo(map)

    const markers = sites.map((s) =>
      L.marker([s.lat, s.lng], {
        icon: L.divIcon({
          className: 'site-pin-wrap',
          html: `<span class="site-pin" style="background:${colors[s.region]}">${s.no}</span>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        }),
      })
        .bindTooltip(`Site ${s.no} · ${labels[s.region]}`)
        .addTo(map),
    )

    map.fitBounds(L.featureGroup(markers).getBounds(), { padding: [24, 24] })
    return () => map.remove()
  }, [sites, regions])

  return (
    <div className="project-map-wrap">
      <div ref={el} className="project-map" />
      <div className="map-legend">
        {regions.map((r) => (
          <span key={r.key}>
            <i style={{ background: r.color }} /> {r.label}
          </span>
        ))}
      </div>
    </div>
  )
}
