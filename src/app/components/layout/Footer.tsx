import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    


    <footer className="w-full bg-background">
      <div className="w-full bg-background py-12">
      <div className="max-w-[910px] mx-auto">
        <div className="w-full h-1 bg-accent mb-8"></div>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <p className="text-p-bold">Mohan Veraitch</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-secondary hover:text-primary">About</Link></li>
              <li><Link href="/work" className="text-secondary hover:text-primary">Portfolio</Link></li>
              <li><Link href="/cv" className="text-secondary hover:text-primary">CV</Link></li>
              <li><Link href="/contact" className="text-secondary hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Me</h3>
            <Link href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" className="text-secondary hover:text-primary">LinkedIn</Link>
          </div>
          <div>
            <h3 className="font-bold mb-4">Let's Work Together</h3>
            <p className="mb-4">Tell me about your project</p>
            <Button asChild variant="default">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full border-t-4 border-accent">
      <div className="max-w-[910px] mx-auto px-4 flex justify-between items-center p-12">
        <p className="text-secondary text-sm">
          © {currentYear} Mohan Veraitch
        </p>
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="text-secondary hover:text-primary text-sm">
            Get in touch
          </Link>
          <a href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </div>
      </div>
    </footer>
  )
}