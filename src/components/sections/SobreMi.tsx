import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export function SobreMi() {
  const { heading, bio, credentials, imageAlt } = siteContent.sobreMi
  const { therapistName } = siteContent.metadata

  return (
    <SectionWrapper id="sobre-mi" className="bg-azure-50">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <ImagePlaceholder
            alt={imageAlt}
            height="h-[400px] lg:h-[520px]"
            label="Foto de la terapeuta"
            className="shadow-lg"
          />
        </div>

        <div>
          <h2 className="mb-6 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
          <div className="space-y-4">
            {bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 font-display text-lg font-semibold text-ink">Formación</h3>
            <ul className="space-y-2" aria-label={`Credenciales de ${therapistName}`}>
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 shrink-0 font-bold text-azure-500" aria-hidden="true">
                    ✓
                  </span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
