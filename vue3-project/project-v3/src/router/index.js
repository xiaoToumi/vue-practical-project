import { createRouter, createWebHistory } from 'vue-router'
// import Login from '../components/Login'

const routes = [
    {
        path: '/',
        hidden: true,
        component: () => import('@/components/Login'),
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,        //对菜单中不需要的菜单名进行隐藏
        component: () => import('@/components/Login.vue')    //懒加载
    },
    // {
    //     path: '*',
    //     name: 'NotFound',
    //     hidden: true,        //对菜单中不需要的菜单名进行隐藏
    //     component: () => import('@/components/NotFound')    //懒加载
    // },
    {
        path: '/home',
        name: '学生管理',
        iconClass: 'fa fa-users',    //图标定义
        redirect: '/home/student',
        component: () => import('@/components/Home'),    //懒加载
        children: [
            {
                path: '/home/student',
                name: '学生列表',
                iconClass: 'fa fa-list',
                component: () => import('@/components/students/StudentList'),
            },
            {
                path: '/home/info',
                name: '信息列表',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/components/students/infoList'),
            },
            {
                path: '/home/infos',
                name: '信息管理',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/components/students/infoLists'),
            },
            {
                path: '/home/work',
                name: '作业列表',
                iconClass: 'fa fa-list-ul',
                component: () => import('@/components/students/WorkList'),
            },
            {
                path: '/home/works',
                name: '作业管理',
                iconClass: 'fa fa-th-list',
                component: () => import('@/components/students/WorkMent'),
            },
        ]
    },
    {
        path: '/home',
        name: '数据分析',
        iconClass: 'fa fa-bar-chart',    //图标定义
        component: () => import('@/components/Home'),    //懒加载
        children: [
            {
                path: '/home/dataview',
                name: '数据概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/DataView'),
            },
            {
                path: '/home/mapview',
                name: '地图预览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/MapView'),
            },
            {
                path: '/home/scoremap',
                name: '分数地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/ScoreMap'),
            },
            {
                path: '/home/travelmap',
                name: '旅游地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/TravelMap'),
            },
        ]
    },
    {
        path: '/users',
        name: '用户中心',
        iconClass: 'fa fa-user',
        component: () => import('@/components/Home'),    //懒加载
        children: [
            {
                path: '/users/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () => import('@/components/users/User'),
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router