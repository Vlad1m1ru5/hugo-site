const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ProgressPlugin = require("webpack/lib/ProgressPlugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const mode = process.env.NODE_ENV || "development"
const devtool = mode === "development" ? "inline-source-map" : "none"
const clientPath = "./client"

module.exports = {
  mode,
  devtool,
  entry: {
    dist: `${clientPath}/src/index.js`
  },
  output: {
    path: path.resolve(__dirname, "public/js/"),
    filename: "[name].js",
    chunkFilename: "[name].[contentHash].js"
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
    contentBase: path.join(__dirname, "public")
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./data", to: "./data" }
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${clientPath}/src/index.html`
    })
  ]
}