module.exports = api => {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            config: './config',
            components: './components',
            reducers: './reducers',
            types: './../../types'
          },
          extensions: ['.js', '.jsx', '.tsx', 'ts']
        }
      ]
    ]
  };
};
