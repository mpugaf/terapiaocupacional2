// FEATURE FLAG: features.contactForm
// Para activar:
//   1. features.contactForm = true  en /src/config/features.ts
//   2. Elegir provider de email (ver README.md → "Formulario de contacto")
//   3. Configurar la variable de entorno correspondiente en .env.local
//   4. Descomentar el fetch real y eliminar el console.warn de handleSubmit

'use client'

import { type FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData(e.currentTarget)

    try {
      // TODO: Reemplazar con envío real al activar la feature.
      // Opción A — Formspree (sin backend, recomendado para Fase 2):
      //   const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
      //     method: 'POST',
      //     body: data,
      //     headers: { Accept: 'application/json' },
      //   })
      //   if (!res.ok) throw new Error('Formspree error')
      //
      // Opción B — API Route propia (requiere output: 'standalone' en next.config.js):
      //   const res = await fetch('/api/contact', { method: 'POST', body: data })
      //   if (!res.ok) throw new Error('API error')

      console.warn('[ContactForm] Endpoint no configurado. Ver features.contactForm en README.')
      await new Promise((r) => setTimeout(r, 800)) // simulación para desarrollo
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-8 shadow-md"
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-slate-700">
          Nombre y apellido <span aria-hidden="true">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="María García"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="maria@ejemplo.com"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
          Teléfono <span className="text-slate-400">(opcional)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="+54 9 11 1234-5678"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Consulta <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="Contame brevemente tu consulta..."
        />
      </div>

      {status === 'success' && (
        <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">
          ¡Mensaje enviado! Te responderé a la brevedad.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          Hubo un error al enviar. Por favor intentá de nuevo o contactame directamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
