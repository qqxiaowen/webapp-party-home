<template>
    <div class="pt110">
        <Hearder />
        <Nullcontent v-if="!scoredata&&istofoot" />
           <div v-infinite-scroll="loadMore"
                infinite-scroll-disabled="isOffUpload"  >
                <div class="item" v-for="(item,index) in scoredata" :key=index>
                    <div class="left">
                        <div class="row1">
                        {{item.typeName}}
                        </div>
                        <div class="row2">
                        {{item.timeFormat}}
                        </div>
                    </div>
                    <div class="right">
                        +{{item.singleDesc}}
                    </div>
                </div>
                <img v-if="!istofoot"  class="loading" src="/static/svg/loading.gif" alt="">
           </div>
        <Tofoot v-if="scoredata&&istofoot" />
           
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import Nullcontent from '@/components/Nullcontent'
import Tofoot from '@/components/Tofoot'
    export default {
        components:{
            Hearder,
            Nullcontent,
            Tofoot
        },
        data(){
            return{
                scoredata:'',
                page:1,
                isOffUpload:true,
                istofoot:false
            }
        },
        methods:{
            getdata(){
                this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res => {
                    this.scoredata =[...this.scoredata,...res.rows] 
                    this.isOffUpload = false; //先开启下拉
                    if(res.rows.length < 10){
                        this.isOffUpload = true;    //关闭下拉
                        this.istofoot = true;
                    }
                })
            },
            // 上拉加载
            loadMore(){
                console.log(11)
                this.page = this.page + 1
                this.getdata()
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped lang="less">
.item{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    height: 1.6rem;
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row1{
            font-size: 0.34rem;
        }
        .row2{
            font-size: 0.24rem;
        }
    }
    .right{
        color: #f00;
    }
}
</style>