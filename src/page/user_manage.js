import React, {Component} from 'react'
export default class UserManageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // barDatas: [],
            // barOptions: []
        }
    }
    componentDidMount(){
        // this.setState({
        //     barData: [
        //         { date: '04-29', weight: 67, height: 80, score: 80 },
        //         { date: '04-30', weight: 66, height: 156, score: 76 },
        //         { date: '05-01', weight: 65, height: 157, score: 88 },
        //         { date: '05-02', weight: 64, height: 158, score: 90 },
        //         { date: '05-03', weight: 63, height: 159, score: 80 }
        //     ],
        //     barOptions: [
        //         { name: '体重值', type: 'bar', field: 'weight', barWidth: 40, itemStyle: { normal: { color: 'red' } } },
        //         { name: '成绩', type: 'bar', field: 'score', barWidth: 40, itemStyle: { normal: { color: 'green' } } },
        //         { name: '身高', type: 'line', field: 'height' }
        //     ]
        // })
    }
    render() {
        return (
            <div>
                <h6>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h6>
                <h5>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h5>
                <h4>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h4>
                <h3>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h3>
                <h2>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h2>
                <h1>lalala是地方开始的减肥快九点凤凰军事看到回复几十块的混分巨</h1>
                <p style={{color: 'red',fontSize: 12}}>我是段落标签</p>
                <p style={{color: 'green',fontSize: 10}}>我是段落标签</p>
                <p style={{color: 'blue',fontSize: 8}}>我是段落标签</p>
            </div>
            
        )
    }
}