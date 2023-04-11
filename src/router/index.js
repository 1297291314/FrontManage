import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Error from '@/views/error/index.vue'
import Login from '@/views/login/index.vue'
const Test = import('@/views/test/index.vue')
const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
        path: '/test',
        name: 'test',
        component: () => Test // 懒加载
    }
  ]
const router = createRouter({
  //   history: createWebHashHistory(), // hash 模式
  history:createWebHistory(),
  routes,
  scrollBehavior () {
    return {
        selector: { x: 0, y: 0 },
        behavior: 'smooth'
    }
}
})

export default router