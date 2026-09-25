/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ibe: {
          'bg': '#030b1e',
          'card': '#0c245b',
          'card-hover': '#07248E',
          'primary': '#07248E',
          'accent': '#3fa9f5',
          'muted': '#6d7fad',
          'text': '#f2f2f2',
          'text-muted': '#ccced4'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif Display"', 'serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Archivo"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'bento': 'repeat(auto-fit, minmax(150px, 1fr))',
      }
    },
  },
  plugins: [],
}
