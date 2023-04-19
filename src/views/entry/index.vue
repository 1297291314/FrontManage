<script setup>
import { ref, reactive, onBeforeMount, inject, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/index'
import {
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined
} from '@ant-design/icons-vue'

// import { mapGetters, mapMutations } from 'vuex'
// const {appContext}  = getCurrentInstance()
const $utils = inject('$utils')
const router = useRouter()
const route = useRoute()

const state = reactive({ tableList: [] })
defineComponent({
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined
})
const dataFetch = () => {
	api.getClientList().then((res) => {
		state.tableList = res
	})
}
const serverDetail = (scoped) => {
	// this.setIP({ IP: scoped })
	// console.log(appContext.config.globalProperties)
	// appContext.config.globalProperties.$uilt.storageSession.set('IP', scoped)

	$utils.storageSession.set('IP', scoped)
	router.push({ path: '/test' })
}

onBeforeMount(() => {
	dataFetch()
})

// export default {
// 	name: 'entry', // 首页list
// 	components: {},
// 	data() {
// 		return {
// 			tableList: ref([])
// 		}
// 	},
// 	computed: {
// 		// ...mapGetters(['IP'])
// 	},
// 	methods: {
// 		// ...mapMutations(['setIP']),
// 		dataFetch() {
// 			api.getClientList().then((res) => {
// 				this.tableList = [...res]
// 			})
// 		},
// 		serverDetail(scoped) {
// 			// this.setIP({ IP: scoped })
// 			console.log(getCurrentInstance())
// 			// proxy.$utils.storageSession.set('IP', scoped)
// 			this.$router.push({ path: '/test' })
// 		}
// 	},
// 	mounted() {
// 		this.dataFetch()
// 	},
// 	setup(props, context) {
// 		console.log(getCurrentInstance())
// 	}
// }
</script>

<template>
	<div class="entry-container">
		<a-list size="small" bordered :data-source="state.tableList">
			<template #renderItem="{ item }">
				<a-list-item @click="serverDetail(item)" class="server-list">
					{{ item.name + '--' + item.id }}
					<a-tag v-if="item.status === 1" color="success">
						<template #icon> <check-circle-outlined /> </template>已连接
					</a-tag>
					<a-tag v-if="item.status === 2" color="warn">
						<template #icon>  <exclamation-circle-outlined /> </template>连接中
					</a-tag>
					<a-tag v-if="item.status === 3" color="error">
						<template #icon> <close-circle-outlined /> </template>已失连
					</a-tag>
				</a-list-item>
			</template>
			<template #header>
				<div>Server</div>
			</template>
			<!-- <template #footer>
					<div>Footer</div>
				</template> -->
		</a-list>
	</div>
</template>

<style lang="scss" scoped>
.entry-container {
	max-width: 800px;
	margin: 0 auto;

	.server-list {
		cursor: pointer;
	}
}
</style>
