const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  devtool: "source-map",
  mode: 'development',
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    }),
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    progress: true,
  },
};
