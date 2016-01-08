var webpack = require('webpack');
module.exports = {
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
        loaders: [
            { test: /\.js.?$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loaders: ['style', 'css'], exclude: /node_modules/ }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};
