<script setup>
import { ref, onBeforeMount, inject, defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '@/api/componentServer'
import { message } from 'ant-design-vue'



const showElement = ref('index')
const tableList = ref([])


const dataFetch = () => {
	api.getClientList().then((res) => {
		tableList.value = [...res]
	})
}
const handleClose = (str) => {
	showElement.value = str
}
onBeforeMount(() => {
	dataFetch()
})


</script>

<template>
	<div>

	</div>
</template>

<style lang="scss" scoped>

</style>
