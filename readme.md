npm install name(包名)
npm i name(包名)
-g
--global 进行全局安装 
工具类  vuecli  / webpack / grunt / gulp / yarn
-D
--save -dev 本地安装依赖
-S
--save 本地安装依赖
将包安装到项目中  
1.命令输入错误
npm iname : install命令和包名之间缺少空格
npm i name-后缀 : 包名和后缀之间缺少空格
2.npm install命令执行失败
运行npm install命令的目录中没有package.json文件
3.网络原因导致安装失败
4.缓存原因导致安装失败 
   XX.json not exist 
   解决：npm catch clean 命令清除缓存 之后再重新安装


对vuecli中的webpack配置增加配置项，我们需要创建vue.config.js
vue.config.js中的代码结构
module.exports = {
       ...
}
1.单词拼写错误  module    exports
2.符号错误 
    1>  .  写错为 ,
    2>  错误的使用了中文符号
    3>  {}未闭合
3.配置项语法写错 
    注意点: 大小写 js对大小写敏感 
            语法格式  对象：{ 
                        key : value ,
                        key : fn,
                        fn(){},
                        key: () => {},
                    } 
                  链式调用：fn(arg).fn(arg).fn(arg)

                  const fn = function(){}
                  {
                      fn,
                  }
             对象每条属性的末尾加 ,   

4. vue.config.js 文件位置    和package.json目录同级     


model  定义存储在数据库中的collection(集合/表)的document(集合/表中每条数据)
1.引入mongoose 
2.使用schema对象定义集合
  > 引入schema对象
  > 通过实例化schema对象 定义collection名以及document结构
3.将定义好的collection暴露  

controller 定义处理不同请求的中间件(方法/函数)  在请求响应之间进行功能操作的函数

客户端        服务端                          数据库
用户          对用户一些行为进行处理          存放数据
发送请求      返回响应 

1.引入需要操作的数据集合(要操作的数据表)的model文件  可能需要对数据库进行操作
2.定义中间件(函数)
3.将定义好的中间件暴露   ps:暴露给接口文件

router 定义接口
1.引入路由模块
2.使用路由模块来定义接口
router.methods(url,cb) 定义接口
router 引入的路由模块
methods 请求方式 :post 提交 / delete 删 / put 更新 / get 查
url 定义的接口名
cb 处理对该接口请求的回调函数(controller中定义的中间件)

3.暴露接口   （给服务器 ps: app.js）
