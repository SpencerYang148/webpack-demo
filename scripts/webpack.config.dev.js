const path = require('path');
const baseConfig = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/** @type {import("webpack").Configuration} */
const config = {
    mode: 'development',
    output: {
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        http2: true,
        liveReload: false,
        static: path.resolve(process.cwd(), 'dist-dll'),
        devMiddleware: {
            writeToDisk: true,
        },
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
};

module.exports = merge(baseConfig, config);
