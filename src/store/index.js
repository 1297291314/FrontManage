import Vuex from 'vuex'
import api from '@/api/index'

export default new Vuex.Store({
	state: {
		IP:{},

		//
		isManager: false,
		testArray: {},
	},
	getters: {
		IP: (state) => {
			return state.IP
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
