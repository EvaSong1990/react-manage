import React, {Component} from 'react'
import {Icon,Table} from 'antd'
const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: '商品类目ID', dataIndex: 'categoryID' },
    { title: '商品类目', dataIndex: 'title' },
    { title: '规格（只显示分组名称）', dataIndex: 'category' },
    { title: '创建日期', dataIndex: 'createDate' },
    { title: '更新日期', dataIndex: 'updateDate' }
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        id: `id ${i+1}`,
        categoryID: `id ${i+1}`,
        title: `我是商品名`,
        category: `什么分类`,
        createDate: `2018-05-02`,
        updateDate: `2018-05-03`
    });
}
export default class SizeComponent extends Component {
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
            <div className="goodsSize">
                <div className="editPart">
                    <button className="editButton"><Icon type="plus" style={{color: 'green',fontWeight: 700}}/>添加</button>
                    <button className="editButton"><Icon type="edit" style={{color: 'green',fontWeight: 700}}/>编辑</button>
                    <button className="editButton"><Icon type="close" style={{color: 'red',fontWeight: 700}}/>删除</button>
                </div>
                <div className="tableParts">
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true}/>
                </div> 
            </div>
        )
    }
}