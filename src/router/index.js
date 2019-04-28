import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/:id',
      component: () => import('@/views/more-list.vue'),
    },
    {
      path: '/subject/:id',
      component: () => import('@/views/subject.vue'),
    },
    {
      path: '/celebrity/:id',
      component: () => import('@/views/celebrity.vue'),
    },
    {
      path: '/search',
      component: () => import('@/views/more-list.vue'),
    }

  ]
})
