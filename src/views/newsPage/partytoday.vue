<template>
    <div class="today pt110">
        <Hearder />
        <img v-if="isloading" class="loading" src="/static/svg/loading.gif" alt="">
        <div class="detail">
            <div v-html="content"></div>
        </div>
    </div>
</template>

<script>
    import Hearder from '@/components/Hearder'
    import {getpartyUrl,getcontent} from '@/utils/partytoday'
    export default {
        components:{
            Hearder
        },
        data(){
            return{
                data:'',
                url:'',
                content:'',
                isloading:true,
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/proxy/proxy.do?url=${this.url}`).then(res => {
                    this.content = getcontent(res)
                    this.isloading = false;
                })
            },
        },
        
        created(){
            this.url = getpartyUrl()
            this.getData()
        }
        
    }
</script>
<style lang="less">
.detail{
    h1{
        font-weight: 400;
        font-size: 26px;
    }
}
</style>
