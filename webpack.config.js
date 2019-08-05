const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/mian.js',
    mode: 'development',
    output: {
        filename: "main.[hash].js",
        path: path.resolve(__dirname, "./dist")
    },
    devtool: 'inline-source-map',
    devServer: {
        // 只更新修改的部分，而不是刷新整个页面
        publicPath: '/',

        hot: true,
        host: '127.0.0.1',
        port: '1000',

        // 自动打开浏览器
        open: true,
        openPage:"main.html",
        // 告诉服务器从哪里dist目录中提供内容
        contentBase: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,  // 正则匹配所有.css后缀的样式文件
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }] // 使用这两个loader来加载样式文件
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                    loader: 'babel-loader'
                }]
            }, 
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         // eslint options (if necessary)
            //         fix: true
            //     }
            // },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, 
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader' // 处理以.vue结尾的文件
            },
        ]
    },
    plugins:
        [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name][hash].css',
                chunkFilename: '[id][hash].css',

            }),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'My App',
                filename: 'main.html',
                template: path.resolve(__dirname, 'src/main.html')
            }),
            new VueLoaderPlugin()

        ],
    optimization: {
        // minimize: true,
        minimizer: [new OptimizeCSSAssetsPlugin({})],

    }


}