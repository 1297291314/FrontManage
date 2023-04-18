<template>
	<div class="entry-container">
		<a-list size="small" bordered :data-source="tableList">
			<template #renderItem="{ item }">
				<a-list-item @click="serverDetail(item)" class="server-list"> {{ item.name + '--' + item.id }}
					<a-tag v-if="item.status === 1" color="success">
						<template #icon>
							<check-circle-outlined />
						</template>已连接
					</a-tag>
					<a-tag v-if="item.status === 2" color="warn">
						<template #icon>
							<check-circle-outlined />
						</template>连接中
					</a-tag>
					<a-tag v-if="item.status === 3" color="error">
						<template #icon>
							<check-circle-outlined />
						</template>已失连
					</a-tag>
				</a-list-item>
			</template>
			<template #header>
				<div>Server</div>
			</template>
			<!-- <template #footer>
				<div>Footer</div>
			</template> -->
		</a-list>
	</div>
</template>

<script>
import { ref, inject } from 'vue'
import api from '@/api/index'
import { mapGetters, mapMutations } from 'vuex'
export default {
	name: 'entry', // 首页list
	components: {
	},
	data () {
		return {
			tableList: ref([])
		}
	},
	computed: {
		// ...mapGetters(['IP'])
	},
	methods: {
		// ...mapMutations(['setIP']),
		dataFetch () {
			api.getClientList()
				.then(res => {
					this.tableList = [...res]
				})
		},
		serverDetail (scoped) {
			// this.setIP({ IP: scoped })
			console.log(inject('$utils'))

			inject('$utils').storageSession.set('IP', scoped)
			this.$router.push({ path: '/test' })
		}
	},
	mounted () {
		this.dataFetch()
	},
	setup (props, context) {

	},
}
</script>

<style lang="scss" scoped>
.entry-container {
	max-width: 800px;
	margin: 0 auto;

	.server-list {
		cursor: pointer;
	}
}
</style>
