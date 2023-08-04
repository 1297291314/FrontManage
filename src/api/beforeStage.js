import axios from '@/axios'

const timedTaskLog = (param) =>
	axios.get(
		`/timedTaskLog/list?tradingDay=${param.tradingDay}`,
		{
			timeout: 3600000
		},
		param
	)
const timedTaskLogTitleList = (param) =>
	axios.get(
		`/timedTaskLog/taskLogList`,
		{
			timeout: 3600000
		},
		param
	)

const beforeStageStatus = (param) =>
	axios.get(
		`/status/list?tradingDay=${param.tradingDay}&platformType=${param.platformType}`,
		{
			timeout: 3600000
		},
		param
	)
const checkLog = (param) =>
	axios.get(
		`/log/checkII?platformType=${param.checkPlatformType}`,
		{
			timeout: 3600000
		},
		param
	)

const proxyReq = (param) =>
	axios.get(
		`/proxyReq?urlID=${param.urlID}`,
		{
			timeout: 3600000
		},
		param
	)
const getTradingDay = (param) => axios.post(`tradingDay/getTradingDay`, param)
export default {
	timedTaskLog, // 定时任务
	timedTaskLogTitleList, // 定时任务列表
	beforeStageStatus, // 盘前上场 各个平台推送阶段
	checkLog, // check日志
	proxyReq,
	getTradingDay // 获取交易日
}
