import axios from '@/axios'

const base1 = '/publish'

const findAllService = (param) => axios.post(`${base1}/findAllService`, param)
const getServiceTable = (param) => axios.post(`${base1}/getServiceTable`, param)
const killService = (param) =>
	axios.post(`${base1}/killService?ip=${param.ip}&port=${param.port}`, param)
const publishStandby = (param) => axios.post(`${base1}/publishStandby?port=${param.port}`, param)
const readAllProperties = (param) => axios.post(`${base1}/readAllProperties`, param)
const startService = (param) =>
	axios.post(`${base1}/startService?ip=${param.ip}&port=${param.port}`, param)
const updateProperties = (param) => axios.post(`${base1}/updateProperties`, param)

export default {
	findAllService, // 访问可能的服务
	getServiceTable, // 获取服务和服务器列表
	killService, //强制终止服务
	publishStandby, // 发布指定服务到备机
	readAllProperties, // 读取配置信息
	startService, // 强制启动服务
	updateProperties // 写入配置信息
}
