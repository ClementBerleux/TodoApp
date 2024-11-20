/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Comic-sans-MS"'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}

