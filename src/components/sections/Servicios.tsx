import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function Servicios() {
  const { heading, subheading, items } = siteContent.servicios

  return (
    <SectionWrapper id="servicios" className="bg-slate-50">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600">{subheading}</p>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <span className="mb-4 block text-4xl" aria-hidden="true">
              {item.icon}
            </span>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="leading-relaxed text-slate-600">{item.description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
