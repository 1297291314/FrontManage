<script setup>
import {ref, reactive,inject,onBeforeMount,onDeactivated } from 'vue'

const $utils = inject('$utils')
let logSocket = null

const logStr = ref('')

onBeforeMount(() => {
	logSocket = new $utils.Socket({
		url: 'ws://10.189.66.90:8001/logWS',
		message: '/home/tradeBusiness/trade-business/iobatch.log'
	})
	logSocket.onMessage((res) => {
		logStr.value += res.data
	})
})
onDeactivated(() => {
	logSocket.handleClose()
})
</script>

<template>
	<div :style="{'overflow-y':'auto', 'max-height':'400px'}">
		<p v-html="logStr"/>
	</div>
</template>

<style lang="scss" scoped>
</style>
