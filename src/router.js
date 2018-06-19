import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import User from './components/user/user'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
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
    { path: '/user',
      name: 'user',
      component: User,
      props: true,
      children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail },
        { path: ':id/edit', component: UserEdit }
      ]
    },
    { path: '/', name: 'home', component: Home },
    { path: '*', name: '404', component: _404 }
  ]
})

export default router
