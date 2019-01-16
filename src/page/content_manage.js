import React, {Component} from 'react'
import EchartsComponent from '../component/echarts'
export default class ContentManageComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        barDatas: [],
        barOptions: []
    }
  }
    
  componentDidMount() {
    this.setState({
      barData: [
        { date: '04-29', weight: 67, height: 80, score: 80 },
        { date: '04-30', weight: 66, height: 156, score: 76 },
        { date: '05-01', weight: 65, height: 157, score: 88 },
        { date: '05-02', weight: 64, height: 158, score: 90 },
        { date: '05-03', weight: 63, height: 159, score: 80 }
      ],
      barOptions: [
        { name: '体重值', type: 'bar', field: 'weight', barWidth: 40, itemStyle: { normal: { color: 'red' } } },
        { name: '成绩', type: 'bar', field: 'score', barWidth: 40, itemStyle: { normal: { color: 'green' } } },
        { name: '身高', type: 'line', field: 'height' }
      ]
    })
  };
  render() {
    return (
      <div>
        <div style={{width: '100%',height: 500}} id="barId">
          <EchartsComponent data={this.state.barData} options={this.state.barOptions} containId="barId"></EchartsComponent>
        </div>
      </div>
    )
  }
}