import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function Parkinson() {
  const { heading, intro, benefits, closing } = siteContent.parkinson

  return (
    <SectionWrapper id="parkinson" className="bg-emerald-50">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">{intro}</p>
      </div>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-emerald-800">{benefit.title}</h3>
            <p className="leading-relaxed text-slate-600">{benefit.description}</p>
          </article>
        ))}
      </div>

      <p className="text-center text-lg text-slate-700">
        {closing}{' '}
        <a
          href="#contacto"
          className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        >
          Escríbeme sin compromiso
        </a>
      </p>
    </SectionWrapper>
  )
}
