import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '25': 'var(--gray-25)',
        '50': 'var(--gray-50)',
        '100': 'var(--gray-100)',
        '200': 'var(--gray-200)',
        '300': 'var(--gray-300)',
        '400': 'var(--gray-400)',
        '500': 'var(--gray-500)',
        '600': 'var(--gray-600)',
        '700': 'var(--gray-700)',
        '800': 'var(--gray-800)',
        '900': 'var(--gray-900)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
