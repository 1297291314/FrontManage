<template>
    <section class="trade-login">
        <a-button @click="click">登录</a-button>
        <a-button @click="get">获取测试</a-button>
    </section>
</template>
<script>
import api from '@/api'
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
        },
        get(){
            api.getClientList()
                .then(res=>{
                    console.log(res)
                })
        }
    },
    filters: {}
}
</script>
<style lang="scss" scoped>
</style>
