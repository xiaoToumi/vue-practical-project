# vue项目实战

学习地址(bilibili视频)：https://www.bilibili.com/video/BV1ut4y1a7wa?p=66&share_source=copy_web



## 项目创建测试

创建一个文件夹project后，进行相关配置。

### 依赖包安装

```cmd
npm init -y
```

### 配置脚手架

```cmd
cnpm i -D @vue/cli
```

如出现以下情况

```error
C:\Users\hp\Desktop\vue项目实践\project>cnpm i -D @vue/cli
'cnpm' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```

解决方法：https://blog.csdn.net/qq_41008918/article/details/112284688

### 查看cli版本

```cmd
npx vue -V
```

### 创建第一个脚手架文件

输入命令回车后，选择vue2版本

```cmd
npx vue create project-one
```

### 试运行第一个脚手架文件

创建完成脚手架文件后，会出现如下所示命令![1](C:\Users\hp\Desktop\vue项目实践\md文档图片\1.png)

分别输入这两行命令运行第一个脚手架文件

第一个命令

```cmd
cd project-one
```

第二个命令

```cmd
npm run serve
```

### vue.config.js配置

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    host:'127.0.0.1'	//'127.0.0.1'是'localhost'的对应地址，即两者是互通的
  }
})
```

### 在浏览器中进行创建脚手架

```cmd
npx vue ui
```





## 项目构建

### 安装依赖

```cmd
npm init -y
```

### 脚手架安装4.5.15版本

```cmd
cnpm i -D @vue/cli@4.5.15
```

### 创建脚手架

输入命令回车后，选择vue2版本

```cmd
npx vue create project-v2
```



### element ui安装

官网：https://element.eleme.cn/#/zh-CN/component/installation

#### 全局安装

```cmd
npm i element-ui -S
```

可在index.html中引入

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

也可在main.js 中进行配置

```js
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```



#### 按需引入

```cmd
npm install babel-plugin-component -D
```

在babel.config.js中进行配置

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
    "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

在main.js 中的配置

```js
import Vue from 'vue'
import App from './App.vue'
import { Button } from 'element-ui';

Vue.use(Button)			//或写为Vue.component(Button.name, Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```



### CSS样式

官网：https://www.sass.hk/

nodejs版本下载：https://nodejs.org/en/download/releases/

#### 安装

注意点：**需查看自身的nodejs版本是否匹配**（nodejs版本推荐**v14.19.3**）

参考安装案例：https://blog.csdn.net/weixin_44078488/article/details/122898191

##### scss版本搭配

根据要求安装版本7和版本4

```cmd
cnpm i sass-loader@7 node-sass@4
```

安装出错可能解决的方案：https://blog.csdn.net/weixin_46995731/article/details/110110788

##### less版本搭配

根据要求安装版本3和版本7

```cmd
cnpm i less@3 less-loader@7
```

**node node-sass sass-loader版本对应问题**

链接：https://blog.csdn.net/weixin_44748205/article/details/115118322



### 图标库安装使用

官网：http://www.fontawesome.com.cn/faicons/

#### 安装

```cmd
cnpm i -D font-awesome
```

在main.js中引入

```js
import 'font-awesome/css/font-awesome.min.css'
```



### axios安装使用

官网：https://www.axios-http.cn/docs/intro

api(中文版)：http://www.axios-js.com/zh-cn/docs/index.html#axios-request-config

#### 安装

```cmd
cnpm i axios -S
```

#### 全局配置

```js
import axios from 'axios'

Vue.prototype.axios = axios //挂载到原型，可全局使用
```



### 路由安装配置

官网：https://v3.router.vuejs.org/zh/installation.html

#### 安装

对应版本3.5.3

```cmd
cnpm i vue-router@3.5.3 -S
```

#### 配置

创建**router/index.js**文件，进行路由配置，如下

```js
//引入vue
import Vue from 'vue'
//导入路由router
import Router from 'vue-router'
//引入组件Home
import Home from '../components/Home'

//使用router
Vue.use(Router)

//创建及配置路由
export default new Router({
    routers:[
        {
            path:'/home',
            component:Home,
        }
    ],
    mode:'history'		//模式
})
```

#### 懒加载

在router/index.js中的配置

```js
//引入vue
import Vue from 'vue'
//导入路由router
import Router from 'vue-router'

//使用router
Vue.use(Router)

//创建及配置路由
export default new Router({
    routers:[
        {
            path:'/home',
            component: () => import('@/components/Home')    //懒加载
        }
    ],
    mode:'history'  //模式
})
```

#### 异步加载

在router/index.js中的配置

```js
//引入vue
import Vue from 'vue'
//导入路由router
import Router from 'vue-router'

//使用router
Vue.use(Router)

//创建及配置路由
export default new Router({
    routers:[
        {
            path:'/home',
            component: resolve => require(['@/components/Home'], resolve)   //异步加载
        }
    ],
    mode:'history'  //模式
})
```





## 项目实现

### 	登录页面验证

在**components**下创建**login.vue**

#### 			简单页面

login.vue

```vue
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form">
        <el-form-item
          label="用户名"
          prop="username"
          :rules="[
            { required: true, message: '请输入用户名', trigger: 'blur' },
            {
              min: 4,
              max: 10,
              message: '请输入长度在4-10位字符之间的用户名,',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          :rules="[
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              min: 6,
              max: 12,
              message: '请输入长度在6-12位字符之间的密码,',
              trigger: 'blur',
            },
          ]">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
          }else{
            console.error(this.form)
          }
        });
      },
    },
  };
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .box-card {
      width: 450px;
      margin: 200px auto;
      .el-card__header {
        font-size: 34px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
</style>
```

​		router/index.js

```js
//引入vue
import Vue from 'vue'
//导入路由router
import Router from 'vue-router'
// //引入组件Home
// import Home from '../components/Home'

//使用router
Vue.use(Router)

//创建及配置路由
export default new Router({
    routers:[
        {
            path:'/',
            redirect:'/login',
            component: () => import('@/components/Login')    //懒加载
        },
        {
            path:'/login',
            name:'Login',
            component: () => import('@/components/Login')    //懒加载
        },
        {
            path:'/home',
            component: () => import('@/components/Home')    //懒加载
        }
    ],
    mode:'history'		//模式
})
```



#### 			进阶页面

login

```vue
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      //定义姓名校验规则
      const validateName = (rule,value,callback) => {
        //请输入4-10位的昵称
        let reg = /(^[a-zA-Z0-9]{4,10}$)/   //正则表达式
        if(value === ''){
          callback(new Error('请输入用户名'))
        }else if(!reg.test(value)){
          callback(new Error('请输入4-10位用户名'))
        }else{
          callback()
        }
      };
      //定义密码校验规则
      const validatePass = (rule,value,callback) => {
        //请输入6-12位的包含大小写、字母、数字及特殊符号的密码
        let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/  //正则表达式
        if(value === ''){
          callback(new Error('请输入密码'))
        }else if(!pass.test(value)){
          callback(new Error('请输入6-12位的包含大小写、字母、数字及特殊符号的密码'))
        }else{
          callback()
        }
      }
      return {
        form: {
          username: "",
          password: "",
        },
        rules:{
          username:[{validator:validateName, trigger:'blur'}],
          password:[{validator:validatePass, trigger:'blur'}]
        }
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            this.axios.post('http://rapserver.sunmi.com/app/mock/340/login',this.form).then(res => {
              console.log(res)
              if(res.data.status === 200){
                localStorage.setItem('username',res.data.username)
                this.$message({message:res.data.message,type:'sussess'})
                this.$router.push('/home')
              }
            })
          }else{
            console.error(this.form)
          }
        });
      },
    },
  };
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .box-card {
      width: 450px;
      margin: 200px auto;
      .el-card__header {
        font-size: 34px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
</style>
```



#### 登录校验封装

login

```vue
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { nameRule,passRule } from '../utils/vaildate.js'
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        rules:{
          username:[{validator:nameRule, trigger:'blur'}],
          password:[{validator:passRule, trigger:'blur'}]
        }
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            this.axios.post('http://rapserver.sunmi.com/app/mock/340/login',this.form).then(res => {
              console.log(res)
              if(res.data.status === 200){
                localStorage.setItem('username',res.data.username)
                this.$message({message:res.data.message,type:'sussess'})
                this.$router.push('/home')
              }
            })
          }else{
            console.error(this.form)
          }
        });
      },
    },
  };
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .box-card {
      width: 450px;
      margin: 200px auto;
      .el-card__header {
        font-size: 34px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
</style>
```

创建**utils/vaildate.js**对验证进行模块化封装

```js
//用户名匹配
export function nameRule(rule,value,callback){
    //请输入4-10位的昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/   //正则表达式
    if(value === ''){
      callback(new Error('请输入用户名'))
    }else if(!reg.test(value)){
      callback(new Error('请输入4-10位用户名'))
    }else{
      callback()
    }
}

//密码匹配
export function passRule(rule,value,callback){
    //请输入6-12位的包含大小写、字母、数字及特殊符号的密码
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/  //正则表达式
    if(value === ''){
      callback(new Error('请输入密码'))
    }else if(!pass.test(value)){
      callback(new Error('请输入6-12位的包含大小写、字母、数字及特殊符号的密码'))
    }else{
      callback()
    }
}
```

#### token封装

login部分

```js
<script>
import { nameRule,passRule } from '../utils/vaildate.js'
import {setToken} from '@/utils/setToken.js'
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        rules:{
          username:[{validator:nameRule, trigger:'blur'}],
          password:[{validator:passRule, trigger:'blur'}]
        }
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            this.axios.post('http://rapserver.sunmi.com/app/mock/340/login',this.form).then(res => {
              console.log(res)
              if(res.data.status === 200){
                  
                  
                  //未封装前
                //localStorage.setItem('username',res.data.username)
                  //封装后
                setToken('username',res.data.username)
                  
                  
                this.$message({message:res.data.message,type:'sussess'})
                this.$router.push('/home')
              }
            })
          }else{
            console.error(this.form)
          }
        });
      },
    },
  };
</script>
```

创建**utils/setToken.js**对验证进行模块化封装

```js
//存储
export function setToken(tokenKey,token){
    return localStorage.setItem(tokenKey,token)
}
//读取
export function getToken(tokenKey){
    return localStorage.getItem(tokenKey)
}
//移除
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey)
}
```



#### 接口说明及Postman验证

接口地址：https://www.showdoc.com.cn/jinducasey/8321036098744323

```http
https://www.showdoc.com.cn/jinducasey/8321036098744323
```

接口密码：

```password
jinduVIP
```

#### axios二次封装

在**src**中创建**service.js**

```js
//引入axios
import axios from 'axios'
import { Message } from 'element-ui'
//import { getToken } from './utils/setToken'

//创建axios实例
const service = axios.create({
    baseURL:'/api',     //baseURL会自动加在请求地址上
    timeout:3000    //指定请求的超时毫秒数，如果请求超过这个时间，那么请求就会中断
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    // console.log(getToken('token'))  //在发送请求前做些什么
    // config.headers['token'] = getToken('token')     //获取并设置token
    return config
},(error) => {
    //请求错误时做些什么
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use((response) => {
    // console.log(response)   //对响应数据做些什么
    let {status, message} = response.data
    if(status !== 200){
        Message({message:message || 'error', type:'warning'})
    }
    return response
},(error) => {
    //响应错误时做些什么
    return Promise.reject(error)
})

//将service交出去，或者说暴露出去
export default  service
```



mian.js配置

```js
//引入axios封装
import service from './service'

//挂载到原型，可全局使用
Vue.prototype.service = service
```



在**vue.config.js**中配置跨域代理

```js
module.exports = {
    devServer:{
        open:true,  //运行后自动在浏览器打开
        proxy:{
          '/api':{
            target:'http://1.116.64.64:5004/api2', //代理接口
            changeOrigin:true,  //允许跨域
            pathRewrite:{
              '^/api':''
            }
          }
        }
      }
}
```

#### 登录方法封装

在src中创建api/api.js对登录请求进行封装

```js
//引入service
import service from '../service.js'


//登录接口
export function login(data){
    return service({
        method:'post',
        url:'/login',
        data
    })
}
```

login

```vue
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { nameRule,passRule } from '../utils/vaildate.js'
import {setToken} from '@/utils/setToken.js'
import { login } from '@/api/api.js'
  export default {
    name: "login",
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        rules:{
          username:[{validator:nameRule, trigger:'blur'}],
          password:[{validator:passRule, trigger:'blur'}]
        }
      };
    },
    methods: {
      login(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log(this.form);
            // this.service.post('/login',this.form).then((res) => {
            //   if(res.data.status === 200){
            //     setToken('username',res.data.username)
            //     setToken('token',res.data.token)
            //     this.$message({message:res.data.message, type:'success'})
            //     this.$router.push('/home')
            //   }
            //   console.log(res)
            // })
            login(this.form).then(res => {
              if(res.data.status === 200){
                setToken('username',res.data.username)
                setToken('token',res.data.token)
                this.$message({message:res.data.message, type:'success'})
                this.$router.push('/home')
              }
            })
          }else{
            console.error(this.form)
          }
        });
      },
    },
  };
</script>

<style lang="scss">
  .login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../assets/login.jpeg') center no-repeat;
    .el-card{
      background: #65768557;
    }
    .box-card {
      width: 450px;
      margin: 200px auto;
      color: #fff;
      .el-form .el-form-item__label{
        color: #fff;
      }
      .el-card__header {
        font-size: 34px;
      }
      .el-button {
        width: 100%;
      }
    }
  }
</style>
```

#### 404页面

创建NotFound.vue

```vue
<template>
  <div class="notfound">
      <div class="wrapper">
          <div class="big">页面不见了!</div>
          <div>首页瞧瞧，点击<router-link to="/">这里</router-link>进入首页.</div>
      </div>
  </div>
</template>

<script>
    export default {
        name:'notfound',
    }
</script>

<style>
    .notfound{
        height: 100%;
        background-image: url('../assets/404bg.png'),url('../assets/404bg.png'); 
        background-position: right top, center center;
        background-repeat: no-repeat,repeat;
        background-size: cover,auto;
    }
    .notfound .wrapper{
        position: absolute;
        top: 60%;
        right: 2%;
        color: #fff;
        width: 635px;
        font-size: 19px;
        line-height: 29px;
        -webkit-font-smoothing: antialiased;
        padding: 20px;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .notfound .wrapper a{
        color: #ffcc00;
        text-decoration: none;
        font-weight: 700;
        cursor: pointer;
    }
    @media only screen and (max-width:666px){
        .notfound .wrapper{
            left: auto;
            right: 0;
            width: 100%;
            max-width: 450px;
            top: 35%;
        }
        .notfound .wrapper .big{
            font-size: 42px;
            line-height: 50px;
            margin-bottom: 15px;
        }
    }
</style>
```

在router中进行配置

```js
		{
            path:'*',
            name:'NotFound',
            component: () => import('@/components/NotFound')    //懒加载
        },
```



#### api接口封装

##### qs安装

```cmd
cnpm i qs -D
```

#### ECharts安装

官网：https://echarts.apache.org/handbook/zh/meta/edit-guide

可在**package.json**中查看版本，安装后版本应为4.9.0版本

```cmd
cnpm i -D echarts@4			//项目需求对应第四版本
```

#### ECharts地图json获取

获取链接：http://datav.aliyun.com/portal/school/atlas/area_selector#&lat=26.30662600587793&lng=118.28348353816342&zoom=7.5

#### 分数地图资源

资源链接：中国人民大学2017年各省市计划录取人数 [地理坐标,地图,散点图]
http://chartsdev.com/thread-1076-1-1.html
(出处: 数据可视化技术分享)

进入页面后点击在线编辑即可

#### nginx下载

下载链接：https://nginx.org/en/download.html

##### conf下的nginx.conf配置

```nginx
server {
        listen       8080;  //端口号从80改为8080，或者其他
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;    //dist所在的路径
            index  index.html index.htm;
            try_files $uri $uri/ @router;   //解决页面刷新404问题
        }

        location @router {
            rewrite ^.*$ /index.html last;  //vue项目路由不是真实存在的
        }
```

##### nginx项目部署基本步骤

1.安装nginx

2.项目打包

使用 **yarn build** 或者 **vue ui** 进行打包

3.配置nginx.conf

4.检查配置文件是否配置成功

注：需在有nginx.exe文件下才能成功

```cmd
nginx -t -c conf所在路径下的nginx.conf文件
如：
nginx -t -c C:\Users\hp\Desktop\vue项目实践\nginx安装包\nginx-1.22.0\conf\nginx.conf
```

5.运行nginx

```cmd
start nginx
```

运行完成之后可通过	http://localhost:8080 进行访问

注：当需要重启nginx时，需先将其关闭后再运行







## TS项目重构

### 	项目搭建

查看cli版本，如不项目创建4.5.15版本，则需要安装

```cmd
//查看cli版本
npx vue -V


//安装4.5.15版本的cli
cnpm i -D @vue/cli@4.5.15
```

项目创建

```cmd
npx vue create project-ts
```

选择自创建，即Vue2，Vue3之外的另一选项，回车

![ts-1](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-1.png)

使用**空格**选中途中打钩的选项后回车

![ts-2](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-2.png)

选择2.x版本后回车

![ts-3](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-3.png)

进入下一项后，分别选择	**n，y，y, Sass/SCSS (with node-sass)**

![ts-4](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-4.png)

代码检查选择  **ESLint + Prettier**![ts-5](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-5.png)![]![ts-6](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-6.png)

![ts-7](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-7.png)

![ts-8](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-8.png)

等待项目创建完成后即可运行查看

#### 运行后报错

如图

![ts-9](C:\Users\hp\Desktop\vue项目实践\md文档图片\ts-9.png)

**解决办法：**

1.在创建的脚本文件中添加依赖

```cmd
//PS C:\Users\hp\Desktop\vue项目实践\ts-project\project-ts> cnpm i
//命令
cnpm i
```

有的在添加依赖后可正常运行了，但有可能还是会有报错，那么需要往下继续操作

2.根据报错信息提示进行操作，如rebuild的一下node-sacc

```cmd
npm rebuild node-sacc 
```

### 安装第三方依赖

```cmd
cnpm i element-ui font-awesome axios echarts@4 -S
```



## Vue3项目重构

### 项目搭建

查看cli版本，如不项目创建4.5.15版本，则需要安装

```cmd
//查看cli版本
npx vue -V


//安装4.5.15版本的cli
cnpm i -D @vue/cli@4.5.15
```

项目创建

```cmd
npx vue create project-v3
```

在选择版本界面选择vue3后回车等待即可

### 安装第三方依赖

```cmd
cnpm i element-plus font-awesome axios echarts@4 vue-router@4 less@3 less-loader@7 -S
```

# vue-
