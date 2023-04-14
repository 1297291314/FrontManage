import axios from '@/axios'

const getClientList = (param) => axios.post(`getClientList`, param)

export default {
	getClientList // 获取客户端服务列表
}
