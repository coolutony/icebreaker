import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Room from '@/components/Room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/room',
      name: 'Room',
      component: Room
    }
  ]
})
