const elmPackage = require('./elm-package');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: './docs',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        // loader: `elm-webpack?cwd=${elmPackage['source-directories'][0]}`
        loader: 'elm-webpack'
      }
    ],
    noParse: /\.elm$/
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.elm']
  },
  devServer: {
    inline: true,
    stats: 'errors-only'
  }
};
