import axios from '@/axios'

const callClient = (param) => axios.post(`call-client`, param)

const getClientList = (param) => axios.post(`getClientList`, param)
const getDataSourceInfo = (param) => axios.post(`getDataSourceInfo`, param)
const getJVMInfo = (param) => axios.post(`getJVMInfo`, param)
const serviceShutdown = (param) => axios.post(`serviceShutdown`, param)

const restart = (param) => axios.post(`restart`, param)

// 测试10.189.66.90:8201
const calc = (param) => axios.post(`calc`, param)
const afternoon = (param) => axios.post(`afternoon`, param)
export default {
	callClient, // 访问未注册客户端

	//  监控客户端
	getClientList, // 获取客户端服务列表
	getDataSourceInfo, //数据库连接池信息
	getJVMInfo, //查询jvm信息
	serviceShutdown, //关闭服务
	restart, // 重启服务

	// 测试其他端口用的
	calc,
	afternoon
}
