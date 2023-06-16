<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/componentServer'
import { message } from 'ant-design-vue'


//  数据
const dateCalendar = ref()
const showElement = ref('index')
const columns1 = ref([{
            title: '准备开始执行时间',
            dataIndex: 'time',
            key: 'time',
          },
          {
            title: '数据来源',
            dataIndex: 'dataSource',
            key: 'dataSource',
          },
          {
            title: '数据内容',
            dataIndex: 'dataContent',
            key: 'dataContent',
          },
          {
            title: '实际开始执行时间',
            dataIndex: 'beginTime',
            key: 'beginTime',
          },
          {
            title: '实际执行完成时间',
            dataIndex: 'endTime',
            key: 'endTime',
          }])

const tableList1 = ref([{

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
			<a-table
				:columns="columns1"
				:dataSource="tableList1"
				:pagination="false"
			>
				<template
					slot="status"
					slot-scope="status">
					<a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
				</template>
			</a-table>
		</div>
		<div class="before-calendar">
			<!-- <a-calendar v-model:value="dateCalendar">
			</a-calendar> -->

			<!-- <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }"> -->
				<a-calendar v-model:value="dateCalendar">
					<template #dateCellRender="{ current }">
						交
					</template>
				</a-calendar>
			<!-- </div> -->
		</div>
	</div>
</template>

<style lang="scss" scoped>
.before-container{
	margin: 24px;
	display: flex;

    .before-main{
		flex: 1;
		min-height: 100px;
		border-right: 1px solid #f6f6f6;
	}
	.before-calendar{
		flex: 0 0 400px;
	}
	::v-deep .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date {
		height: 60px;
	}
}
</style>
