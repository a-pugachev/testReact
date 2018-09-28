const HtmlWebPackPlugin = require("html-webpack-plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    entry: './src/app.js',
    output: {
        filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        //new  UglifyJsPlugin(),
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "index.html"
        })
    ]
};