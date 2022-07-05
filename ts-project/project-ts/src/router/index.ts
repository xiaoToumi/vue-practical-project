//引入vue
import Vue from 'vue'
//导入路由router
import Router from 'vue-router'

Vue.use(Router)

const routes: Array<any> = [
  {
    path: '/',
    redirect: '/login',  //重定向，默认访问登录页面
    name: '首页',
    hidden: true,        //对菜单中不需要的菜单名进行隐藏
    component: () => import('@/components/Login.vue')    //懒加载
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,        //对菜单中不需要的菜单名进行隐藏
    component: () => import('@/components/Login.vue')    //懒加载
  },
  {
    path: '*',
    name: 'NotFound',
    hidden: true,        //对菜单中不需要的菜单名进行隐藏
    component: () => import('@/components/NotFound.vue')    //懒加载
  },
  {
    path: '/home',
    name: '学生管理',
    iconClass: 'fa fa-users',    //图标定义
    redirect: '/home/student',
    component: () => import('@/components/Home.vue'),    //懒加载
    children: [
      {
        path: '/home/student',
        name: '学生列表',
        iconClass: 'fa fa-list',
        component: () => import('@/components/students/StudentList.vue'),
      },
      {
        path: '/home/info',
        name: '信息列表',
        iconClass: 'fa fa-list-alt',
        component: () => import('@/components/students/infoList.vue'),
      },
      {
        path: '/home/infos',
        name: '信息管理',
        iconClass: 'fa fa-list-alt',
        component: () => import('@/components/students/infoLists.vue'),
      },
      {
        path: '/home/work',
        name: '作业列表',
        iconClass: 'fa fa-list-ul',
        component: () => import('@/components/students/WorkList.vue'),
      },
      {
        path: '/home/works',
        name: '作业管理',
        iconClass: 'fa fa-th-list',
        component: () => import('@/components/students/WorkMent.vue'),
      },
    ]
  },
  {
    path: '/home',
    name: '数据分析',
    iconClass: 'fa fa-bar-chart',    //图标定义
    component: () => import('@/components/Home.vue'),    //懒加载
    children: [
      {
        path: '/home/dataview',
        name: '数据概览',
        iconClass: 'fa fa-line-chart',
        component: () => import('@/components/dataAnalysis/DataView.vue'),
      },
      {
        path: '/home/mapview',
        name: '地图预览',
        iconClass: 'fa fa-line-chart',
        component: () => import('@/components/dataAnalysis/MapView.vue'),
      },
      {
        path: '/home/scoremap',
        name: '分数地图',
        iconClass: 'fa fa-line-chart',
        component: () => import('@/components/dataAnalysis/ScoreMap.vue'),
      },
      {
        path: '/home/travelmap',
        name: '旅游地图',
        iconClass: 'fa fa-line-chart',
        component: () => import('@/components/dataAnalysis/TravelMap.vue'),
      },
    ]
  },
  {
    path: '/users',
    name: '用户中心',
    iconClass: 'fa fa-user',
    component: () => import('@/components/Home.vue'),    //懒加载
    children: [
      {
        path: '/users/user',
        name: '权限管理',
        iconClass: 'fa fa-user',
        component: () => import('@/components/users/User.vue'),
      }
    ]
  },
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
