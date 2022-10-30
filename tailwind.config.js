/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'green': '#9ACDBB',
        'dark-green': '#639E8A',
        'grey': '#86929',
        'dark-grey': '#39474E',
        'light-grey': '#C6C7CB',
        'white': '#fff',
        'black': '#111',
        'silver': '#F4F4F4',
        'dark-silver': '#EEEEEE',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      fontFamily: {
        'sans': ['Montserrat'],
        'display': ['Gastromond'],
        'body': ['Montserrat'],
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
