const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: ['@babel/polyfill', './client/src/index.js'],
    output: {
        path: path.join(__dirname, outputDirectory),
        publicPath: '/',
        filename: 'bundle.js',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|ico|pdf)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.(ttf|jwoff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        publicPath: 'http://localhost:3000/',
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'client/public/index.html'),
            filename: './index.html',
            favicon: './client/public/favicon.ico'
        })
    ]
};