const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const LogAfterCompile = {
  apply: (compiler) => {
    compiler.hooks.done.tap("LogAfterCompile", () => {
      setTimeout(() => {
        console.log(
          "\x1b[36m%s\x1b[0m",
          "server running at: http://localhost:3000",
        );
      }, 100);
    });
  },
};

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    LogAfterCompile,
  ],
  infrastructureLogging: {
    level: "error",
  },
  stats: "minimal",
  devServer: {
    port: 3000,
    hot: true,
    host: "localhost",
    historyApiFallback: true,
    client: {
      logging: "none",
      overlay: true,
    },
  },
};
