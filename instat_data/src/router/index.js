import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import show_data from '../views/show_data.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show_data',
    name: 'show_data',
    component: show_data
    //() => import(/* webpackChunkName: "about" */ '../views/show_data.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
