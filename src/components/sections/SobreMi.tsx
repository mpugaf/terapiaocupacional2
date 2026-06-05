import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export function SobreMi() {
  const { heading, bio, credentials, imageAlt } = siteContent.sobreMi
  const { therapistName } = siteContent.metadata

  return (
    <SectionWrapper id="sobre-mi" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Imagen — reemplazar con <Image> de next/image cuando se tengan los assets */}
        <div>
          <ImagePlaceholder
            alt={imageAlt}
            height="h-[400px] lg:h-[520px]"
            label="Foto de la terapeuta"
            className="shadow-lg"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl">{heading}</h2>
          <div className="space-y-4">
            {bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">Formación</h3>
            <ul className="space-y-2" aria-label={`Credenciales de ${therapistName}`}>
              {credentials.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true">
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
