import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mohan Veraitch | Portfolio',
  description: 'Product Designer, UX/UI Design Portfolio, UX Case Studies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="overflow-hidden flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}