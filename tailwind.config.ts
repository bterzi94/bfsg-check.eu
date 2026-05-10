import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ergo: {
          red: '#cc0033',
          'red-bright': '#ed0039',
          'red-dark': '#8e0038',
          dark: '#1e1e1e',
          surface: '#3c3c3c',
          muted: '#6a625a',
          light: '#f5f5f5',
          border: '#d3d3d3',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      spacing: {
        section: 'clamp(3rem, 8vw, 6rem)',
      },
    },
  },
  plugins: [],
};

export default config;
