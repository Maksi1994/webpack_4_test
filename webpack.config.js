const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: "bundle.js"
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
   rules: [
     {
       test: /\.ts$/,
       use: 'ts-loader'
     }
   ]
 }

};
