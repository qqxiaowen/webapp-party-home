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
  NewDadil:()=>import('@/views/newsPage/NewDadil'),
  NewList:()=>import('@/views/newsPage/NewList'),
  partytoday:()=>import('@/views/newsPage/partytoday'),
  anyphoto:()=>import('@/views/newsPage/anyphoto'),
  life:()=>import('@/views/life'),
}

const router = new Router({
  routes: [
    {
      path: '/',
      meta:{
        name: 'home',
        desc:'首页',
      },
      component: home
    },
    {
      path:'/message',
      meta:{
        name:'message',
        desc:'通知早知道',
      },
      component:components.message
    },
    {
      path:'/myself',
      meta:{
        name:'myself',
        desc:'我的党建',
      },
      component:components.myself
    },
    {
      path:'/login',
      meta:{
        name:'login',
        desc:'登录',
      },
      component:components.login
    },
    {
      path:'/partytoday',
      meta:{
        name:'partytoday',
        desc:'党史上的今天',
      },
      component:components.partytoday
    },
    {
      path:'/NewDadil/:id',
      meta:{
        name:'NewDadil',
        desc:'',
      },
      component:components.NewDadil
    },
    {
      path:'/dadilEyes',
      meta:{
        name:'dadilEyes',
        desc:'信工新闻眼',
      },
      component:components.NewList
    },
    {
      path:'/oneclick',
      meta:{
        name:'oneclick',
        desc:'党建一点通',
      },
      component:components.NewList
    },
    {
      path:'/showrank',
      meta:{
        name:'showrank',
        desc:'党员亮身份',
      },
      component:components.NewList
    },
    {
      path:'/anystudy',
      meta:{
        name:'anystudy',
        desc:'随时随地学',
      },
      component:components.NewList
    },
    {
      path:'/anyphoto',
      meta:{
        name:'anyphoto',
        desc:'随时随地拍',
      },
      component:components.anyphoto
    },
    {
      path:'/system',
      meta:{
        name:'system',
        desc:'制度建设',
      },
      component:components.NewList
    },
    {
      path:'/activity',
      meta:{
        name:'activity',
        desc:'特色活动',
      },
      component:components.NewList
    },
    {
      path:'/life',
      meta:{
        name:'life',
        desc:'掌上组织生活',
      },
      component:components.life
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
