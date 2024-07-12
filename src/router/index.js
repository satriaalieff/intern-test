import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/level1',
      name: 'level1',
      component: () => import('../views/Level1Page.vue')
    },
    {
      path: '/level2',
      name: 'level2',
      component: () => import('../views/Level2Page.vue')
    },
    {
      path: '/level3',
      name: 'level3',
      component: () => import('../views/Level3Page.vue')
    },
    {
      path: '/level4',
      name: 'level4',
      component: () => import('../views/Level4Page.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/ResultPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
