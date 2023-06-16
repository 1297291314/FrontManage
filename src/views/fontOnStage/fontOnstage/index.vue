<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="现货">
		<a-card style="width: 300px">
			<p>Card content</p>
			<p>Card content</p>
			<p>Card content</p>
		</a-card>
	</a-tab-pane>
    <a-tab-pane key="2" tab="两融" force-render>两融</a-tab-pane>
    <a-tab-pane key="3" tab="期权">期权</a-tab-pane>
	<a-tab-pane key="3" tab="自营">自营</a-tab-pane>
  </a-tabs>
</template>
<script setup>
import { ref } from 'vue';
const activeKey = ref('1')
</script>
