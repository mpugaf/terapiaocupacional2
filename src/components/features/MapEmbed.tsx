// FEATURE FLAG: features.map
// Para activar:
//   1. features.map = true  en /src/config/features.ts
//   2. NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...  en .env.local
//   3. Actualizar coordenadas en src/content/site.ts → metadata.coordinates
//   4. (Opcional) Reemplazar el src por la URL con API key para mejores controles

interface MapEmbedProps {
  lat: number
  lng: number
  zoom?: number
  title?: string
}

export function MapEmbed({ lat, lng, zoom = 15, title = 'Ubicación del consultorio' }: MapEmbedProps) {
  // Con API key configurada, reemplazar src por:
  // `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${lat},${lng}&zoom=${zoom}`
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`

  return (
    <div className="overflow-hidden rounded-2xl shadow-md">
      <iframe
        title={title}
        src={src}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
      />
    </div>
  )
}
