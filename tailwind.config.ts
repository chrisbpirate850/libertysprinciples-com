import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: 'hsl(45 23% 97%)',
        'parchment-deep': 'hsl(45 23% 92%)',
        ink: {
          DEFAULT: 'hsl(220 69% 20%)',
          soft: 'hsl(220 30% 30%)',
          muted: 'hsl(220 15% 45%)',
        },
        liberty: {
          gold: 'hsl(46 87% 65%)',
          'gold-deep': 'hsl(40 70% 45%)',
        },
        patriot: {
          red: 'hsl(2 74% 58%)',
        },
        rule: 'hsl(220 20% 88%)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        h3: ['1.5rem', { lineHeight: '1.25', fontWeight: '500' }],
        body: ['1.125rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      maxWidth: {
        prose: '38rem',
        wide: '64rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
