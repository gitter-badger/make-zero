import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/setting'
  },
  {
    path: '/setting',
    component: () => import('./setting/index')
  },
  {
    path: '/version',
    component: () => import('./version/index')
  }
]

export default new VueRouter({ routes })
