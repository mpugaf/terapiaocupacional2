import { siteContent } from '@/content/site'

/** Datos estructurados JSON-LD tipo MedicalBusiness para SEO local. Renderizado en <head>. */
export function JsonLd() {
  const { metadata } = siteContent

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: metadata.businessName,
    description: metadata.description,
    url: metadata.url,
    telephone: metadata.phone,
    email: metadata.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: metadata.address.street,
      addressLocality: metadata.address.city,
      addressRegion: metadata.address.region,
      postalCode: metadata.address.postalCode,
      addressCountry: metadata.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: metadata.coordinates.lat,
      longitude: metadata.coordinates.lng,
    },
    medicalSpecialty: 'OccupationalTherapy',
    // Actualizar openingHours con horario real (formato ISO 8601: "Mo-Fr 09:00-18:00")
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    image: metadata.openGraph.image,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
