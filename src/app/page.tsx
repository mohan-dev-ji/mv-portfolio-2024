import { Metadata } from 'next'
import Hero from './components/sections/Hero'

export const metadata: Metadata = {
  title: 'Mo | Home',
  description: 'Welcome to my portfolio',
}

export default function Home() {
  return (
    <div className="sm:w-full w-full mx-auto">
      <Hero />
      <section className="py-20">
        <h1 className="text-h1-bold mb-4">Mo&apos;s Portfolio</h1>
        <p className="text-h1-bold">H1 Bold</p>
        <p className="text-h1">H1 Bold</p>
        <p className="text-h2-bold">H2 Bold</p>
        <p className="text-h2">H2 Bold</p>
        <p className="text-h3-bold">H3 Bold</p>
        <p className="text-h3">H3 Bold</p>
        <p className="text-p-bold">Paragraph Bold</p>
        <p className="text-p">Paragraph</p>
        <p className="text-s text-secondary">Small</p>
        <h1 className="text-h1-bold mb-4">Mo&apos;s Portfolio</h1>
        <p className="text-h1-bold">H1 Bold</p>
        <p className="text-h1">H1 Bold</p>
        <p className="text-h2-bold">H2 Bold</p>
        <p className="text-h2">H2 Bold</p>
        <p className="text-h3-bold">H3 Bold</p>
        <p className="text-h3">H3 Bold</p>
        <p className="text-p-bold">Paragraph Bold</p>
        <p className="text-p">Paragraph</p>
        <p className="text-s text-secondary">Small</p>
      </section>
    </div>
  )
}