import axios from '@/axios'

const callClient = (param) => axios.post(`call-client`, param)

const getClientList = (param) => axios.post(`getClientList`, param)
const getDataSourceInfo = (param) => axios.post(`getDataSourceInfo`, param)
const getJVMInfo = (param) => axios.post(`getJVMInfo`, param)
const serviceShutdown = (param) => axios.post(`serviceShutdown`, param)

const restart = (param) => axios.post(`restart`, param)
const serviceRemove = (param) => axios.post(`serviceRemove`, param)
// 代理请求
const proxyReq = (param) => axios.post(`proxyReq`, param)

//webSocket
const wsSessionList = (param) => axios.post(`wsSessionList`, param)
export default {
	callClient, // 访问未注册客户端

	//  监控客户端
	getClientList, // 获取客户端服务列表
	getDataSourceInfo, //数据库连接池信息
	getJVMInfo, //查询jvm信息
	serviceShutdown, //关闭服务
	restart, // 重启服务
	serviceRemove, // 移除服务
	proxyReq, // 代理请求
	wsSessionList // 查询当前webSocket连接id
}
