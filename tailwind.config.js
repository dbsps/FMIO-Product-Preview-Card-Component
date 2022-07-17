/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'montserrat': ['montserrat', 'sans-serif'],
      'fraunces': ['fraunces', 'serif']
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'cream': 'hsl(30, 38%, 92%)',
      'aurometal': 'hsl(228, 12%, 48%)',
      'gunmetal': 'hsl(212, 21%, 14%)',
      'aquamarine': 'hsl(158, 36%, 37%)',
      'dark-aquamarine': 'hsl(158, 42%, 18%)'
      },
    extend: {},
  },
  plugins: [],
}
