/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-alt': '#111111',
        surface: '#1A1A1A',
        'surface-hover': '#222222',
        primary: '#F0EDE6',
        secondary: '#888888',
        accent: '#7C5CBF',
        'accent-hover': '#9B7FD4',
        gold: '#C9A84C',
        divider: '#222222',
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(56px, 10vw, 120px)',
        'display': 'clamp(40px, 6vw, 72px)',
        'heading': 'clamp(28px, 4vw, 48px)',
        'subheading': 'clamp(20px, 2.5vw, 32px)',
        'label': '11px',
      },
      letterSpacing: {
        'widest-label': '0.2em',
        'wide-label': '0.12em',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'soft': 'cubic-bezier(0.45, 0, 0.55, 1)',
        'spring': 'cubic-bezier(0.34, 1.4, 0.64, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '250': '250ms',
        '400': '400ms',
        '650': '650ms',
        '900': '900ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-vignette': 'radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.8) 100%)',
      },
    },
  },
  plugins: [],
}
