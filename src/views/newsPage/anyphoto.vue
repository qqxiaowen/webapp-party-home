<template>
    <div>
        <Hearder />
        <div class="clearfix pt110">
            <div class="item"  v-for="(item) in photodata" :key=item.newsId>
                <div @click="handleDital(item.newsId)">
                    <img :src="item.pic" alt="">
                    <span>{{item.title}}</span>
                </div>
            </div>
            
        </div>
        <Tofoot v-if="istofoot&&photodata" />
        <Nullcontent v-if="istofoot&&!photodata" />
    </div>

</template>

<script>
import Hearder from '@/components/Hearder'
import Nullcontent from '@/components/Nullcontent'
import Tofoot from '@/components/Tofoot'
    export default {
        components:{
            Hearder,
            Tofoot,
            Nullcontent,
        },
        data(){
            return{
                photodata:"",
                page:1,
                istofoot:false,
            }
        },
        methods:{
            getdata(){
                this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=7`).then(res => {
                    this.photodata = [...this.photodata,...res.rows]
                    if(res.rows.lenght == 10){
                        this.page = this.page + 1
                        this.getdata()
                    }else{
                        this.istofoot = true;
                    }
                })
            },
            handleDital(id){
                this.$router.push(`/NewDadil/${id}`)
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped lang="less">

.item{
    float: left;
    width: 3rem;
    height: 2.4rem;
    margin: 0.25rem 0.25rem 0.6rem 0.25rem;
    border: 0.05rem solid transparent;
    img{
        display: block;
        width: 100%;
        height: 2.4rem;
    }
    span{
        font-size: 0.26rem;
        color: #666;
        line-height: 1.5; 
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}

</style>