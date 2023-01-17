module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '~screens': './src/screens/',
            '~templates': './src/components/templates/',
            '~organisms': './src/components/organisms/',
            '~molecules': './src/components/molecules/',
            '~atoms': './src/components/atoms/',
          },
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.json',
            '.tsx',
            '.ts',
            '.native.js',
          ],
        },
      ],
    ],
  };
};
