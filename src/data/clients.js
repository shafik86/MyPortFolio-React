import { IMAGES } from '../config/imageConfig.js'

export const clientsData = [
  {
    id: 1,
    name: 'SBTAPE Sdn Bhd',
    logo: IMAGES.sbtape,
    industry: 'Manufacturing',
    project: 'Coating Production System',
    description: 'Maintain and add new features to comply with user needs.',
    tech: ['.NET', 'C#', 'SQL Server'],
  },
  {
    id: 2,
    name: 'JPNIN',
    logo: IMAGES.jpnin,
    industry: 'Government Agency',
    project: 'E-Fokus Mapping',
    description: 'Mapping and matching with analysis of integration (perpaduan) issues.',
    link: 'efokus.jpnin.gov.my',
    tech: ['MAPS', 'Analytics'],
  },
  {
    id: 3,
    name: 'IWK',
    logo: IMAGES.iwk,
    industry: 'Indah Water Konsortium',
    project: 'New Billing System',
    description: 'All-in-one internal ERP-style system for operations.',
    tech: ['ERP', '.NET Core'],
  },
  {
    id: 4,
    name: 'RELA',
    logo: IMAGES.rela,
    industry: 'Jabatan Sukarelawan Malaysia',
    project: 'Mapping and Predict',
    description:
      'Mapping all cases related to members to count workload and check nearest location.',
    tech: ['Mapping', 'Location AI'],
  },
  {
    id: 5,
    name: 'Felcra Berhad',
    logo: IMAGES.felcra,
    industry: 'Agriculture Development',
    project: 'Device Farmsense',
    description:
      'Detect and warn farmers of wild animals such as elephants trespassing on palm oil plantations.',
    tech: ['IoT Sensors', 'AI Detection'],
  },
  {
    id: 6,
    name: 'Tradewinds',
    logo: IMAGES.tradewinds,
    industry: 'Plantation & Agriculture',
    project: 'Farm Guard with Drone Activation',
    description:
      'AI camera-based detection that triggers drone activation, with a server monitoring dashboard for real-time farm security.',
    link: 'apps.nasadef.com.my',
    tech: ['AI Camera', 'Drone', 'Node.js', 'React'],
  },
]

