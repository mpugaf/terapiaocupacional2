/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Requerido para export estático — reemplazar con CDN en Fase 2+ si se usa next/image optimizado
  images: {
    unoptimized: true,
  },
  // Trailing slash mejora compatibilidad con hosting estático (Vercel, S3, etc.)
  trailingSlash: true,
}

module.exports = nextConfig
