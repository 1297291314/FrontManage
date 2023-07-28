<script setup>
import {ref,inject,onMounted,onUnmounted } from 'vue'

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

const logMessage = $utils.storageSession.get('IP').logFileOne

const dataShow = () => {
	const dateExp = /(\d{4}-\d{2}-\d{2}.*\d{2}:\d{2}: \d{2})/
	const infoExp = /(INFO)/i
	const errorExp = /(ERROR)/i
	const warnExp = /(WARN)/i
	const fatalExp = /(FATAL)/i
	const showLogArrDeal = [...logArr.value.slice((logInfo.value.page - 1) * logInfo.value.limit, (logInfo.value.page) * logInfo.value.limit)]
	let showLogArr = []
	showLogArrDeal.map((item) => {
		// showLogArr.push(item.replace(dateExp,infoExp,errorExp,warnExp,fatalExp,'<span style="color:#b7eb8f">$1</span>','<span style="color:#91caff">$2</span>','<span style="color:#ffe58f">$1</span>','<span style="color:red">$4</span>','<span style="color:red">$5</span>'))
		// showLogArr.push(item.replace(dateExp,'<span style="color:#b7eb8f">$1</span>'))
	})
	logInfo.value.showLogArr = showLogArr
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
	logSocket.value.handleClose()
	// console.log('un')
	logSocket.value = null

})
</script>

<template>
	<div class="log-container">
		<h3 class="log-header">日志地址：{{ logMessage }}</h3>
		<div class="log-info" :style="{'overflow-y':'auto'}">
			<!-- <p v-html="logStr"/> -->
			<p v-for="item in logInfo.showLogArr" :key="item" v-html="item"></p>

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
