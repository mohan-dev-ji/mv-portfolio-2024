"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/app/data/navItems";
import Link from "next/link";
import { usePathname } from 'next/navigation';

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

  return (
    <header className="fixed w-full top-0 backdrop-blur-md z-50 border-b-4 border-accent">
      <nav className="bg-background bg-opacity-60 mx-auto px-4 py-6 flex justify-between items-center">
        {/* Left: Name acting as Home button */}
        <div className="text-p-bold text-secondary">
          <Link href="/">Mohan Veraitch</Link>
        </div>

        {/* Center: Navigation items */}
        <ul className="flex gap-8">
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
        <div className="text-p-bold text-secondary">Product Designer</div>
      </nav>
    </header>
  );
}
