import React, {Component} from 'react'
// 引入eachrts
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

export default class EchartsComponent extends Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  }
  componentDidMount(){

  }
  componentDidUpdate(){
      const _this = this
      const data = this.props.data // 数据
      const barOptions = this.props.options // 配置
      const xAxisData = []
      const formatData = {}
      for(let j = 0; j < barOptions.length; j++) {
          const yAxisData = []
          for(let i = 0; i < data.length; i++) {
              if(j === 0)xAxisData.push(data[i].date)
              yAxisData.push(data[i][barOptions[j].field])
              formatData[barOptions[j].field] = yAxisData
          }
      }
      for(let i = 0; i < barOptions.length; i++) {
          barOptions[i]['data'] = formatData[barOptions[i]['field']]
      }
      const myChart = echarts.init(document.getElementById(_this.props.containId))
      const options = {
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: xAxisData
          },
          grid: {
              top: '10%',
              right: '5%',
              bottom: '10%',
              left: '5%'
          },
          yAxis: {
              min: 60
          },
          series: barOptions
      }
      myChart.setOption(options)
      window.onresize = myChart.resize
  }
  render(){
      return <div></div>
  }
}