let path = require('path');
// const DtsBundleWebpack = require('dts-bundle-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : {
        //'tststlib' : __dirname + '/build/export.graph.js'
        'tststlib' : __dirname + '/build/export.chart.js'
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
            { test: /\.tsx?$/,   loader: 'ts-loader' },
            { test: /^\.d\.ts$/, loader : 'ignore-loader'}
        ]
    },
    plugins : [
//        new DtsBundleWebpack({
//            name : "tststlib",
//            main : 'dist/**/*.d.ts',
//            out : 'tststlib.d.ts',
//            removeSource : false,
//            outputAsModuleFolder : true
//        })
        new CopyWebpackPlugin([
            { from : 'src/index.d.ts', to : '.'}
        ])
       
    ]
    
}