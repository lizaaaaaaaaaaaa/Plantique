const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|webp|avif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext][query]",
        },
      },
      {
        test: /\.mp4$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/videos/[hash][ext][query]",
        },
      },
      {
        test: /\.gif$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/gif/[hash][ext][query]",
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][hash][ext]",
        },
      },
      {
        test: /\.(ico|png|svg|webmanifest)$/i,
        include: path.resolve(__dirname, "src/favicon"),
        type: "asset/resource",
        generator: {
          filename: "favicon/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/",
    },
    port: 5000,
    open: true,
    hot: true,
    watchFiles: ["src/**/*.html", "src/index.html"],
  },
  mode: "development",
};
