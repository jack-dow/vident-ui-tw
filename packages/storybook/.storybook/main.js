module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.story.mdx', '../../**/*.story.@(ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: 'none',
  },
};
