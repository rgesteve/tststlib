// from the setup in https://webpack.js.org/guides/typescript/

let path = require('path');

module.exports = {
    mode : 'development',
    entry : './src/index.ts',
    output : {
        path : path.resolve(__dirname, 'static'),
        filename : 'js/index.js'
    },
    resolve : {
        extensions : [".tsx", ".ts", ".js"]
    },
    module : {
        rules : [
            { test: /\.tsx?$/,   loader: 'ts-loader' }
        ]
    },
    plugins : []
}
