var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
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
        new ExtractTextPlugin('styles.css')
    ]
};
