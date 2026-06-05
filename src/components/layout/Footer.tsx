import { siteContent } from '@/content/site'

export function Footer() {
  const { metadata } = siteContent

  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Nombre y descripción breve */}
          <div>
            <p className="mb-2 text-lg font-bold text-white">{metadata.businessName}</p>
            <p className="text-sm leading-relaxed">{metadata.description}</p>
          </div>

          {/* Datos de contacto rápido */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${metadata.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {metadata.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${metadata.email}`}
                  className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {metadata.email}
                </a>
              </li>
              <li>
                {metadata.address.street}, {metadata.address.city}
              </li>
            </ul>
          </div>

          {/* Redes sociales (solo muestra los que estén configurados) */}
          {(metadata.socialLinks.instagram || metadata.socialLinks.linkedin) && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Redes
              </p>
              <ul className="space-y-2 text-sm">
                {metadata.socialLinks.instagram && (
                  <li>
                    <a
                      href={metadata.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      Instagram
                    </a>
                  </li>
                )}
                {metadata.socialLinks.linkedin && (
                  <li>
                    <a
                      href={metadata.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {metadata.businessName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
