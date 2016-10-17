var path = require('path');

var DIR_IN = path.join(__dirname, 'src'),
    DIR_OUT = path.join(__dirname, 'dist');

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
    }
}
