const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ProgressPlugin = require("webpack/lib/ProgressPlugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const mode = process.env.NODE_ENV || "development"
const isDevMode = mode === "development"
const devtool = isDevMode ? "inline-source-map" : "none"
const clientPath = "./client"

module.exports = {
  mode,
  devtool,
  entry: {
    index: `${clientPath}/src/index.js`,
    app: `${clientPath}/src/app.svelte`,
    item: `${clientPath}/src/item.svelte`,
    asyncList: `${clientPath}/src/async-select.svelte`
  },
  output: {
    path: path.resolve(__dirname, "static/js/"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[contenthash].js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.(svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"]
  },
  devServer: {
    contentBase: path.join(__dirname, "static")
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin()
  ].concat(!isDevMode ?
    [] :
    [
      new CopyWebpackPlugin({
        patterns: [
          { from: `${clientPath}/`, to: "./" }
        ]
      }),
      new HtmlWebpackPlugin({
        template: `${clientPath}/src/index.html`
      })
    ]
  )
}