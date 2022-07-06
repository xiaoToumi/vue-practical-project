module.exports = {
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
      }
}