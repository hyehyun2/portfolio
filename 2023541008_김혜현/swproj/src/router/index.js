import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/recipe',
    name: 'recipe',
    component: () => import('../views/recipe.vue')
  },

  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue')
  },

  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoList.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
