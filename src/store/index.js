import Vuex from 'vuex'
import api from '@/api/index'

export default new Vuex.Store({
	state: {
		isManager: false,
		testArray: {}
	},
	getters: {
		isManager: (state) => {
			return state.isManager
		},
		testArray: (state) => {
			return state.testArray
		}
	},
	mutations: {
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
