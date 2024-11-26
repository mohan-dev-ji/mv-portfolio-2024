import { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import Values from './components/sections/Values'
import About from './components/sections/About'

export const metadata: Metadata = {
  title: 'Mo | Home',
  description: 'Welcome to my portfolio',
}

export default function Home() {
  return (
    <div className="sm:w-full w-full mx-auto">
      <Hero />
      <div className="mx-5 mt-16">
      <Work />
      </div>
      <div className="mx-5">
      <Values />
      </div>
      <div className="mx-5">
      <About />
      </div>
      
    </div>
  )
}