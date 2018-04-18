const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg = require('./package.json')

module.exports = {
    entry:{
        ap: [
            path.join(__dirname,'src/index.js')
        ],
        vd: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: '/'
    },
    module:{
        rules:[{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname,'src')
        },{
            test: /\.(png|jpg|gif)/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        },{
            test: /\.less$/,
            use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader',{
                        loader: 'postcss-loader',
                        options:{
                            plugins: [require('autoprefixer')]
                        }
                    },{
                        loader: 'less-loader',
                        options:{
                            modifyVars: {
                                "primary-color": "#40a9ff",
                                "link-color": "#40a9ff",
                                "border-radius-base": "2px"
                            }
                        }
                    }]
                }
            ),
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname,'src/index.tmpl.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['ap','vd'],
            filename: '[name]-[hash].js'
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })
    ],
    resolve:{
        alias: {
            "@": path.join(__dirname,'src/pages'),
            "@components": path.join(__dirname,'src/components'),
            "@antd": path.join(__dirname,'src/components/antd'),
            "@redux": path.join(__dirname,'src/redux'),
            "@data": path.join(__dirname,'src/asste/data')
        }
    }
}