import Vue from 'vue'
import Router from 'vue-router'
import guard from './guard'

import Index from '@v/Index.vue'
import Home from '@v/Home.vue'
import My from '@v/My.vue'
import Find from '@v/Find.vue'
import Detail from '@v/Home/Detail.vue'
Vue.use(Router)

// 用于放在meta中的标记
const keepAlive = true, // 带缓存路由 
  fromUrlStop = true // 直接从url进入时，将被导航至home

// 设置路由path和name
// 为什么使用这种模式：合并路由的path和name，确保每个路由必有name。因为从url直接访问一个页面它的route.name必然为null，
// 以此判断是否从url直接进入
function p(name, path) {
  return {
    path: `/${path ? path : name}`,
    name,
    meta: {} // 防止未设置meta造成取到undefined的情况
  }
}

const routes = [{
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/list/:id',
    name: 'detail',
    component:Detail
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }
]

// guard为路由实例添加全局守卫
export default guard(new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
}))