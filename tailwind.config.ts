import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#042147',
        cream: '#F5F4F0',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        'navy-light': '#0A3D7A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        countUp: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
      },
      transitionDuration: {
        '200': '200ms',
      },
    },
  },
  plugins: [],
}

export default config
