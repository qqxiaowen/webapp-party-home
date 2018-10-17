<template>
    <div class="new-eyes pt110">
        <Hearder />
        <Nullcontent v-if="!newData&&!loading" />
        <div v-infinite-scroll="handleBootom"
            infinite-scroll-disabled="loading" >
            <div v-for="(item,index) in newData" :key="index" >
                <div class="newitem" @click="$router.push(`/NewDadil/${item.newsId}`)">
                    <div class="left">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="right">
                        <div class="title">
                            {{item.title}}
                        </div>
                        <div class="row2">
                            <div class="date">
                                {{item.currentTime}}
                            </div>
                            <div class="read-num">
                                <i class=" eyes-ys iconfont icon-yanjing"></i>
                                <span class="num-text flr">{{item.count}}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img v-if="isimgloading" class="loading" src="/static/svg/loading.gif" alt="">
            <Tofoot v-if="tofoot" />
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import Tofoot from '@/components/Tofoot'
import Nullcontent from '@/components/Nullcontent'
    export default {
        components:{
            Hearder,
            Tofoot,
            Nullcontent
        },
        data(){
            return{
                type:'',
                newData:'',
                page:1,
                loading:true,
                isimgloading:true,
                tofoot:'',
            }
        },
        methods:{
            handleBootom(){
                this.page = this.page+1
                this.getdata()
            },
            getdata(){
                this.$axios.get(`news/newsList.do?page=${this.page}&rows=10&type=${this.type}`).then( res => {
                    this.newData = [...this.newData,...res.rows]
                    // console.log(res.rows.length)
                    this.loading = false
                    if(res.rows.length == 0){
                        this.loading = true
                        this.tofoot = true
                        this.isimgloading = false
                    }
                })
            }
        },
        created(){
            switch(this.$route.meta.name){
                case 'dadilEyes':
                    this.type = 0 
                    break;
                case 'activity':
                    this.type = 1 
                    break;
                case 'oneclick':
                    this.type = 3
                    break;
                case 'system':
                    this.type = 4
                    break;
                case 'showrank':
                    this.type = 5
                    break;
                case 'anystudy':
                    this.type = 6
                    break;
            }
            this.getdata()
        }
    }
</script>

<style scoped lang='less'>
.newitem{
    font-size: 0.22rem;
    display: flex;
    justify-content:space-between;
    padding: 0.18rem 0.22rem;
    border-bottom: 1px solid #ccc;
    .left{
        margin-right: 0.2rem;
        img{
            width: 1.6rem;
            height: 1.6rem;
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 1.6rem;
        .title{
            color: #333;
            line-height: 0.5rem;
            font-size: 0.3rem;
        }
    }
    .row2{
        display: flex;
        justify-content:space-between;
        font-size: 0.18rem;
        color: #666;
        .read-num{
            width: 0.8rem;
            .eyes-ys{
                // float: left;
                font-size: 0.22rem;
                color: #ccc;
            }
           
        }
    }
}

</style>