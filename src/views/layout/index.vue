<template>
	<a-layout style="min-height: 100vh">
		<a-layout-sider v-model:collapsed="collapsed" collapsible>
			<div :class="collapsed ? 'force-logo-collapsed' : 'force-logo'"></div>
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
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
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0" />
			<a-layout-content style="margin: 0 16px">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item>User</a-breadcrumb-item>
					<a-breadcrumb-item>Bill</a-breadcrumb-item>
				</a-breadcrumb>
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<router-view v-slot="{ Component }">
						<transition name="fade" mode="out-in">
							<component :is="Component" :key="$route.path" />
						</transition>
					</router-view>
				</div>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				copyright © 2023. All Rights Reserved. Created by <strong>The Force Team</strong>
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
	components: {
		PieChartOutlined,
		DesktopOutlined,
		UserOutlined,
		TeamOutlined,
		FileOutlined,
	},
	data () {
		return {
			collapsed: ref(false),
			selectedKeys: ref(['1']),
		};
	},
});
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
</style>
