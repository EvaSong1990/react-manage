import React, {Component} from 'react'
import {Progress,Col} from 'antd'
// 引入echarts
import EchartsComponent from '../component/echarts'
var date = new Date()
// var year = date.getFullYear()
// var month = date.getMonth()
// var day = date.getDate()

export default class CategoryManageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            progressData: 0,
            barData: [],
            barOptions: []
        }
    }
    componentWillMount(){
        const _this = this
        this.timers = setInterval(() => {
            if(_this.state.progressData >= 100){
                clearInterval(_this.timers)
                return
            }
            _this.setState({ progressData: _this.state.progressData + 1 })
        },10)
    }
    
    componentDidMount() {
        this.setState({
            barOptions: [{
                name: '体重值',
                type: 'line',
                field: 'weight'
            }],
            barData: [
                { date: "04-20", weight: 68.0 },
                { date: "04-21", weight: 67.3 },
                { date: "04-22", weight: 66.7 },
                { date: "04-23", weight: 66.4 },
                { date: "04-24", weight: 65.8 },
                { date: "04-25", weight: 65.7 },
                { date: "04-26", weight: 64.9 },
                { date: "04-28", weight: 64.7 },
                { date: "04-29", weight: 64.5 },
                { date: "04-30", weight: 63.9 },
                { date: "05-01", weight: 63.6 },
                { date: "05-02", weight: 63.2 },
                { date: "05-03", weight: 63.3 },
                { date: "05-04", weight: 62.8 }
            ]
        }) 
    }
    componentWillUnmount(){
        if(this.timers)clearInterval(this.timers)
    }
    render() {
        return (
            <div className="categoryManage clearfix">
                <Progress type="circle" percent={this.state.progressData} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
                {/* echarts容器 */}
                <Col span={24} id="main">
                    <EchartsComponent data={this.state.barData} options={this.state.barOptions} containId="main"></EchartsComponent>
                </Col>
            </div>
        )
    }
}