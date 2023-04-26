<script setup>
import { ref, reactive, onBeforeMount, inject, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/index'
import {message} from 'ant-design-vue'
import {
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined,
	RedoOutlined,
	SendOutlined
} from '@ant-design/icons-vue'

// import { mapGetters, mapMutations } from 'vuex'
// const {appContext}  = getCurrentInstance()
const $utils = inject('$utils')
const router = useRouter()
const route = useRoute()

const tableList = ref([])
defineComponent({
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined,
	RedoOutlined,
	SendOutlined
})
const dataFetch = () => {
	api.getClientList().then((res) => {
		tableList.value = [...res]
	})
}
const serverDetail = (scoped) => {
	// this.setIP({ IP: scoped })
	// console.log(appContext.config.globalProperties)
	// appContext.config.globalProperties.$uilt.storageSession.set('IP', scoped)

	if (scoped.status !== 1) {
		message.error('服务失连，请重启后显示已连接再使用')
		return
	}
	$utils.storageSession.set('IP', scoped)
	// router.push({ path: '/log/logFile' })
	router.push({ path: '/onStage/fontOnStage' })
}
const restartServer = (scoped) => {
	api.restart({...scoped})
		.then((res) => {
			message.success(res + '，请稍等片刻')
			dataFetch()
			setTimeout(() => {
				dataFetch()
			}, 10000)
		})
}
const closeServer = (scoped) => {
	api.serviceShutdown({...scoped})
		.then((res) => {
			message.success('已通知关闭该服务')
			dataFetch()
			setTimeout(() => {
				dataFetch()
			}, 10000)
		})
}
const callClient = () => {
	api.callClient()
		.then(res => {
			message.success('访问成功')
		})
}
const test = () => {
	api.afternoon()
		.then(res => {
			console.log(res)
		})
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
		<button @click="test">测试</button>
		<a-list size="small" bordered :data-source="tableList">
			<template #renderItem="{ item }">
				<a-list-item :key="item.id" class="server-list">
					<div style="display:inline-block;max-width: 70%;cursor:pointer;"  @click="serverDetail(item)">
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
					</div>
					<div class="server-button-con">
						<a-button size="small" @click="closeServer(item)" shape="round" class="close-button" type="link">
							<template #icon><close-circle-outlined /></template>
							关闭
						</a-button>
						<span class="force-divider--vertical" />
						<a-button size="small" @click="restartServer(item)" shape="round"  type="link">
							<template #icon><redo-outlined /></template>
							重启
						</a-button>
					</div>
				</a-list-item>
			</template>
			<template #header>
				<div style="position: relative;">Server
					<a-tooltip>
    					<template #title>访问未注册客户端</template>
						<a-button size="small" @click="callClient" shape="round" class="restart-button" type="link">
							<template #icon><send-outlined /></template>
							访问
						</a-button>
				  </a-tooltip>
				</div>
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
		position: relative;
		color: #1890ff;

		.server-button-con{
			position: absolute;
			top: 50%;
			right :20px;
			transform: translateY(-50%);
		}
	}
	.restart-button{
		position: absolute;
		top: 50%;
		right :5px;
		transform: translateY(-50%);

	}

}
</style>
