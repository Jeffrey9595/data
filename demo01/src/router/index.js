import Vue from 'vue'
import Router from 'vue-router'
import shopping from '@/view/shopping'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'shopping',
      component: shopping
    }
  ]
})
