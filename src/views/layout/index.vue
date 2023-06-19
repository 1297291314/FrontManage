<template>
	<a-layout style="min-height: 100vh">
		<a-layout-sider v-model:collapsed="collapsed" >
			<div :class="collapsed ? 'force-logo-collapsed' : 'force-logo'"></div>
			<a-menu
   				v-model:selectedKeys="selectedKeys"
				theme="dark" mode="inline">
				<a-menu-item @click="routeAction(item.path)" class="force-sub-menu" :key="item.path" v-for="item in userRoutes[0].children">
					<!-- <pie-chart-outlined /> -->
					<span>{{ item.meta.title }}</span>
				</a-menu-item>
				<!-- <a-sub-menu key="sub1">
					<template #title>
						<span>
							<user-outlined />
							<span>User</span>
						</span>
					</template>
					<a-menu-item key="3">Tom</a-menu-item>
					<a-menu-item key="4">Bill</a-menu-item>
					<a-menu-item key="5">Alex</a-menu-item>
				</a-sub-menu> -->
			</a-menu>
		</a-layout-sider>

		 <a-layout class='font-layout'>
			<a-page-header
			style="background-color: #fff; "
			:title="route.meta.title"
  			>
				<!-- <template #extra>
					<a-tooltip >
						 <template #title>返回首页</template>
						<a-button @click="backServe" type="primary" shape="circle">
							<template #icon><logout-outlined /></template>
						</a-button>
					</a-tooltip>
				</template> -->
			</a-page-header>
		<!-- sub-title="This is a subtitle" -->
			<!-- <a-layout-header style="background: #fff; padding: 0" /> -->
			<a-layout-content style="margin: 16px">
				<!-- <a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item>User</a-breadcrumb-item>
					<a-breadcrumb-item>Bill</a-breadcrumb-item>
				</a-breadcrumb> -->
				<div class="font-layout-router">
					<router-view />

					<!-- <transition name="fade" mode="out-in">
							<router-view />
					</transition> -->

					<!-- <router-view v-slot="{ Component }">
						<transition>
							<component :is="Component" />
						</transition>
					</router-view> -->

					<!-- <router-view v-slot="{ Component }">
						<transition name="fade" mode="out-in">
							<component :is="Component" :key="$route.path" />
						</transition>
					</router-view> -->
				</div>
			</a-layout-content>
			<!-- <a-layout-footer style="text-align: center">
				copyright © 2023. All Rights Reserved. Created by <strong>The Force Team</strong>
			</a-layout-footer> -->
		</a-layout>
	</a-layout>
</template>
<script setup>
import {
	PieChartOutlined,
	DesktopOutlined,
	UserOutlined,
	TeamOutlined,
	FileOutlined,
	LogoutOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref, computed,onBeforeMount} from 'vue'
import { useStore } from 'vuex'
import { useRouter,useRoute } from 'vue-router'
defineComponent({
	PieChartOutlined,
	DesktopOutlined,
	UserOutlined,
	TeamOutlined,
	FileOutlined,
	LogoutOutlined
})

const store = useStore()
const collapsed = ref(false)
const selectedKeys = ref(['/beforeStage'])
const userRoutes = computed(() => store.state.userRoutes)
const router = useRouter()
const route = useRoute()
// const routes = ref([
//   {
//     path: 'index',
//     breadcrumbName: 'First-level Menu',
//   },
//   {
//     path: 'first',
//     breadcrumbName: 'Second-level Menu',
//   },
//   {
//     path: 'second',
//     breadcrumbName: 'Third-level Menu',
//   },
// ])
onBeforeMount(() => {
	// console.log(route.fullPath,route.path)
	selectedKeys.value = ['/'+route.path.split('/')[1]]
})
const routeAction = (path) => {
	router.push(path)
}
// const backServe = (path) => {
// 	router.push({ path: '/entry' })
// }
</script>
<style lang="scss">
.force-logo {
	height: 64px;
	background: url('~@/assets/image/force-horizontal--light.png') no-repeat;
	background-position: center;
	background-size: 65%;
}

.force-logo-collapsed {
	height: 64px;
	background: url('~@/assets/image/force-notitle.png') no-repeat;
	background-position: center;
	background-size: 45% auto;
}

.site-layout .site-layout-background {
	background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
	background: #141414;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.force-sub-menu {
    padding: 0 6px;
	.force-sub-item{
		border-radius: 4px;
	}
}
.font-layout{
	height: 100vh;
    overflow-y: auto;
	&-router{
		padding: 24px;
		background: #fff;
		min-height: 360px;
		// overflow-y: auto;
		// max-height: calc(100vh - 48px);
	}
}
</style>
