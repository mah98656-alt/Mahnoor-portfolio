'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const workLinks = [
  { label: 'Thesis Film', href: '/thesis' },
  { label: '2D Animation', href: '/2d-animation' },
  { label: '3D Animation', href: '/3d-animation' },
  { label: 'Motion Graphics', href: '/motion-graphics' },
  { label: 'Illustration', href: '/illustration' },
  { label: 'Character Design', href: '/character-design' },
  { label: 'Branding', href: '/branding' },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setWorkOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-divider' : 'bg-transparent'
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="font-display font-bold text-primary text-lg tracking-tight hover:text-accent transition-colors duration-250"
          >
            Mahnoor Gul
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button className="label text-secondary hover:text-primary transition-colors duration-250 flex items-center gap-1.5">
                WORK
                <motion.span
                  animate={{ rotate: workOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-[9px] opacity-60"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-3 w-52 bg-surface border border-divider rounded-sm overflow-hidden"
                  >
                    {workLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-3 label text-secondary hover:text-primary hover:bg-surface-hover transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                {link.label}
              </NavLink>
            ))}

            <Link
              href="/contact"
              className="label border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-white transition-all duration-250 rounded-sm"
            >
              HIRE ME
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-primary"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-primary"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg z-40 flex flex-col justify-center px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-2"
            >
              <p className="label text-accent mb-6">WORK</p>
              {workLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block font-display text-2xl font-bold text-primary hover:text-accent transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="divider my-6" />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block font-display text-xl text-secondary hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string
  children: React.ReactNode
  active: boolean
}) {
  return (
    <Link
      href={href}
      className="relative group label text-secondary hover:text-primary transition-colors duration-250"
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  )
}
