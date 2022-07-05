<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import china from "@/assets/china.json";
import map from '@/utils/map.js'
import echarts from 'echarts'
import { onMounted } from 'vue'
export default {
  name: "MapView",
  setup(){
    onMounted(() => {
      //初始化实例
      let myChart = echarts.init(document.getElementById("main"));
      echarts.registerMap("china", china);
      let option = map
      myChart.setOption(option);
    })
  }
};
</script>

<style lang="less">
  .map-view {
    width: 100%;
    #main {
      width: 100%;
      height: 600px;
    }
  }
</style>