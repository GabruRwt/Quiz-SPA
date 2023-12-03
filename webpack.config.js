const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');

module.exports={
    "entry": "./brain.js",
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
      output:{
            path: path.resolve(__dirname,"dist"),
            filename: "bundle.js",
      },

      plugins: [new HtmlWebpackPlugin({
          template: './index.html'
        

      }

      )],
      mode:"development"
};