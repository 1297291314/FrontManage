<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import api from '@/api/masterAndStandby'
import { message } from 'ant-design-vue'
import {
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined,
	RedoOutlined,
	SendOutlined,
	ShareAltOutlined,
	SnippetsOutlined,
	EditOutlined,
	FileTextOutlined

} from '@ant-design/icons-vue'
// 组件
defineComponent({
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
	MinusCircleOutlined,
	RedoOutlined,
	SendOutlined,
	ShareAltOutlined,
	SnippetsOutlined,
	EditOutlined,
	FileTextOutlined
})
//  数据
const showElement = ref('index')
const serverList = ref([])
const configration = ref(null)
const editFlag = ref(false)
// 方法
const dataFetch = () => {
	// api.findAllService()
	// 	.then(res => {
	// 		console.log(res)
	// 	})
	api.getServiceTable()
		.then(res => {
			if (typeof res === 'object') {
				for (let key in res) {
					// const detailArr = []
					// res[key].map(item => {
					// 	detailArr.push({
					// 		...item,
					// 		isMaster:item.status ===1
					// 	})
					// })
					// const
					// res[key].map(item => {

					// })
					if (res[key][0].isMaster === 1) {
						serverList.value.unshift({
							title: key,
							isMaster: 1,
							detail: [...res[key]] //[...detailArr]
						})
					} else {
						serverList.value.push({
							title: key,
							isMaster: 0,
							detail:  [...res[key]]//[...detailArr]
						})
					}
				}
			}
		})
}
const accessServer = () => {
	api.findAllService()
		.then(res => {
			message.success(res)
			setTimeout(() => {
				dataFetch()
			},100000)
		})
}
const openAndCloseServer = (item) => {
	console.log(item)
	if (item.status === 1) {
		api.killService(item)
			.then(res => {
				message.success(res)
				setTimeout(() => {
					dataFetch()
				},100000)
			})
	} else {
		api.startService(item)
			.then(res => {
				message.success(res)
				setTimeout(() => {
					dataFetch()
				},100000)
			})
	}
}
const configurationInformation = () => {
	showElement.value = 'configration'
	api.readAllProperties()
		.then(res => {
			configration.value = { ...res }
		})
}
const configrationChange = (key) => {
	console.log({
		"key": key,
		"value": configration.value[key]
	})
	api.updateProperties({
		"key": key,
		"value": configration.value[key]
	})
		.then(res => {
			message.success('修改成功')
		})
}
const goBack = () => {
	showElement.value = 'index'
}
const editClick = () => {
	editFlag.value = !editFlag.value
	if (!editFlag.value) {
		configurationInformation()
	}
}
// 周期
onBeforeMount(() => {
	dataFetch()
})

</script>

<template>
	<div class="view-container">
		<div v-if="showElement === 'index'">
			<h2 class="view-header">
				<div class="restart-button">
				<a-tooltip>
					<template #title>访问所有可能的服务</template>
					<a-button
						size="default"
						@click="accessServer"
						type="primary"
					>
						<template #icon><send-outlined /></template>
						访问
					</a-button>
				</a-tooltip>
				<a-button
						size="default"
						@click="configurationInformation"
						type="primary"
					>
						<template #icon><snippets-outlined /></template>
						配置信息
					</a-button>
				</div>
			</h2>
			<a-list :grid="{ gutter: 16, column: serverList.length }" :data-source="serverList">
				<template #renderItem="{ item }">
				<a-list-item>
					<a-list bordered :data-source="item.detail">
						<template #header>
							<div style="position: relative">
								{{ `${item.title}(${item.isMaster===1?'主机':'备机'})` }}
							</div>
						</template>
						<template #renderItem="{ item }">
							<a-list-item :key="item.name" class="server-list">
								<div style="display: inline-block; max-width: 70%; cursor: pointer">
									{{ item.name}}
									<a-tag v-if="item.status === 1" color="success">
										<template #icon> <check-circle-outlined /> </template>已连接
									</a-tag>
									<a-tag v-if="item.status !== 1" color="error">
										<template #icon> <close-circle-outlined /> </template>已失连
									</a-tag>
								</div>
								<div class="server-button-con">
									<a-button
										size="small"
										@click="openAndCloseServer(item)"
										class="close-button"
										type="link"
									>
										<template #icon><close-circle-outlined v-show="item.status===1"/>
										<check-circle-outlined v-show="item.status!==1"/></template>
										{{item.status===1?'关闭':'开启'}}
									</a-button>
									<span v-if="item.isMaster===1" class="force-divider--vertical" />
									<a-button
										v-if="item.isMaster===1"
										size="small"
										@click="sendStandby(item)"
										class="close-button"
										type="link"
									>
										<template #icon><share-alt-outlined /></template>
										发至备机
									</a-button>
								</div>
							</a-list-item>
						</template>
					</a-list>
				</a-list-item>
				</template>
			</a-list>
		</div>
		<div v-if="showElement === 'configration'">
			<a-descriptions bordered>
				<template #title>
					<h3 class="config-header">配置信息<div class="config-back">
						<a-button type="primary" @click="editClick" v-show="!editFlag"><template #icon><edit-outlined/></template>编辑配置</a-button>
						<a-button type="primary" @click="editClick" v-show="editFlag"><template #icon><file-text-outlined /></template>查看模式</a-button>
						<a-button @click="goBack">返回</a-button></div></h3>
				</template>
    			<a-descriptions-item v-for="(item,index) in configration" :key="index" :label="index">

					<div >
						<p v-show="!editFlag">{{ item }}</p>
						<div v-show="editFlag">
							<a-textarea
								v-model:value="configration[index]"
								auto-size
								style="width: 75%"
							/>
							<a-button
								size="small"
								@click="configrationChange(index)"
								type="link"
							>
								<!-- <template #icon><send-outlined /></template> -->
								提交
							</a-button>
						</div>
					</div>
				</a-descriptions-item>
			</a-descriptions>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.view-header{
		padding: 12px 0 36px 0;
		position: relative;
	}
	.config-header{
			flex: 0 0 auto;
			font-style: bolder;
			overflow: hidden;
			.config-back{
				float: right;
			}
		}
	.server-list {
		position: relative;
		color: #1890ff;

		.server-button-con {
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%);
		}
	}
	.restart-button {
		position: absolute;
		top: 50%;
		right: 5px;
		transform: translateY(-50%);
	}
	.config-item{
		color:#1890ff;
		cursor: pointer;
	}
</style>
