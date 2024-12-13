"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { navItems, NavItem } from '@/app/data/navItems';
import { useCallback } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <footer className="max-w-[910px] mx-auto bg-background">
      <div className="hidden md:block w-full bg-background py-12">
        <div className="max-w-[910px] mx-auto">
          <div className="w-full h-1 bg-accent mb-8"></div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="text-p-bold">Mohan Veraitch</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
              {navItems.map((item: NavItem) => (
                <li key={item.sectionId}>
                  <a
                    href={`#${item.sectionId}`}
                    className="text-secondary hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.sectionId);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Me</h3>
              <a href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" className="text-secondary hover:text-primary">LinkedIn</a>
            </div>
            <div>
              <h3 className="font-bold mb-4">Let&apos;s Work Together</h3>
              <p className="mb-4">Tell me about your project</p>
              <Button
                variant="default"
                onClick={() => scrollToSection('contact')}
              >
                Contact
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
            <a
              href="#contact"
              className="text-secondary hover:text-primary text-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Get in touch
            </a>
            <a href="https://www.linkedin.com/in/mohan-veraitch-a229a990/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
