<template>
    <div class="today pt110">
        <Hearder />
        <!-- <img v-if="isloading" class="loading" src="/static/svg/loading.gif" alt="">
        <div class="detail">
            <div class="title" v-text="nwedetail.title">
            </div>
            <div class="content" v-html="nwedetail.content">
            </div>
        </div> -->
    </div>
</template>

<script>
    import Hearder from '@/components/Hearder'
    export default {
        components:{
            Hearder
        },
        data(){
            return{
                data:'',
            }
        },
        methods:{
            getData(){
                let url = 'http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html'
                this.$axios.get(`/proxy/proxy.do?url=${url}`).then(res => {
                    console.log(res)
                })
            },
        },
        
        created(){
            this.getData()
        }
        
    }
</script>


<style scoped lang='less'>
.today{
    padding: 0.2rem;
    .title{
        font-size: 0.5rem;
        margin: 0.2rem 0;
    }
        .content{
            line-height: 0.5rem;
            /deep/ p{
                font-size: 12px;
                margin: 0.2rem 0;
            }
            /deep/ h4{
                font-size: 18px;
                margin: 0.2rem 0;
                font-weight: 500;
            }
            /deep/ span{
                font-size: 16px;
            }
            /deep/ img{
            display: block;
            max-width:100%;
            margin: 0.2rem 0;
            }
        }
   
}

</style>