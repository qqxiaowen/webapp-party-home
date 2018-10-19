<template>
    <div class="hearder-top">
        <div class="box-back" v-if="isShowBack" @click="$router.back()"><i ></i></div>
        <span v-text="title||$route.meta.desc"></span>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            }
        },
        data(){
            return{
                
            }
        },
        methods: {
            
        },

        computed:{
            isShowBack(){
                let title = this.$route.meta.desc
                if(title == '通知早知道' || title =='我的党建'){
                    return false;
                }else{
                    return true;
                }   
            },
        }
        
    }
</script>

<style scoped lang="less">
.hearder-top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 955;
    padding: 0 0.44rem ;
    box-sizing: border-box;
    width: 7.2rem;
    height: 1.11rem;
    color: #fff;
    text-align: center;
    line-height: 1.11rem;
    background: #c50206;
   .box-back{
        position: absolute;
        left: 0.2rem;
        width: 1rem;
        height: 1.11rem;
        i{
            display: block;
            margin: 0.44rem auto;
            width: 0.2rem;
            height: 0.2rem;
            border-top: 1px solid #fff;
            border-right: 1px solid #fff;
            transform: rotateZ(-135deg)
        }
    }
}
</style>