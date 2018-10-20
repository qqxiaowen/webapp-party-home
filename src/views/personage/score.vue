<template>
    <div class="score pt110">
        <Hearder />
        <div class="bander">
            <div class="bander-font">{{$store.state.userinfo.totalScore}}</div>
        </div>
        <router-link to="/scoredetail" class="my-nav-item">
            <div class="nav-right flr">
                <i></i>
            </div>
            <div class="nav-left">
                <img src="/static/img/lxjf.png" alt=""> 积分明细
            </div>
        </router-link>
        <div class="score-content">
            <div class="row1">
                <span class="row-left">积分规则</span>
                <i class="contnent-row1"></i>
            </div>
            <div class="row1 row2">
                <span class="row-left">登录APP</span>
                <span class="row-right">5</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">完善个人信息</span>
                <span class="row-right">2</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">查看积分</span>
                <span class="row-right">1</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">按时交纳党费</span>
                <span class="row-right">10</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">查看通知</span>
                <span class="row-right">2</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">了解学院工作动态</span>
                <span class="row-right">5</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">上交思想汇报经审核通过</span>
                <span class="row-right">5</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">提交个人总结，并参与评议</span>
                <span class="row-right">2</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">积极参与互动</span>
                <span class="row-right">5</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">学习党建知识</span>
                <span class="row-right">5</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">学习党史</span>
                <span class="row-right">10</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">创先争优事迹</span>
                <span class="row-right">10</span>
            </div>
            <div class="row1 row2">
                <span class="row-left">学党章，学习习近平总书记系列讲话</span>
                <span class="row-right">10</span>
            </div>
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
    export default {
        components:{
            Hearder
        }
        
    }
</script>

<style scoped lang="less">
.bander{
    height: 2.78rem;
    background: url('/static/img/jifen.png') no-repeat;
    background-size: 100%;
    .bander-font{
        text-align: center;
        color: #fff;
        font-weight: 100;
        padding: 1.3rem 0 0;
        font-size: 14px;
    }
}
.my-nav-item{
    display: block;
    height: 0.9rem;
    line-height: 0.9rem;
    columns: #959595;
    font-size: 0.25rem;
    padding: 0 0.24rem;
    margin-top: 0.1rem;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
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
.score-content{
    .row1{
        display:flex;
        justify-content: space-between;
        background: rgb(238, 238, 238);
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        font-size: 0.26rem;
        .contnent-row1{
            width: 0.6rem;
            height: 0.6rem;
            background: url('/static/img/wenhao.png') no-repeat center;
        }
    }
    .row2{
        background: #fff;
        font-size: 0.24rem;
        color: rgb(153, 153, 153);
        border-bottom: 1px solid #ddd;
        .row-right{
            color: #f00;
        }
    }
}
</style>