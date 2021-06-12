const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// const withAnimations = require('animated-tailwindcss');

module.exports = {
  mode: 'jit',
  purge: { content: ['./pages/**/*.tsx', './components/**/*.tsx'], options: { keyframes: true } },
  darkMode: false,
  theme: {
    extend: {
      colors: { indigo: { 800: '#283593' } },
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
