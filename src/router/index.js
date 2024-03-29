import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import Error from '@/views/error/index.vue'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
// import Entry from '@/views/entry/index.vue'
import store from '@/store'
// import storageSession from '@/utils/sessionStorage'

const userRoutes = [
	{
		path: '/layout',
		name: 'layout',
		component: Layout,
		meta: {
			title: 'index'
		},
		children: [
			{
				path: '/workbench',
				meta: {
					title: '首页'
				},
				component: () => import('@/views/workbench/workbench/index.vue')
			},
			{
				path: '/beforeStage',
				meta: {
					title: '盘前上场'
				},
				component: () => import('@/views/beforeStage/beforeStage/index.vue')
			},
			{
				path: '/onStage',
				meta: {
					title: '盘中上场'
				},
				component: () => import('@/views/onStage/onStage/index.vue')
			},
			// {
			// 	path: '/businessWeekly',
			// 	meta: {
			// 		title: '业务周报'
			// 	},
			// 	component: () => import('@/views/businessWeekly/businessWeekly/index.vue')
			// },
			{
				path: '/masterAndStandby',
				meta: {
					title: '主备机组件'
				},
				component: () => import('@/views/masterAndStandby/masterAndStandby/index.vue')
			},
			{
				path: '/componentServer',
				meta: {
					title: '组件'
				},
				component: () => import('@/views/componentServer/componentServer/index.vue')
			}
		]
	}
]

store.commit('setUserRoutes', { userRoutes })
const routes = [
	{
		path: '',
		redirect: '/workbench'
	},
	{
		path: '/error',
		name: 'error',
		component: Error
	},

	// {
	// 	path: '/entry',
	// 	name: 'entry',
	// 	component: Entry
	// },
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	...userRoutes
]
const hasRoute = (route, path) => {
	const first = route.filter((item) => path.startsWith(item.path))
	if (first.length) {
		if (first[0].children && first[0].children.length > 1) {
			return hasRoute(first[0].children, path.replace(first[0].path + '/', ''))
		}
		return true
	}
	return false
}

const router = createRouter({
	history: createWebHashHistory(), // hash 模式
	// history: createWebHistory(),
	routes,
	scrollBehavior() {
		return {
			selector: { x: 0, y: 0 },
			behavior: 'smooth'
		}
	}
})
// router.beforeEach((to, from, next) => {
// 	NProgress.start()
// 	// 白名单，不需要登陆的路由数组
// 	if (to.path === '/entry') {
// 		next()
// 	} else if (storageSession.get('IP').id) {
// 		if (hasRoute(routes, to.path)) {
// 			// 有权限
// 			next()
// 		} else {
// 			// 没权限
// 			next({ path: '/entry' })
// 		}
// 	} else {
// 		next({ path: '/entry' })
// 	}
// })
// router.afterEach(() => {
// 	NProgress.done()
// })
export default router
