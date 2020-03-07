const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    module : {
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
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use :[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                      },
                      {
                        loader: "postcss-loader"
                      },
                      {
                        loader: "sass-loader",
                        options: {
                          implementation: require("sass")
                        }
                      }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                 'file-loader',
                ],
             },
          ]
    },
    devServer : {
        contentBase : './dist'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename : './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
          })
    ]
    
}