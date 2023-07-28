<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import moment from 'moment'
import api from '@/api/beforeStage'
import apiComponent from '@/api/componentServer'
import CheckModal from './components/CheckModal.vue'
import { message } from 'ant-design-vue'

// 组件
defineComponent({ CheckModal })
//  数据
const showElement = ref('index')
const searchQuery = ref({ page: 1, limit: 9999, tradingDay: moment().startOf('day').format('YYYYMMDD') })
const searchQueryTab = ref({
	tradingDay: 20230301,//moment().startOf('day').format('YYYYMMDD'),
	platformType: 'STOCK',
	checkPlatformType: '1',
	serverPlatformType: '0'
})
const componentServer = ref([])
const urlIDFlag = ref(false)
// const activeKey = ref('1')
const columns1 = ref([{
            title: '准备开始执行时间',
            dataIndex: 'planTime',
			key: 'planTime',
			align: 'center'
          },
          {
            title: '数据来源',
			dataIndex: 'dataFrom',
			align: 'center',
            key: 'dataFrom',
          },
          {
            title: '数据内容',
            dataIndex: 'dataContent',
			align: 'center',
            key: 'dataContent',
          },
          {
            title: '实际开始执行时间',
            dataIndex: 'executionTime',
			align: 'center',
            key: 'executionTime',
          },
          {
            title: '实际执行完成时间（ms）',
            dataIndex: 'finishTime',
			align: 'center',
            key: 'finishTime',
          }])
const tableList1 = ref([{
	planTime: '16:40',
	dataFrom: '通道管理系统',
	dataContent:'火流星客户'
},
{
	planTime: '21:25',
	dataFrom: 'CDB(顶点)',
	dataContent:'风险票'
	},
{
	planTime: '21:45',
	dataFrom: 'CDB(顶点行情)',
	dataContent:'股本'
},
{
	planTime: '22:00',
	dataFrom: 'CDB(顶点行情)',
	dataContent:'收盘价'
},
{
	planTime: '22:00',
	dataFrom: 'TB业务数据库',
	dataContent:'备份'
	}])
// const timedTaskLog = ref([])
const columns2Stock = ref([{
            title: '业务活动',
            dataIndex: 'busiPar',
			key: 'busiPar',
			align: 'center'
          },
          {
            title: '开始时间',
			dataIndex: 'startTime',
			align: 'center',
            key: 'startTime',
          },
          {
            title: '完成时间',
            dataIndex: 'endTime',
			align: 'center',
            key: 'endTime',
          },
          {
            title: '活动状态',
            dataIndex: 'activeStatus',
			align: 'center',
			slotScope:{customElements:'activeStatus'},
            key: 'activeStatus',
          },
          {
            title: '操作',
            dataIndex: 'options',
			align: 'center',
            key: 'options',
          }])
const tableList2Stock = ref([{
	busiPar: '业务活动',
	tbStatus: '1',
	optionStatus: '1',
	startTime: '',
	endTime: '',
	activeStatusPar: '成功'
},{
	busiPar: 'CDB数据预处理',
	tbStatus:'3',
	optionStatus: '2',
	startTime: ' ',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '读入结算后数据',
	tbStatus:'5',
	optionStatus: '3',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '处理',
	tbStatus:'7',
	optionStatus: '4',
	startTime: ' ',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '推送',
	tbStatus: '9',
	optionStatus: '9',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '归档',
	tbStatus: 'D',

	optionStatus: 'D',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: 'Checkl',
	tbStatus: 'H1',

	optionStatus: 'H',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: 'Checkll',
	tbStatus:'H2',
	optionStatus: 'J',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
}])
// 方法
const componentServerFetch = () => {
	apiComponent.getClientList().then((res) => {
		res.map(item => {
			if (item.requestInfoDOS) {
				componentServer.value = [...componentServer.value,...item.requestInfoDOS]
			}
		})

	})
}
const dataFetch1 = () => {
	api.timedTaskLog({ ...searchQuery.value }).then((res) => {
		tableList1.value.map((itemTable,indexTable) => {
			let existFlag = false
			res.map((item) => {
				if (item.dataContent === itemTable.dataContent) {
					existFlag = true
					tableList1.value[indexTable].executionTime = item.executionTime
					tableList1.value[indexTable].finishTime = item.finishTime
				}
			})
			if (!existFlag) {
				tableList1.value[indexTable].executionTime = "无"
				tableList1.value[indexTable].finishTime = "无"
			}
		})

	})
}
const dataFetch2 = () => {
	api.beforeStageStatus({ ...searchQueryTab.value })
		.then((res) => {
			tableList2Stock.value.map((item2,index2) => {
				let existFlag = false
				res.map((item) => {
					if (item.tbStatus === item2.tbStatus[0]) {
						existFlag = true
						tableList2Stock.value[index2].startTime = item.startTime
						tableList2Stock.value[index2].endTime = item.endTime
						if (!item.endTime) {
							tableList2Stock.value[index2].activeStatus = '执行中'
						} else {
							tableList2Stock.value[index2].activeStatus = '成功'
						}
					}
				})
				if (!existFlag) {
					tableList2Stock.value[index2].activeStatus = '失败'
				}
			})
		})


}
const handleClose = (str) => {
	showElement.value = str
}
const tabChange = (key) => {
	if (key === '1') {
		searchQueryTab.value.platformType = 'STOCK'
		searchQueryTab.value.checkPlatformType = '0'
		searchQueryTab.value.serverPlatformType = '0'
	} else if (key === '2') {
		searchQueryTab.value.platformType = 'CREDIT'
		searchQueryTab.value.checkPlatformType = '1'
		searchQueryTab.value.serverPlatformType = '1'
	} else if (key === '3') {
		searchQueryTab.value.platformType = 'SP'
		searchQueryTab.value.checkPlatformType = '2'
		searchQueryTab.value.serverPlatformType = '2'
	} else if (key === '4') {
		searchQueryTab.value.platformType = 'SELF'
		searchQueryTab.value.checkPlatformType = '4'
		searchQueryTab.value.serverPlatformType = '4'
	}
	dataFetch2()

}
const checkModalshow = (str) => {
	showElement.value = 'checkLog'
}
const doOnThisStep = (step) => {
	message.success('请耐心等待返回结果')
	let urlID = ''
	componentServer.value.map(item => {
		if (item.platformType === searchQueryTab.value.serverPlatformType) {
			if (item.task === step) {
				urlID = item.urlID
			}
		}
	})
	if (urlID) {
		urlIDFlag.value = true
		api.proxyReq({ urlID })
			.then(res => {
				message.success(res)
			}).finally(res => {
				urlIDFlag.value = false
			})
	} else {
		message.error('暂无')
	}
}

// 周期
onBeforeMount(() => {
	componentServerFetch()
	dataFetch1()
	dataFetch2()
})


</script>

<template>
	<div class="before-container view-container">
		<div class="before-main" v-show="showElement === 'index'">
			<div class="title">1.盘前上场准备工作执行情况</div>
			<a-form-item  label="交易日日期">
				<a-date-picker class="force-table__form" v-model:value="searchQuery.tradingDay" placeholder="选择交易日日期" @change="dataFetch1" value-format="YYYYMMDD" :allowClear="false" />
			</a-form-item>
			<a-table
				:columns="columns1"
				:dataSource="tableList1"
				:pagination="false"
				bordered
			>
				<template
					slot="status"
					slot-scope="status">
					<a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
				</template>
			</a-table>
			<a-divider style="margin-bottom: 24px"/>
			<div class="title">2.盘前上场工作执行情况(23:00开始等待执行)</div>
			<a-tabs @change="tabChange">
				<a-tab-pane key="1" tab="现货">
					<a-card>
						<h3 class="sub_title">2.1.执行过程</h3>
						<a-table
							:columns="columns2Stock"
							:dataSource="tableList2Stock"
							:pagination="false"
							bordered
						>
							<template
								slot="activeStatus"
								slot-scope="scope">
								<span>
									{{scope | activeStatusFilter}}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus !== '1'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>Redo on this step</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.2.执行结果 (Checkll详情)</h3>
						<a-button type="link" @click="checkModalshow('1')">
							线上已经生成了文件
						</a-button>
						<a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.3.奇点柜台启动</h3>
						<div style="margin-bottom: 24px;">启动奇点节点</div>
						<a-divider dashed style="margin-bottom: 12px"/>
						<a-descriptions :column="{ md: 5}"  title="节点启动完成时间">
							<a-descriptions-item label="节点1">23:55</a-descriptions-item>
							<a-descriptions-item label="节点2">23:55</a-descriptions-item>
							<a-descriptions-item label="节点3">23:55</a-descriptions-item>
							<a-descriptions-item label="节点4">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
						</a-descriptions>
					</a-card>
				</a-tab-pane>
				<a-tab-pane key="2" tab="两融" force-render>
					<a-card>
						<h3 class="sub_title">2.1.执行过程</h3>
						<a-table
							:columns="columns2Stock"
							:dataSource="tableList2Stock"
							:pagination="false"
							bordered
						>
							<template
								slot="activeStatus"
								slot-scope="scope">
								<span>
									{{scope | activeStatusFilter}}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus !== '1'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>Redo on this step</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.2.执行结果 (Checkll详情)</h3>
						<a-button type="link" @click="checkModalshow('2')">
							线上已经生成了文件
						</a-button>
						<!-- <a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.3.奇点柜台启动</h3>
						<div style="margin-bottom: 24px;">启动奇点节点</div>
						<a-divider dashed style="margin-bottom: 12px"/>
						<a-descriptions :column="{ md: 5}"  title="节点启动完成时间">
							<a-descriptions-item label="节点1">23:55</a-descriptions-item>
							<a-descriptions-item label="节点2">23:55</a-descriptions-item>
							<a-descriptions-item label="节点3">23:55</a-descriptions-item>
							<a-descriptions-item label="节点4">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
							<a-descriptions-item label="节点5">23:55</a-descriptions-item>
						</a-descriptions> -->
					</a-card>
				</a-tab-pane>
				<a-tab-pane key="3" tab="期权">期权</a-tab-pane>
				<a-tab-pane key="4" tab="自营">自营</a-tab-pane>
			</a-tabs>
		</div>
		<check-modal :key="searchQueryTab.checkPlatformType" v-show="showElement === 'checkLog'" :platformType="searchQueryTab"  @close="handleClose"/>
	</div>
</template>

<style lang="scss" scoped>
.before-container{

	.title {
		color: rgba(0,0,0,.85);
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 16px;
	}
	.sub_title{
		color: rgba(0,0,0,.85);
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 16px;
	}
	::v-deep .ant-descriptions-title{
		font-weight: normal;
	}
}

</style>
