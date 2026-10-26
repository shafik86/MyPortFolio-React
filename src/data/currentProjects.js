import { IMAGES } from '../config/imageConfig.js'

// Live projects shown right under the hero. `step` is the index of the phase
// currently in progress — phases before it render as done. `target` drives the
// "months to go" countdown; `targetLabel` is what is printed. `media` picks the
// image treatment: 'map' (full illustration) or 'field' (product on grassland).
export const currentProjects = [
  {
    id: 1,
    title: 'Nationwide Farm Guard Rollout',
    client: 'FELDA',
    clientLogo: IMAGES.felda,
    sector: 'Plantation Security',
    status: 'Supplying',
    image: IMAGES.feldaMap,
    media: 'map',
    description:
      'Supplying Farm Guard units to FELDA schemes from Johor to Kedah and across to Sabah.',
    stats: [
      { value: 97, label: 'Farm Guard Units' },
      { value: 42, label: 'FELDA Schemes' },
      { value: 2, label: 'Regions' },
    ],
    phases: ['Awarded', 'Supply', 'Full Rollout'],
    step: 1,
    target: '2027-02-28',
    targetLabel: 'Feb 2027',
  },
  {
    id: 2,
    title: 'Starlink-Connected AI Estate Security',
    client: 'TDM Plantation',
    clientLogo: IMAGES.tdm,
    sector: 'Smart Plantation',
    status: 'Kicked off',
    image: IMAGES.farmguard,
    media: 'field',
    description:
      'Farm Guard AI with Starlink links for Ladang Pelung, Jernih and Air Putih — online even without cellular coverage.',
    stats: [
      { value: 6, label: 'Farm Guard AI' },
      { value: 3, label: 'Starlink Units' },
      { value: 3, label: 'Estates' },
    ],
    phases: ['Kick-off', 'Installation', 'Go-Live'],
    step: 1,
    target: '2027-01-10',
    targetLabel: 'Early Jan 2027',
  },
]
