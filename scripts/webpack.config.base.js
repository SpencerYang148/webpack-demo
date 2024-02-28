const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DllReferencePlugin } = require('webpack');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

/** @type {import("webpack").Configuration} */
const config = {
    entry: [path.resolve(process.cwd(), 'src/index.tsx')],
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[id].[contenthash].js',
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'swc-loader',
                },
            },
            {
                test: /\.(less|css)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]',
                            },
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 其他选项
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    resolve: {
        modules: [process.cwd(), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './templates/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new DllReferencePlugin({
            context: process.cwd(),
            manifest: require(path.resolve(process.cwd(), 'dist-dll/vendor.manifest.json')),
        }),
        new HtmlWebpackTagsPlugin({
            tags: ['vendor.56592a494095d0ea245e.dll.js'],
            append: false,
        }),
    ],
};

module.exports = config;
