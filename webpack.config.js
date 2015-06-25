module.exports = {
    resolve: {
        root: [
            __dirname + '/src'
        ]
    },
    entry: './src/app.js',
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader : 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};