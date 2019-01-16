// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack is just a bunch of keys on module.exports!
module.exports = {
  // This is where our app starts. This is why we have done all this importing
  // and exporting, to get to here
  target: 'web',
  entry: './src/index.tsx',
  devtool: "source-map",
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: './index.html'
    }),
  ],
  // module (I know it's a bit weird to have module.exports.module) is where we
  // define all the rules for how webpack will deal with thing.
  module: {
    // rules takes an array, each item containing the respective rules
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
  // Here we define explicitly the file types we intend to deal with
  resolve: {
    extensions: ['.ts', '.tsx', '.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
  },
  // This is where we define how everything gets output.
  // dist is a common output folder, and it should be gitignored. The build can
  // be run after publishing so you don't wind up with it in source control
  output: {
    path: path.resolve(__dirname, 'dist/'),
    // You can do fun things here like use the [hash] keyword to generate unique
    // filenames, but for this purpose rinse.js is fine. This file and path will
    // be what you put in package.json's "main" field
    filename: 'index.js',
    // This field determines how things are importable when installed from other
    // sources. UMD may not be correct now and there is an open issue to fix this,
    // but until then, more reading can be found here:
    // https://webpack.js.org/configuration/output/#output-librarytarget
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};
