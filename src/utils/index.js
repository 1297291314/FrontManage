import _ from 'lodash'
import storage from './storage'
import storageSession from './sessionStorage'
import Enum from './Enum'

/**
 * 截取URL参数
 *
 */
function getUrlKey(name) {
	return (
		decodeURIComponent(
			(new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [
				''
			])[1].replace(/\+/g, '%20')
		) || null
	)
}

/**
 * 生成uuid
 *
 */
function createUuid() {
	var s = []
	var hexDigits = '0123456789abcdef'
	for (var i = 0; i < 32; i++) {
		s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
	}
	s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
	var uuid = s.join('')
	return uuid
}

/**
 * 深度合并
 *
 * @param {*} target*
 * @param {*} source
 */
function deepMerge(target, source) {
	_.mergeWith(target, source, customizer)
}
function customizer(objValue, srcValue) {
	if (_.isPlainObject(srcValue)) {
		return _.mergeWith(objValue, srcValue, customizer)
	}
	return srcValue
}

/**
 * 网页图标
 *
 */
function createWebIcon(url) {
	const link = document.querySelector('link[rel="icon"]')

	if (link) {
		link.href = url
	} else {
		const linkNew = document.createElement('link')
		linkNew.rel = 'icon'
		linkNew.href = url
		document.head.appendChild(linkNew)
	}
}

/**
 * 判断数组是否为空
 *
 * @param {Array} arr
 * @returns
 */
function arrIsEmpty(arr) {
	return !arr || arr.length < 1
}

/**
 * 判断数组是否包含当前值
 *
 * @param {Array} arr
 * @returns
 */
function arrIsContain(arr, value) {
	let flag = false
	for (const str in arr) {
		if (value === arr[str]) {
			flag = true
		}
	}
	return flag
}

/**
 * 数组转换为字符串
 *
 * @param [] array
 * @returns
 */
function getArrayStr(array, key) {
	let value = ''
	for (const i in array) {
		value += (!key ? array[i] : array[i][key]) + ','
	}
	return !value ? value : value.substring(0, value.length - 1)
}

/**
 * 获取数组匹配的值
 *
 * @param [] array, '' equalAttribute, '' id, '' wantAttribute
 * @returns
 */
function getObjArrayEqualsStr(array, equalAttribute, id, wantAttribute, nothing = '无') {
	for (const i in array) {
		if (array[i][equalAttribute] === id) {
			return array[i][wantAttribute]
		}
	}
	return nothing
}

/**
 * 拼接前缀
 *
 * @param '' urlEx, '' url
 * @returns
 */
function concatUrlEx(urlEx, url) {
	return urlEx + url
}

/**
 * 获取当前时间的小时值
 *
 */
function getCurrentHour(str = '') {
	const hour = new Date().getHours()
	const time =
		hour < 3
			? '凌晨'
			: hour < 6
			? '清晨'
			: hour < 9
			? '早上'
			: hour < 12
			? '上午'
			: hour < 15
			? '中午'
			: hour < 18
			? '下午'
			: hour < 21
			? '晚上'
			: '深夜'
	return time + str
}

/**
 * 表单验证相关
 *
 */
function parseIntValue(value) {
	return parseInt(value, 10)
}

function isValidIP(ip) {
	const reg =
		/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
	return reg.test(ip)
}

function isValidPhone(value) {
	return /^1[3456789]\d{9}$/.test(value)
}

function isValidMail(value) {
	return /^([a-zA-Z0-9])+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value)
}

function isValidEnNumber(value) {
	return /^[A-Za-z0-9]+$/.test(value)
}

function isValidPassword(value) {
	return /^(?=.*?[A-Za-z])(?=.*?\d)(?=.*?[~!@#$%^&*()_+`\-={}:";'<>?,./])[a-zA-Z\d~!@#$%^&*()_+`\-={}:";'<>?,./]{5,20}.*$/.test(
		value
	)
}

function toHundredMillionYuan(value) {
	return Math.floor(value / 10000000).toFixed(4)
}

function removeSpace(str) {
	if (!str) {
		return ''
	} else {
		return str.replace(/\s*/g, '')
	}
}
function scientificToNumber(num) {
	const reg = /\d+\.?\d*e[+-]*\d+/i
	if (reg.test(num)) {
		const zero = '0'
		const parts = String(num).toLowerCase().split('e')
		const e = parts[1]
		let zeroLen = Math.abs(e)
		const sign = e / zeroLen
		const beforeArr = parts[0].split('.')
		if (sign < 0) {
			num = zero + '.' + new Array(zeroLen).join(zero) + beforeArr.join('')
		} else {
			const dec = beforeArr[1]
			if (dec) {
				zeroLen = zeroLen - dec.length
				num = beforeArr.join('') + new Array(zeroLen + 1).join(zero)
			}
		}
	}
	return num
}

/**
 * WebSocket 封装
 * 主要功能：
 * 1. 自动重连；
 */
export class Socket {
	// WebSocket 实例
	ws
	// 相关配置项
	options
	// 错误消息队列
	errorStack = []
	// 是否正在重连
	isReconnectLoading = false
	// 定时器超时重连 ID
	timeId = null

	constructor(options) {
		/**
		 * options 支持传入参数
		 * url websocket请求地址
		 * message 主动传的值
		 * node: 'player',
		 * mode: 'audio',
		 * debug: true,
		 * flushingTime: 0,
		 * reconnectDelay: 3000,
		 * onopen,
		 * onmessage,
		 * onerror,
		 * onclose
		 */
		this.options = {
			isErrorReconnect: true,
			...options
		}
		this.init()
	}

	/**
	 * 初始化 WebSocket
	 */
	init() {
		if ('WebSocket' in window) {
			this.ws = new WebSocket(this.options.url)
			this.ws.binaryType = this.options.binaryType
			this.onOpen(this.options.onopen)
			this.onMessage(this.options.onmessage)
			this.onError(this.options.onerror)
			this.onClose(this.options.onclose)
		} else {
			console.error('该浏览器不支持WebSocket!')
		}
	}

	// 获取 WebSocket 实例
	get getWebSocket() {
		return this.ws
	}

	/**
	 * 设置连接成功后的回调函数
	 * @param {*} cb
	 */
	onOpen(cb) {
		this.ws.onopen = () => {
			console.log('websocket >>>> onOpen 连接成功!')
			// 发送成功连接之前所发送失败的消息
			this.errorStack.forEach((message) => {
				this.send(message)
			})
			console.log(this)
			this.ws.send(this.options.message)
			cb && cb()
			this.errorStack = []
			this.isReconnectLoading = false
		}
	}

	/**
	 * 设置接收 WebSocket 消息的回调函数
	 * @param {*} cb
	 */
	onMessage(cb) {
		try {
			this.ws.onmessage = cb
		} catch (e) {
			console.error('error: ', e)
		}
	}

	/**
	 * 设置连接失败后的回调函数
	 * @param {*} cb
	 */
	onError(cb) {
		this.ws.onerror = (err) => {
			console.error(err, 'websocket >>>> onError 连接异常!')
			cb && cb(err)
			if (!this.options.isErrorReconnect) return
			this.onReconnection()
			this.isReconnectLoading = false
		}
	}

	/**
	 * 设置连接关闭后的回调函数
	 * @param {*} cb
	 */
	onClose(cb) {
		this.ws.onclose = () => {
			console.log('websocket >>>> onClose 关闭连接!')
			// 用户手动关闭的不重连
			if (this.isCustomClose) return
			cb && cb()
			this.onReconnection()
			this.isReconnectionLoading = false
		}
	}

	/**
	 * 请求连接异常重连
	 * @returns
	 */
	onReconnection() {
		// 重连请求延时
		const delay = this.options.reconnectDelay || 3000
		// 防止重复请求
		if (this.isReconnectionLoading) {
			console.log('websocket >>>> onReconnection 请勿重复请求连接!')
			return
		}
		console.log('websocket >>>> onReconnection 正在重连!')
		this.isReconnectionLoading = true
		clearTimeout(this.timeId)
		this.timeId = setTimeout(() => {
			this.init()
		}, delay)
	}

	/**
	 * 手动发送请求
	 * @param {*} message
	 * @returns
	 */
	handleSend(message) {
		// 连接失败时的处理
		if (this.ws.readyState !== WebSocket.OPEN) {
			console.error('websocket >>>> handleSend 请求发送失败!')
			this.errorStack.push(message)
			return
		}
		this.ws.send(message)
	}

	/**
	 * 手动关闭连接
	 */
	handleClose() {
		this.isCustomClose = true
		this.ws.close()
	}

	/**
	 * 手动开启连接
	 */
	handleStart() {
		this.isCustomClose = false
		this.onReconnection()
	}

	/**
	 * 手动销毁连接实例
	 */
	handleDestroy() {
		this.handleClose()
		this.ws = null
		this.errorStack = null
		console.log('websocket >>>> handleDestroy 实例已销毁!')
	}
}

export default {
	Enum,
	storage,
	storageSession,
	getUrlKey,
	createUuid,
	deepMerge,
	createWebIcon,
	getArrayStr,
	concatUrlEx,
	getCurrentHour,
	parseIntValue,
	getObjArrayEqualsStr,
	arrIsEmpty,
	arrIsContain,
	isValidMail,
	isValidIP,
	isValidPhone,
	isValidEnNumber,
	isValidPassword,
	toHundredMillionYuan,
	removeSpace,
	scientificToNumber,
	Socket
}
