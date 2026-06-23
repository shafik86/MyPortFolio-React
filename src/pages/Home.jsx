import { useReveal } from '../hooks/useReveal'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Leadership from '../components/sections/Leadership'
import Impact from '../components/sections/Impact'
import Companies from '../components/sections/Companies'
import Products from '../components/sections/Products'
import Clients from '../components/sections/Clients'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <About />
      <Leadership />
      <Impact />
      <Companies />
      <Products />
      <Clients />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}
