<template>
    <div class="life pt110">
        <Hearder />
        <div class="banner">
            <img src="/static/img/timg.jpg" alt="">
        </div>
        <div class="iconlink clearfix">
            <router-link to="" class="icon-item fll">
                <img src="" alt="">
                <!-- <span>政治学习</span> -->
            </router-link>
             <router-link to="" class="icon-item fll">
                <img src="" alt="">
                <!-- <span>政治学习</span> -->
            </router-link>
             <router-link to="" class="icon-item fll">
                <img src="" alt="">
                <!-- <span>政治学习</span> -->
            </router-link>
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
    export default {
        components:{
            Hearder,
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
        margin: 0.2rem;
        width: 2rem;
    }
}
</style>