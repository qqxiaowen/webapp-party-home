import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
Vue.use(Router)

const components = {
  home:()=>import('@/views/home'),
  message:()=>import('@/views/message'),
  myself:()=>import('@/views/myself'),
  login:()=>import('@/views/login'),
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
    }
  ]
})

export default router
