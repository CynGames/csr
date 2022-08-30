module.exports = {
  module: {
    rules: [
      //  {
      //   test: /\.(woff2|woff|eot|ttf|otf)$/,
      //   use: ["file-loader"],
      //   options: {
      //     name: '[path][name].woff',
      //   },
      //  },

      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            // Limit at 50k. Above that it emits separate files
            limit: 50000,
            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: 'application/font-woff',
            // Output below fonts directory
            name: './fonts/[name].[ext]',
          },
        },
      },
    ],
  },
};