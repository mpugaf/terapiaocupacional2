import { type ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'article'
}

/** Wrapper estándar para todas las secciones de la single-page. Estandariza anchor id, padding y ancho. */
export function SectionWrapper({
  id,
  children,
  className = '',
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  )
}
