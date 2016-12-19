var webpack = require('webpack');
var path = require('path');
var WebpackConfig = {
  plugins: [],
  externals: [],
  module: { loaders: [] }
};

WebpackConfig.entry = './src/index';

WebpackConfig.output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js',
  library: 'IsolateReduxEnv',
  libraryTarget: 'umd'
}

WebpackConfig.resolve = {
  extensions: ['', '.js'],
  root: path.resolve(path.join(__dirname, 'src'))
}

WebpackConfig.externals.push({
      redux: {
        root: 'Redux',
        commonjs2: 'redux',
        commonjs: 'redux',
        amd: 'redux',
      }
})

WebpackConfig.externals.push({
      immutable: {
        root: 'Immutable',
        commonjs2: 'immutable',
        commonjs: 'immutable',
        amd: 'immutable',
      }
})

WebpackConfig.plugins.push(new webpack.optimize.OccurenceOrderPlugin())
WebpackConfig.plugins.push(new webpack.optimize.DedupePlugin())

WebpackConfig.module.loaders.push({
  test: /\.js?$/,
  loaders: ['babel'],
  include: path.join(__dirname, 'src')
})

module.exports = WebpackConfig;
