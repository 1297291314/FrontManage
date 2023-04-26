<script setup>
import { ref, inject , onMounted} from 'vue'
import api from '@/api/index'

const $utils = inject('$utils')
const IP = $utils.storageSession.get('IP')
const tableList = ref([
	{
		"heapused": 594,
		"heapmax": 27305,
		"heapcommit": 1958,
		"heapfree": 1364,
		"nonheapused": 72,
		"nonheapmax": 0,
		"nonheapcommit": 76,
		"nonheapfree": 4,
		"used": 594,
		"max": 27305,
		"commit": 1958,
		"free": 1364,
		"threadsNum": 27
	}
])

const dataFetch = () => {
	api.getJVMInfo({ ...IP }).then((res) => {
		tableList.value = { ...res }
	})
}
onMounted(() => {
	dataFetch()
})
</script>

<template>
	<a-card :bordered="false">
			<a-descriptions class="description" title="堆占用情况（单位MB）">
				<a-descriptions-item label="已使用堆内存"
					><span>{{ tableList.heapused }}</span></a-descriptions-item
				>
				<a-descriptions-item label="可分配的最大堆内存"
					><span>{{ tableList.heapmax }}</span></a-descriptions-item
				>
				<a-descriptions-item label="已申请占用堆内存"
					><span>{{ tableList.heapcommit }}</span></a-descriptions-item
				>
				<a-descriptions-item label="当前可用堆内存"
					><span>{{ tableList.heapfree }}</span></a-descriptions-item
				>
			</a-descriptions>
			<a-divider style="margin-bottom: 12px;margin-top:0;" />
			<a-descriptions class="description" title="非堆占用情况（单位MB）">
				<a-descriptions-item label="已使用非堆内存"
					><span>{{ tableList.nonheapused }}</span></a-descriptions-item
				>
				<a-descriptions-item label="可分配最大非堆内存"
					><span>{{ tableList.nonheapmax }}</span></a-descriptions-item
				>
				<a-descriptions-item label="已申请占用非堆内存"
					><span>{{ tableList.nonheapcommit }}</span></a-descriptions-item
				>
				<a-descriptions-item label="当前可用非堆内存"
					><span>{{ tableList.nonheapfree }}</span></a-descriptions-item
				>
			</a-descriptions>
			<a-divider style="margin-bottom: 12px;margin-top:0;" />
			<a-descriptions class="description" title="已使用总内存（MB）">

				<a-descriptions-item label="已使用总内存"
					><span>{{ tableList.used }}</span></a-descriptions-item
				>
				<a-descriptions-item label="可分配最大总内存"
					><span>{{ tableList.max }}</span></a-descriptions-item
				>
				<a-descriptions-item label="已申请占用总内存"
					><span>{{ tableList.commit }}</span></a-descriptions-item
				>
				<a-descriptions-item label="当前可用总内存"
					><span>{{ tableList.free }}</span></a-descriptions-item
				>
			</a-descriptions>
			<a-divider style="margin-bottom: 12px;margin-top:0;" />
			<a-descriptions class="description" title="当前线程">

				<a-descriptions-item label="当前线程数"
					><span>{{ tableList.threadsNum }}</span></a-descriptions-item
				>
			</a-descriptions>
	</a-card>
</template>

<style lang="scss" scoped>
.description {
	span {
		color: #1890ff;
	}
}
</style>
