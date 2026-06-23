// Project showcases in Challenge → Solution → Results format.
// Grounded in the founder's real products & client work (see clients.js,
// products.js). Update `results`/`impactMetrics` as real figures are confirmed.
export const caseStudiesData = [
  {
    id: 1,
    title: 'Protecting Plantations from Elephant Intrusion',
    client: 'Felcra Berhad',
    industry: 'Agriculture',
    image: '/images/Products/farmsense_product.png',
    challenge:
      'Palm oil plantations were suffering recurring crop damage and safety risks from wild elephants trespassing at night. Conventional fencing was costly, harmful to wildlife, and unreliable over large estate perimeters.',
    solution:
      'Deployed Farm Sense — an IoT intrusion-detection network using motion and vibration sensors with real-time alerts. The system detects movement along the perimeter and warns farmers early, without harming the animals.',
    results:
      'Farmers receive early warnings before animals reach the crops, enabling a timely, non-lethal response and reducing nightly losses.',
    technologies: ['IoT Sensors', 'AI Detection', 'Real-time Alerts'],
    timeline: 'Ongoing deployment',
    impactMetrics: [
      { metric: 'Response', value: 'Early warning' },
      { metric: 'Wildlife', value: 'Non-lethal' },
      { metric: 'Coverage', value: 'Estate-wide' },
    ],
  },
  {
    id: 2,
    title: 'Government-Grade Flood Early Warning',
    client: 'Public sector / disaster management',
    industry: 'Disaster Management',
    image: '/images/Products/floodsense_product.png',
    challenge:
      'Communities in flood-prone areas lacked timely, reliable water-level data, leaving authorities and residents little time to react before flooding caused damage and disruption.',
    solution:
      'Built FloodSense — NB-IoT water-level sensors integrated with solar-powered CCTV and AI-powered prediction, delivering real-time alerts so stakeholders get notice before the worst arrives.',
    results:
      'Authorities gain continuous, remote visibility of water levels with predictive alerts, supporting faster, data-driven decisions during high-risk periods.',
    technologies: ['NB-IoT', 'Solar CCTV', 'AI Predictions', 'Real-time Alerts'],
    timeline: 'Active product',
    impactMetrics: [
      { metric: 'Monitoring', value: '24/7' },
      { metric: 'Power', value: 'Solar' },
      { metric: 'Alerts', value: 'Predictive' },
    ],
  },
  {
    id: 3,
    title: 'Modernising a National Billing System',
    client: 'Indah Water Konsortium (IWK)',
    industry: 'Utilities',
    image: '/images/Products/aisa_product.png',
    challenge:
      'Operations relied on fragmented tools that slowed billing and internal workflows, making it hard to manage processes at national scale.',
    solution:
      'Engineered an all-in-one, ERP-style billing and operations platform on .NET Core, consolidating workflows into a single maintainable system.',
    results:
      'A unified internal system streamlined billing operations and reduced reliance on disconnected manual processes.',
    technologies: ['.NET Core', 'ERP', 'SQL Server'],
    timeline: 'Enterprise project',
    impactMetrics: [
      { metric: 'System', value: 'All-in-one' },
      { metric: 'Scale', value: 'National' },
      { metric: 'Stack', value: '.NET Core' },
    ],
  },
]
