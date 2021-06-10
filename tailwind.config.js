const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// const withAnimations = require('animated-tailwindcss');

module.exports = {
  mode: 'jit',
  purge: { content: ['./pages/**/*.tsx', './components/**/*.tsx'], options: { keyframes: true } },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        martinique: {
          DEFAULT: '#32325D',
          50: '#F0F0F7',
          100: '#D7D7EA',
          200: '#A6A6CF',
          300: '#7474B4',
          400: '#4D4D8F',
          500: '#32325D',
          600: '#272749',
          700: '#1D1D35',
          800: '#121221',
          900: '#07070D',
        },
      },
      fontFamily: { sans: ['Open Sans', ...defaultTheme.fontFamily.sans] },
    },
  },
  variants: { extend: {} },
  corePlugins: { container: false },
  plugins: [
    plugin(({ addComponents }) =>
      addComponents({
        '.container': {
          '@screen sm': { maxWidth: '540px' },
          '@screen md': { maxWidth: '720px' },
          '@screen lg': { maxWidth: '960px' },
          '@screen xl': { maxWidth: '1140px' },
          '@screen 2xl': { maxWidth: '1320px' },
        },
      }),
    ),
  ],
};
