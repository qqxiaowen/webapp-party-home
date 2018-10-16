<template>
    <div class="home pt110 pb104">
        <div class="top">
            <div class="top_left">
                <h1 class="reptile">
                    <a href="#"> 黄淮学院党建</a>
                </h1>
                <!-- <img src="/static/img/logo.png" alt=""> -->
            </div>
            <div class="tip_right">
                <router-link to='/login'>登录</router-link>
            </div>
        </div>
        <div class="lunbo">
             <swiper :options="swiperOption" >
                <swiper-slide v-for="(item, index) in LunboData" :key="index">
                    <img :src= "item.imgUrl" >
                    <span>{{item.title}}</span>
                    </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="news">
           <router-link to='/'>习近平：加强党对xxx共偶作的指导</router-link> 
        </div>
        <div class="navicon">
            <ul>
                <li><router-link to='/'><img src="/static/img/icon_01.png">信工新闻眼</router-link></li>
                <li><router-link to='/'><img src="/static/img/icon_02.png">党员与组织</router-link></li>
                <li><router-link to='/'><img src="/static/img/icon_03.png">党员云互动</router-link></li>
                <li><router-link to='/'><img src="/static/img/icon_04.png">党建一点通</router-link></li>
                <li><router-link to='/'><img src="/static/img/icon_05.png">党员亮身份</router-link></li>
                <li><router-link to='/'><img src="/static/img/icon_06.png">党史上的今天</router-link></li>
            </ul>
        </div>
        <div class="imgnav"></div>
        <div class="imgnav2">
            <div class="imgnav_left"></div>
            <div class="imgnav_right">
                <div class="row">
                    <router-link to='/1'></router-link>
                    <router-link to='/2'></router-link>
                </div>
                <div class="row">
                    <router-link to='/3'></router-link>
                    <router-link to='/4'></router-link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Footer from '../components/Footer'

    export default {
        components: {
            swiper,
            swiperSlide,
            Footer
        },
        data() {
        return {
            // 轮播图配置
            swiperOption: {
            autoplay:true,
            loop:true,
            pagination: { el: '.swiper-pagination' },
            speed:300,
            autoplay: { delay: 2000, },
            on:{
                    click: function(){
                    alert('你点了Swiper'+this.activeIndex);
                    },
                },
            },
            // 数据
            LunboData:[
                // {
                //     imgUrl:'/static/img/banner.png',
                //     desc:'123456'
                // },
                // {
                //     imgUrl:'/static/img/banner1.png',
                //     desc:'654321'
                // },
                // {
                //     imgUrl:'/static/img/banner01.png',
                //     desc:'654321'
                // },
                // {
                //     imgUrl:'/static/img/banner01.png',
                //     desc:'654321'
                // }
            ]
        }
    },
    methods:{
        getLunboData(){
            this.$axios.get(`/carousel/carouselList.do`).then(res => {
                console.log(res)
                if(res.code == 1){
                    this.LunboData = res.rows
                }
            })
        }
      
    },
    created(){
        this.getLunboData()
    }

    }
</script>

<style scoped lang='less'>
@import '../viewStyles/home.less';
</style>

