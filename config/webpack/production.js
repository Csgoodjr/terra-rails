process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const path = require('path')

const { merge } = require('webpack-merge')
const defaultWebpackConfig = require('@cerner/webpack-config-terra');

module.exports = merge(defaultWebpackConfig({}, {}, {}), {
    entry: {
        application: path.resolve(__dirname, '../../app', 'javascript', 'packs', 'application.js'),
        hello_react: path.resolve(__dirname, '../../app', 'javascript', 'packs', 'hello_react.tsx')
    }, 
    resolve: {
        extensions: [
            '.jsx',         '.mjs',
            '.js',          '.sass',
            '.scss',        '.css',
            '.module.sass', '.module.scss',
            '.module.css',  '.png',
            '.svg',         '.gif',
            '.jpeg',        '.jpg'
        ],
        modules: [ path.resolve(__dirname, '../../app/javascript'), path.resolve(__dirname, '../../node_modules') ]
    }, 
    module: {
        rules: [{
            test: /.(ts|tsx)$/,
            loader: 'ts-loader'
        }]
    }
})