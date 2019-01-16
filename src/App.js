import React, { Component } from 'react'
import './App.css';
// import logo from './logo.svg'
// 引入路由的文件  
import {BrowserRouter,Route,Link} from 'react-router-dom'
// 引入ant Design
import { Layout, Menu, Breadcrumb, Icon, Divider, Dropdown } from 'antd';

// 引入页面文件
import AddComponent from './page/add_goods'
import SearchComponent from './page/search_goods'
import SizeComponent from './page/goods_size'
import ContentManageComponent from './page/content_manage'
import CategoryManageComponent from './page/category_manage'
import UserManageComponent from './page/user_manage'
import MessageComponent from './page/message'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">退出登录</a>
    </Menu.Item>
  </Menu>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    // 状态管理初始化
    this.state = {
      collapsed: false,
      menuKey: [
        {key: '1',name:'新增商品',path: '/add',parendName: '商品管理'},
        {key: '2',name:'查询商品',path: '/search',parendName: '商品管理'},
        {key: '3',name:'规格参数',path: '/size',parendName: '商品管理'},
        {key: '4',name:'内容分类管理',path: '/categoryManage',parendName: '网站内容管理'},
        {key: '5',name:'内容管理',path: '/contentManage',parendName: '网站内容管理'},
        {key: '6',name: '账户管理',path: '/userManage'},
        {key: '7',name: '消息中心',path: '/message'},
        {key: '8',name: '设置',path: '/setting'}
      ]
    }
    // 事件绑定
    this.onCollapse = this.onCollapse.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }
  // 渲染页面之前
  componentWillMount() {
    const _this = this
    // 刷新页面是菜单根据pathName显示高亮
    if(window.location.pathname === '/')this.state.BreadData = this.state.menuKey[0]
    this.state.menuKey.map((v) => {
      if(v.path === window.location.pathname)_this.state.BreadData = v
    })
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  // 菜单被选中时调用函数
  onSelect = (item, key, selectedKeys ) => {
    const _this = this
    this.state.menuKey.map((v,k) => {
      if(item.key === v.key)_this.setState({BreadData: v})
    }) 
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
            <Sider  className="App-sider" collapsible collapsed={this.state.collapsed}
            onCollapse={this.onCollapse} >
              <div className="logo" style={{height: 48,margin: 16,verticalAlign: 'middle',background: 'rgba(255,255,255,.2)'}}>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
              </div>
                {/* 侧边栏组件 */}
                <Menu theme="dark" defaultSelectedKeys={[this.state.BreadData.key]} mode="inline" onSelect={this.onSelect}>
                  <SubMenu key="sub1" title={<span><Icon type="shop" /><span>商品管理</span></span>}>
                    <Menu.Item key="1"><Link to="/add">新增商品</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/search">查询商品</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/size">规格参数</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="api" /><span>网站内容管理</span></span>}>
                    <Menu.Item key="4"><Link to="/categoryManage">内容分类管理</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/contentManage">内容管理</Link></Menu.Item>
                  </SubMenu>
                  <Menu.Item key="6">
                    <Link to="/userManage">
                      <Icon type="user" />
                      <span>账户管理</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/message">
                      <Icon type="message" />
                      <span>消息中心</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="8">
                    <Icon type="setting" />
                    <span>设置</span>
                  </Menu.Item>
                </Menu>
            </Sider>
            <Layout className={(this.state.collapsed ? "App-main-width-c" : "") + " App-main"}>
              <Header className={`App-header ${this.state.collapsed ? "App-header-width-c" : ""}`} style={{ background: '#20232a', height: 80 ,padding: 0 }} > 
                <h1 className="App-title">Welcome to React</h1>
                <Dropdown overlay={menu} trigger={['hover']} placement="bottomCenter">
                  <div className="userInformation ant-dropdown-link">
                    <Icon type="user" /> <span>EvaSong</span>
                  </div>
                </Dropdown>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                {
                  this.state.BreadData.parendName
                  ?
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{this.state.BreadData.parendName}</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.BreadData.name}</Breadcrumb.Item>
                  </Breadcrumb>
                  :
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{this.state.BreadData.name}</Breadcrumb.Item>
                  </Breadcrumb>
                }
                <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                  <Route exact path="/" component={AddComponent}/>
                  <Route path="/add" component={AddComponent}/>
                  <Route path="/search" component={SearchComponent}/>
                  <Route path="/size" component={SizeComponent}/>
                  <Route path="/contentManage" component={ContentManageComponent}/>
                  <Route path="/categoryManage" component={CategoryManageComponent}/>
                  <Route path="/userManage" component={UserManageComponent}/>
                  <Route path="/message" component={MessageComponent}/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                web Designer ©2019 Created by Songdongwei
              </Footer>
            </Layout>
          </Layout>   
      </div>
      </BrowserRouter>
    );
  }
}
