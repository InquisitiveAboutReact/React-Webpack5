const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    //entry : './src/index.js',
    mode:mode,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port:8081,
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