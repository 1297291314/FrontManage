import axios from '@/axios'

const timedTaskLog = (param) =>
	axios.get(`/timedTaskLog/list?tradingDay=${param.tradingDay}`, param)

const beforeStageStatus = (param) =>
	axios.get(
		`/status/list?tradingDay=${param.tradingDay}&platformType=${param.platformType}`,
		param
	)
const checkLog = (param) => axios.get(`/log/checkII?platformType=${param.checkPlatformType}`, param)

const proxyReq = (param) => axios.get(`/proxyReq?urlID=${param.urlID}`, param)

export default {
	timedTaskLog, // 定时任务
	beforeStageStatus, // 盘前上场 各个平台推送阶段
	checkLog, // check日志
	proxyReq
}
