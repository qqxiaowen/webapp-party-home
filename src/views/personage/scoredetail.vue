<template>
    <div class="pt110">
        <Hearder />
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
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
    export default {
        components:{
            Hearder,
        },
        data(){
            return{
                scoredata:'',
                page:1
            }
        },
        methods:{
            getdata(){
                this.$axios.get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res => {
                    this.scoredata = res.rows
                })
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