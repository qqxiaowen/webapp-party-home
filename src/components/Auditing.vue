<template>
    <div class="audting">
        <div class="audt-top">
            <img src="/static/img/reviewing.png" alt="">
            <span>正在审核中</span>
        </div>
        <div class="audt-button">
            <button @click="$router.back()">关闭</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>
.audting{
    padding: 0.8rem 1.5rem;
    .audt-top{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 2.5rem;
        justify-content: space-between;
        img{
            display: inline-block;
            margin: 0 auto;
            width: 1.8rem;
            height: 1.8rem;
            margin-bottom: 0.2rem;
        }
        span{
            font-size: 14px;
            color: #666;
        }
       
    }
    .audt-button{
        margin-top: 1.5rem;
        button{
            width: 100%;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            background: #c50206;
            border: none;
            border-radius: 6px;
            color: #fff;
        }
        
    }
}

</style>