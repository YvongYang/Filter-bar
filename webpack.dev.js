const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

 module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        // host: '0.0.0.0',  //为什么我配置为0.0.0.0会有问题
        // port: 3000
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
});