import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '325px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        black: {
          1: '#000000',
          2: '#1A1A1A',
          3: '#3B3A3A',
        },
        purple: {
          1: '#534599',
        },
        white: {
          1: '#FFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
