const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './assets/src/index.js',

  output: {
    path: path.resolve(__dirname, '/.tmp/public'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: '/\.jsx?$/',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/src/index.html'
    }),
  ],
};
