<template>
    <div class="myself pt110 pb104">
        <Hearder />

        <div class="userbox" v-if="!$store.state.userinfo">
            <div class="userimg">
                <router-link to="/login"><img src="/static/img/头像.png" alt=""></router-link> 
            </div>
            <div class="username">
                <router-link to="/login">你还没有登录，请登录</router-link> 
            </div>
        </div>
        
        <div class="userbox" v-else>
            <div class="userimg">
                <router-link to ><img v-lazy="$store.state.userinfo.header" alt=""></router-link> 
            </div>
            <div class="username">
                {{$store.state.userinfo.username}}
            </div>
        </div>

        <div class="my-nav">
            <div class="my-nav-item" @click="handleMyinfo">
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/person.png" alt=""> 个人信息
                </div>
            </div>
            <div class="my-nav-item" @click="handleMyscore" >
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/lxjf.png" alt=""> 个人量化积分
                </div>
            </div>
            <div class="my-nav-item" >
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/xgmm.png" alt=""> 修改密码
                </div>
            </div>
            <div class="my-nav-item" >
                <div class="nav-right flr">
                    <i></i>
                </div>
                <div class="nav-left">
                   <img src="/static/img/icon3.png" alt=""> 党费缴纳
                </div>
            </div>
        </div>
        <div class="loginout" v-if="$store.state.userinfo">
            <button @click="handleLoginOut">退出登录</button>
        </div>
        
        <Footer />
    </div>
</template>

<script>
import Hearder from '../components/Hearder'
import Footer from '../components/Footer'
import { islogin } from '@/utils/redlogin'

import { Indicator } from 'mint-ui';
    export default {
        components:{
            Hearder,
            Footer
        },
        methods:{
            handleLoginOut(){
                let userinfo = ''
                let token = ''
                Indicator.open('正在退出...');
                setTimeout(() => {
                    Indicator.close();
                    this.$store.commit('CHANGEINFO',userinfo) //清空vuex里数据
                    this.$store.commit('CHANGETOKEN',token) //清空vuex里数据
                }, 300);
            },
            handleMyinfo(){
                islogin('info', this)
                // if(this.$store.state.userinfo){
                //     this.$router.push(`/info`)
                // }else{
                //     this.$router.push(`/login?redirect=info`)
                // }
            },
            handleMyscore(){
                islogin('score',this)
            }
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
        color: #ffffff;
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
.loginout{
    padding: 0.7rem 0.2rem 0;
    button{
        display: block;
        width:100%;
        height: 0.8rem;
        margin: 0 auto;
        text-align: center;
        background: #e43228;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 4px;
    }
}
</style>