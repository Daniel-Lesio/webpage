const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const purgecss = require("@fullhuman/postcss-purgecss");

require("babel-polyfill")

module.exports ={
  entry: [ 'babel-polyfill' ,'./src/index.js' ],
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
                        loader: "postcss-loader",
                        options : {
                          ident :'postcss',
                          plugins:[
                            require('autoprefixer'),
                          //   require('cssnano'),
                          //   purgecss({
                          //     content: [
                          //         "./src/*.html", 
                          //     ]
                          // }),
                          
                          ]
                        }
                      },
                      {
                        loader: "sass-loader",
                        options: {
                          implementation: require("sass")
                        }
                      }
                ]
            }
          ]
    },
    devServer : {
        contentBase : './dist'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename : './index.html',
            
        }),

        new MiniCssExtractPlugin({
            filename: "bundle.css"
          })
    ]
    
}