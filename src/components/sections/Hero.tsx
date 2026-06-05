import { siteContent } from '@/content/site'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export function Hero() {
  const { headline, subheadline, cta, imageAlt } = siteContent.hero

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20"
    >
      <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
              Terapia Ocupacional · Parkinson
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {subheadline}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={cta.primary.href}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300"
              >
                {cta.primary.label}
              </a>
              {cta.secondary && (
                <a
                  href={cta.secondary.href}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 px-8 py-4 text-base font-semibold text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                  {cta.secondary.label}
                </a>
              )}
            </div>
          </div>

          {/* Imagen — reemplazar con <Image> de next/image cuando se tengan los assets */}
          <div className="order-1 lg:order-2">
            <ImagePlaceholder
              alt={imageAlt}
              height="h-80 lg:h-[480px]"
              label="Foto de la terapeuta"
              className="shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
