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
        success: {
          50: '#F1F9F4',
          100: '#D4EDDD',
          200: '#A9DBBB',
          300: '#8CCFA4',
          400: '#6FC38C',
          500: '#52B776',
          600: '#3C9059',
          700: '#307348',
          800: '#245636',
          900: '#122B1B',
        },
        danger: {
          50: '#FCEEEE',
          100: '#F6CBCB',
          200: '#ED9797',
          300: '#E36363',
          400: '#DD4040',
          500: '#D02525',
          600: '#9C1C1C',
          700: '#791515',
          800: '#570F0F',
          900: '#340909',
        },
        text: {
          black: '#111011',
          white: '#E7ECF1',
        },
        'component-bg': '#E4EEF1',
        background: '#0D0F10',
      },
    },
  },
  plugins: [],
};
