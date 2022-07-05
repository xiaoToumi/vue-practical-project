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
    ],
}

export default option