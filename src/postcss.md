## postcss 是啥
* postcss是一种对css编译的工具
常用的postcss插件
1.原生css自动化补全前缀
2.使用下一代css语法
3.自动把px转换成rem
4.css代码压缩等等
## 如何使用？
集成到webpack
1.需要loader，安装loader
2.webpack配置
`
rules: [
    {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader'
            }
        ]
    }
]
`
3.postcss配置
项目根目录postcss.config.js
`
module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: '> 5%'
        }
    }
}
`