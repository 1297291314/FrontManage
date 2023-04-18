<template>
	<Test :name="'test3'" />11
</template>

<script>
import Test from './test.vue'
export default {
	name: 'test',
	components: {
		// 其他组件引用位置
		Test
	}
}
</script>
<style></style>
