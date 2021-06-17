## webpack 依赖处理
#### 1.图片
js html css 引入图片
js中处理图片
import pic from "./assets/images/logo.jpeg" 
* 【pic只是一个图片路径】
----> 插件 file-loader
----> url-loader 依赖file-loader

css中处理图片
body {
    background: url("../images/logo.jpeg")
}
-----> 插件 "style-loader" "css-loader"


#### loader options配置
name "[name].[ext]" [ext]: 使用原有后缀名
outputPath : 输出路径
limit: 3 * 1024 是否转成base64 （url-loader）
#### loader 
做了啥
   loader -> 拿到一个模块的内容 -> 对内容进行处理 ->  传递给下一个loader
自定义一个loader
   loader本质就是一个函数 不能是箭头函数
   loader一定要有返回值
   loader 如何接收配置参数 this.query
   loader中有异步代码如何处理





#### 2.字体图表



#### 3.svg图标


#### 4.css
less less-loader
scss sass-loader




