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
        black: {
          800: '#1B1F22',
          900: '#15181A',
          950: '#121517',
        },
        blue: {
          50: '#EDF5FD',
          100: '#C8E0F9',
          200: '#7EB6F1',
          300: '#5AA1ED',
          400: '#358CE9',
          500: '#1877DC',
          600: '#1463B8',
          700: '#104F93',
          800: '#0C3C6E',
          900: '#061F37',
        },
        text: {
          black: '#111011',
          white: '#E7ECF1',
        },
        'component-bg': '#E4EEF1',
      },
    },
  },
  plugins: [],
};
