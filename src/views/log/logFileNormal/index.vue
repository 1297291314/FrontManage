<script setup>
import {ref,inject,onMounted,onUnmounted } from 'vue'

const $utils = inject('$utils')
const logSocket = ref(null)

const logStr = ref('')
console.log($utils)

const logMessage = $utils.storageSession.get('IP').logFileOne
onMounted(() => {
	if (logMessage.trim() === '') {
		return
	}
	logStr.value = ''
	logSocket.value = new $utils.Socket({
		url: 'ws://10.189.66.90:8001/logWS',
		message: logMessage
	})
	logSocket.value.onMessage((res) => {
		logStr.value += res.data
	})
})
onUnmounted(() => {
	logSocket.value.handleClose()
	// console.log('un')
	logSocket.value = null

})
</script>

<template>
	<div class="log-container">
		<h3 class="log-header">{{ logMessage }}</h3>
		<div class="log-info" :style="{'overflow-y':'auto'}">
			<p v-html="logStr"/>
		</div>
	</div>

</template>

<style lang="scss" scoped>
	.log-container{
		display:flex;
		flex-direction: column;
		max-height: 100%;
		.log-header{
			flex: 0 0 auto;
		}
		.log-info{
			flex: 1;
			overflow-y:auto;
		}
	}

</style>
