<template>
    <div class="message pt110 pb104">
        <Hearder/>
        <div class="messageItem clearfix" v-for="(item,index) in newdata" :key=index >
            <div @click="handleNewDetail(item.newsId)">
                <div class="messLeft fll"></div>
                <div class="messRight fll">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="date">
                    {{item.currentTime}}
                    </div>
                </div>
            </div>
        </div>
        <img v-if="isloading" class="loading" src="/static/svg/loading.gif" alt="">
        <Tofoot v-if="isshow"/>
        <Nullcontent v-if="!newdata&&!isloading" />
        <Footer />
    </div>
</template>

<script>
import Hearder from '../components/Hearder'
import Footer from '../components/Footer'
import Tofoot from '../components/Tofoot'
import Nullcontent from '../components/Nullcontent'
import {handletime} from '../utils'
    export default {
        components:{
            Hearder,
            Footer,
            Tofoot,
            Nullcontent
        },
        data(){
            return{
                newdata:'',
                page:1,
                size:2,
                isshow:false,
                isloading:true,
            }
        },
        methods:{
            getdata(){
            this.$axios.get(`news/newsList.do?page=${this.page}&rows=${this.size}&type=2`).then(res => {
                this.newdata = [...res.rows,...this.newdata]
                if(res.rows.length == this.size){
                    this.page = this.page+1
                    this.getdata()
                }else{
                    this.isloading = false;
                    this.isshow = true;
                }
                
                })
            },
            handleNewDetail(id){
                console.log(id)
                this.$router.push(`/newDetail/${id}`)
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped lang="less">
.messageItem{
    padding: 0.2rem 0.26rem;
    border-bottom: 1px solid #cccccc;;
    .messLeft{
        width: 0.84rem;
        height: 0.6rem;
        margin-right: 0.18rem;
        background: url('/static/img/iconfont_gonggaotongzhi.png') no-repeat;
        background-size: 0.6rem 0.6rem;
    }
}
.messRight{
    width: 5.6rem;
    font-size: 0.22rem;
    .title{
        font-size: 0.28rem;
        color: #666;
    }
    .date{
        font-size: 0.22rem;
        color: #999;
        padding: 0.12rem 0;
    }
    .content{
        height: 1.4rem;
        overflow: hidden;
        line-height: 1.8;
        font-size: 0.22rem;
        color: #666;
    }
}
.messNull{
    position:relative;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666;
    font-size: 0.28rem;
    .span1{
        position:absolute;
        left: 0;
        right: 0;
        top: 29px;
        height: 1px;
        background: #cccccc;
        z-index: 1;
    }
    .span2{
        position: relative;
        padding: 0 0.2rem;
        background: #fff;
        z-index: 996;
    }
}
</style>