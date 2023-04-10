<template>
    <p>您没有查看此页面的权限, 请<span class="error-relogin" @click="gotoLogin">重新登录</span></p>
</template>
<script>
export default {    
    methods: {
        gotoLogin () {
            this.$utils.storage.remove('userId', 'access')
            this.$router.push({ path: '/login' })
        }
    }
}
</script>
<style lang="scss" scoped>
.error-relogin {
    cursor: pointer;
    text-decoration: underline;
}
</style>
