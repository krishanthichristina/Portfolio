import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from '../ui/ThemeToggle'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map(l => l.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: scrolled
            ? 'rgba(255,255,255,0.88)'
            : 'rgba(255,255,255,0)',
          boxShadow: scrolled
            ? '0 2px 20px rgba(45,212,191,0.12)'
            : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md dark:bg-surface-dark/80"
        style={{ WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); handleNav('#hero') }}
            className="font-bold text-2xl gradient-text tracking-tight"
          >
            KC<span className="text-primary-400">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400 rounded-full"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="mailto:krishkrishanthi01@gmail.com"
              className="hidden sm:inline-flex btn-primary text-sm py-2 px-5"
            >
              Hire Me
            </a>
            <button
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-surface-darkCard shadow-xl border-b border-gray-100 dark:border-surface-darkBorder lg:hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-primary-400/10 text-primary-500 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-surface-darkBorder'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="mailto:krishkrishanthi01@gmail.com" className="btn-primary mt-2 justify-center text-sm">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
