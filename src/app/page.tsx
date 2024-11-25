import { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Work from './components/sections/Work'
import Values from './components/sections/Values'
import ValueSection from './components/sections/Values'
import ValuesSection from './components/sections/Values'
import ValuesElement from './components/ui/ValuesElement'

export const metadata: Metadata = {
  title: 'Mo | Home',
  description: 'Welcome to my portfolio',
}

export default function Home() {
  return (
    <div className="sm:w-full w-full mx-auto">
      <Hero />
      <div className="mx-5">
      <Work />
      </div>
      <div className="mx-5">
      <Values />
      </div>
      
    </div>
  )
}