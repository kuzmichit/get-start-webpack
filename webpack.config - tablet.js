const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если 
// при запуске вебпака было указано --mode=production
  mode = 'production';
}

module.exports = {
  entry: './src/index.js',
  mode,

  devServer: {
    hot: true,
    port: 9950,
  },



  plugins: [ 
  ],

  module: {
    rules: [
      { test: /\.(html)$/,
      use: ['html-loader'] 
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "sass-loader",
            options: {
              api: "modern",
              sassOptions: {
                // Your sass options
								// options: {
								// 	sourceMap: true,
								// },
              },
            },
					},
        ],
      },
    ],
  },
}