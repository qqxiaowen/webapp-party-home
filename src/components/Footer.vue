<template>
    <div class="footer">
       <ul>
           <li><router-link :class="{active:$route.name === 'home'}" to="/"><i class="iconfont icon-dangwugongkai"></i>首页</router-link></li>
           <li><router-link :class="{active:$route.name === 'message'}" to="/message"><i class="iconfont icon-xiaoxi4"></i>通知早知道</router-link></li>
           <li><router-link :class="{active:$route.name === 'myself'}" to="/myself"><i class="iconfont icon-wodedangxuan"></i>我的党建</router-link></li>
       </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>


<style scoped lang='less'>
.footer{
    position: fixed;
    z-index: 998;
    left: 0;
    bottom: 0;
    right: 0;
    width: 7.2rem;
    height: 1.04rem;
    border-top: 1px solid #ccc;
    background: #fff;
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        li a{
            display: flex;
            width: 2.6rem;
            height: 1.04rem;
            flex-direction: column;
            justify-content:center;
            align-items: center;
            color: #aaaaaa;
            font-size: 0.24rem;
            i{
                font-size: 0.44rem;
            }
        }
        .active{
            color: #c7000a;
            margin-top: -2px;
            border-top: 2px solid #ef473a;
        }
    }
}
</style>



