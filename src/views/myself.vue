<template>
    <div class="myself pt110 pb104">
        <Hearder />

        <div class="userbox">
            <div class="userimg">
                <router-link to="/login"><img src="/static/img/头像.png" alt=""></router-link> 
            </div>
            <div class="username">
                <router-link to="/login">马上登陆，获取xxx</router-link> 
            </div>
        </div>
        <div class="my-nav">
            <router-link class="my-nav-item" to="/">
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/person.png" alt=""> 个人信息
                </div>
            </router-link>
            <router-link class="my-nav-item" to="/">
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/lxjf.png" alt=""> 个人量化积分
                </div>
            </router-link>
            <router-link class="my-nav-item" to="/">
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/xgmm.png" alt=""> 修改密码
                </div>
            </router-link>
            <router-link class="my-nav-item" to="/">
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/icon3.png" alt=""> 修改密码
                </div>
            </router-link>
        </div>
        
        <Footer />
    </div>
</template>

<script>
import Hearder from '../components/Hearder'
import Footer from '../components/Footer'
    export default {
        components:{
            Hearder,
            Footer
        }
        
    }
</script>

<style scoped lang='less'>
.userbox{
    height: 2.78rem;
    background: #c50206;
    border-top: 2px solid #ce282b;
    .userimg{
        width: 1.24rem;
        height: 1.24rem;
        margin: 0.54rem auto 0.32rem;
        border-radius: 50%;
        overflow: hidden;
        img{
            display: block;
            width: 1.24rem;
            height: 1.24rem;
        }
    }
    .username{
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.26rem;
        text-align: center;
        a{
        color: #ffffff;
        }
    }
}
.my-nav-item{
    display: block;
    height: 0.9rem;
    line-height: 0.9rem;
    columns: #959595;
    font-size: 0.25rem;
    padding: 0 0.24rem;
    border-bottom: 1px solid #ccc;
    color: #333;
    .nav-right{
        height: 100%;
        margin-right: 0.06rem;
        i{
            display: block;
            margin: 0.3rem auto;
            width: 0.2rem;
            height: 0.2rem;
            border-top: 1px solid #000;
            border-right: 1px solid #000;
            transform: rotateZ(45deg)
        }
    }
    .nav-left{
        img{
            float: left;
            padding: 0.12rem 0.34rem 0 0.24rem;
            width: 0.66rem;
            height: 0.66rem;
        }
    }
}
</style>