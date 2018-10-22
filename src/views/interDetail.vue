<template>
    <div class="pt110 interdetail">
        <Hearder />
        <div class="item itme-ys">
            <div class="row1">
                <div class="left">
                    <img :src="replytop.header" alt="">
                    <div>
                        <div class="title">{{replytop.username}}</div>
                        <div class="date-message">
                            <span><i class="dmiconys iconfont icon-shijian"></i>{{replytop.currentTime}}</span>
                            <span><i class="dmiconys iconfont icon-xiaoxi"></i>公开</span>
                        </div>
                    </div>
                </div>
                
                <div class="right">党员互动</div>
            </div>
            <div class="row2">
                {{replytop.content}}
            </div>
        </div>

            <img v-if="isloging" class="loading" src="/static/svg/loading.gif" alt="">
            <Nullcontent v-if="!isloging&&!replybody.length" />

        <div class="item " v-for="(item,index) in replybody " :key=index>
            <div class="row1">
                <div class="left">
                    <img :src="item.header" alt="">
                    <div>
                        <div class="title">{{item.username}}</div>
                        <div class="date-message">
                            <span><i class="dmiconys iconfont icon-shijian"></i>{{item.currentTime}}</span>
                            <span><i class="dmiconys iconfont icon-xiaoxi"></i>公开</span>
                        </div>
                    </div>
                </div>
                
                <div class="right">党员互动</div>
            </div>
            <div class="row2">
                {{item.comment}}
            </div>
        </div>

        <div class="talk">
            <input type="text" v-model="talk.comment">
            <button @click="handletalk">评论</button>
        </div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import Nullcontent from '@/components/Nullcontent'
import { mapState } from 'vuex'
import { Toast } from 'mint-ui';

    export default {
        components:{
            Hearder,
            Nullcontent,
        },
        data(){
            return{
                replytop:'',
                replybody:'',
                isloging:true,
                  talk:{
                    forum_id:'',
                    comment:''
                }
            }
        },
        methods:{
            getreplytop(){
                this.$store.state.interact.forEach(item => {
                    if(item.forumId == this.talk.forum_id){
                        this.replytop =  item
                    }
                })
            },

            getreplybody(){
                this.$axios.get(`/forum/forumCommentList.do?page=1&rows=10&forum_id=${this.talk.forum_id}`).then(res => {
                    this.replybody = res.rows
                    this.isloging = false;
                })
            },
            handletalk(){
                this.$axios.post(`/forum/addComment.do`,this.talk).then(res => {
                    // console.log(res)
                    if(res.code == 1){
                        Toast('评论成功')
                        this.getreplybody();
                    }else{
                        Toast(res.msg)
                    }
                })
            }

        },
        created(){
            this.talk.forum_id = this.$route.query.id
            this.getreplytop()
            this.getreplybody()
        }
        
    }
</script>

<style scoped lang='less'>
/deep/ .interdetail{
    background: #ff0;
}

.item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    padding: 0.2rem;
    background: #fff;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
/deep/ .itme-ys{
    margin: 0.2rem;
    border: 1px solid #ddd;

}
.row1{
    display: flex;
    justify-content: space-between;
}
.left{
    display: flex;
    img{
        width: 0.7rem;
        height: 0.7rem;
        vertical-align: middle;
        margin-right: 0.2rem;
    }
}
.right{
    width: 1.2rem;
    height: 0.5rem;
    display: none;
}
.date-message{
    font-size: 0.22rem;
    color: #666;
    padding-top: 0.05rem;
    
}
.dmiconys{
    font-size: 14px;
    margin-right: 0.1rem;
    vertical-align: middle;
}
.row2{
    padding: 0.2rem 0;
    font-size: 0.28rem;
    color: #333;
}
.talk{
    position:fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.6rem;
    background: #f1f1f1;
    padding:  0.1rem 0.2rem;
    input{
        border: 1px solid #f00;
        border-radius: 4px;
        width: 5.7rem;
        height: 0.5rem;
        outline: none;
    }
    button{
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 4px;
        border: none;
        background: #f00;
        color: #fff;
        outline: none;
        padding: 0 0.05rem;
    }
}

</style>

