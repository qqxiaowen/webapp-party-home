import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'

import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  message:()=>import('@/views/message'),
  myself:()=>import('@/views/myself'),
  login:()=>import('@/views/login'),
  newDetail:()=>import('@/views/newsPage/newDetail'),
  NewList:()=>import('@/views/newsPage/NewList'),
  partytoday:()=>import('@/views/newsPage/partytoday'),
  anyphoto:()=>import('@/views/newsPage/anyphoto'),
  life:()=>import('@/views/life'),
  findteam:()=>import('@/views/findteam'),
  interaction:()=>import('@/views/interaction'),
  info:()=>import('@/views/personage/info'),
  updateinfo:()=>import('@/views/personage/updateinfo'),
}

const router = new Router({
  routes: [
    {
      path: '/',
      meta:{
        desc:'首页',
      },
      name: 'home',
      component: home
    },
    {
      path:'/message',
      meta:{
        desc:'通知早知道',
      },
      name:'message',
      component:components.message
    },
    {
      path:'/myself',
      meta:{
        desc:'我的党建',
      },
      name:'myself',
      component:components.myself
    },
    {
      path:'/login',
      meta:{
        desc:'登录',
      },
      name:'login',
      component:components.login
    },
    {
      path:'/partytoday',
      meta:{
        desc:'党史上的今天',
      },
      name:'partytoday',
      component:components.partytoday
    },
    {
      path:'/newDetail/:id',
      meta:{
        desc:'',
      },
      name: 'newDetail',
      component:components.newDetail
    },
    {
      path:'/dadilEyes',
      meta:{
        desc:'信工新闻眼',
      },
      name:'dadilEyes',
      component:components.NewList
    },
    {
      path:'/oneclick',
      meta:{
        desc:'党建一点通',
      },
      name:'oneclick',
      component:components.NewList
    },
    {
      path:'/showrank',
      meta:{
        desc:'党员亮身份',
      },
      name:'showrank',
      component:components.NewList
    },
    {
      path:'/anystudy',
      meta:{
        desc:'随时随地学',
      },
      name:'anystudy',
      component:components.NewList
    },
    {
      path:'/study',
      meta:{
        desc:'政治学习',
      },
      name:'study',
      component:components.NewList
    },
    {
      path:'/anyphoto',
      meta:{
        desc:'随时随地拍',
      },
      name:'anyphoto',
      component:components.anyphoto
    },
    {
      path:'/system',
      meta:{
        desc:'制度建设',
      },
      name:'system',
      component:components.NewList
    },
    {
      path:'/activity',
      meta:{
        desc:'特色活动',
      },
      name:'activity',
      component:components.NewList
    },
    {
      path:'/life',
      meta:{
        desc:'掌上组织生活',
      },
      name:'life',
      component:components.life
    },
    {
      path:'/findteam',
      meta:{
        desc:'流动党员找组织',
      },
      name:'findteam',
      component:components.findteam
    },
    {
      path:'/interaction',
      meta:{
        desc:'党员云互动',
      },
      name:'interaction',
      component:components.interaction
    },
    {
      path:'/info',
      meta:{
        desc:'个人信息',
      },
      name:'info',
      component:components.info
    },
    {
      path:'/updateinfo',
      meta:{
        desc:'修改个人信息',
      },
      name:'updateinfo',
      component:components.updateinfo
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})
router.afterEach( (to, from) => {
  Nprogress.done()
})

export default router
