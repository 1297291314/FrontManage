<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import moment from 'moment'
import api from '@/api/beforeStage'
import { message } from 'ant-design-vue'


//  数据
const searchQuery = ref({ page: 1, limit: 9999, tradingDay: moment().startOf('day').format('YYYYMMDD') })
const searchQueryTab = ref({
	tradingDay: '20230322',//moment().startOf('day').format('YYYYMMDD'),
	platformType: 'STOCK'
})
const activeKey = ref('1')
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
	tbStatus:'1',
	startTime: ' 没有时间就打钩子',
	endTime: '',
	activeStatusPar: '成功'
},{
	busiPar: 'CDB数据预处理',
	tbStatus:'3',
	startTime: ' ',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '读入结算后数据',
	tbStatus:'5',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '处理',
	tbStatus:'7',
	startTime: ' ',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '推送',
	tbStatus:'9',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: '归档',
	tbStatus:'D',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: 'Checkl',
	tbStatus:'H1',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
},{
	busiPar: 'Checkll',
	tbStatus:'H2',
	startTime: '',
	endTime: '',
	activeStatusPar: ''
}])
// 方法
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
			console.log(res)
			tableList2Stock.value.map((item2,index2) => {
				let existFlag = false
				res.map((item) => {
					if (item.tbStatus === item2.tbStatus[0]) {
						existFlag = true
						tableList2Stock.value[index2].startTime = item.startTime
						tableList2Stock.value[index2].endTime = item.endTime
						if (!item.endTime) {
							tableList2Stock.value[index2].activeStatus = 1
						} else {
							tableList2Stock.value[index2].activeStatus = 2
						}
					}
				})
				if (!existFlag) {
					tableList2Stock.value[index2].activeStatus = 0
				}
			})
		})
}
// 周期
onBeforeMount(() => {
	dataFetch1()
	dataFetch2()
})


</script>

<template>
	<div class="before-container view-container">
		<div class="before-main">
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
			<div class="title">2.盘前上场工作执行情况(22:30开始等待执行)</div>
			<a-tabs v-model:activeKey="activeKey">
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
								slot="status"
								slot-scope="status">
								<a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.2.执行结果 (Checkll详情)</h3>
						<div>线上已经生成了文件</div>
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
				<a-tab-pane key="2" tab="两融" force-render>两融</a-tab-pane>
				<a-tab-pane key="3" tab="期权">期权</a-tab-pane>
				<a-tab-pane key="4" tab="自营">自营</a-tab-pane>
			</a-tabs>
		</div>
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
