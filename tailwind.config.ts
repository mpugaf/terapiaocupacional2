import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      // Tamaño base generoso para usuarios mayores (a11y)
      fontSize: {
        base: ['1.0625rem', { lineHeight: '1.75' }],
      },
      maxWidth: {
        // Ancho de contenido estándar — usado en SectionWrapper y Navbar
        content: '72rem',
      },
    },
  },
  plugins: [],
}

export default config
