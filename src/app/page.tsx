import { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import Values from './components/sections/Values'
import About from './components/sections/About'
import ContactForm from './components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Mohan Veraitch | Portfolio',
  description: 'Welcome to my portfolio',
}

export default function Home() {
  return (
    <div className="sm:w-full w-full mx-auto">
      <section id="hero">
        <Hero />
      </section>
      <section id="work" className="mx-5 pt-[4%]">
        <Work />
      </section>
      <section id="about" className="mx-5 pt-[4%]">
        <About />
      </section>
      <section id="values" className="mx-5 pt-[4%]">
        <Values />
      </section>
      <section id="contact" className="mx-5 pt-[4%]">
        <ContactForm />
      </section>
    </div>
  )
}