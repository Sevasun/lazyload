var path = require('path');

let config = {
  entry: './es6/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'script.js'
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
  }
};

module.exports = (env, options) => {
    config.devtool = options.mode === "production" ? 
                    "source-map" :
                    "cheap-module-eval-source-map";
    return config;
}