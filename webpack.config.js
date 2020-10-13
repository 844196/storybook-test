const ENV = process.env.NODE_ENV || 'development'
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: ENV,
  devtool: ENV == 'production' ? 'none' : 'inline-source-map',
  entry: {
    app: path.join(__dirname, 'src', 'app.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 8080,
    sockPath: '/webpack-socket/',
  },
};
