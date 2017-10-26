/* global __dirname */

import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: 'bundle.js',
    publicPath: '/dev-server/',
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: '"development"',
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
//  externals: {
//    google: 'const google',
//    jquery: 'const jQuery',
//  },
  module: {
    loaders: [
      { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=5000' },
      { test: /\.(eot|ttf|svg|woff|woff2)$/, loader: 'file-loader' },
      { test: /\.css$/, loader: 'style-loader!css' },
      {
        test: /\.s(c|a)ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
};
