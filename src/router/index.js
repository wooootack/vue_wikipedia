import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import New from '@/views/New.vue'
import Show from '@/views/Show.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  }
]

const router = new VueRouter({
  routes
})

export default router
