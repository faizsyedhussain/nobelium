const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          'black': '#5C330A',
          'gray-900': '#774D22',
          'gray-700': '#B27334',
          'gray-500': '#D7A675',
          'gray-300': '#E6C19B',
          'gray-100': '#EED9C4',
          'white': '#FAF1E8',
        day: {
          DEFAULT: BLOG.lightBackground || '#FAF1E8'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#5C330A'
        }
      },
      fontFamily: {
        sans: ['"Halyard Display"', ...fontFamily.sans, ...fontSansCJK],
        noEmoji: [
          '"Halyard Display"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
