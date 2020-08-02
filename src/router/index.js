import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top.vue'
import Show from '@/views/Show.vue'
import Edit from '@/views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/show',
    name: 'Show',
    component: Show
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
