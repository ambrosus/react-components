const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin('./docs'),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html',
      favicon: path.resolve(__dirname, 'public', 'favicons', 'favicon.ico')
    })
  ],
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: "assets/svg/[name].[ext]",
        }
      },
      {
        test: /\.(png|jpg|jpeg|bmp|gif)$/,
        loader: 'url-loader',
        options: {
          limit: "10000",
          name: "assets/images/[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg']
  },
  output: {
    path: path.resolve(__dirname, 'docs/'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    open: true,
    progress: true
  }
};
