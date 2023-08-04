import axios from 'axios'
import server from '@/server' // 配置环境
// import router from '@/router'
// import storage from '@/utils/storage'
import { notification } from 'ant-design-vue'
const instance = axios.create({
	// 创建实例
	baseURL: server.api,
	timeout: 30000
	// headers: {'X-Custom-Header': 'foobar'}
})
//  拦截器用于拦截请求
// instance.interceptors.request.use(req => {
//     const token = storage.get('access')
//     if (token && req.url !== 'trade/login') {
//         const headers = {
//             token: `${token}`
//         }
//         Object.assign(req.headers, headers)
//     }
//     return req
// }, error => {
//     return Promise.reject(error)
// })
instance.interceptors.response.use(
	(res) => {
		// console.log(res)
		const { code, data, msg } = res.data
		// console.log('qq', res, res.config.url.includes('investorSecurityForbidden/insertList'))

		if (code === 0) {
			return data
		} else {
			if (
				res.config.url.includes(
					'shareholdersecurityrightController/csvInputShareholdersecurityright'
				)
			) {
				return Promise.resolve(res.data)
			}
			notification.error({
				message: msg,
				duration: 4.5
			})
			return Promise.reject(msg)
		}
	},
	(error) => {
		const msg = error.message
		msg.match(/.+code\s(\d{3})$/g)
		if (msg === 'Network Error') {
			notification.error({
				message: '无法连接到网络',
				description: msg,
				duration: 4.5
			})
		} else {
			notification.error({
				message: '接口出错啦',
				description: error.toString(),
				duration: 4.5
			})
		}
		return Promise.reject(error)
	}
)
export default instance
