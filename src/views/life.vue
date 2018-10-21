<template>
    <div class="life pt110">
        <Hearder />
        <div class="banner">
            <img src="/static/img/timg.jpg" alt="">
        </div>
        <div class="iconlink clearfix">
            <router-link to="/study" class="icon-item fll">
                <img src="/static/img/icon1.png" alt="">
                <span>政治学习</span>
            </router-link>
            <div @click="handleThought" class="icon-item fll">
                <img src="/static/img/icon2.png" alt="">
                <span>思想汇报</span>
            </div>
            <div @click="handleHeart" class="icon-item fll">
                <img src="/static/img/icon3.png" alt="">
                <span>心得总结</span>
            </div>
            <div @click="handleFolk" class="icon-item fll">
                <img src="/static/img/icon4.png" alt="">
                <span>民主评议</span>
            </div>
            <router-link to="/findteam" class="icon-item fll">
                <img src="/static/img/icon5.png" alt="">
                <span>流动党员找组织</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import {islogin} from '@/utils/redlogin'
    export default {
        components:{
            Hearder,
        },
        methods:{
            handleThought(){
                islogin('thought',this)
            },
            handleHeart(){
                islogin('heart',this)
            },
            handleFolk(){
                islogin('folkhome',this)
            }
        }
    }
</script>

<style scoped lang='less'>

.banner{
    height: 3.72rem;
    img{
        width: 100%;
        height: 3.72rem;
    }
}
.iconlink{
    .icon-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        margin: 0.2rem;
        width: 2rem;
        padding: 0.2rem;
        box-sizing: border-box;
        img{
            width: 100%;
        }
        span{
            color: #666;
            padding-top: 0.2rem;
            font-size: 0.24rem;
        }
    }
}
</style>