<template>
    <div class="pt110">
        <Hearder />
        <div class="lookcontent"
        v-infinite-scroll="downUpLoad"
        infinite-scroll-disabled="isOffDown"
       >
            <div class="item" v-for="item in person" :key=item.id>
                <div class="left">
                    <img :src="item.header" alt="">
                    <span>{{item.username}}</span>
                </div>
                <div class="right">
                    {{item.branchName}}
                </div>
            </div>
        </div>
        <img v-if="!tofoot" class="loading" src="/static/svg/loading.gif" alt="">
        <Nullcontent v-if="tofoot&&!person" />
        <Tofoot v-if="tofoot" />
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import Nullcontent from '@/components/Nullcontent'
import Tofoot from '@/components/Tofoot'
    export default {
        components:{
            Hearder,
            Nullcontent,
            Tofoot
        },
        data(){
            return{
                person:'',
                page:1,
                isOffDown:true,
                isloading:true,
                tofoot:false,
            }
        },
        methods:{
            // &user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA3MjE3Mzg3MjksInVpZCI6OCwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1NDAxMTY5Mzg3Mjl9.6QY7ZPT64s_g7NBdKxYOxWNskKWPfM-B1iJ0K5wmtRs
            getdata(){
                let branch = this.$route.query.select_branch
                this.$axios.get(`/nationComment/userList.do?select_branch=${branch}&page=${this.page}&rows=15`).then(res => {
                    this.person = [...this.person,...res.rows]
                    this.isOffDown = false;
                    this.isloading = false;
                    if(res.rows.length == 0){ //没有数据了
                        this.isOffDown = true;
                        this.tofoot = true;
                    }
                })
            },
            downUpLoad(){
                this.page = this.page + 1
                this.isloading = true;
                this.getdata()
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped lang='less'>
.item{
    display: flex;
    height: 1rem;
    line-height: 1rem;
    justify-content: space-between;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ddd;
    color: #666;
    .left{
        font-size: 0.34rem;
        img{
            float: left;
            width: 0.6rem;
            height: 0.6rem;
            margin: 0.2rem 0.14rem 0 0;
        }
    }
    .right{
        font-size: 0.28rem;
    }
}
</style>