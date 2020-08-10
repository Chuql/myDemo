import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('routerPath', from.path)
  if (to.path === '/login') {
    sessionStorage.removeItem('token');
  }
  let token = JSON.parse(sessionStorage.getItem('token'));
  if (!token && to.path != '/login') {
    next({ path: '/login', query: {redirect: to.fullPath} })
  } else {
    next()
  }
})
export default router
