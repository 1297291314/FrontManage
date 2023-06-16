import axios from '@/axios'

const interfaceTime = (param) => axios.get(`/interfaceTime/list`, param)

const base1 = '/HWSecurity'
const getHWSecurityTime = (param) => axios.get(`${base1}/info/${param.day}`, param)
const getHWSecurityList = (param) => axios.get(`${base1}/list`, param)
export default {
	interfaceTime, // 接口超时查询
	getHWSecurityTime,
	getHWSecurityList
}
