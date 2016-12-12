const webpack = require('webpack');
const elmPackage = require('./elm-package');

const env = process.env.NODE_ENV;

let plugins = [];

if (env === 'production') {
  plugins = plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        minimize:   true,
        compressor: { warnings: false }
      })
  ]);
}

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
  },
  plugins
};
