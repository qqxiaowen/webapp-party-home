<template>
    <div class="pt110">
        <Hearder />
        <div class="folkhome-content">
            <button @click="$router.push('/personalsummary')">个人总结</button>
            <button @click="$router.push('/deliberate')">民主评议</button>
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
.folkhome-content{
    padding: 3rem 1.8rem;
    button{
        width: 100%;
        height: 0.9rem;
        line-height: 0.9em;
        margin-bottom: 0.4rem;
        text-align: center;
        background: #c50206;
        border: none;
        border-radius: 6px;
        color: #fff;
    }
}
</style>