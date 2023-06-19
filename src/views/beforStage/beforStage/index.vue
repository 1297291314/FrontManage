<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import moment from 'moment'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/componentServer'
import { message } from 'ant-design-vue'


//  数据
const tradeDate = ref(moment().startOf('day').format('YYYYMMDD'))
const activeKey = ref('1')
const columns1 = ref([{
            title: '准备开始执行时间',
            dataIndex: 'time',
			key: 'time',
			align: 'center'
          },
          {
            title: '数据来源',
			dataIndex: 'dataSource',
			align: 'center',
            key: 'dataSource',
          },
          {
            title: '数据内容',
            dataIndex: 'dataContent',
			align: 'center',
            key: 'dataContent',
          },
          {
            title: '实际开始执行时间',
            dataIndex: 'beginTime',
			align: 'center',
            key: 'beginTime',
          },
          {
            title: '实际执行完成时间',
            dataIndex: 'endTime',
			align: 'center',
            key: 'endTime',
          }])

const tableList1 = ref([{
	time: '16:04',
}])

// 方法
const dataFetch = () => {
	// api.getClientList().then((res) => {
	// 	tableList.value = [...res]
	// })
}
const isWeekend = (value)=> {
		const date = value.weekday()
		if (date === 5 || date === 6) {
			return true
		}
		return false
	}
// 周期
onBeforeMount(() => {
	dataFetch()
})


</script>

<template>
	<div class="before-container">
		<div class="before-main">
			<div class="title">1.盘前上场准备工作执行情况</div>
			<a-form-item  label="交易日日期">
				<a-date-picker class="force-table__form" v-model:value="tradeDate" placeholder="选择交易日日期" value-format="YYYYMMDD" :allowClear="false" />
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
						<h3 class="sub_title">2.2.执行结果 (Checkll详情)</h3>
						<div>线上已经生成了文件</div>
						<a-divider style="margin-bottom: 24px"/>
						<h3 class="sub_title">2.2.执行结果 (Checkll详情)</h3>
						<div style="margin-bottom: 24px;">线上已经生成了文件</div>
						<a-descriptions title="节点启动完成时间">
							<a-descriptions-item label="1">23:55</a-descriptions-item>
							<a-descriptions-item label="2">23:55</a-descriptions-item>
							<a-descriptions-item label="3">23:55</a-descriptions-item>
							<a-descriptions-item label="4">23:55</a-descriptions-item>
							<a-descriptions-item label="5">23:55</a-descriptions-item>
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
		font-style: normal;
	}
}

</style>
