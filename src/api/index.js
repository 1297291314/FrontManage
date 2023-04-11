import axios from '@/axios'

const getClientList = () => axios.post(`getClientList`)


export default {
    getClientList // 获取客户端服务列表
}
