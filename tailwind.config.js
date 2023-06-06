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
        'jdg-50': '#EDF5FD',
        'jdg-100': '#C8E0F9',
        'jdg-200': '#7EB6F1',
        'jdg-300': '#5AA1ED',
        'jdg-400': '#358CE9',
        'jdg-500': '#1877DC',
        'jdg-600': '#1463B8',
        'jdg-700': '#104F93',
        'jdg-800': '#0C3C6E',
        'jdg-900': '#061F37',
        'jdg-component-bg': '#E4EEF1',
        'jdg-container-bg': '#1B1F22',
        'jdg-container2-bg': '#15181A',
        'jdg-bg': '#0D0F10',
        'jdg-text': '#110111',
      },
    },
  },
  plugins: [],
};
