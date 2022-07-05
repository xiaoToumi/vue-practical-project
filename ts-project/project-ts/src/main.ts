import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'
//引入全局样式elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入axios封装
import service from './service.js'
//引入ECharts
import echarts from 'echarts'
//引入axios
import axios from 'axios'


//挂载ECharts
Vue.prototype.$echarts = echarts
//使用全局样式
Vue.use(ElementUI)
//挂载到原型，可全局使用
Vue.prototype.service = service
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
