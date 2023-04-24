<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	data () {
		return {
			socket: ''
		}
	},
	mounted () {
		// 初始化webscoket
		// this.init()
	},
	methods: {
		// init: function () {
		// 	if (typeof WebSocket === 'undefined') {
		// 		alert('您的浏览器不支持socket')
		// 	} else {
		// 		// 实例化socket
		// 		this.socket = new WebSocket('ws://10.189.66.90:8001/logWS') //ws://xxxxx
		// 		// 监听socket连接
		// 		this.socket.onopen = this.open
		// 		// 监听socket错误信息
		// 		this.socket.onerror = this.error
		// 		// 监听socket消息
		// 		this.socket.onmessage = this.getMessage
		// 		//发送消息
		// 	}
		// },
		// open: function () {
		// 	console.log('socket连接成功')
		// 	this.send('/home/tradeBusiness/trade-business/iobatch.log')
		// },
		// error: function () {
		// 	console.log('socket连接错误')
		// },
		// getMessage: function (msg) {
		// 	if (msg.data) {
		// 		console.log(msg.data)
		// 	}
		// },
		// send: function (params) {
		// 	this.socket.send(params)
		// },
		// close: function () {
		// 	console.log('socket已经关闭')
		// }
	},
	destroyed () {
		// 销毁监听
		// this.socket.onclose = this.close
	}
}
</script>

<style lang="scss">
@import '~@/assets/css/index.scss';
#app {
	width: 100%;
	position: relative;
}
</style>
