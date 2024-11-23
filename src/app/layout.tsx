import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

export const metadata: Metadata = {
  title: 'Mohan Veraitch | Portfolio',
  description: 'Portfolio showcasing UX/UI design and development work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}