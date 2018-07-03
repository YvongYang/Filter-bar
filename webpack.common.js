const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonCss = new ExtractTextPlugin('common.css')
const projectCss = new ExtractTextPlugin('[name].[contenthash:8].css')

module.exports = {
    // 起点入口，每个key是chunk的名称
    // polyfill在入口之前引入
    entry: {
        shim: [
            "babel-polyfill" 
        ],
        app: path.join(__dirname, 'src/js/app.jsx')
    },
    module: {
     rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            })
          },
          {
            test: /\.scss$/,
            exclude: /src/,
            use: commonCss.extract({
                // 外部的css用style loader
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        },
        {
            test: /\.scss$/,
            include: /src/,
            use: projectCss.extract({
                // 外部的css用style loader
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
        {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
     ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            inject: true,
            template: 'src/index.html'
        }),
        commonCss,
        projectCss,
        // 重复引用的代码放到common.bundle.js中
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function(module){
                return module.context && module.context.includes("node_modules");
            }
        }),        
    ],
    output: {
        filename: '[name].[hash:8].js',
        // 相当于给dist文件设置别名
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[hash:8].js'
    }
};