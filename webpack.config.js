'use strict';

var path = require('path');

module.exports = {
    entry: {
        app: './src/vue-count-button.vue'
    },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'vue-count-button.js',
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
                loader: 'vue',
                exclude: /node_modules/
            }
        ]
    }
};
