# Blog — instrucciones de activación

Esta carpeta está preparada para alojar el blog pero **no tiene rutas activas**.
El sitio funciona completamente sin ella.

## Para activar el blog

1. `features.blog = true` en `/src/config/features.ts`
2. Elegir una opción de implementación (ver abajo)
3. Crear `page.tsx` (lista) y `[slug]/page.tsx` (artículo)
4. Agregar el link en `/src/content/site.ts → nav`

---

## Opción A — MDX local (sin servidor, recomendado para empezar)

Artículos como archivos `.mdx` en el repo. Compatible con `output: 'export'`.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react remark-gfm rehype-highlight
```

Estructura sugerida:

```
src/app/blog/
├── page.tsx               # Lee metadata de los .mdx y lista los posts
├── [slug]/
│   └── page.tsx           # Renderiza el .mdx correspondiente
└── posts/
    ├── que-es-la-to.mdx
    └── parkinson-en-casa.mdx
```

---

## Opción B — Notion como CMS

El equipo edita en Notion; el sitio consume vía API en build time.

```bash
npm install @notionhq/client notion-to-md
```

Variables requeridas (`.env.local`):

```
NOTION_API_KEY=
NOTION_DATABASE_ID=
```

> ⚠️ Requiere `output: 'standalone'` en `next.config.js` si se usa ISR,
> o generación estática completa en build time (sin revalidación).

---

## Opción C — Sanity CMS

Editor visual con preview en tiempo real.

```bash
npm install next-sanity @sanity/image-url
```

Variables requeridas (`.env.local`):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

Compatible con `output: 'export'` via fetch estático en build.
