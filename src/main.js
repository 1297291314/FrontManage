import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router from './router'
import store from './store'
import utils from './utils'
const app = createApp(App)

// 添加到全局中
// app.config.globalProperties.$uilt = utils
app.provide('$utils', utils)
app.use(Antd).use(router).use(store).mount('#app')
