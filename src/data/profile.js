// Core profile / personal info — single source of truth for the hero, about,
// contact, footer and SEO blocks.
import { IMAGES } from '../config/imageConfig.js'

export const profile = {
  name: 'Nik Mohd Shafik Izwan',
  shortName: 'Nik Shafik',
  title: 'CEO & Founder | Technology Leader | AI Innovator',
  tagline:
    'Transforming industries through AI-driven solutions and IoT innovation. Building the future with 13+ years of technology expertise.',
  role: 'Founder & CEO',
  image: IMAGES.profile,
  age: 38,
  location: 'Seri Kembangan, Selangor',
  phone: '017-4511455',
  phoneIntl: '+60 17-451 1455',
  whatsapp: 'https://wa.me/60174511455',
  emails: ['nikshafik186@gmail.com', 'nikshafik@nasadef.com.my'],
  linkedin: 'https://www.linkedin.com/in/nikshafik',
  website: 'https://www.nasadef.com.my',
  address: [
    'A-5-06, Pangsapuri Belimbing Heights',
    'Jalan Belimbing Indah',
    'Taman Bukit Belimbing',
    '43300 Seri Kembangan',
    'Selangor, Malaysia',
  ],
  // Embedded Google Map of the residential / corporate location
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.8!2d101.7298419!3d3.0321674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zM8KwMDEnNTUuOCJOIDEwMcKwNDMnNDcuOCJF!5e0!3m2!1sen!2smy!4v1630000000000',
}

export const heroStats = [
  { value: 13, suffix: '+', label: 'Years Experience' },
  { value: 2, suffix: '', label: 'Companies Founded' },
  { value: 5, suffix: '+', label: 'AI/IoT Products' },
]

export const aboutBio = [
  'With over 13 years of experience in system development, ERP implementation, and emerging technologies, I specialize in creating AI-driven solutions that transform traditional industries. As the founder of two technology companies, I have dedicated my career to building innovative products that solve real-world problems.',
  'My expertise spans full-stack development, IoT systems, artificial intelligence, and enterprise solutions. I have successfully led teams in developing cutting-edge products for agriculture, security, and disaster management sectors.',
]

export const aboutHighlights = [
  {
    icon: 'bi-trophy',
    color: 'blue',
    title: 'Leadership',
    text: 'Founded and leading two successful tech companies with innovative AI and IoT solutions.',
  },
  {
    icon: 'bi-code-slash',
    color: 'green',
    title: 'Technical Expertise',
    text: 'Full-stack developer proficient in C#, .NET, Python, IoT, and modern web technologies.',
  },
  {
    icon: 'bi-lightbulb',
    color: 'amber',
    title: 'Innovation',
    text: 'Creator of multiple AI-powered products serving agriculture, security, and enterprise sectors.',
  },
  {
    icon: 'bi-mortarboard',
    color: 'cyan',
    title: 'Education',
    text: 'Diploma in IT Programming from Polytechnic Seberang Perai with a strong technical foundation.',
  },
]
