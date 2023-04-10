<template>
    4.Test3<Test3 :name="'test3'"/>
</template>

<script>
    import Test from './test.vue'
    export default {
        name: 'test',
        components: {// 其他组件引用位置
            Test
        }
    }
</script>
<style>
</style>