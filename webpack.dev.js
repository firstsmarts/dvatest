const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const devConfig = {
    devtool: 'inline-source-map',
    entry: [
            path.join(__dirname,'src/index.js')
        ]
    ,
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        // color: true,  cli only
        historyApiFallback: true,
        host: "0.0.0.0",
        port: 9000,
        // progress: true,   cli only 需要在命令行配置
        proxy:{
            '/api/':{
                target: 'http://wandou.incubate.os',
                changeOrigin: true
            }
        }
    },
    plugins:[
        new OpenBrowserPlugin({ url: 'http://localhost:9000' })
    ]
}
module.exports = merge({
    customizeObject(a, b, key) {
        /*entry不合并，全替换*/
        if (key === 'entry') {
            return b;
        }
        return undefined;
    }
})(common, devConfig);