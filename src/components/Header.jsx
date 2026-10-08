import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Blogs', to: '/blog' },
  { label: 'Services', to: '/services' },
  
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 12)
  const [theme, setTheme] = useState(() => localStorage.getItem('ringstack-theme') || 'light')
  const location = useLocation()
  const hasDarkHero = location.pathname === '/'
    || ['/services', '/about', '/contact', '/blog'].includes(location.pathname)
    || location.pathname.startsWith('/blog/')

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ringstack-theme', theme)
  }, [theme])

  useEffect(() => {
    const desktopViewport = window.matchMedia('(min-width: 901px)')
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopViewport.addEventListener('change', closeMenuOnDesktop)
    return () => desktopViewport.removeEventListener('change', closeMenuOnDesktop)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header${hasDarkHero ? ' is-home' : ''}${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Ringstack home" onClick={closeMenu}>
          <span className="brand-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name"><span>Ringstack.</span></span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            className="button button-small button-dark nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {theme === 'dark'
              ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>
              : <><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /><path d="m16.5 4 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4Z" /></>}
          </svg>
        </button>
      </div>
      {location.pathname !== '/' && <div className="header-rule" />}
    </header>
  )
}

export default Header
