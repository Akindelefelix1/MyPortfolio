import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../../data/portfolio'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skill' },
  { label: 'Portfolio', to: '/portfolio' },
]

export function Header() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  return (
    <header className={`site-header ${pathname === '/' ? 'is-home' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
      <Link className="wordmark" to="/" aria-label={`${profile.name}, home`} onClick={() => setIsOpen(false)}>
        IAF<span>.</span>
      </Link>
      <p className="header-role">Technical Lead<br />&amp; Full-Stack Developer</p>
      <button
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav id="primary-navigation" className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link className="header-cta" to="/contact">Contact me</Link>
    </header>
  )
}
