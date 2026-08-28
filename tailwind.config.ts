import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#121212',
        },
        cream: {
          DEFAULT: '#F7F4EE',
          deep: '#EDE7DC',
        },
        gold: {
          DEFAULT: '#C9A96E',
          deep: '#8F7952',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.32em',
      },
      maxWidth: {
        shell: '1360px',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1.14)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 18s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
