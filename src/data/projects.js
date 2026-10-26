import { IMAGES } from '../config/imageConfig.js'

// Live / ongoing projects shown in the "Current Projects" section.
// `stages[].state` is one of 'done' | 'current' | 'todo'.

// FELDA rollout regions — colours match the map legend. Site coordinates are
// approximate scheme locations; replace with exact GPS once confirmed.
export const feldaRegions = [
  { key: 'johor-timur', label: 'Johor Timur', color: '#d7263d' },
  { key: 'johor-tengah', label: 'Johor Tengah', color: '#f46036' },
  { key: 'utara', label: 'Perak & Kedah', color: '#7b2cbf' },
  { key: 'pahang-timur', label: 'Pahang Timur', color: '#c9a227' },
  { key: 'terengganu', label: 'Terengganu', color: '#1b74c4' },
  { key: 'kelantan', label: 'Kelantan', color: '#2e3192' },
  { key: 'pahang-tengah', label: 'Pahang Tengah', color: '#2d7d32' },
  { key: 'sabah', label: 'Sabah', color: '#d81b60' },
]

// [no, region, lat, lng]
const SITES = [
  [1, 'johor-timur', 1.58, 103.74], [2, 'johor-timur', 1.62, 103.69],
  [3, 'johor-timur', 1.6, 103.79], [4, 'johor-timur', 1.67, 103.72],
  [5, 'johor-timur', 1.72, 103.81], [6, 'johor-timur', 1.98, 103.62],
  [7, 'johor-timur', 2.04, 103.58], [8, 'johor-timur', 2.03, 103.66],
  [9, 'johor-timur', 2.56, 103.35], [10, 'johor-timur', 1.96, 103.77],
  [11, 'johor-tengah', 2.35, 103.39], [12, 'johor-tengah', 2.0, 103.1],
  [13, 'johor-tengah', 2.03, 103.2], [14, 'johor-tengah', 1.97, 103.24],
  [15, 'johor-tengah', 1.95, 103.05], [16, 'johor-tengah', 1.91, 103.15],
  [17, 'johor-tengah', 1.92, 102.95],
  [18, 'utara', 4.86, 100.68], [19, 'utara', 5.41, 100.82],
  [20, 'pahang-timur', 3.92, 102.88], [21, 'pahang-timur', 3.86, 102.92],
  [22, 'pahang-timur', 3.82, 102.86], [23, 'pahang-timur', 3.78, 102.9],
  [24, 'pahang-timur', 3.81, 102.43], [25, 'pahang-timur', 3.74, 102.84],
  [26, 'pahang-timur', 3.7, 102.81], [27, 'pahang-timur', 3.96, 102.82],
  [28, 'pahang-timur', 3.88, 102.8], [29, 'pahang-timur', 3.77, 102.78],
  [30, 'terengganu', 5.35, 102.48], [31, 'terengganu', 4.06, 102.93],
  [32, 'kelantan', 4.9, 101.78], [33, 'kelantan', 4.85, 101.72],
  [34, 'kelantan', 4.88, 101.82],
  [35, 'pahang-tengah', 3.95, 102.22], [36, 'pahang-tengah', 3.9, 102.12],
  [37, 'pahang-tengah', 3.97, 102.0], [38, 'pahang-tengah', 4.06, 102.02],
  [39, 'pahang-tengah', 3.88, 102.05],
  [40, 'sabah', 4.42, 117.67], [41, 'sabah', 4.6, 118.2],
  [42, 'sabah', 4.99, 118.95],
]

export const feldaSites = SITES.map(([no, region, lat, lng]) => ({ no, region, lat, lng }))

export const projectsData = [
  {
    id: 'felda-farmguard',
    title: 'FELDA Nationwide Farm Guard Rollout',
    client: 'FELDA',
    status: 'Pending Delivery',
    statusTone: 'amber',
    image: IMAGES.farmguard,
    summary:
      'Nationwide deployment of Farm Guard automated security & wildlife deterrent units across 42 FELDA schemes — from Johor and Pahang to Kelantan, Terengganu, the north and Sabah.',
    highlights: [
      { value: 97, label: 'Farm Guard Units' },
      { value: 42, label: 'FELDA Schemes' },
      { value: 8, label: 'Regions' },
    ],
    stages: [
      { label: 'Contract Awarded', state: 'done' },
      { label: 'Production', state: 'done' },
      { label: 'Delivery', state: 'current' },
      { label: 'Installation', state: 'todo' },
      { label: 'Go-Live', state: 'todo' },
    ],
    tech: ['Farm Guard', 'IoT', 'Wildlife Deterrent', 'Remote Monitoring'],
    map: true,
  },
  {
    id: 'tdm-farmguard-ai',
    title: 'TDM Plantation — Farm Guard AI + Starlink',
    client: 'TDM Plantation',
    status: 'Kick-off',
    statusTone: 'green',
    image: IMAGES.farmguard,
    summary:
      'AI-powered plantation security with Farm Guard AI units, connected via Starlink satellite internet for real-time monitoring in remote estates with no cellular coverage.',
    highlights: [
      { value: 6, label: 'Farm Guard AI Units' },
      { value: 3, label: 'Starlink Terminals' },
    ],
    stages: [
      { label: 'Kick-off', state: 'current' },
      { label: 'Site Survey', state: 'todo' },
      { label: 'Installation', state: 'todo' },
      { label: 'Commissioning', state: 'todo' },
    ],
    tech: ['Farm Guard AI', 'Starlink', 'Computer Vision', 'Real-time Alerts'],
  },
]
