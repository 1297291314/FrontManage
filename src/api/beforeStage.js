import axios from '@/axios'

const timedTaskLog = (param) =>
	axios.get(`/timedTaskLog/list?tradingDay=${param.tradingDay}`, param)

export default {
	timedTaskLog // 定时任务
}
