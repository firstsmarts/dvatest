const path = require('path')
const webpack = require('webpack')
const pkg = require('./package.json')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Extplugin = require("extract-text-webpack-plugin")   
const merge = require('webpack-merge')
const common = require('./webpack.common')

const prodConfig = {
    module:{
        rules:[
        {
            test: /\.css$/,
            use: Extplugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader:'css-loader',
                    options:{
                        minimize: true
                    }
                },{
                    loader: 'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }]
            })
        }]
    },
    devtool: 'cheap-module-source-map',
    plugins:[
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
        }),
        new CleanWebpackPlugin(['dist']),
        new Extplugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ]
}
console.log(merge(common,prodConfig))
module.exports = merge(common,prodConfig)