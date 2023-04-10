<template>
    <section class="trade-login">
        <a href="javascript:void;" @click="click">登录</a>
    </section>
</template>
<script>

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
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        click(){
            this.$router.push({name:'error'})
        }
    },
    filters: {}
}
</script>
<style lang="scss" scoped>
</style>
