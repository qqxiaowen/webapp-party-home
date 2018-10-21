<template>
    <div class="pt110">
        <Hearder />
        <div class="deilber">
            <div class="title">
                评议须知
            </div>
            <div class="content" v-html="content.content"></div>
            <div class="button">
                <select name='slectbox' v-model="value">
                    <option value="0">请选择</option>
                    <option v-for="item in select" :key=item.id :value=item.id >{{item.branch}}</option>
                </select>
                <button @click="handledetil">下一步</button>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import { Toast } from 'mint-ui';

    export default {
        components:{
            Hearder
        },
        data(){
            return{
                value:"0",
                content:'',
                select:'',
            }
        },
        methods:{
            getcontent(){
                this.$axios.get(`/nationComment/getComment.do`).then(res => {
                    this.content = res
                })
            },
            getselect(){
                this.$axios.get(`/branch/findAll.do`).then(res => {
                    this.select = res.rows
                })
            },
            handledetil(){
                if(this.value == "0"){
                    Toast('请先选择一项数据')
                }else{
                    this.$router.push(`/lookperson?select_branch=${this.value}`)
                }
            }
        },
        created(){
            this.getcontent()
            this.getselect()
        }
    }
</script>

<style scoped lang='less'>
.deilber{
    padding: 0.2rem;
    .title{
        height: 0.8rem;
        font-size: 0.32rem;
        line-height: 0.8rem;
        text-align: center;
    }
    .content{
        padding-top: 0.2rem;
        margin: 0.25rem 0;
        font-size: 0.28rem;
        color: #666;
        /deep/ p {
            margin: 0.1rem 0;
        }
    }
    
    .button{
        margin: 1.8rem 0.8rem 0;
        display: flex;
        justify-content: space-between;
        height: 0.8rem;
        select{
            padding-left: 0.2rem;
            width: 3.2rem;
            margin-right: 0.2rem;
            border-radius: 4px;
            background: #c50206;
            color: #fff;
            option{
                background: #fff;
                color: #000;
                width: 100%;
            }
        }
        button{
            width: 1.8rem;
            border-radius: 4px;
            background: #c50206;
            border: none;
            color: #fff;
            outline: none;
        }
    }
}
</style>