var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    context: path.join(__dirname, 'Scripts/App'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'Scripts/Dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['jsx', 'babel'], // <-- changed line
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};