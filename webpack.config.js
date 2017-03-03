const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/js/app.js',
  output: {
    path: __dirname + '/www/js',
    publicPath: '/www/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root:[ path.resolve( __dirname, './src/js' ) ],
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query:{
        presets: ['es2015']
      }
    },
    ]
  },
  postcss: [ ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: [ ]
}
