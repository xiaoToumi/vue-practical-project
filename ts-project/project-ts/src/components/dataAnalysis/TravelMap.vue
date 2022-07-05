<template>
  <div class="travel-view">
    <div id="main"></div>
  </div>
</template>

<script>
import china from "@/assets/china.json";
import { travel } from '@/api/api'
export default {
  name: "TravelMap",
  created(){
    travel().then(res => {
      if(res.data.status === 200){
        let { points,linesData} = res.data.data
        this.draw(points, linesData)
      }
    })
  },
  methods:{
    draw(points, linesData){
         //初始化实例
    let myChart = this.$echarts.init(document.getElementById("main"));
    //注册可用的地图，必须包括geo组件皱着map图表类型的时候才可以使用
    this.$echarts.registerMap("china", china);

    let option = {
      backgroundColor: "rgb(121, 145, 200)",
      geo: {
        map: "china",
        aspectScale: 0.75, //scale地图长宽比,即缩放比
        zoom: 1.1, //视角缩放比
        itemStyle: {
          normal: {
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09132c", //0%处的颜色
                },
                {
                  offset: 1,
                  color: "#274d68", //100%处的颜色
                },
              ],
              globalColor: true,
            },
            shadowColor: "rgb(58, 115, 192)",
            shadowOffsetX: 10,
            shadowOffsetY: 11,
          },
        },
        regions: [
          {
            name: "南海诸岛",
            itemStyle: {
              opacity: 0,
            },
          },
        ],
      },
      series: [
        {
          //配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
          type: "map",
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 5,
                color: "#1DE9B6",
              },
            },
            emphasis: {
              textStyle: {
                fontSize: 10,
                color: "rgb(183, 185, 14)",
              },
            },
          },
          zoom: 1.1,
          map: "china",
          itemStyle: {
            normal: {
              backgroundColor: "rgb(147, 235, 248)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(34, 54, 150)", //0%处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(89, 128, 142)", //100%处的颜色
                  },
                ],
                globalColor: true,
              },
            },
            emphasis: {
              areaColor: "rgb(46, 229, 206)",
              borderWidth: 0.1,
            },
          },
        },
        {
          //关于地图中散点图的配置
          type: "effectScatter", //散点图
          coordinateSystem: "geo",
          showEffectOn: "render",
          symbolSize: 10, //设置散点的大小
          zlevel: 1,
          data: points,
          rippleEffect: {
            //涟漪特效相关配置
            period: 15,
            scale: 4,
            brushType: "fill",
          },
        },
        //关于地图中线路动画效果设置
        {
          type:'lines',
          zlevel: 2,
          effect:{
            show:true,
            period:4,
            symbol:'arrow',
            symbolSize:7,
            trailLength:0.4,
          },
          lineStyle:{
            normal:{
              color:'#1DE9B6',
              with:1,
              opacity:0.1,
              curveness:0.3
            }
          },
          data:linesData ,

        }
      ],
    };
    myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss">
  .travel-view {
    width: 100%;
    #main {
      width: 100%;
      height: 600px;
    }
  }
</style>