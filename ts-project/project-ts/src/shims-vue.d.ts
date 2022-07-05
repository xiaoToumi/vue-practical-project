declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
//通过declare module来支持ts使用第三方库
declare module 'echarts'
declare module '*.js'