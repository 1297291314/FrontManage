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
		<div class="goback">
    <div class="box">
        <div class="top" @click="goTop">{{topName}}</div>
        <div class="midlle"></div>
        <div class="bottom" @click="goBottom">{{bottomName}}</div>
    </div>
  </div>
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

.goback{
    position: fixed;
    bottom: 200px;
    right: 100px;
    .box{
        width: 60px;
        height: 120px;
        box-shadow: 0 0 15px rgba(0, 0, 0, .1);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;
        > div{
            font-size: 16px;
            width: 100%;
        }
        .top,.bottom{
            cursor: pointer;
            width: 100%;
            height: 49%;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }
        .midlle{
            height: 2%;
            background-color: rgb(243, 237, 237);
        }
    }
}

	}

</style>
