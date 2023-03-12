/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.{html,js}",
    "./static/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Atkinson Hyperlegible', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
