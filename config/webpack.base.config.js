/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
      {
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.(scss|css)$/,
              use: [
                PLATFORM === 'production' ?
                  MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
          }),
          new webpack.DefinePlugin({
            'process.env.VERSION': JSON.stringify(env.VERSION),
            'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
          }),
        ],
        output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, '..', 'dist'),
          publicPath: '/',
        },
        resolve: {
          extensions: ['.js', '.jsx'],
          alias: {
            'semantic-ui-react': 'semantic-ui-react/dist/es',
          }
        }
    },
  ])
};
