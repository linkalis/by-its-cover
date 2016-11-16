module.exports = {
    entry: "./js/main.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json" },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015']}}
        ]
    },
    node: {
        console: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devServer: {
        proxy: {
            '/api': {
              target: 'https://other-server.example.com',
              secure: false
            }
        }
      }
};
