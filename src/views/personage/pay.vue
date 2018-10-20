<template>
    <div class="pt110">
        <Hearder />
        <div class="title">
            请选择支付方式
        </div>
        <div class="item" @click="openweixin">
            <div class="left">
                <i class="iconfont icon-weixin wenxin-ys"></i>微信 
            </div>
            <div class="right">
                <i></i>
            </div>
        </div>
        <div class="item" @click="openzhifubao">
            <div class="left">
                <i class="iconfont icon-umidd17 zhifubao-ys"></i>支付宝 
            </div>
            <div class="right">
                <i></i>
            </div>
        </div>
        <div class="modalbox" v-if="isshowweixin" @click="closeweixin">
            <div class="modalcontne">
                <span>微信支付</span>
                <img src="/static/img/wechat.png" alt="">
            </div>
        </div>
        <div class="modalbox" v-if="ishsowzhifubao" @click="closezhifubao">
            <div class="modalcontne">
                <span>支付宝支付</span>
                <img src="/static/img/alipay.png" alt="">
            </div>
        </div>
       
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
                isshowweixin:false,
                ishsowzhifubao:false,
            }
        },
        methods:{
            openweixin(){
                this.isshowweixin = true;
            },
            closeweixin(){
                this.isshowweixin = false;
            },

            openzhifubao(){
                this.ishsowzhifubao = true;
            },
            closezhifubao(){
                this.ishsowzhifubao = false;
            }

        }

        
    }
</script>

<style scoped lang='less'>
.title{
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
}
.item{
    display: flex;
    padding: 0 0.4rem;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .right{
        i{
        display: block;
        margin: 0.38rem auto;
        width: 0.2rem;
        height: 0.2rem;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotateZ(45deg)
        }
    }
}
.wenxin-ys{
    color: #6cc143;
    font-size: 36px;
    margin-right: 8px;
    vertical-align: middle;
}
.zhifubao-ys{
    color: #1296db;
    font-size: 42px;
    margin: 0 8px 0 -2px;
    vertical-align: middle;
}
.modalbox{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,.3);
    .modalcontne{
        position:absolute;
        top: 55%;
        left: 50%;
        width: 6rem;
        height: 6.8rem;
        transform:translate(-50%,-50%);
        background: #fff;
        text-align: center;
        span{
            display: block;
            padding: 0.2rem 0;
            font-size: 18px;
        }
        img{
           width: 5.5rem;
           height: 5.5rem;
           display: block;
           margin: 0 auto;
        }
    }
    
}
</style>