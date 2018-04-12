var path = require('path');

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: path.resolve(__dirname,"./app/dist/scripts"),
    filename: "App.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}