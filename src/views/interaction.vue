<template>
    <div class=" pt110">
        <Hearder />
        <div class="interaction">
            <div class="item">
                <div class="row1">
                    <div class="left">
                        <img src="/static/img/icon_03.png" alt="">
                        <div>
                            <div class="title">名字</div>
                            <div class="date-message">
                                <span><i class="dmiconys iconfont icon-shijian"></i>2018-10-21</span>
                                <span><i class="dmiconys iconfont icon-xiaoxi"></i>公开</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="right">党员互动</div>
                </div>
                <div class="row2">
                    3333
                </div>
                <div class="row3">
                    <i class="dmiconys iconfont icon-xiaoxi2"></i>回复
                </div>
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

<style scoped lang='less'>
.interaction{
    background: #f1f1f1;
}
.item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2.4rem;
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
.row1{
    display: flex;
    justify-content: space-between;
}
.left{
    display: flex;
    // flex-direction: column;
    img{
        width: 0.7rem;
        height: 0.7rem;
        vertical-align: middle;
        margin-right: 0.2rem;
    }
}
.right{
    border: 1px solid #f00;
    color: #f00;
    width: 1.2rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.22rem;
    text-align: center;
    border-top-left-radius: 15% 50%;
    border-top-right-radius: 15% 50%;
    border-bottom-right-radius: 15% 50%;
    border-bottom-left-radius: 15% 50%;
}
.date-message{
    font-size: 0.22rem;
    color: #666;
    padding-top: 0.05rem;
    
}
.dmiconys{
    font-size: 14px;
    margin-right: 0.1rem;
}
.row2{
    height: 1rem;
    font-size: 0.28rem;
    color: #333;
}
.row3{
    text-align: right;
    font-size: 0.28rem;
    color: #333;
}
</style>