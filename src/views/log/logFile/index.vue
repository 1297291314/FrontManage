<script setup>
import {ref, reactive,inject,onMounted,onUnmounted } from 'vue'

const $utils = inject('$utils')
const logSocket = ref(null)

const logStr = ref('')

onMounted(() => { 
	console.log('on')
	logSocket.value = new $utils.Socket({
		url: 'ws://10.189.66.90:8001/logWS',
		message: '/home/tradeBusiness/trade-business/iobatch.log'
	})
	logSocket.value.onMessage((res) => {
		logStr.value += res.data
		console.log('ddd')
	})
})
onUnmounted(() => {
	logSocket.value.handleClose()
	console.log('un')
	logSocket.value = null

})
</script>

<template>
	<div :style="{'overflow-y':'auto'}">
		<p v-html="logStr"/>
	</div>
</template>

<style lang="scss" scoped>
</style>
