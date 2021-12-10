const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    publicPath: '/', // relative path to index.html
    filename: 'bundle.js',
  },
  devServer: {
    static: './dist',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['.js', '.jsx'],
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // to be able to import js and jsx files without specifying the extension
  },
}
