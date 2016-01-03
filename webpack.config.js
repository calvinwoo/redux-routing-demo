module.exports = {
  entry: {
    'app': './app.jsx'
  },

  output: {
    path: './public/bundle',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
