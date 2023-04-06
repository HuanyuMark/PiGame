const path = require('path')

module.exports = {
    entry: './src/client/client.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,//打包规则应用带以css结尾的文件上
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../dist/client')/*() => {
            const str = path.resolve(__dirname, '../../dist/client')
            console.log('pppppppp: ', str);
            return str;
        }*/,
    },
}