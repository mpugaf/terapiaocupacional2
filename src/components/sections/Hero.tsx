import Image from 'next/image'
import { siteContent } from '@/content/site'

function HeadlineWithUnderline({ text }: { text: string }) {
  const keyword = 'autonomía'
  const idx = text.toLowerCase().indexOf(keyword)

  if (idx === -1) {
    return <>{text}</>
  }

  return (
    <>
      {text.slice(0, idx)}
      <span className="relative inline-block whitespace-nowrap">
        {text.slice(idx, idx + keyword.length)}
        <svg
          role="presentation"
          aria-hidden="true"
          className="underline-accent pointer-events-none absolute -bottom-1 left-0 w-full overflow-visible"
          height="12"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
        >
          <path
            d="M2,9 C40,3 80,11 120,6 C152,2 175,9 198,5"
            stroke="#F59B2B"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {text.slice(idx + keyword.length)}
    </>
  )
}

export function Hero() {
  const { headline, subheadline, cta } = siteContent.hero

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-azure-900 pt-20"
    >
      {/* Patrón de puntos sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Resplandor azure — esquina superior derecha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-azure-500"
        style={{ filter: 'blur(100px)', opacity: 0.2 }}
      />

      {/* Resplandor azure — esquina inferior izquierda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[5%] bottom-[15%] h-[300px] w-[300px] rounded-full bg-azure-400"
        style={{ filter: 'blur(80px)', opacity: 0.15 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-20 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Columna texto */}
          <div>
            {/* Eyebrow */}
            <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-azure-300">
              Terapia Ocupacional · Parkinson
            </p>

            {/* Headline */}
            <h1 className="mb-8 max-w-[14ch] font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              <HeadlineWithUnderline text={headline} />
            </h1>

            {/* Subheadline */}
            <p className="mb-12 max-w-prose font-sans text-lg leading-relaxed text-azure-200">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={cta.primary.href}
                className="inline-flex items-center rounded-xl bg-amber-400 px-8 py-4 font-sans text-base font-bold text-azure-900 transition-colors duration-200 ease-smooth hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300"
              >
                {cta.primary.label}
              </a>

              {cta.secondary && (
                <a
                  href={cta.secondary.href}
                  className="inline-flex items-center gap-2 font-sans text-base font-medium text-azure-200 underline-offset-4 transition-colors duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-azure-400 focus:ring-offset-2 focus:ring-offset-azure-900"
                >
                  {cta.secondary.label}
                  <span aria-hidden="true" className="text-amber-400">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Columna imagen */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Halo de resplandor detrás de la imagen */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(96,165,250,0.25) 0%, transparent 70%)',
                  filter: 'blur(24px)',
                  transform: 'scale(1.15)',
                }}
              />
              <Image
                src="https://res.cloudinary.com/dmbkdrlcj/image/upload/v1781152858/sinapsis1_n3hdfq.png"
                alt="Red neuronal sináptica — Terapia Ocupacional Parkinson"
                width={480}
                height={480}
                priority
                className="relative drop-shadow-[0_0_40px_rgba(96,165,250,0.35)]"
                style={{ opacity: 0.92 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ola separadora */}
      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          style={{ height: '64px' }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C180,64 360,0 540,32 C720,64 900,0 1080,32 C1260,64 1350,16 1440,32 L1440,64 L0,64 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
