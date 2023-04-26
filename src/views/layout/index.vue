<template>
	<a-layout style="min-height: 100vh">
		<a-layout-sider v-model:collapsed="collapsed" collapsible>
			<div :class="collapsed ? 'force-logo-collapsed' : 'force-logo'"></div>
			<!-- {{ selectedKeys }} -->
			<a-menu v-model="selectedKeys" theme="dark" mode="inline">
				<a-sub-menu class="force-sub-menu" :key="item.path" v-for="item in userRoutes">
					<template #title>
						<span>
							<span>{{ item.meta.title }}</span>
						</span>
					</template>
					<a-menu-item class="force-sub-item"
						@click="routeAction(`${item.path}/${itemchildren.path}`)"
						v-for="itemchildren in item.children"
						:key="itemchildren.path"
						>{{ itemchildren.meta.title }}</a-menu-item
					>
				</a-sub-menu>
				<!-- <a-menu-item key="1">
					<pie-chart-outlined />
					<span>Option 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<desktop-outlined />
					<span>Option 2</span>
				</a-menu-item>
				<a-sub-menu key="sub1">
					<template #title>
						<span>
							<user-outlined />
							<span>User</span>
						</span>
					</template>
					<a-menu-item key="3">Tom</a-menu-item>
					<a-menu-item key="4">Bill</a-menu-item>
					<a-menu-item key="5">Alex</a-menu-item>
				</a-sub-menu>
				<a-sub-menu key="sub2">
					<template #title>
						<span>
							<team-outlined />
							<span>Team</span>
						</span>
					</template>
					<a-menu-item key="6">Team 1</a-menu-item>
					<a-menu-item key="8">Team 2</a-menu-item>
				</a-sub-menu>
				<a-menu-item key="9">
					<file-outlined />
					<span>File</span>
				</a-menu-item> -->
			</a-menu>
		</a-layout-sider>

		 <a-layout class='font-layout'>
			<!-- <a-page-header
			style="background-color: #fff; "
			title="Title"
			:breadcrumb="{ routes }"
			sub-title="This is a subtitle"
  		/> -->
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
	FileOutlined
} from '@ant-design/icons-vue'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
defineComponent({
	PieChartOutlined,
	DesktopOutlined,
	UserOutlined,
	TeamOutlined,
	FileOutlined
})

const store = useStore()
const collapsed = ref(false)
const selectedKeys = ref(['1'])
const userRoutes = computed(() => store.state.userRoutes)
const router = useRouter()
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
const routeAction = (path) => {
	router.push(path)
}
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
    overflow: hidden;
	&-router{
		padding: 24px;
		background: #fff;
		min-height: 360px;
		overflow-y: auto;
		max-height: calc(100vh - 48px);
	}
}
</style>
