var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/index.js',
        vendor: ['react','react-dom','redux','immutable','react-redux',
            'redux-immutable','keymirror','isomorphic-fetch','moment',
            'react-datepicker','redux-thunk','redux-immutablejs']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.png$/, loader: 'file-loader' },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader", query: { presets: ['es2015', 'react', 'stage-0'] } }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            hash: true
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
