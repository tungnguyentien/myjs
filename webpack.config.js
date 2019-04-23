const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'myjs.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MyJS',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};