import { type ReactNode } from 'react'
import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { features } from '@/config/features'
import { ContactForm } from '@/components/features/ContactForm'
import { MapEmbed } from '@/components/features/MapEmbed'

export function Contacto() {
  const { heading, subheading, schedule } = siteContent.contacto
  const { phone, email, address, coordinates } = siteContent.metadata

  return (
    <SectionWrapper id="contacto" className="bg-white">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">{subheading}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Columna izquierda: datos de contacto */}
        <div className="space-y-5">
          <ContactCard icon="📞" label="Teléfono">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {phone}
            </a>
          </ContactCard>

          <ContactCard icon="✉️" label="Email">
            <a
              href={`mailto:${email}`}
              className="break-all text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {email}
            </a>
          </ContactCard>

          <ContactCard icon="📍" label="Dirección">
            <address className="not-italic text-slate-700">
              {address.street}, {address.city}
              <br />
              {address.region}, {address.country}
            </address>
          </ContactCard>

          <ContactCard icon="🕐" label="Horario">
            <p className="text-slate-700">{schedule}</p>
          </ContactCard>

          {/* Placeholder visible mientras features.contactForm = false */}
          {!features.contactForm && (
            <div className="rounded-xl border-2 border-dashed border-slate-200 p-5 text-center">
              <p className="text-sm text-slate-500">
                <span className="block font-medium text-slate-600">Formulario de contacto</span>
                Próximamente —{' '}
                <code className="rounded bg-slate-100 px-1 text-xs">features.contactForm</code>
              </p>
            </div>
          )}
        </div>

        {/* Columna derecha: formulario y/o mapa */}
        <div className="space-y-6">
          {features.contactForm && <ContactForm />}

          {features.map ? (
            <MapEmbed lat={coordinates.lat} lng={coordinates.lng} />
          ) : (
            <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
              <p className="text-center text-sm text-slate-500">
                <span className="block font-medium text-slate-600">Mapa de ubicación</span>
                Próximamente —{' '}
                <code className="rounded bg-slate-100 px-1 text-xs">features.map</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}

interface ContactCardProps {
  icon: string
  label: string
  children: ReactNode
}

function ContactCard({ icon, label, children }: ContactCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-5">
      <span className="shrink-0 text-2xl" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}
