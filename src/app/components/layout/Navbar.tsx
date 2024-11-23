"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/app/data/navItems"

export default function Navbar() {

    const pathname = usePathname()

    return (
      <header className="fixed w-full top-0 bg-gray/80 backdrop-blur-sm z-50 border-b">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex gap-8 justify-center">
            {navItems.map((item) => {
                const isActive = 
                item.path === '/'
                ? pathname === '/'
                : pathname.startsWith(item.path)

            return (
                <li key={item.path}>
                    <Link
                    href={item.path}
                    className={`
                        relative py-2
                        ${isActive
                            ? 'text-black font-medium'
                            : 'text-gray-600 hover:text-black'
                        }
                    `}
                    >
                        {item.label}
                        {isActive && (
                            <span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black"
                            arian-hidden="true"
                            />
                        )}
                    </Link>
                </li>
            )
            })}
            </ul>
        </nav>
      </header>
    )
}