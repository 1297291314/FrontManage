<script setup>
import { ref, onBeforeMount,onUnmounted, inject, defineComponent } from 'vue'
import { RedoOutlined } from '@ant-design/icons-vue';
import moment from 'moment'
import api from '@/api/beforeStage'
import apiComponent from '@/api/componentServer'
import CheckModal from './components/CheckModal.vue'
import { message } from 'ant-design-vue'

// 组件
defineComponent({ CheckModal, RedoOutlined })
//  数据
const showElement = ref('index')
const timer = ref(null)
const searchQuery = ref({ page: 1, limit: 9999, tradingDay: moment().startOf('day').format('YYYYMMDD') })
const searchQueryTab = ref({
	tradingDay: moment().startOf('day').format('YYYYMMDD'), // 20230301,
	platformType: 'STOCK',
	checkPlatformType: '0',
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
	dataIndex: 'content',
	align: 'center',
	key: 'content',
},
{
	title: '实际开始执行时间',
	dataIndex: 'executionTime',
	align: 'center',
	key: 'executionTime',
},
{
	title: '实际执行完成时间',
	dataIndex: 'finishTime',
	align: 'center',
	key: 'finishTime',
}])
const tableList1 = ref([{
	planTime: '16:40',
	dataFrom: '通道管理系统',
	content: '火流星客户'
},
{
	planTime: '21:25',
	dataFrom: 'CDB(顶点)',
	content: '风险票'
},
{
	planTime: '21:45',
	dataFrom: 'CDB(顶点行情)',
	content: '股本'
},
{
	planTime: '22:00',
	dataFrom: 'CDB(顶点行情)',
	content: '收盘价'
},
{
	planTime: '22:00',
	dataFrom: 'TB业务数据库',
	content: '备份'
}])
// const timedTaskLog = ref([])
// stock
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
	slotScope: { customElements: 'activeStatus' },
	key: 'activeStatus',
},
{
	title: '操作',
	dataIndex: 'options',
	align: 'center',
	key: 'options',
}])
const tableList2Stock = ref([{
	busiPar: '结算后数据到位',
	tbStatus: '1',
	optionStatus: '1',
	startTime: '无',
	endTime: '无',
	activeStatusPar: '成功'
}, {
	busiPar: 'CDB数据预处理',
	tbStatus: '3',
	optionStatus: '2',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '读入结算后数据',
	tbStatus: '5',
	optionStatus: '3',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '处理',
	tbStatus: '7',
	optionStatus: '4',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '推送',
	tbStatus: '9',
	optionStatus: '9',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '归档',
	tbStatus: 'D',

	optionStatus: 'D',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckI',
	tbStatus: 'H1',

	optionStatus: 'H',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckII',
	tbStatus: 'H2',
	optionStatus: 'J',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}])
// credit
const columns2Credit = ref([{
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
	slotScope: { customElements: 'activeStatus' },
	key: 'activeStatus',
},
{
	title: '操作',
	dataIndex: 'options',
	align: 'center',
	key: 'options',
}])
const tableList2Credit = ref([{
	busiPar: '结算后数据到位',
	tbStatus: '1',
	optionStatus: '1',
	startTime: '无',
	endTime: '无',
	activeStatusPar: '成功'
}, {
	busiPar: 'CDB数据预处理',
	tbStatus: '3',
	optionStatus: '2',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '读入结算后数据',
	tbStatus: '5',
	optionStatus: '3',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '处理',
	tbStatus: '7',
	optionStatus: '4',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '推送',
	tbStatus: '9',
	optionStatus: '9',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '归档',
	tbStatus: 'D',

	optionStatus: 'D',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckI',
	tbStatus: 'H1',

	optionStatus: 'H',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckII',
	tbStatus: 'H2',
	optionStatus: 'J',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}])

// Sp期权
const columns2Sp = ref([{
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
	slotScope: { customElements: 'activeStatus' },
	key: 'activeStatus',
},
{
	title: '操作',
	dataIndex: 'options',
	align: 'center',
	key: 'options',
}])
const tableList2Sp = ref([{
	busiPar: '结算后数据到位',
	tbStatus: '1',
	optionStatus: '1',
	startTime: '无',
	endTime: '无',
	activeStatusPar: '成功'
}, {
	busiPar: 'CDB数据预处理',
	tbStatus: '3',
	optionStatus: '2',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '读入结算后数据',
	tbStatus: '5',
	optionStatus: '3',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '处理',
	tbStatus: '7',
	optionStatus: '4',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '推送',
	tbStatus: '9',
	optionStatus: '9',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '归档',
	tbStatus: 'D',

	optionStatus: 'D',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckI',
	tbStatus: 'H1',

	optionStatus: 'H',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: 'CheckII',
	tbStatus: 'H2',
	optionStatus: 'J',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}])
// self
const columns2Self = ref([{
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
	slotScope: { customElements: 'activeStatus' },
	key: 'activeStatus',
},
{
	title: '操作',
	dataIndex: 'options',
	align: 'center',
	key: 'options',
}])
const tableList2Self = ref([{
	busiPar: '结算后数据到位',
	tbStatus: '1',
	optionStatus: '1',
	startTime: '无',
	endTime: '无',
	activeStatusPar: '成功'
}, {
	busiPar: 'CDB数据预处理',
	tbStatus: '3',
	optionStatus: '2',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '读入结算后数据',
	tbStatus: '5',
	optionStatus: '3',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '处理',
	tbStatus: '7',
	optionStatus: '4',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '推送',
	tbStatus: '9',
	optionStatus: '9',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}, {
	busiPar: '归档',
	tbStatus: 'D',

	optionStatus: 'D',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
},
// {
// busiPar: 'CheckI',
// tbStatus: 'H1',

// optionStatus: 'H',
// startTime: '无',
// endTime: '无',
// activeStatusPar: ''
// },
{
	busiPar: 'CheckII',
	tbStatus: 'H2',
	optionStatus: 'J',
	startTime: '无',
	endTime: '无',
	activeStatusPar: ''
}])
// 方法
const componentServerFetch = () => {
	apiComponent.getClientList().then((res) => {
		res.map(item => {
			if (item.requestInfoDOS) {
				componentServer.value = [...componentServer.value, ...item.requestInfoDOS]
			}
		})

	})
}
const dataFetch1 = () => {
	api.timedTaskLog({ ...searchQuery.value }).then((res) => {
		tableList1.value.map((itemTable, indexTable) => {
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
const tabListTransfer = (tableList2Stock, res) => {
	const dealRes = [{
		busiPar: '结算后数据到位',
		tbStatus: '1',
		optionStatus: '1',
		startTime: '无',
		endTime: '无',
		activeStatusPar: '成功'
	}, {
		busiPar: 'CDB数据预处理',
		tbStatus: '3',
		optionStatus: '2',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '读入结算后数据',
		tbStatus: '5',
		optionStatus: '3',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '处理',
		tbStatus: '7',
		optionStatus: '4',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '推送',
		tbStatus: '9',
		optionStatus: '9',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '归档',
		tbStatus: 'D',

		optionStatus: 'D',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckI',
		tbStatus: 'H1',

		optionStatus: 'H',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckII',
		tbStatus: 'H2',
		optionStatus: 'J',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}]
	let existFlag3 = false
	res.map((item) => {
		if (item.tbStatus === '3') {
			existFlag3 = true
			dealRes[2].startTime = item.updateTime
			dealRes[1].endTime = item.updateTime
		}
		if (item.tbStatus === '4') {
			dealRes[2].endTime = item.updateTime
		}
		if (item.tbStatus === '5') {
			dealRes[3].startTime = item.updateTime
		}
		if (item.tbStatus === '8') {
			dealRes[3].endTime = item.updateTime
		}
		if (item.tbStatus === '9') {
			dealRes[4].startTime = item.updateTime
		}
		if (item.tbStatus === 'A') {
			dealRes[4].endTime = item.updateTime
		}
		if (item.tbStatus === 'D') {
			dealRes[5].startTime = item.updateTime
		}
		if (item.tbStatus === 'E') {
			dealRes[5].endTime = item.updateTime
		}
		if (item.tbStatus === 'H') {
			dealRes[6].startTime = item.updateTime
		}
		if (item.tbStatus === 'I') {
			dealRes[6].endTime = item.updateTime
			dealRes[7].startTime = item.updateTime
			dealRes[7].endTime = item.updateTime
		}
	})

	tableList2Stock.value.map((item2, index2) => {
		let existFlag = false
		dealRes.map((item) => {
			if (item.tbStatus === item2.tbStatus) {
				existFlag = true
				tableList2Stock.value[index2].startTime = item.startTime
				tableList2Stock.value[index2].endTime = item.endTime
				if (item.endTime !== '无') {
					tableList2Stock.value[index2].activeStatus = '成功'

				} else if(item.endTime === '无'&&item.startTime !== '无') {
					tableList2Stock.value[index2].activeStatus = '执行中'
				} else {
					tableList2Stock.value[index2].activeStatus = '等待执行中'
				}
			}
		})
		// if (!existFlag&&tableList2Stock.value[index2].tbStatus!=='1') {
		// }
	})
	tableList2Stock.value.map((item, index) => {
		if (item.endTime === '无' && item.startTime === '无') {
			if (existFlag3) {
				if (item.tbStatus !== '1') {
					tableList2Stock.value[index].activeStatus = '等待执行中'
				} else {
					tableList2Stock.value[index].activeStatus = '成功'
				}
			} else {
				tableList2Stock.value[index].activeStatus = '未执行'
			}
		}
	})
	// console.log(tableList2Stock.value)
}
const dataFetch2 = () => {
	api.getTradingDay()
		.then(res => {
			searchQueryTab.value.tradingDay = res
			api.beforeStageStatus({ ...searchQueryTab.value })
				.then((res) => {
					if (searchQueryTab.value.platformType === 'STOCK') {
						tabListTransfer(tableList2Stock, res)
					} else if (searchQueryTab.value.platformType === 'CREDIT') {
						tabListTransfer(tableList2Credit, res)
					} else if (searchQueryTab.value.platformType === 'SP') {
						tabListTransfer(tableList2Sp, res)
					} else if ((searchQueryTab.value.platformType === 'SELF')) {
						tabListTransfer(tableList2Self, res)
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
const dataFetch = () => {
	api.timedTaskLogTitleList()
		.then(res => {
			tableList1.value = res
			dataFetch1()

		})
	componentServerFetch()
	dataFetch2()
}
const refreshData = () => {
	columns1.value = [{
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
		dataIndex: 'content',
		align: 'center',
		key: 'content',
	},
	{
		title: '实际开始执行时间',
		dataIndex: 'executionTime',
		align: 'center',
		key: 'executionTime',
	},
	{
		title: '实际执行完成时间',
		dataIndex: 'finishTime',
		align: 'center',
		key: 'finishTime',
	}]
	tableList1.value = [{
		planTime: '16:40',
		dataFrom: '通道管理系统',
		content: '火流星客户'
	},
	{
		planTime: '21:25',
		dataFrom: 'CDB(顶点)',
		content: '风险票'
	},
	{
		planTime: '21:45',
		dataFrom: 'CDB(顶点行情)',
		content: '股本'
	},
	{
		planTime: '22:00',
		dataFrom: 'CDB(顶点行情)',
		content: '收盘价'
	},
	{
		planTime: '22:00',
		dataFrom: 'TB业务数据库',
		content: '备份'
	}]
	// const timedTaskLog = ref([])
	// stock
	columns2Stock.value = [{
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
		slotScope: { customElements: 'activeStatus' },
		key: 'activeStatus',
	},
	{
		title: '操作',
		dataIndex: 'options',
		align: 'center',
		key: 'options',
	}]
	tableList2Stock.value = [{
		busiPar: '结算后数据到位',
		tbStatus: '1',
		optionStatus: '1',
		startTime: '无',
		endTime: '无',
		activeStatusPar: '成功'
	}, {
		busiPar: 'CDB数据预处理',
		tbStatus: '3',
		optionStatus: '2',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '读入结算后数据',
		tbStatus: '5',
		optionStatus: '3',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '处理',
		tbStatus: '7',
		optionStatus: '4',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '推送',
		tbStatus: '9',
		optionStatus: '9',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '归档',
		tbStatus: 'D',

		optionStatus: 'D',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckI',
		tbStatus: 'H1',

		optionStatus: 'H',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckII',
		tbStatus: 'H2',
		optionStatus: 'J',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}]
	// credit
	columns2Credit.value = [{
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
		slotScope: { customElements: 'activeStatus' },
		key: 'activeStatus',
	},
	{
		title: '操作',
		dataIndex: 'options',
		align: 'center',
		key: 'options',
	}]
	tableList2Credit.value = [{
		busiPar: '结算后数据到位',
		tbStatus: '1',
		optionStatus: '1',
		startTime: '无',
		endTime: '无',
		activeStatusPar: '成功'
	}, {
		busiPar: 'CDB数据预处理',
		tbStatus: '3',
		optionStatus: '2',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '读入结算后数据',
		tbStatus: '5',
		optionStatus: '3',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '处理',
		tbStatus: '7',
		optionStatus: '4',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '推送',
		tbStatus: '9',
		optionStatus: '9',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '归档',
		tbStatus: 'D',

		optionStatus: 'D',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckI',
		tbStatus: 'H1',

		optionStatus: 'H',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckII',
		tbStatus: 'H2',
		optionStatus: 'J',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}]

	// Sp期权
	columns2Sp.value = [{
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
		slotScope: { customElements: 'activeStatus' },
		key: 'activeStatus',
	},
	{
		title: '操作',
		dataIndex: 'options',
		align: 'center',
		key: 'options',
	}]
	tableList2Sp.value = [{
		busiPar: '结算后数据到位',
		tbStatus: '1',
		optionStatus: '1',
		startTime: '无',
		endTime: '无',
		activeStatusPar: '成功'
	}, {
		busiPar: 'CDB数据预处理',
		tbStatus: '3',
		optionStatus: '2',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '读入结算后数据',
		tbStatus: '5',
		optionStatus: '3',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '处理',
		tbStatus: '7',
		optionStatus: '4',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '推送',
		tbStatus: '9',
		optionStatus: '9',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '归档',
		tbStatus: 'D',

		optionStatus: 'D',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckI',
		tbStatus: 'H1',

		optionStatus: 'H',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: 'CheckII',
		tbStatus: 'H2',
		optionStatus: 'J',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}]
	// self
	columns2Self.value = [{
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
		slotScope: { customElements: 'activeStatus' },
		key: 'activeStatus',
	},
	{
		title: '操作',
		dataIndex: 'options',
		align: 'center',
		key: 'options',
	}]
	tableList2Self.value = [{
		busiPar: '结算后数据到位',
		tbStatus: '1',
		optionStatus: '1',
		startTime: '无',
		endTime: '无',
		activeStatusPar: '成功'
	}, {
		busiPar: 'CDB数据预处理',
		tbStatus: '3',
		optionStatus: '2',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '读入结算后数据',
		tbStatus: '5',
		optionStatus: '3',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '处理',
		tbStatus: '7',
		optionStatus: '4',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '推送',
		tbStatus: '9',
		optionStatus: '9',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}, {
		busiPar: '归档',
		tbStatus: 'D',

		optionStatus: 'D',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	},
	// {
	// busiPar: 'CheckI',
	// tbStatus: 'H1',

	// optionStatus: 'H',
	// startTime: '无',
	// endTime: '无',
	// activeStatusPar: ''
	// },
	{
		busiPar: 'CheckII',
		tbStatus: 'H2',
		optionStatus: 'J',
		startTime: '无',
		endTime: '无',
		activeStatusPar: ''
	}]
	dataFetch()
}
// 周期
onBeforeMount(() => {
	dataFetch()
	timer.value = setInterval(()=>dataFetch(),300000)
})
onUnmounted(() => {
	clearInterval(timer.value)
})



</script>

<template>
	<div class="before-container view-container">
		<div class="before-main" v-show="showElement === 'index'">
			<div class="title">1.盘前上场准备工作执行情况<a-button @click="refreshData" class="redo-button" type="primary"
					size="middle"><redo-outlined />刷新</a-button></div>
			<a-form-item label="日期">
				<a-date-picker class="force-table__form" v-model:value="searchQuery.tradingDay" placeholder="选择日期"
					@change="dataFetch1" value-format="YYYYMMDD" :allowClear="false" />
			</a-form-item>
			<a-table :columns="columns1" :dataSource="tableList1" :pagination="false" bordered>
				<template slot="status" slot-scope="status">
					<a-badge :status="status | statusTypeFilter" :text="status | statusFilter" />
				</template>
			</a-table>
			<a-divider style="margin-bottom: 24px" />
			<div class="title">2.盘前上场工作执行情况(23:00开始等待执行)</div>
			<a-tabs @change="tabChange">
				<a-tab-pane key="1" tab="现货">
					<a-card>
						<h3 class="sub_title">2.1.执行过程</h3>
						<a-table :columns="columns2Stock" :dataSource="tableList2Stock" :pagination="false" bordered>
							<template slot="activeStatus" slot-scope="scope">
								<span>
									{{ scope | activeStatusFilter }}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '2'"
										@confirm="doOnThisStep(record.optionStatus)">
										<template #title>
											<p>将删除当前CDB交易日期状态3，重置原力盘前状态，</p>
											<p>请注意同一时间不能多次点击，此过程实际执行时间较长，</p>
											<p>请耐心等待</p>
										</template>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '3'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>全流程重执行(不含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '4'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>下午版</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '9'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>推送</a>
									</a-popconfirm>
									<!-- <a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus === 'D'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm> -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'H'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkI + checkII</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'J'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkII</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px" />
						<h3 class="sub_title">2.2.执行结果 (CheckII详情)</h3>
						<a-button type="link" @click="checkModalshow('1')">
							线上已经生成了文件
						</a-button>
						<a-divider style="margin-bottom: 24px" />
						<h3 class="sub_title">2.3.奇点柜台启动</h3>
						<div style="margin-bottom: 24px;">启动奇点节点</div>
						<a-divider dashed style="margin-bottom: 12px" />
						<a-descriptions :column="{ md: 5 }" title="节点启动完成时间">
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
						<a-table :columns="columns2Credit" :dataSource="tableList2Credit" :pagination="false" bordered>
							<template slot="activeStatus" slot-scope="scope">
								<span>
									{{ scope | activeStatusFilter }}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '2'"
										@confirm="doOnThisStep(record.optionStatus)"><template #title>
											<p>将删除当前CDB交易日期状态3，重置原力盘前状态，</p>
											<p>请注意同一时间不能多次点击，此过程实际执行时间较长，</p>
											<p>请耐心等待</p>
										</template>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '3'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>全流程重执行(不含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '4'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>下午版</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '9'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>推送</a>
									</a-popconfirm>
									<!-- <a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus === 'D'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm> -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'H'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkI + checkII</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'J'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkII</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px" />
						<h3 class="sub_title">2.2.执行结果 (CheckII详情)</h3>
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
				<a-tab-pane key="3" tab="期权"><a-card>
						<h3 class="sub_title">2.1.执行过程</h3>
						<a-table :columns="columns2Sp" :dataSource="tableList2Sp" :pagination="false" bordered>
							<template slot="activeStatus" slot-scope="scope">
								<span>
									{{ scope | activeStatusFilter }}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '2'"
										@confirm="doOnThisStep(record.optionStatus)">
										<template #title>
											<p>将删除当前CDB交易日期状态3，重置原力盘前状态，</p>
											<p>请注意同一时间不能多次点击，此过程实际执行时间较长，</p>
											<p>请耐心等待</p>
										</template>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '3'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>全流程重执行(不含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '4'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>下午版</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '9'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>推送</a>
									</a-popconfirm>
									<!-- <a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus === 'D'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm> -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'H'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkI + checkII</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'J'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkII</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px" />
						<h3 class="sub_title">2.2.执行结果 (CheckII详情)</h3>
						<a-button type="link" @click="checkModalshow('3')">
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
					</a-card></a-tab-pane>
				<a-tab-pane key="4" tab="自营"><a-card>
						<h3 class="sub_title">2.1.执行过程</h3>
						<a-table :columns="columns2Self" :dataSource="tableList2Self" :pagination="false" bordered>
							<template slot="activeStatus" slot-scope="scope">
								<span>
									{{ scope | activeStatusFilter }}
								</span>
							</template>
							<template #bodyCell="{ column, text, record }">
								<template v-if="column.dataIndex === 'options'">
									<!-- {{ record }} -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '2'"
										@confirm="doOnThisStep(record.optionStatus)">
										<template #title>
											<p>将删除当前CDB交易日期状态3，重置原力盘前状态，</p>
											<p>请注意同一时间不能多次点击，此过程实际执行时间较长，</p>
											<p>请耐心等待</p>
										</template>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '3'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>全流程重执行(不含CDB)</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '4'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>下午版</a>
									</a-popconfirm>
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === '9'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>推送</a>
									</a-popconfirm>
									<!-- <a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus === 'D'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>全流程重执行(包含CDB)</a>
									</a-popconfirm> -->
									<!-- <a-popconfirm :disabled="urlIDFlag"
										v-if="record.optionStatus === 'H'"
										title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)"
										>
										<a>checkI + checkII</a>
									</a-popconfirm> -->
									<a-popconfirm :disabled="urlIDFlag" v-if="record.optionStatus === 'J'" title="确认执行该操作"
										@confirm="doOnThisStep(record.optionStatus)">
										<a>checkII</a>
									</a-popconfirm>
								</template>
							</template>
						</a-table>
						<a-divider style="margin-bottom: 24px" />
						<h3 class="sub_title">2.2.执行结果 (CheckII详情)</h3>
						<a-button type="link" @click="checkModalshow('4')">
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
					</a-card></a-tab-pane>
			</a-tabs>
		</div>
		<check-modal v-if="showElement === 'checkLog'" :platformType="searchQueryTab" @close="handleClose" />
	</div>
</template>

<style lang="scss" scoped>
.before-container {

	.title {
		overflow: hidden;
		color: rgba(0, 0, 0, .85);
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 16px;

		.redo-button {
			float: right;
		}
	}

	.sub_title {
		color: rgba(0, 0, 0, .85);
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 16px;
	}

	::v-deep .ant-descriptions-title {
		font-weight: normal;
	}
}
</style>
