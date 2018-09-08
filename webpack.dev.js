const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

// API Server 服务地址
const proxyTarget = `http://localhost:3030`;

 module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        // host: '0.0.0.0',  //为什么我配置为0.0.0.0会有问题
        port: 8080,
        proxy: {
            "/test": {
                "target": "https://localhost:3030",
                "secure": false,
                "changeOrigin": true
            }
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
});