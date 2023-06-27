<script setup>
import { ref, onBeforeMount, inject, defineComponent,computed, onMounted } from 'vue'
import api from '@/api/workbench'
import { message } from 'ant-design-vue'
import userAvatar from '@/assets/image/force-face.png'
import {
	MoreOutlined
} from '@ant-design/icons-vue'


const showElement = ref('index')
const tableList = ref([])
const noSelect = ref(false)
const calendarWidth = ref(0)
const $utils = inject('$utils')
const calendar = ref(null)
const tradeFlag = ref('0')
defineComponent({
	MoreOutlined
})


const dataFetch = () => {
	api.calendarList({flag:tradeFlag.value})
		.then((res) => {
		tableList.value = [...res]
	})
}
const isWeekend = (value)=>{
	const date = value.weekday()
	if (date === 5 || date === 6) {
		return true
	}
	return false
}
const tradingDay = (value) =>{
	const date = value.format('YYYYMMDD')
	let bool = false
	tableList.value.map(item => {
		if (date === item) {
			bool = item
		}
	})
	return bool
}
 const getMonths = value => {
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        months.push(localeData.monthsShort(value.month(i)));
      }
      return months;
    };
    const getYears = value => {
      const year = value.year();
      const years = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }
      return years;
    };
const handleClose = (str) => {
	showElement.value = str
}
const getCurrentHour = (str = '') => {
    const hour = new Date().getHours()
    const time = hour < 3 ? '凌晨' : hour < 6 ? '清晨' : hour < 9 ? '早上'
        : hour < 12 ? '上午' : hour < 15 ? '中午' : hour < 18 ? '下午'
            : hour < 21 ? '晚上' : '深夜'
    return time + str
}
const handleMousedown =()=>{
	noSelect.value = true
	window.addEventListener('mousemove', handleMousemove)
	window.addEventListener('mouseup', handleMouseup)
}
const handleMousemove = (e) => {
	let width = calendar.value.getBoundingClientRect().left
	width = Math.floor(width)
	calendarWidth.value = e.clientX - width
	calendar.value.style.width = calendarWidth.value + 'px'
}
const handleMouseup= ()=>{
	noSelect.value = false
	$utils.storage.set('workbench-calendar-width', calendarWidth.value)
	window.removeEventListener('mousemove', handleMousemove)
	window.removeEventListener('mouseup', handleMouseup)
}
onBeforeMount(() => {
	dataFetch()
})
onMounted(() => {
	if ($utils.storage.get('workbench-calendar-width')) {
            calendar.value.style.width = $utils.storage.get('workbench-calendar-width') + 'px'
        }
})
const welcomeWord= computed(
	 ()=> {
            let str = ''
            const random = Math.floor(Math.random() * 4)
            const hour = new Date().getHours()
            if (hour < 12) {
                switch (random) {
                case 0:
                    str = '一天之中最美好的时光在黎明。'
                    break
                case 1:
                    str = '清晨时光贵如金。'
                    break
                case 2:
                    str = '一年之季在于春，一日之计在于晨。'
                    break
                case 3:
                    str = '昨天是自己走过的，明天是即将走过的，惟有今天正在走过。'
                    break
                }
            } else if (hour < 18) {
                switch (random) {
                case 0:
                    str = '要来杯咖啡吗？'
                    break
                case 1:
                    str = '不喜欢的东西就扔掉，讨厌的人就拉黑，不开心的时候就睡一觉。'
                    break
                case 2:
                    str = '给自己半个小时好好休息，然后加油努力。'
                    break
                case 3:
                    str = '你相信你行，你就活力无穷。'
                    break
                }
            } else if (hour >= 18) {
                switch (random) {
                case 0:
                    str = '每一天的努力，只是为了让远方变得更近一些。'
                    break
                case 1:
                    str = '你今天的努力，是幸运的伏笔。'
                    break
                case 2:
                    str = '喷泉之所以美丽，是因为水有了压力。'
                    break
                case 3:
                    str = '与其花时间应付以后不理想的生活，不如花时间造就你想要的生活。'
                    break
                }
            }
            return str
        }
)


</script>

<template>
	<div class="workbench">
		<div class="workbench-welcome">
            <a-avatar class="workbench-welcome__left" :size="84" :src="userAvatar"></a-avatar>
            <div class="workbench-welcome__right">
                <h2>
                    {{ getCurrentHour('好') }}，
                    <span>{{ welcomeWord }}</span>
				</h2>
                <!-- <div class="force-description">
                    <span class="workbench-welcome__tags">{{ userPlatformType | platformTypeFilter }}</span>
                    <span class="workbench-welcome__tags">{{ userDepartmentId | departmentIdFilter }}</span>
                </div> -->
            </div>
        </div>
		 <div class="workbench-mission">
            <div class="workbench-calendar" ref="calendar">
                <a-calendar value-format="YYYYMMDD">
					<template #headerRender="{ value: current, type, onChange, onTypeChange }">
						<div style="padding: 10px">
						<!-- <div style="margin-bottom: 10px">

						</div> -->
						<a-row type="flex" justify="end">
							<a-col>
							<a-radio-group size="small" v-model:value="tradeFlag" @change="dataFetch">
								<a-radio :value="'0'">T日</a-radio>
								<a-radio :value="'1'">HK</a-radio>
							</a-radio-group>
							</a-col>
							<a-col>
							<a-select
								size="small"
								:dropdown-match-select-width="false"
								class="my-year-select"
								:value="String(current.year())"
								@change="
								newYear => {
									onChange(current.year(+newYear));
								}
								"
							>
								<a-select-option
								v-for="val in getYears(current)"
								:key="String(val)"
								class="year-item"
								>
								{{ val }}
								</a-select-option>
							</a-select>
							</a-col>
							<a-col>
							<a-select
								size="small"
								:dropdown-match-select-width="false"
								:value="String(current.month())"
								@change="
								selectedMonth => {
									onChange(current.month(parseInt(String(selectedMonth), 10)));
								}
								"
							>
								<a-select-option
								v-for="(val, index) in getMonths(current)"
								:key="String(index)"
								class="month-item"
								>
								{{ val }}
								</a-select-option>
							</a-select>
							</a-col>
						</a-row>
						</div>
					</template>
                    <template class="workbench-calendar__cell"  #dateCellRender="{ current }"   slot-scope="value">
						<div v-show="tableList.length>0">
							<span v-if="isWeekend(current)"></span>
							<span class="workbench-calendar__closed" v-else-if="tradingDay(current)">
								交易日
							</span>
							<span v-else  class="workbench-calendar__trading">非交易日</span>
						</div>
                    </template>
                </a-calendar>
            </div>
            <span class="workbench-resize">
                <span class="workbench-resize__hr" />
                <!-- <a-icon class="workbench-resize__icon" type="more" two-tone-color="#2f54eb" @mousedown="handleMousedown" /> -->
				<more-outlined  class="workbench-resize__icon" @mousedown="handleMousedown" />
                <span class="workbench-resize__hr" />
            </span>
            <div class="workbench-backlog">
                <div class="backlog-list" ref="backlog">
                    <!-- <backlog-list v-if="auditPermission" :all-list-length.sync="length" />
                    <div v-else class="workbench-backlog__no--audit" /> -->
                </div>
            </div>
        </div>
	</div>
</template>

<style lang="scss" scoped>
.workbench {
    position: relative;
    margin-top: 16px;
	&-welcome {
        margin-bottom: 24px;
        padding: 24px 24px 12px;
        background-color: #fff;

        &__left {
            vertical-align: middle;
        }

        &__right {
            display: inline-block;
            margin-left: 24px;
            vertical-align: middle;
        }

    }


	 &-mission {
        margin-bottom: 24px;
        padding: 24px;
        display: flex;
        background-color: #fff;
    }

    &-calendar {
        width: 60%;
        min-width: 345px;
        max-width: 700px;

        &__cell {
            display: inline-block;
            height: 82px;
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        &__trading {
            color: red;
            word-break: break-word;
        }

        &__closed {
            color: rgba(#000, 0.25);
        }
    }

    &-resize {
        padding: 6px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0 0 7px rgba(255, 255, 255, 0.5);
        z-index: 10;

        &__hr {
            width: 1px;
            height: 40%;
            background-color: #ebecf0;
        }

        &__icon {
            cursor: ew-resize;
        }
    }

    &-resize--vertical {
        padding: 0 6px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        box-shadow: 0 0 7px rgba(255, 255, 255, 0.5);
        z-index: 10;

        .workbench-resize__hr--vertical {
            width: 40%;
            height: 1px;
            background-color: #ebecf0;
        }

        .workbench-resize__icon--vertical {
            cursor: ns-resize;
        }
    }

    &-backlog {
        flex: auto;

        &__no--audit {
            height: 100%;
            background: url('~@/assets/image/no-permission--audit.gif') no-repeat;
            background-size: contain;
            background-position: center;
        }
    }
}
</style>
