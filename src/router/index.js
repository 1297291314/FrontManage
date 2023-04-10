import { createRouter, createWebHashHistory } from 'vue-router'
import Error from '../views/error/index.vue'
import Login from '../views/login/index.vue'
import Test from '../views/test/index.vue'

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes: [
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
        component: Test
    }
  ]
})

export default router