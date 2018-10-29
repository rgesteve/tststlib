let path = require('path');

module.exports = {
    entry : {
        'tststlib' : __dirname + '/build/export.graph.js'
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        libraryTarget : 'umd',
        library : ['tststlib'],
        filename : 'js/[name].js'
    },
    resolve : {
        extensions : [".ts", ".js"]
    },
    module : {
        rules : [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins : []
}