module.exports ={
    chainWebpack: config => {
        config.module.rule('pug')
          .test(/\.pug$/)
          .use('pug-html-loader')
          .loader('pug-html-loader')
          .end()
    },

    devServer:{
        // 请求数据的服务器的地址
        proxy:'http://127.0.0.1:3000'
    },

    productionSourceMap: false
}