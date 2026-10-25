import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import gsap from 'gsap'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        gsap.to(mobileMenuRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        })
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power3.in',
        })
      }
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[60] px-5 md:px-8 pt-5 pb-3 md:pb-4 transition-all duration-500 pointer-events-none ${
        isHome
          ? 'text-white mix-blend-difference'
          : scrolled
            ? 'bg-dark-900/75 backdrop-blur-xl border-b border-white/5'
            : 'bg-dark-900/40 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="pointer-events-auto flex items-center gap-2 group">
          <img src="/logo.png" alt="HUSBA DIGITAL" className="w-8 h-8 rounded-full object-cover group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight">
            HUSBA DIGITAL
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 text-xs font-semibold uppercase tracking-widest relative group ${
                pathname === link.path ? 'text-brand-300' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-brand-300 transition-all duration-300 ${
                pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-500 text-white text-xs font-semibold hover:bg-brand-400 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Start a project
            <span className="text-brand-300">&#8599;</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 z-50 pointer-events-auto"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden pointer-events-auto"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block transition-colors py-2 text-lg font-medium ${
                pathname === link.path ? 'text-brand-300' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary inline-block mt-4">
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
