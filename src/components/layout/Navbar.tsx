'use client'

import { useEffect, useState } from 'react'
import { siteContent } from '@/content/site'

export function Navbar() {
  const { nav, metadata } = siteContent
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-azure-900/98 shadow-lg backdrop-blur-sm'
          : 'bg-azure-900/95 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo / nombre del negocio */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-lg font-bold text-white hover:text-azure-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-azure-900"
        >
          {metadata.businessName}
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-azure-200 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-azure-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contacto"
          className="hidden rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-azure-900 transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300 md:inline-flex"
        >
          Pedir turno
        </a>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded-md p-2 text-azure-200 hover:bg-azure-800 focus:outline-none focus:ring-2 focus:ring-amber-400 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-azure-800 bg-azure-900 md:hidden"
        >
          <ul className="space-y-1 px-4 py-3" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-azure-200 hover:bg-azure-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-azure-800 px-4 py-4">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="block rounded-lg bg-amber-400 px-4 py-3 text-center font-bold text-azure-900 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Pedir turno
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
