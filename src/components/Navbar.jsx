import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", href: "#home" },
    { name: "AI Types", href: "#ai-types" },
    { name: "Benefits", href: "#benefits" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-500">AI Revolution</h1>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-indigo-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden rounded-lg bg-indigo-500 px-4 py-2 text-white md:block">
          Get Started
        </button>

        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="border-t px-6 pb-4 md:hidden">
          <ul className="space-y-4 pt-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-indigo-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full rounded-lg bg-indigo-500 py-2 text-white">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar