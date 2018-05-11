import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import User from './components/user/user'
import _404 from './components/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/user', name: 'user', component: User },
    { path: '/', name: 'home', component: Home },
    { path: '*', name: '404', component: _404 }
  ]
})

export default router
