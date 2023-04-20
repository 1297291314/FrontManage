import Vuex from 'vuex'
import api from '@/api/index'
import VueXAlong from 'vuex-along'

export default new Vuex.Store({
	state: {
		IP: {},
		userRoutes: [],
		//
		isManager: false,
		testArray: {}
	},
	getters: {
		IP: (state) => {
			return state.IP
		},
		userRoutes: (state) => {
			return state.userRoutes
		},
		isManager: (state) => {
			return state.isManager
		},

		testArray: (state) => {
			return state.testArray
		}
	},
	mutations: {
		setIP: (state, payload) => {
			state.IP = payload.IP
		},
		setUserRoutes: (state, payload) => {
			state.userRoutes = payload.userRoutes
		},
		setIsManager: (state, payload) => {
			state.isManager = payload.isManager
		},
		setTestArray: (state, payload) => {
			state.testArray = { ...payload.testArray }
		}
	},
	actions: {
		getClientListAction: ({ commit }, userId) => {
			api.getClientList(userId).then((res) => {
				commit('setTestArray', { testArray: res[0] })
			})
		}
	},
	modules: {},
	plugins: [
		VueXAlong({
			name: 'along', //存放在localStroage或者sessionStroage 中的名字
			local: false, //是否存放在local中  false 不存放 如果存放按照下面session的配置配
			session: { list: [], isFilter: true }
			//如果值不为false 那么可以传递对象 其中 当isFilter设置为true时， list 数组中的值就会被过滤调,这些值不会存放在seesion或者local中
		})
	]
})
