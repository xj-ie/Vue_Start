const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: { main: "./main.js" }, //入口文件
    output: {
        filename: 'index.js', //出口文件名
        path: path.resolve(__dirname), //当前目录
        library: 'index' // 打包后模块的名称
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        rules: [ //定义不同类型的文件使用的loader
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                options: {
                    minimize: true //添加
                }
            }, 
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
              },
        ]
    }
}
