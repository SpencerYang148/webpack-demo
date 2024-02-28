const path = require('path');
// const prodConfig = require("./webpack.config.prod");
const { merge } = require('webpack-merge');
const { DllPlugin } = require('webpack');
const StatsPlugin = require('./plugins/StatsPlugin/StatsPlugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @type {import("webpack").Configuration} */
const config = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist-dll'),
        filename: '[name].[contenthash].dll.js',
        chunkFilename: '[id].[contenthash].dll.js',
        library: '_dll_[name]_[fullhash]',
    },
    optimization: {
        splitChunks: false,
    },
    plugins: [
        new DllPlugin({
            context: process.cwd(),
            name: '_dll_[name]_[fullhash]',
            path: path.resolve(process.cwd(), 'dist-dll', '[name].manifest.json'),
        }),
        new StatsPlugin({
            filepath: path.resolve(process.cwd(), 'dist-dll'),
            filename: 'dllInfo.json',
        }),
        // new BundleAnalyzerPlugin(),
    ],
};

module.exports = merge({}, config);
