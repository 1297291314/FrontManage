import Vuex from 'vuex'
import api from '@/api/index'

export default new Vuex.Store({
	state: {
		IP:{},
		userRoutes:[],
		//
		isManager: false,
		testArray: {},
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
	modules: {}
})
