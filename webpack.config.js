const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizePlugin = require('css-minimizer-webpack-plugin')

module.exports ={
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[contenthash].js',
        publicPath:'/'
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@components':path.resolve(__dirname , 'src/components'),
            '@styles':path.resolve(__dirname , 'src/styles'),
            '@icons': path.resolve(__dirname , 'src/asset/icons'),
            '@logos': path.resolve(__dirname , 'src/asset/logos'),
            '@pages':path.resolve(__dirname , 'src/pages'),
            '@containers':path.resolve(__dirname , 'src/containers')
        },
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                type:'asset'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new miniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize:true,
        minimizer:[
            new CssMinimizePlugin(),
            new TerserPlugin()
        ]
    }

}