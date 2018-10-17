<template>
    <div class="tofoot">
        <span class="span1"></span>
        <span class="span2">我是有底线的</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='less'>

.tofoot{
    position:relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666;
    font-size: 0.28rem;
    .span1{
        position:absolute;
        left: 0;
        right: 0;
        top: 29px;
        height: 1px;
        background: #cccccc;
        z-index: 1;
    }
    .span2{
        position: relative;
        padding: 0 0.2rem;
        background: #fff;
        z-index: 996;
    }
}
</style>