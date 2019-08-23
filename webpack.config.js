const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: path.resolve(__dirname, './src/index.html')
})
const _mode = 'production';//生产模式
// const _mode = 'development';//开发模式
const _module = {
    rules:[
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(css)$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader'
            }
        }, {
            test: /\.svg$/,
            loader: 'svg-url-loader'
        }
    ]
}

function pack (filename){
    return {
        // 开发模式
        mode:_mode ,
        // 配置入口文件
        entry: './src/components/'+filename+'.js',
        // 出口文件目录为根目录下dist, 输出的文件名为main
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename + '.js',
        },
        // 配置开发服务器, 并配置自动刷新
        devServer: {
            // 根目录下dist为基本目录
            contentBase: path.join(__dirname, 'dist'),
            // 自动压缩代码
            compress: true,
            // 服务端口为1208
            port: 1208,
            // 自动打开浏览器
            open: true,
            proxy: {
                '/': {//需要在每个接口前面加上对应的项目名称
                    target: 'http://mkt.3456wan.local.com/tencent/', //代理到接口域名
                    changeOrigin: true, //开启代理
                    // pathRewrite: { '/api': '' } //这里重写路径
                }
            },
        },
        // 装载虚拟目录插件
        plugins: [htmlWebpackPlugin],
        module:_module,
        externals: {
            '@tencent/mktui': 'MKTUI',
            '@tencent/mktui-adcreative': 'MKTUI_ADCREATIVE',
            '@tencent/mktui-adtargeting': 'MKTUI_ADTARGETING',
            '@tencent/mktui-tools': 'MKTUI_TOOLS',
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
    }
}
module.exports = [
    pack('inprocess'),
    // pack('admanage')
    // pack('edit')
]

// module.exports = {
//     // 开发模式
//     mode: 'development',
//     // 配置入口文件
//     entry: './src/index.js',
//     // 出口文件目录为根目录下dist, 输出的文件名为main
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'main.js'
//     },
//     // 配置开发服务器, 并配置自动刷新
//     devServer: {
//         // 根目录下dist为基本目录
//         contentBase: path.join(__dirname, 'dist'),
//         // 自动压缩代码
//         compress: true,
//         // 服务端口为1208
//         port: 80,
//         // 自动打开浏览器
//         open: true,
//         proxy: {
//             '/api': {//需要在每个接口前面加上对应的项目名称
//                 target: 'http://mkt.3456wan.local.com/', //代理到接口域名
//                 changeOrigin: true, //开启代理
//                 pathRewrite: { '/api': '' } //这里重写路径
//             }
//         },
//     },
//     // 装载虚拟目录插件
//     plugins: [htmlWebpackPlugin],
//     module:{
//     	rules:[
//     		{
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.(css)$/,
//                 use: [{
//                     loader: 'style-loader'
//                 }, {
//                     loader: 'css-loader'
//                 }]
//             }, {
//                 test: /\.(png|jpg|gif)$/,
//                 use: {
//                     loader: 'url-loader'
//                 }
//             }, {
//                 test: /\.svg$/,
//                 loader: 'svg-url-loader'
//             }
//     	]
//     },
//     externals: {
//         '@tencent/mktui': 'MKTUI',
//         '@tencent/mktui-adcreative': 'MKTUI_ADCREATIVE',
//         '@tencent/mktui-adtargeting': 'MKTUI_ADTARGETING',
//         '@tencent/mktui-tools': 'MKTUI_TOOLS',
//         'react': 'React',
//         'react-dom': 'ReactDOM'
//     }
// }