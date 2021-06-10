// const defaultExtractor = (content) => {
//   const matches = content.match(/"(.+?)"/g) || [];
//   const set = new Set(matches.map((s) => s.slice(1, -1).split(' ')).flat());
//   set.delete('');
//   return [...set];
// };

module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: { flexbox: 'no-2009' },
      features: { 'custom-properties': false },
      stage: 3,
    },
    // '@fullhuman/postcss-purgecss': {
    //   content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    //   defaultExtractor,
    //   safelist: [...],
    // },
  },
};
