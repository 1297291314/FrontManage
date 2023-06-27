import axios from '@/axios'

const calendarList = (param) => axios.get(`/calendar/list?flag=${param.flag}`, param)

export default {
	calendarList
}
