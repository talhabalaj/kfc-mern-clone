
module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [
    [
      'module-resolver',
      {
        root: './src'
      },
    ],
  ],
}
