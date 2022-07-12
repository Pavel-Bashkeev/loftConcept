const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV ?? "development";

console.log(mode);
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 2021,
    open: true,
    hot: true 
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, "src", "./js/main.js")],
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "./js/[name].[contenthash].js",
    assetModuleFilename: 'asset/resourse',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: 'index.html',
      minify: devMode,
    }),
    new MiniCssExtPlugin({
      filename: './css/[name].[contenthash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')]
              }
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
        type: 'asset/resource',
        generator: {
          filename: './images/[name][ext]'
        }
      }
    ],
  },
};
