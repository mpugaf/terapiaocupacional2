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
        azure: {
          50:  '#EEF4FA',
          100: '#C9DCF0',
          200: '#A3C4E6',
          300: '#7DACDB',
          400: '#5793D1',
          500: '#2E6DA4',
          600: '#245A8A',
          700: '#1B4370',
          800: '#122C56',
          900: '#0A1A3C',
        },

        amber: {
          50:  '#FFF8EC',
          100: '#FEE9C3',
          200: '#FDCE85',
          300: '#FBB042',
          400: '#F59B2B',
          500: '#E8862A',
          600: '#C46720',
          700: '#A04D1A',
        },

        ink: {
          DEFAULT: '#1A2035',
          soft:    '#4A5670',
          muted:   '#7A879A',
        },
      },

      fontFamily: {
        display: ['var(--font-baskerville)', 'Georgia', 'serif'],
        sans:    ['var(--font-nunito)', 'system-ui', 'sans-serif'],
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
