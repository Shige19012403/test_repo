const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    // moduleを追加
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
            {
                loader: 'style-loader',
            },
            {
          loader: 'css-loader',
        }],
      },
    ],
  },
};

