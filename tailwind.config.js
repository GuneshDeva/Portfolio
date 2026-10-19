/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
        },
        flame: {
          400: 'rgb(var(--flame-400) / <alpha-value>)',
          500: 'rgb(var(--flame-500) / <alpha-value>)',
          600: 'rgb(var(--flame-600) / <alpha-value>)',
        },
        cyber: {
          400: 'rgb(var(--cyber-400) / <alpha-value>)',
          500: 'rgb(var(--cyber-500) / <alpha-value>)',
          600: 'rgb(var(--cyber-600) / <alpha-value>)',
        },
        textmain: 'rgb(var(--textmain) / <alpha-value>)',
        textsub: 'rgb(var(--textsub) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.4' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'scroll-bounce': 'scroll-bounce 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
      },
    },
  },
  plugins: [],
};
