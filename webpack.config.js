var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name : 'assets/img/[name].[ext]'
                        }
                    }
                ]
            },
            { test: /\.jsx?$/,
            loader: 'babel-loader'
        },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: require.resolve('file-loader')
                },{
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                    loader: "url-loader",
                }
            },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
            
            {test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },

        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}
