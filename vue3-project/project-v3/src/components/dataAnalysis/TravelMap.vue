<template>
  <div class="travel-view">
    <div id="main"></div>
  </div>
</template>

<script>
import china from "@/assets/china.json";
import { travel } from "@/api/api";
import map from "@/utils/map.js";
import echarts from "echarts";
import { onMounted } from "vue";
export default {
  name: "TravelMap",
  setup() {
    const drawMap = function (points, linesData) {
      //初始化实例
      let myChart = echarts.init(document.getElementById("main"));
      //注册可用的地图，必须包括geo组件皱着map图表类型的时候才可以使用
      echarts.registerMap("china", china);

      //关于地图中散点图的配置
      let pointsObj = {
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
      };
      //关于地图中线路动画效果设置
      let linesObj = {
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 4,
          symbol: "arrow",
          symbolSize: 7,
          trailLength: 0.4,
        },
        lineStyle: {
          normal: {
            color: "#1DE9B6",
            with: 1,
            opacity: 0.1,
            curveness: 0.3,
          },
        },
        data: linesData,
      };
      map.series[1] = pointsObj
      map.series[2] = linesObj
      let option = map
      myChart.setOption(option);
    };
    onMounted(
      travel().then((res) => {
        if (res.data.status === 200) {
          let { points, linesData } = res.data.data;
          drawMap(points, linesData);
        }
      })
    )
  },
};
</script>

<style lang="less">
.travel-view {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>