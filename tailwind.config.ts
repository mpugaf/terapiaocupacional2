import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F4',

        olive: {
          50:  '#F4F7F3',
          100: '#E3EBE2',
          200: '#C5D8C4',
          300: '#9DBE9B',
          400: '#739D71',
          500: '#5C7A5A',
          600: '#486048',
          700: '#3A4D3A',
          800: '#2F3E2F',
          900: '#263326',
        },

        clay: {
          50:  '#FDF8F3',
          100: '#F9EDD8',
          200: '#F2D7B1',
          300: '#E8BC84',
          400: '#DA9C59',
          500: '#C4956A',
          600: '#A87A52',
          700: '#8C6142',
          800: '#744F36',
          900: '#61412D',
        },

        ink: {
          DEFAULT: '#1A1A18',
          soft:    '#4A4A47',
          muted:   '#7A7A75',
        },
      },

      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        base: ['1.0625rem', { lineHeight: '1.75' }],
        lg:   ['1.125rem',  { lineHeight: '1.75' }],
        xl:   ['1.25rem',   { lineHeight: '1.6'  }],
        '2xl':['1.5rem',    { lineHeight: '1.4'  }],
        '3xl':['1.875rem',  { lineHeight: '1.3'  }],
        '4xl':['2.25rem',   { lineHeight: '1.2'  }],
        '5xl':['3rem',      { lineHeight: '1.1'  }],
        '6xl':['3.75rem',   { lineHeight: '1.05' }],
        '7xl':['4.5rem',    { lineHeight: '1.0'  }],
      },

      maxWidth: {
        content: '72rem',
        prose:   '68ch',
      },

      spacing: {
        section: '7rem',
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
