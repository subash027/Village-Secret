import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavbarProps {
  scrolled: boolean
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/benefits', label: 'Benefits' },
  { to: '/business', label: 'Business' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar({ scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <Link to="/" className="navbar-logo">
        <img src="/logo.png" alt="Village Secret Logo" />
        <span>Village Secret</span>
      </Link>

      <div className={`navbar-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={location.pathname === l.to ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
