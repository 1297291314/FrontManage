<script setup>

import {ref,inject,onMounted,onUnmounted,defineProps,watch  } from 'vue'

const props = defineProps({
	IP: {
		type: Object,
		required: true
	}
})
const emits = defineEmits([
	'close'])
const $utils = inject('$utils')
const logSocket = ref(null)
const pageSizeOptions = ref(['100', '200','500','1000'])
const logStr = ref('')
const logArr = ref([])

const logInfo = ref({
	page: 1,
	limit: 100,
	total: 0,
	showLogArr: []
})

const logMessage = props.IP.logFileOne|| ''



const dataShow = () => {
	logInfo.value.showLogArr = [...logArr.value.slice((logInfo.value.page - 1) * logInfo.value.limit, (logInfo.value.page) * logInfo.value.limit)]
}
const pageChange = (page) => {
	logInfo.value.page = page
	dataShow()
}
const pageSizeChange = (current, pageSize) => {
	console.log(pageSize)
	logInfo.value.limit = pageSize
	dataShow()
}
const goBack = () => {
	emits('close','index')
}
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
		logArr.value = logStr.value.split('<br/>')
		logInfo.value.total = logArr.value.length
		dataShow()
	})
})
onUnmounted(() => {
	if (logMessage.trim() === '') {
		return
	}
	logSocket.value.handleClose()
	// console.log('un')
	logSocket.value = null

})
</script>

<template>
	<div class="log-container">
		<h2 class="log-header"  @click="goBack">日志地址：{{ logMessage }}<a-button class="log-back" @click="goBack">返回</a-button></h2>
		<div class="log-info" :key="logInfo.page" :style="{'overflow-y':'auto'}">
			<!-- <p v-html="logStr"/> -->
			<p v-for="(item,index) in logInfo.showLogArr" :key="index">{{ item }}</p>

		</div>
		<div class="log-footer">
			<!-- <a-pagination
			v-model:current="logInfo.page" show-quick-jumper :total="logInfo.total" @change="onChange" /> -->
			<a-pagination
                show-size-changer
                :total="logInfo.total"
                v-model:current="logInfo.page"
                 v-model:page-size="logInfo.limit"
                :page-size-options="pageSizeOptions"

                @change="pageChange"
				@showSizeChange="pageSizeChange"
            >
                <template #buildOptionText="props">
                    <span>{{ props.value }}条/页</span>
                </template>
            </a-pagination>
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
			font-style: bolder;
			overflow: hidden;
			.log-back{
				float: right;
			}
		}
		.log-info{
			flex: 1;
			max-height: calc(100vh - 250px);
			overflow-y:auto;

		}
		.log-footer{
			padding:15px 0;
			flex: 0 0 auto;
		}
	}

</style>
