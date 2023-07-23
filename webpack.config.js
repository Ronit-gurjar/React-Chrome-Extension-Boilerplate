const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/static/index.tsx',
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
        ]
    },
    "plugins": [
        new CopyPlugin({
            patterns: [
            {
                from: path.resolve('src/static/manifest.json'),
                to: path.resolve('dist')
            },
            {
                from: path.resolve('src/images'),
                to: path.resolve('dist')
            }
        ]
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: 'index.js',
    }
}
