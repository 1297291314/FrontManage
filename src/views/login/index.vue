<template>
	<section class="trade-login">
		<a-button @click="click">登录</a-button>
		<a-button @click="get">获取测试</a-button>
	</section>
</template>
<script>
import api from '@/api'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
	name: 'login',
	props: {},
	components: {},
	data () {
		return {
			loginForm: {
				userId: '',
				password: ''
			},
			loginLoading: false
		}
	},
	computed: {
		...mapGetters(['isManager', 'testArray'])
	},
	watch: {},
	created () { },
	mounted () {
		this.getClientListAction(1)
	},
	methods: {
		...mapMutations(['setIsManager']),
		...mapActions(['getClientListAction']),
		click () {
			this.$router.push({ name: 'error' })
		},
		get () {
			console.log('isManager', this.isManager, this.testArray.id)
			api.getClientList().then((res) => {
				console.log(res)
			})
		}
	},
	filters: {}
}
</script>
<style lang="scss" scoped></style>
