export default function Navbar() {
    return (
      <header className="fixed w-full top-0 bg-white/80 backdrop-blur-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex gap-8 justify-end">
            <li>Home</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }