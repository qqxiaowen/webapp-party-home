<template>
    <div class="findteam pt110">
        <Hearder />
        <div id="container"></div>
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
    export default {
        components:{
            Hearder,
        },
        data(){
            return{
                findedata:''
            }
        },
        methods:{
            initmap(){
                this.map = new BMap.Map("container");          // 创建地图实例  
                let schooldot = new BMap.Point(114.01277,33.016735) //创建黄淮学院学校的点
                let beijingdot = new BMap.Point(116.268087,40.147042);  // 创建点坐标  
                this.map.centerAndZoom(schooldot, 5);               // 初始化地图，设置中心点坐标和地图级别  

                this.map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT}));  
                this.map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,offset:new BMap.Size(20, 80)}));  
                this.drawDot(schooldot,beijingdot)
            },
            drawDot(schooldot,beijingdot){
                let schoolmarker = new BMap.Marker(schooldot);        // 创建标注    
                this.map.addOverlay(schoolmarker);                     // 将标注添加到地图中 
                let beijingmarker = new BMap.Marker(beijingdot);
                this.map.addOverlay(beijingmarker); 

                let opts1 = {    
                    position : schooldot,    // 指定文本标注所在的地理位置
                    offset   : new BMap.Size(10, -50)    //设置文本偏移量
                }    
                let opts2 = {    
                    position : schooldot,    // 指定文本标注所在的地理位置
                    offset   : new BMap.Size(10, -30)    //设置文本偏移量
                }    
                let opts3 = {    
                    position : beijingdot,    // 指定文本标注所在的地理位置
                    offset   : new BMap.Size(10, -30)    //设置文本偏移量
                }  
                let schoollabel1 = new BMap.Label("信息工程学院学生党支部支部书记：杨鑫 电话：0396-2853187", opts1);  // 创建信息窗口对象 
                let schoollabel2 = new BMap.Label("信息工程学院党总支 总支书记：柳晓阳 电话：0396-285032", opts2);  // 创建信息窗口对象 
                let beijinglabel = new BMap.Label("信息工程学院学生流动党支部支部书记：高洋 电话：13526395586", opts3);  // 创建信息窗口对象 
                this.map.addOverlay(schoollabel1);   
                this.map.addOverlay(schoollabel2);   
                this.map.addOverlay(beijinglabel);   
            }

        
        },
        mounted(){
            this.initmap()  
        }
        
    }

</script>

<style scoped lang='less'>
.findteam{
    #container{
        width: 100%;
        height: 100vh;
    }
    /deep/ .BMap_bubble_content{
        font-size: 12px;
    }
}

</style>

