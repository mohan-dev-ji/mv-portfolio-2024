"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/app/data/navItems"
import { Button } from "@/components/ui/button" 

export default function Navbar() {

    const pathname = usePathname()

    return (
      <header className="fixed w-full top-0 backdrop-blur-md z-50 border-b-4 border-accent">
        <nav className="bg-background bg-opacity-60 mx-auto px-4 py-6">
          <ul className="flex gap-8 justify-center">
            {navItems.map((item) => {
                const isActive = 
                item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path)

            return (
                <li key={item.path}>
                    <Button
                    asChild
                    variant="ghost"
                    className={`rounded-full ${isActive ? 'bg-accent text-background' : ''}`}
                    >
                    <Link
                    href={item.path}
                    className={`
                        relative py-2 px-3 rounded-full
                        ${isActive
                            ? 'text-background bg-accent'
                            : 'text-secondary hover:text-primary'
                        }
                    `}
                    >
                        {item.label}
                    </Link>
                    </Button>
                </li>
            )
            })}
            </ul>
        </nav>
      </header>
    )
}