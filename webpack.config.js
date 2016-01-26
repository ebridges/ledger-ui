var webpack = require('webpack');
module.exports = {
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: [
      "./src/js/app.js",
      'webpack/hot/only-dev-server'
    ],
    output: {
        path: './dist',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist'
    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.js.?$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules/ }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
