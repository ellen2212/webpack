

/* 
   loader -> 拿到一个模块的内容 -> 对内容进行处理 ->  传递给下一个loader
   loader本质就是一个函数 不能是箭头函数
   loader一定要有返回值
   loader 如何接收配置参数 this.query
   loader中有异步代码如何处理
*/

module.exports = function(source) {
    const query = this.query
    // return source.replace("laohan", query.name) 与 this.callback 相同效果
    // const res = source.replace("laohan", query.name)
    // this.callback(null, res)


    // 异步代码处理
    const callback = this.async();
    setTimeout(() => {
        const res = source.replace("laohan", query.name)
        callback(null, res)
    },3000)
}