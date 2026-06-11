import {
  KeyRound,
  Coffee,
  Pencil,
  BookOpen,
  Users,
  FileText,
  type LucideIcon,
} from 'lucide-react'
import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'

const ICON_MAP: Record<string, LucideIcon> = {
  key:       KeyRound,
  coffee:    Coffee,
  pencil:    Pencil,
  book:      BookOpen,
  users:     Users,
  clipboard: FileText,
}

const ACCENT = [
  { iconBg: 'bg-azure-50', iconColor: 'text-azure-500', topBorder: 'border-azure-500' },
  { iconBg: 'bg-amber-50', iconColor: 'text-amber-500', topBorder: 'border-amber-400' },
] as const

export function Servicios() {
  const { heading, subheading, items } = siteContent.servicios

  return (
    <SectionWrapper id="servicios" className="bg-white">
      <RevealOnScroll>
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center rounded-full bg-azure-50 px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure-500">
              Servicios
            </span>
          </div>
          <h2 className="mb-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-xl font-sans text-lg text-ink-soft">{subheading}</p>
        </div>
      </RevealOnScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const Icon = ICON_MAP[item.icon] ?? FileText
          const accent = ACCENT[i % 2]

          return (
            <RevealOnScroll key={item.title} delay={i * 60}>
              <article
                className={`group rounded-2xl border-t-4 ${accent.topBorder} bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${accent.iconBg}`}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className={accent.iconColor}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </article>
            </RevealOnScroll>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
