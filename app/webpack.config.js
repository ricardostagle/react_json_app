const path = require('path');
const isDevMode = process.env.NODE_ENV !== 'production';

const config = {
  entry: {
    main_json: ["./js/src/index.js"]
  },
  devtool: (isDevMode) ? 'source-map' : false,
  mode: (isDevMode) ? 'development' : 'production',
  output: {
    path: isDevMode ? path.resolve(__dirname, "js/dist_dev") : path.resolve(__dirname, "js/dist"),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
     {
       test: /\.js$|jsx/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       include: path.join(__dirname, 'js/src'),
     }
   ],
  },
};

module.exports = config;