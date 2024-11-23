import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mo | Home',
  description: 'Welcome to my portfolio',
}

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">Mo&apos;s Portfolio</h1>
        <p className="text-xl">Coming soon...</p>
      </section>
    </div>
  )
}