<script>
//  vue 基本版有setup写法 inject,
import {
	reactive,
	toRefs,
	computed,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	ref
} from 'vue'
export default {
	name: 'testMySelf',
	components: {
		// 其他组件引用位置
	},
	props: {
		// 同vue2中写法，单独props添加
		name: {
			required: false,
			default: '未知'
		}
	},
	data () {
		return {
			message: 'Hello Vue3!'
		}
	},
	setup (props, context) {
		//  props==>调用组件传的参数值，父组件传递给子组件的所有数据。
		// context==>上下文个中详细$attrs含有props中没有定义的参数，
		// emit触发父组件事件并向父组件传递参数
		// slot插销
		// console.log(1)
		// console.log('props', props.name)
		// console.log('context', context)
		// const inject1 = inject("for1")
		// const changeAgePar = inject("changeAge")
		const state = reactive({
			// name: "hujunjie",
			age: 18,
			sex: '男',
			specialTag: computed(() => {
				return state.age >= 18 ? '成年人' : '未成年人'
			})
		})

		const str = ref('123')
		// ref可以监听复杂类型，但是内部代码其实移交给了reactive监听了
		const arr = ref([123, 123])
		const obj = ref({
			aa: 1
		})
		onBeforeMount(() => {
			// console.log('I am onBeforeMount')
			// console.log('inject1', inject1)
			// console.log('str', str.value, arr.value, obj.value.aa)
		})
		onMounted(() => {
			// console.log('I am onMounted')
			// console.log('str', str.value, arr.value, obj.value.aa)
		})
		onBeforeUpdate(() => {
			// console.log('I am onBeforeUpdate')
		})
		onUpdated(() => {
			// console.log('I am onUpdated')
		})
		const methods = {
			testClick (par) {
				// console.log(par)
				if (par > 0) {
					state.age += 1
				} else {
					state.age -= 1
				}
				str.value++
				arr.value.push(321)
				obj.value.aa++
				// changeAgePar()
			}
		}
		return {
			...toRefs(state),
			...methods,
			str,
			arr,
			obj
		}
	}
}
</script>

<template>
	<div class="test2">
		<div>{{ name }}-{{ age }}-{{ sex }}-{{ specialTag }}</div>
		<a-button type="primary" @click="testClick(1)">点击+1</a-button>
		<a-button @click="testClick(-1)">点击-1</a-button>
		<div>console:{{ str }}-{{ arr[0] }}-{{ obj }}</div>
		<slot name="qq" :name1="name"></slot>
		<a-input v-model="str" placeholder="Basic usage" />
	</div>
</template>

<style lang="scss" scoped>
.test2 {
	width: 400px;
	margin: 0 auto;
}
</style>
