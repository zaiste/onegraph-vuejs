import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/HelloWorld'
import About from '@/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
