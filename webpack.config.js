var webpack = require('webpack');
var path = require('path');
var WebpackConfig = {
  plugins: [],
  module: { loaders: [] }
};


WebpackConfig.entry = './src/index';

WebpackConfig.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/static/'
}

WebpackConfig.resolve = {
  extensions: ['', '.js'],
  root: path.resolve(path.join(__dirname, 'src'))
}

WebpackConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
// WebpackConfig.plugins.push(new webpack.DefinePlugin({
//   'process.env': {
//     'NODE_ENV': JSON.stringify('production')
//   }
// })

WebpackConfig.module.loaders.push({
  test: /\.js?$/,
  loaders: ['babel'],
  include: path.join(__dirname, 'src')
})

module.exports = WebpackConfig;
