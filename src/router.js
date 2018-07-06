import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from './components/Header'
import Home from './components/Home'
import _404 from './components/404.vue'

// lazy route loading - webpack doesn't import/bundle until it's asked for
// webpack will create seperate bundles for each
// in this case, grouped within the 'user' group
const User = resolve => {
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user')
}
const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'))
  }, 'user')
}
const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  }, 'user')
}
const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'))
  }, 'user')
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/user',
      components: {
        default: User,
        'header-bottom': Header
      },
      props: true,
      children: [
        { path: '', component: UserStart, name: 'user' },
        {
          path: ':id',
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log('routerjs userDetail beforeEnter router call')
            next()
          }
        },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
      ]
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        'header-top': Header
      }
    },
    { path: '*', name: '404', component: _404 }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach router call')
  next()
})

export default router
