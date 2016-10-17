var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var DIR_IN = path.join(__dirname, 'src'),
    DIR_OUT = path.join(__dirname, 'tmp');

module.exports = {
    context: DIR_IN,
    entry: '.\\index.js',
    output: {
        path: DIR_OUT,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', include: DIR_IN }
        ]
    },
    devServer: {
        contentBase: DIR_OUT,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    watch: true
}
