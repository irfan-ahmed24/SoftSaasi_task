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
    LogAfterCompile, // কাস্টম প্লাগিনটি এখানে যুক্ত করা হয়েছে
  ],
  // টার্মিনাল ক্লিন রাখার জন্য কনফিগারেশন
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
      logging: "none", // ব্রাউজার কনসোলের লগ বন্ধ রাখবে
      overlay: true, // এরর হলে স্ক্রিনে দেখাবে
    },
  },
};
