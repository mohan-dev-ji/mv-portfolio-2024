"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/app/data/navItems";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        const sections = navItems.map((item) =>
          document.getElementById(item.sectionId)
        );
        const scrollPosition = window.scrollY + 100; // Offset for navbar height

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].sectionId);
            break;
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 backdrop-blur-md z-50 border-b-4 border-accent h-20">
      <nav className="bg-background bg-opacity-60 mx-auto px-4 h-full flex justify-between items-center">
        {/* Left: Name acting as Home button */}
        <div className="text-p-bold text-secondary">
          <Link href="/">Mohan Veraitch</Link>
        </div>

        {/* BURGER MENU ICON */}
        <div className="md:hidden">
        <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
        </button>
        </div>

        {/* SMALL SCREEN NAV */}
        <div 
          className={`lg:hidden absolute top-[80px] left-0 w-full bg-background shadow-md transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="absolute top-full left-0 w-full bg-background shadow-md">
            {navItems.map((item) => (
              <li key={item.sectionId} className="border-b border-accent">
                <a
                  href={`/#${item.sectionId}`}
                  className="block px-4 py-2 text-secondary hover:text-primary"
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>

        {/* LARGE SCREEN */}
        <ul className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <li key={item.sectionId}>
              <Button
                variant="ghost"
                className={`rounded-full ${
                  activeSection === item.sectionId
                    ? "bg-accent text-background"
                    : ""
                }`}
              >
                {isHomePage ? (
                  <span onClick={() => scrollToSection(item.sectionId)}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={`/#${item.sectionId}`}>{item.label}</Link>
                )}
              </Button>
            </li>
          ))}
        </ul>

        {/* Right: Non-clickable Product Designer text */}
        <div className="hidden md:block text-p-bold text-secondary">Product Designer</div>
      </nav>
    </header>
  );
}
