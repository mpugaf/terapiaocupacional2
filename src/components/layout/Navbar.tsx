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
          ? 'bg-white/95 shadow-sm backdrop-blur-sm'
          : 'bg-white/80 backdrop-blur-sm'
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
          className="text-lg font-bold text-emerald-800 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          {metadata.businessName}
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contacto"
          className="hidden rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 md:inline-flex"
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
          className="rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 md:hidden"
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
          className="border-t border-slate-100 bg-white md:hidden"
        >
          <ul className="space-y-1 px-4 py-3" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-100 px-4 py-4">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="block rounded-lg bg-emerald-700 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              Pedir turno
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
