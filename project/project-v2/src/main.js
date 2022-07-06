//引入vue
import Vue from 'vue'
//引入组件app
import App from './App.vue'
//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
//引入全局样式elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入路由器
import router from './router'
//引入axios封装
import service from './service'
//引入ECharts
import echarts from 'echarts'


//挂载ECharts
Vue.prototype.$echarts = echarts
//使用全局样式
Vue.use(ElementUI)
// //使用router
// Vue.use(router)
//挂载到原型，可全局使用
Vue.prototype.service = service
//关闭生产提示
Vue.config.productionTip = false

//路由导航守卫
router.beforeEach((to, from, next) => {
  if(!localStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login')
    }else next()
  } 
  next()
})

//创建一个vue实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
