//引入axios
import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from './utils/setToken'

//创建axios实例
const service = axios.create({
    baseURL:'/api',     //baseURL会自动加在请求地址上
    timeout:3000    //指定请求的超时毫秒数，如果请求超过这个时间，那么请求就会中断
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    // console.log(getToken('token'))  //在发送请求前做些什么
     config.headers['token'] = getToken('token')     //获取并设置token
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