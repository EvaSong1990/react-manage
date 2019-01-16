import React, {Component} from 'react'
import { Select,Input,Upload,message,Button,Icon,Col } from 'antd'
// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
const Option = Select.Option
const { TextArea } = Input
const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};
const editorProps = {
    height: 500,
    contentFormat: 'html',
    initialContent: '<p>Hello World!</p>',
    onChange: this.handleChange,
    onRawChange: this.handleRawChange
  }
export default class AddComponent extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    } 
    handleBlur() {
        console.log('blur');
    }     
    handleFocus() {
        console.log('focus');
    }
    render() {
        return (
            <div className="addGoods">

                <div className="items">
                    {/* 商品类目 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="selectCategory">商品类目:</label>
                        <Select className="goodItemsForm" showSearch placeholder="选择类目" id="selectCategory"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                    {/* 商品标题 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="selectTitle">商品标题:</label>
                        <Input className="goodItemsForm" placeholder="请输入标题" id="selectTitle"/>
                    </Col>
                    {/* 商品价格 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="price">商品价格:</label>
                        <Input className="goodItemsForm" placeholder="请输入商品价格" id="price"/>
                    </Col>
                </div> 
                <div className="items">
                    {/* 库存数量 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="price">库存数量:</label>
                        <Input className="goodItemsForm" placeholder="请输入库存数量"/>
                    </Col>
                    {/* 条形码 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="price">条形码:</label>
                        <Input className="goodItemsForm" placeholder="请输入条形码"/>
                    </Col>
                    {/* 商品图片 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="price">商品图片:</label>
                        <div style={{width: 230,display: 'inline-block',textAlign: 'left'}}>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> 上传图片
                                </Button>
                            </Upload>
                        </div>
                    </Col>
                </div>
                <div className="items">
                    {/* 商品卖点 */}
                    <Col span={8} className="goodItems">
                        <label className="goodItemsLabel" htmlFor="">商品卖点:</label>
                        <TextArea className="goodItemsForm" placeholder="请输入商品卖点" autosize={{ minRows: 2, maxRows: 6 }} />
                    </Col>
                </div>
                {/* 商品描述 */}
                <div className="goodItems">
                    <label className="goodItemsLabel" htmlFor="price">商品描述:</label>
                    <div className="editor">
                        <BraftEditor {...editorProps}/>
                    </div>
                </div>
            </div>
        )
    }
}