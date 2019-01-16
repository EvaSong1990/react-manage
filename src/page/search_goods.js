import React, {Component} from 'react'
import {Icon,Table} from 'antd'
const columns = [
    { title: '商品ID', dataIndex: 'id' },
    { title: '商品标题', dataIndex: 'title' },
    { title: '叶子类目', dataIndex: 'category' },
    { title: '卖点', dataIndex: 'sellPoint' },
    { title: '价格', dataIndex: 'price' },
    { title: '库存数量', dataIndex: 'number' },
    { title: '条形码', dataIndex: 'barCode' },
    { title: '状态', dataIndex: 'status' },
    { title: '创建日期', dataIndex: 'createDate' },
    { title: '更新日期', dataIndex: 'updateDate' }
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        id: `id ${i+1}`,
        title: `我是商品名`,
        category: `什么分类`,
        sellPoint: `性价比高`,
        price: `￥ ${(Math.random()*10).toFixed(2)}`,
        number: (Math.random()*100).toFixed(2),
        barCode: `95863${(Math.random()*100000).toFixed(0)}`,
        status: Math.round(Math.random()),
        createDate: `2018-05-02`,
        updateDate: `2018-05-03`
    });
}
export default class DeleteComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedRowKeys: []
        }
        this.onSelectChange = this.onSelectChange.bind(this)
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: '全选',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: '奇数行',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        return index % 2 !== 0 ? false : true
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: '偶数行',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        return index % 2 !== 0 ? true : false
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <div className="searchGoods">
                <div className="editPart">
                    <button className="editButton"><Icon type="plus" style={{color: 'green',fontWeight: 700}}/>添加</button>
                    <button className="editButton"><Icon type="edit" style={{color: 'green',fontWeight: 700}}/>编辑</button>
                    <button className="editButton"><Icon type="close" style={{color: 'red',fontWeight: 700}}/>删除</button>
                    <button className="editButton"><Icon type="arrow-down" style={{color: 'green',fontWeight: 700}}/>下架</button>
                    <button className="editButton"><Icon type="arrow-up" style={{color: 'green',fontWeight: 700}}/>上架</button>
                </div>
                <div className="tableParts">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true}/>
                </div> 
            </div>
        )
    }
}