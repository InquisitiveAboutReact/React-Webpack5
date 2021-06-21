const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //entry : './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port:3010,
        watchContentBase: true,
    },
    module: {
        rules:[
            {
                test:/\.js$|jsx/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use:[
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    
                ]
            }
        ]
    },
    plugins : [new MiniCSSExtractPlugin()], //What this config does is create a separate CSS compiled file inside ./dist folder
}