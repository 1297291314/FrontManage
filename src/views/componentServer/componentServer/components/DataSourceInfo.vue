<script setup>
import { ref, inject,onMounted,defineProps} from 'vue'
import api from '@/api/componentServer'

const $utils = inject('$utils')
// const IP = $utils.storageSession.get('IP')
const props = defineProps({
	IP: {
		type: Object,
		required: true
	}
})
const tableList = ref([
	{
		// url: 'dkfjkjkjfjff',
		// username: 'hujjj',
		// database: null,
		// poolName: '连接池1',

		// active: 2,
		// idle: 1,
		// total: 3,
		// awaiting: 1,

		// connectionTimeoutMs: 3000,
		// validationTimeoutMs: 3000,
		// idleTimeoutMs: 5000,
		// maxLifetimeMs: 4000,
		// minIdle: 4,
		// maxPoolSize: 10
	}
])
const dataFetch = () => {
	tableList.value = []
	api.getDataSourceInfo({ ...props.IP }).then((res) => {
		tableList.value = [...res]
	}).finally(() => {
					if (tableList.value.length === 0) {
                   		tableList.value = []
					}
                })
}
onMounted(() => {
	// console.log(props.IP)
	dataFetch()
})
</script>

<template>
	<div>
		<!-- <a-descriptions> -->
			<div>
				<a-card v-show="tableList.length>0" :bordered="false">
						<template v-for="(item, index) in tableList" :key="item.url">
							<a-descriptions class="description" :title="`连接池${index + 1}`">
								<a-descriptions-item label="连接池URL"
									><span>{{ item.url }}</span></a-descriptions-item
								>
								<a-descriptions-item label="用户名"
									><span>{{ item.username }}</span></a-descriptions-item
								>
								<a-descriptions-item label="数据库"
									><span>{{ item.database }}</span></a-descriptions-item
								>
								<a-descriptions-item label="连接池名称"
									><span>{{ item.poolName }}</span></a-descriptions-item
								>
								<!-- <br/> -->
								<a-descriptions-item label="当前活跃的连接数"
									><span>{{ item.active }}</span></a-descriptions-item
								>
								<a-descriptions-item label="当前休眠的连接数"
									><span>{{ item.idle }}</span></a-descriptions-item
								>
								<a-descriptions-item label="当前总连接数"
									><span>{{ item.total }}</span></a-descriptions-item
								>
								<a-descriptions-item label="正在等待连接的线程数"
									><span>{{ item.awaiting }}</span></a-descriptions-item
								>
								<!-- <br/> -->
								<a-descriptions-item label="客户端等待连接的最长时间（ms）"
									><span>{{ item.connectionTimeoutMs }}</span></a-descriptions-item
								>
								<a-descriptions-item label="连接等待被验证为活动的最长时间（ms）"
									><span>{{ item.validationTimeoutMs }}</span></a-descriptions-item
								>
								<a-descriptions-item label="连接池中的最大空闲时间（0则为无穷大）"
									><span>{{ item.idleTimeoutMs }}</span></a-descriptions-item
								>
								<a-descriptions-item label="连接在池中的最大存活时间（ms）"
									><span>{{ item.maxLifetimeMs }}</span></a-descriptions-item
								>
								<a-descriptions-item label="空闲连接的最小数量"
									><span>{{ item.minIdle }}</span></a-descriptions-item
								>
								<a-descriptions-item label="最大连接数"
									><span>{{ item.maxPoolSize }}</span></a-descriptions-item
								>
							</a-descriptions>
							<a-divider v-show="index !== tableList.length - 1" style="margin-bottom: 32px" />
						</template>
				</a-card>
				<span v-show="!tableList.length">暂无数据</span>
			</div>
		<!-- </a-descriptions> -->
	</div>
</template>

<style lang="scss" scoped>
.description {
	span {
		color: #1890ff;
	}
}
::v-deep .ant-descriptions-item-container .ant-descriptions-item-label,
::v-deep .ant-descriptions-item-container .ant-descriptions-item-content{
	max-width: 50%;
}
</style>
