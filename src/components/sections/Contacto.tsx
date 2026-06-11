'use client'

import { type FormEvent, type ReactNode } from 'react'
import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { features } from '@/config/features'
import { ContactForm } from '@/components/features/ContactForm'
import { MapEmbed } from '@/components/features/MapEmbed'

export function Contacto() {
  const { heading, subheading, schedule } = siteContent.contacto
  const { phone, email, address, coordinates, socialLinks } = siteContent.metadata

  return (
    <SectionWrapper id="contacto" className="bg-azure-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-2xl text-lg text-ink-soft">{subheading}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Columna izquierda: datos de contacto */}
        <div className="space-y-5">
          <ContactCard icon="📞" label="Teléfono">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-azure-500 hover:text-azure-700 hover:underline focus:outline-none focus:ring-2 focus:ring-azure-400"
            >
              {phone}
            </a>
          </ContactCard>

          <ContactCard icon="✉️" label="Email">
            <a
              href={`mailto:${email}`}
              className="break-all text-azure-500 hover:text-azure-700 hover:underline focus:outline-none focus:ring-2 focus:ring-azure-400"
            >
              {email}
            </a>
          </ContactCard>

          <ContactCard icon="📍" label="Dirección">
            <address className="not-italic text-ink-soft">
              {address.street}, {address.city}
              <br />
              {address.region}, {address.country}
            </address>
          </ContactCard>

          <ContactCard icon="🕐" label="Horario">
            <p className="text-ink-soft">{schedule}</p>
          </ContactCard>
        </div>

        {/* Columna derecha: formulario y/o mapa */}
        <div className="space-y-6">
          {features.whatsapp && (
            <WhatsAppForm whatsappNumber={socialLinks.whatsapp ?? ''} />
          )}

          {features.contactForm && <ContactForm />}

          {!features.whatsapp && !features.contactForm && (
            <div className="rounded-xl border-2 border-dashed border-azure-200 p-5 text-center">
              <p className="text-sm text-ink-muted">
                <span className="block font-medium text-ink-soft">Formulario de contacto</span>
                Próximamente —{' '}
                <code className="rounded bg-azure-100 px-1 text-xs">features.whatsapp</code>
              </p>
            </div>
          )}

          {features.map ? (
            <MapEmbed lat={coordinates.lat} lng={coordinates.lng} />
          ) : (
            <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-azure-200 bg-white">
              <p className="text-center text-sm text-ink-muted">
                <span className="block font-medium text-ink-soft">Mapa de ubicación</span>
                Próximamente —{' '}
                <code className="rounded bg-azure-100 px-1 text-xs">features.map</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}

// ---------------------------------------------------------------------------

interface WhatsAppFormProps {
  whatsappNumber: string
}

function WhatsAppForm({ whatsappNumber }: WhatsAppFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nombre = (data.get('nombre') as string).trim()
    const telefono = (data.get('telefono') as string).trim()
    const text = `Hola, soy ${nombre}. Mi WhatsApp es ${telefono}.`
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-8 shadow-md"
      aria-label="Contactar por WhatsApp"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        <h3 className="font-display text-lg font-semibold text-ink">Escribenos por WhatsApp</h3>
      </div>

      <p className="text-sm text-ink-soft">
        Completá tu nombre y teléfono y te responderemos a la brevedad por WhatsApp.
      </p>

      <div>
        <label htmlFor="wa-nombre" className="mb-1.5 block text-sm font-medium text-ink">
          Nombre <span aria-hidden="true">*</span>
        </label>
        <input
          id="wa-nombre"
          name="nombre"
          type="text"
          required
          autoComplete="given-name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-ink transition focus:border-azure-500 focus:outline-none focus:ring-2 focus:ring-azure-200"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="wa-telefono" className="mb-1.5 block text-sm font-medium text-ink">
          Teléfono / WhatsApp <span aria-hidden="true">*</span>
        </label>
        <input
          id="wa-telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-ink transition focus:border-azure-500 focus:outline-none focus:ring-2 focus:ring-azure-200"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-amber-400 px-6 py-3 font-sans font-bold text-azure-900 transition-colors duration-200 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300"
      >
        Iniciar conversación →
      </button>
    </form>
  )
}

// ---------------------------------------------------------------------------

interface ContactCardProps {
  icon: string
  label: string
  children: ReactNode
}

function ContactCard({ icon, label, children }: ContactCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm">
      <span className="shrink-0 text-2xl" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}
