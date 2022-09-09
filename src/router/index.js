import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/home/en',
    
  },
  {
    path: '/home/:language',
    name: 'home',
    component: Home,
  },
  {
    path: '/about/:language',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:'/details/:no/:language',
    name:'details',
   
    component:()=> import('../views/Details.vue')
  },
  {
    path:'/introduce/:language',
    name:'introduce',
    component:()=> import("../views/Introduce.vue")
  },
  {
    path:'/qc/:language',
    name:'qc',
    component:()=> import("../views/QueryCounterfeit.vue")
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
