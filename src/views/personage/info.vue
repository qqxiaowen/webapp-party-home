<template>
    <div class="myinfo pt110">
        <Hearder />
        <router-link to="/updateinfo" class="redact">
            编辑
        </router-link>
        <div class="content">
            <div class="content-item">
                <span>头像</span>
                <div class="flr"><img :src="userinfo.header" alt=""></div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>姓名</span> 
                <div class="flr">
                    {{userinfo.username}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>身份证</span>
                <div class="flr">
                    {{userinfo.idCard}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>家庭住址</span>
                <div class="flr">
                    {{userinfo.hometown}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>工作地址</span>
                <div class="flr">
                    {{userinfo.address}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>民族</span>nation
                <div class="flr">
                    {{userinfo.nation}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>微信号</span>
                <div class="flr">
                    {{userinfo.wxNum}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>qq号</span>
                <div class="flr">
                    {{userinfo.qqNum}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>性别</span>
                <div class="flr">{{userinfo.sex == 1 ? '男' : '女'}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>最高学历</span>
                <div class="flr">{{userinfo.education}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>职称</span>
                <div class="flr">{{userinfo.jobRank}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>薪资水平</span>
                <div class="flr">{{userinfo.salary}}</div>

            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>入党时间</span>
                <div class="flr">{{userinfo.joinPartyTime}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>党费最后缴纳时间</span>
                <div class="flr">{{userinfo.lastPayTime}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>当前身份</span>
                <div class="flr">{{userinfo.partyIdentity}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import { mapState } from 'vuex'
    export default {
        components:{
            Hearder
        },
        computed:{
            ...mapState(['userinfo','token'])
        },
        
    }
</script>

<style scoped lang='less'>
.redact{
    position: fixed;
    width: 1.1rem;
    height: 1.11rem;
    line-height: 1.1rem;
    right: 0;
    top: 0;
    z-index: 998;
    font-size: 14px;
    color: #fff;
    text-align: center;

}

/deep/ .content-item{
    padding: 0 0.2rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 13px;
    color: #333;
    border-bottom: 1px solid #e8e8e8;
    img{
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.15rem auto;
    }
}
</style>
