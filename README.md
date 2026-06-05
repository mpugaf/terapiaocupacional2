# [NOMBRE_EMPRESA] — Sitio Web

Sitio estático de Terapia Ocupacional especializada en Parkinson.
Construido con Next.js 14, TypeScript y Tailwind CSS. Export estático compatible con Vercel.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS |
| Deploy | Vercel (export estático) |
| Linting | ESLint + Prettier |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Dev server  →  http://localhost:3000
npm run dev

# Verificar tipos
npm run typecheck

# Formatear código
npm run format

# Build estático (genera /out)
npm run build
```

---

## Despliegue en Vercel

1. Push del repo a GitHub (u otro proveedor Git)
2. Importar el proyecto en [vercel.com/new](https://vercel.com/new)
3. Vercel detecta Next.js automáticamente; el flag `output: 'export'` en `next.config.js` genera archivos estáticos en `/out`
4. Configurar variables de entorno en **Settings → Environment Variables** (ver `.env.example`)
5. Cada push a `main` dispara un nuevo deploy automático

> **Dominio personalizado:** en Vercel → Settings → Domains, agregar el dominio y actualizar `metadata.url` en `src/content/site.ts` y `Sitemap` en `public/robots.txt`.

---

## Personalizar contenido

Todo el texto, datos y metadatos están en [`src/content/site.ts`](src/content/site.ts).
Buscar y reemplazar los valores entre `[CORCHETES]`:

| Placeholder | Descripción |
|---|---|
| `[NOMBRE_EMPRESA]` | Nombre del negocio / práctica |
| `[NOMBRE_TERAPEUTA]` | Nombre completo de la terapeuta |
| `[EMAIL]` | Email de contacto |
| `[CODIGO_AREA] [NUMERO]` | Teléfono con código de país (+54 9...) |
| `[NUMERO_WHATSAPP]` | Número para WhatsApp sin espacios (ej: 1112345678) |
| `[CALLE] [NUMERO]` | Dirección del consultorio |
| `[CIUDAD]` / `[PROVINCIA]` | Localización |
| `[CODIGO_POSTAL]` | CP del consultorio |
| `[UNIVERSIDAD]` | Institución de egreso |
| `[INSTITUCIÓN]` | Institución de especialización |
| `[HORARIO_INICIO]` / `[HORARIO_FIN]` | Horario de atención |
| `[TU_DOMINIO]` | Dominio definitivo (ej: `nombreempresa.com.ar`) |
| `[HANDLE_INSTAGRAM]` | Usuario de Instagram (sin @) |
| `[PERFIL_LINKEDIN]` | Slug del perfil de LinkedIn |
| `[N]` | Años de experiencia |

### Imágenes

Los componentes `<ImagePlaceholder>` en Hero y SobreMi son temporales.
Para reemplazarlos con fotos reales:

1. Agregar las imágenes en `/public/` (ej: `foto-terapeuta.jpg`, `hero.jpg`)
2. Reemplazar `<ImagePlaceholder ... />` por `<Image>` de `next/image`:

```tsx
import Image from 'next/image'

<Image
  src="/foto-terapeuta.jpg"
  alt="Foto de [NOMBRE_TERAPEUTA]"
  width={600}
  height={700}
  className="rounded-2xl shadow-lg"
  priority  // agregar en Hero para LCP
/>
```

3. Agregar `/public/og-image.png` (1200×630) para Open Graph

---

## Roadmap de features

Cada feature tiene su componente ya creado. Activar = cambiar un flag + agregar variables.

### 1. Botón de WhatsApp

```
Flag:  src/config/features.ts  →  whatsapp: true
Env:   NEXT_PUBLIC_WHATSAPP_NUMBER=5491112345678
```

Aparece como botón flotante en la esquina inferior derecha.

---

### 2. Formulario de contacto

```
Flag:  src/config/features.ts  →  contactForm: true
```

**Opción A — Formspree** (sin backend, recomendado):
1. Crear cuenta en [formspree.io](https://formspree.io) → New Form
2. Copiar el endpoint (`https://formspree.io/f/xxxxxx`)
3. `Env: NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx`
4. En `src/components/features/ContactForm.tsx`, descomentar el bloque "Opción A" y eliminar el `console.warn`

**Opción B — API Route propia**:
1. Cambiar `next.config.js` → `output: 'standalone'` (pierde export estático puro)
2. Crear `src/app/api/contact/route.ts`
3. Conectar con Resend, SendGrid o SMTP propio

---

### 3. Mapa de Google Maps

```
Flag:  src/config/features.ts  →  map: true
Env:   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
       (Coordenadas en src/content/site.ts → metadata.coordinates)
```

1. Google Cloud Console → APIs & Services → Maps Embed API → habilitar
2. Crear API key y restringirla al dominio de producción
3. Actualizar las coordenadas reales en `src/content/site.ts`

---

### 4. Agenda online (cal.com)

```
Flag:  src/config/features.ts  →  booking: true
Env:   NEXT_PUBLIC_BOOKING_URL=https://cal.com/[usuario]/consulta
```

1. Crear cuenta en [cal.com](https://cal.com) (plan gratuito disponible)
2. Configurar tipo de evento "Consulta inicial"
3. En `src/components/sections/Hero.tsx` o `Contacto.tsx`, agregar un botón que abra la URL como popup o nueva pestaña

---

### 5. Blog

Ver [`src/app/blog/README.md`](src/app/blog/README.md) para instrucciones detalladas.

```
Flag:  src/config/features.ts  →  blog: true
```

Tres opciones: MDX local (sin servidor), Notion como CMS, o Sanity.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── blog/           # Carpeta preparada — sin rutas activas (ver blog/README.md)
│   ├── globals.css
│   ├── layout.tsx      # Metadatos globales, fuentes, JSON-LD
│   └── page.tsx        # Single-page: orquesta las secciones
├── components/
│   ├── features/       # WhatsAppButton, ContactForm, MapEmbed — feature-flagged
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, Servicios, SobreMi, Parkinson, Contacto
│   └── ui/             # ImagePlaceholder, SectionWrapper, JsonLd
├── config/
│   └── features.ts     # Fuente única de feature flags
├── content/
│   └── site.ts         # Todo el contenido editable (reemplazable por CMS)
└── types/
    └── content.ts      # Tipos TypeScript del esquema de contenido
```
