'use strict';

var webpack = require('webpack');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: './src/vue-count-button.vue'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'vue-count-button.min.js',
        libraryTarget: 'umd',
        library: 'vue-count-button'
    },
    resolve: {
        extensions: ['', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'babel?{"presets":["es2015"]}!vue',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};
