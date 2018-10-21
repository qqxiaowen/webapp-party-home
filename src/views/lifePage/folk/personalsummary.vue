<template>
    <div class="pt110">
        <Hearder />
        <div class="summary">
            <div class="imgbox clearfix">
                <div class="fll" v-for="(item,index) in imgs" :key=index >
                    <img :src="item" alt="">
                </div>
                <label class="upload">
                    <input @change="uploadfile" type="file">
                </label>
            </div>
            <div class="button">
                <button @click="handleSublit">提交审核</button>
            </div>
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import axios from 'axios'
import { Toast } from 'mint-ui';
    export default {
        components:{
            Hearder
        },
        data(){
            return{
                imgs:[],
                token:''
            }
        },
        methods:{
            getToken(){
                axios.get(`http://mawenli.xyz:3000/getToken`).then(res => {
                    this.token = res.data.data
                })
            },
            uploadfile(e){
                let file = e.target.files[0]
                let fordata = new FormData();
                fordata.append('file',file)
                fordata.append('token',this.token)
                axios.post('https://upload-z1.qiniup.com',fordata,{
                    hearders:{
                        'Content-Type':'multipart/form-data'
                    }
                }).then(res => {
                    this.imgs.push(res.data.url)
                })
            },
            handleSublit(){
                if(this.imgs.length == 0){
                    Toast('请先上传文件')
                }else{
                    Toast('此功能没做，但图片已上传至七牛')
                }
            }
        },
        created(){
            this.getToken()
        }
        
    }
</script>

<style scoped lang='less'>
.button{
    padding: 0.6rem 0.2rem 0;
    button{
        width: 100%;
        height: 0.8rem;
        left: 0.8rem;
        background: #c50206;
        color: #fff;
        border: none;
        border-radius: 4px;
    }
}
.imgbox{
    height: 10rem;
    background: #f1f1f1;
    overflow: auto;
    img{
        width: 2rem;
        height: 2rem;
        margin: 0.16rem;
    }
}
.upload{
    float: left;
    width: 2rem;
    height: 2rem;
    margin: 0.16rem;
    background-color: #ff0;
    background: url('/static/img/upload.png') no-repeat;
    background-size: 100%;
    input{
        display: none;
    }
}
</style>