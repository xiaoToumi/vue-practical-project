//引入service
import service from '../service.js'
//安装并引入qs
import qs from 'qs'
import { IUserData } from '@/types'

//登录接口
export function login(data:IUserData){
    return service({
        method:'post',
        url:'/login',
        data
    })
}

//学习列表查询接口
export function students(params:any){
    return service({
        method:'get',
        url:'/students',
        params
    })
}

//学生列表删除接口
export function studentDel(id:any){
    return service({
        method:'delete',
        url:`/students/${id}`,
    })
}

// //信息列表新增接口
// export function info(data){
//     data = qs.stringify(data)
//     return service({
//         method:'post',
//         url:'/info',
//         data
//     })
// }

// //信息列表修改接口
// export function updateInfo(data){
//     data = qs.stringify(data)
//     return service({
//         method:'put',
//         url:'/info',
//         data
//     })
// }

//信息列表新增及修改接口
export function info(type:any, data:any){
     data = qs.stringify(data)
     let obj = {method:type, url:'/info', data}
    return service(obj)
}

//信息列表查询接口
export function getInfo(){
    return service({
        method:'get',
        url:'/info',
    })
}

//信息列表删除接口
export function infoDel(id:any){
    return service({
        method:'delete',
        url:`/info/${id}`,
    })
}

//数据概览接口
export function dataview(){
    return service({
        method:'get',
        url:'/dataview',
    })
}

//旅游地图接口
export function travel(){
    return service({
        method:'get',
        url:'/travel',
    })
}