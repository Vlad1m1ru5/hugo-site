const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const mode = process.env.NODE_ENV || "development"
const isDevMode = mode === "development"

module.exports = {
  mode,
  devtool: isDevMode ? "inline-source-map" : "none",
  entry: {
    dist: "./src/index.js"
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
        loaders: [
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
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}