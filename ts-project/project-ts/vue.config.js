module.exports = {
  lintOnSave:false,
    devServer:{
        open:true,  //运行后自动在浏览器打开
        proxy:{
          '/api':{
            target:'http://1.116.64.64:5004/api2/', //代理接口
            changeOrigin:true,  //允许跨域
            pathRewrite:{
              '^/api':''
            }
          }
        }
      },
      chainWebpack(chainableWebpack){   //用chainWebpack做一些高级配置，包括对loader的添加、修改，以及插件的配置
        chainableWebpack.resovle = {extensions:['.js','.ts','.json','.d.ts']}
      }
}