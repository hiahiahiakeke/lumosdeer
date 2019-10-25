<template>
  <div class="echarts">
    <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/world.js'
export default {
  name: 'echarts',
  props: {
    className: {
      type: String,
      default: 'yourClassName'
    },
    id: {
      type: String,
      default: 'yourID'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '900px'
    }
  },
  data() {
    return {
      rawData: [
        [
          'Shanghai'
        ],
        [
          'New York'
        ],
        [
          'Beijing'
        ]
      ],
      geoCoordMap: {
        'Shanghai': [121.473701, 31.230416],
        'Beijing': [116.389160, 39.909736],
        'New York': [-74.005941, 40.712784]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart)
      window.onresize = echarts.init(this.$refs.myEchart).resize
      this.chart.setOption({
        backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [
          {
            offset: 0,
            color: '#4b5769'
          },
          {
            offset: 1,
            color: '#404a59'
          }
        ]),
        title: {
          text: 'Everywhere you go',
          subtext: '',
          left: 'center',
          top: 5,
          itemGap: 0,
          textStyle: {
            color: '#eee'
          },
          z: 200
        },
        geo: {
          map: 'world',
          silent: true,
          label: {
            emphasis: {
              show: false,
              areaColor: '#eee'
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 0.2,
              borderColor: '#404a59'
            }
          },
          left: '6%',
          top: 40,
          bottom: '20%',
          right: '14%',
          roam: true
        },
        series: [
          {
            name: 'ddd',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 10,
            data: this.makeMapData(this.rawData),
            activeOpacity: 1,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                color: '#577ceb'
              }
            }
          }
        ]
      })
    },
    makeMapData(rawData) {
      var mapData = []
      for (var i = 0; i < rawData.length; i++) {
        var geoCoord = this.geoCoordMap[rawData[i][0]]
        if (geoCoord) {
          mapData.push({
            name: rawData[i][0],
            value: geoCoord.concat(rawData[i].slice(1))
          })
        }
      }
      return mapData
    }
  }
}
</script>
<style lang="scss">
</style>
